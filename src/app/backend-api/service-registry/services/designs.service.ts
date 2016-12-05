import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {AuthService} from "../../../authentication/services/auth.service";
import {TechnicaldesignresourceApi} from "../autogen/api/TechnicaldesignresourceApi";
import {Design} from "../autogen/model/Design";
import {XmlresourceApi} from "../autogen/api/XmlresourceApi";
import {XmlParserService} from "../../../shared/xml-parser.service";
import {Instance} from "../autogen/model/Instance";
import {DocresourceApi} from "../autogen/api/DocresourceApi";


@Injectable()
export class DesignsService implements OnInit {
  private chosenDesign: Design;
  constructor(private designsApi: TechnicaldesignresourceApi, private xmlApi: XmlresourceApi, private docApi: DocresourceApi, private authService: AuthService, private xmlParser: XmlParserService) {
  }

  ngOnInit() {

  }

  public deleteDesign(design:Design) : Observable<{}> {
    this.chosenDesign = null;
    return this.designsApi.deleteDesignUsingDELETE(design.designId, design.version);
  }

  public createDesign(design:Design):Observable<Design>{
    // TODO: add comments
    design.comment = '';
    design.designAsXml.comment = '';
    return Observable.create(observer => {
      // TODO fthis is just stupid. For now you need to create the xml and doc first and then the design
      this.xmlApi.createXmlUsingPOST(design.designAsXml).subscribe(
        xml => {
          design.designAsXml = xml;
          if (design.designAsDoc) {
            this.createWithDoc(design, observer);
          } else {
            this.createActualDesign(design, observer);
          }
        },
        err => {
          observer.error(err);
        }
      );
    });
  }
  private createWithDoc(design:Design, observer:Observer<any>) {
    design.designAsDoc.comment = '';
    this.docApi.createDocUsingPOST(design.designAsDoc).subscribe(
      doc => {
        design.designAsDoc= doc;
        this.createActualDesign(design, observer);
      },
      err => {
        observer.error(err);
      }
    );
  }
  private createActualDesign(design:Design, observer:Observer<any>) {
    this.designsApi.createDesignUsingPOST(design).subscribe(
      createdDesign => {
        observer.next(createdDesign);
      },
      err => {
        observer.error(err);
      }
    );
  }

  public getDesignsForMyOrg(): Observable<Array<Design>> {
    let orgMrn = this.authService.authState.orgMrn;
    // TODO I only create a new observable because I need to manipulate the response to get the description. If that is not needed anymore, i can just do a simple return of the call to the api, without subscribe
    return Observable.create(observer => {
      // TODO for now just get all designs. Needs to be for this org only though
      this.designsApi.getAllDesignsUsingGET().subscribe(
        designs => {
          // TODO delete this again, when description is part of the json
          for (let design of designs) {
            design.description = this.getDescription(design);
          }
          observer.next(designs);
        },
        err => {
          observer.error(err);
        }
      );
    });
  }

  public getDesignForInstance(instance:Instance): Observable<Design> {
    return Observable.create(observer => {
      let designId = this.xmlParser.getVauleFromEmbeddedField('implementsServiceDesign', 'id', instance.instanceAsXml);
      let version = this.xmlParser.getVauleFromEmbeddedField('implementsServiceDesign', 'version', instance.instanceAsXml);
      this.designsApi.getDesignUsingGET(designId, version).subscribe(
        design => {
          observer.next(design);
        },
        err => {
          if (err.status == 404) {
            observer.next(undefined);
          } else {
            observer.error(err);
          }
        }
      );
    });
  }

  public getDesignsForSpecification(specificationId:string, version?:string): Observable<Array<Design>> {
    // TODO I only create a new observable because I need to manipulate the response to get the description. If that is not needed anymore, i can just do a simple return of the call to the api, without subscribe
    return Observable.create(observer => {
      // TODO for now just get all designs. Needs to be for this specification only though
      this.designsApi.getAllDesignsUsingGET().subscribe(
        designs => {
          var designsFiltered: Array<Design> = [];

	        // TODO this should be deleted in next version because then there is a dedicated api for the call
          for (let design of designs) {
            let implementedSpecificationId = this.xmlParser.getVauleFromEmbeddedField('designsServiceSpecifications', 'id', design.designAsXml);
            if (implementedSpecificationId === specificationId) {
              design.description = this.getDescription(design);
              designsFiltered.push(design);
            }
          }
          observer.next(designsFiltered);
        },
        err => {
          observer.error(err);
        }
      );
    });
  }

  public getDesign(designId:string, version?:string): Observable<Design> {
    var found = false;
    if (this.chosenDesign && this.chosenDesign.designId === designId) {
      if (version) {
        if (this.chosenDesign.version === version) {
          found = true;
        }
      } else {
        found = true;
      }
    }
    if (found) {
      return Observable.of(this.chosenDesign);
    }

    if (!version) {
      version = 'latest';
    }

    // We create a new observable because we need to save the response for simple caching
    return Observable.create(observer => {
      this.designsApi.getDesignUsingGET(designId,version).subscribe(
        design => {
          // TODO delete this again, when description is part of the json
          design.description = this.getDescription(design);
          this.chosenDesign = design;
          observer.next(design);
        },
        err => {
          observer.error(err);
        }
      );
    });
  }

  // TODO delete this again, when description is part of the json
  private getDescription(design:Design):string {
    try {
      if (!design || !design.designAsXml) {
        return '';
      }
      var parser = new DOMParser();
      let xmlString =  design.designAsXml.content;
      var xmlData = parser.parseFromString(xmlString, design.designAsXml.contentContentType);

      return xmlData.getElementsByTagName('description')[0].childNodes[0].nodeValue;
    } catch ( error ) {
      return '';
    }
  }
}
