import {Injectable} from "@angular/core";
import {PAGES_MENU} from "../pages/pages.menu";
import {Router, Route, ActivatedRoute} from "@angular/router";
import {CertificateEntityType} from "../pages/shared/services/certificate-helper.service";
import {MCNotificationsService, MCNotificationType} from "./mc-notifications.service";

//TODO: I cannot for the life of me find a way to get the url of a component and navigate to the url. Thus this helper class :-( But hey I then had to make a recursive function and who doesn't love that :-)

export const queryKeys = {
  ENTITY_TYPE: "entityType",
  ENTITY_MRN: "entityMrn",
  ENTITY_TITLE: "entityTitle"
};

@Injectable()
export class NavigationHelperService {
  private path:string;
  private pathBeforeCerticates:string;
  private pathBeforeCreateSpecification:string;
  private pathBeforeCreateDesign:string;
  private pathBeforeCreateInstance:string;
  constructor(private notificationService: MCNotificationsService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public navigateToIssueNewCertificate(entityType: CertificateEntityType, entityMrn:string, entityTitle: string) {
    this.pathBeforeCerticates = this.router.url;
    this.path = '/issuecert';
    let pagesMenu = PAGES_MENU;
    var pathElement = "";
    switch (entityType) {
      case CertificateEntityType.Device: {
        pathElement = "devices";
        break;
      }
      case CertificateEntityType.Organization: {
        pathElement = "my-organization";
        break;
      }
      case CertificateEntityType.Service: {
        pathElement = "services";
        break;
      }
      case CertificateEntityType.User: {
        pathElement = "users";
        break;
      }
      case CertificateEntityType.Vessel: {
        pathElement = "vessels";
        break;
      }
      default: {
        this.notificationService.generateNotification("Error", "Error when trying to navigate to issue new certificate.\n Missing: " + entityType, MCNotificationType.Error);
        return;
      }
    }
    this.generatePath(pathElement, pagesMenu[0]);

    this.router.navigate([this.path], { queryParams: { entityType: entityType, entityMrn: entityMrn, entityTitle:entityTitle}});
  }
  public cancelNavigateCertificates() {
    if (this.pathBeforeCerticates) {
      this.router.navigateByUrl(this.pathBeforeCerticates);
    } else {
      this.takeMeHome();
    }
  }

  // No idea where to go, just take me home
  public takeMeHome() {
    this.router.navigateByUrl('/');
  }

  public cancelCreateSpecification() {
    if (this.pathBeforeCreateSpecification) {
      this.router.navigateByUrl(this.pathBeforeCreateSpecification);
    } else {
      this.navigateToOrgSpecification('', '');
    }
  }

  public cancelCreateDesign() {
    if (this.pathBeforeCreateDesign) {
      this.router.navigateByUrl(this.pathBeforeCreateDesign);
    } else {
      this.navigateToOrgDesign('', '');
    }
  }

  public cancelCreateInstance() {
    if (this.pathBeforeCreateInstance) {
      this.router.navigateByUrl(this.pathBeforeCreateInstance);
    } else {
      this.navigateToOrgInstance('', '');
    }
  }

  public navigateToCreateSpecification() {
    this.pathBeforeCreateSpecification = this.router.url;
    this.path = '/register';
    let pagesMenu = PAGES_MENU;
    this.generatePath('specifications', pagesMenu[0]);

    this.router.navigate([this.path]);
  }

  public navigateToCreateDesign(specificationId:string, specificationVersion:string) {
    this.pathBeforeCreateDesign = this.router.url;
    this.path = '/register';
    let pagesMenu = PAGES_MENU;
    this.generatePath('designs', pagesMenu[0]);

    this.router.navigate([this.path], { queryParams: { specificationId: specificationId, specificationVersion: specificationVersion }, preserveQueryParams: false});
  }

  public navigateToCreateSInstance(designId:string, designVersion:string) {
    this.pathBeforeCreateInstance = this.router.url;
    this.path = '/register';
    let pagesMenu = PAGES_MENU;
    this.generatePath('instances', pagesMenu[0]);

    this.router.navigate([this.path], {queryParams: {designId: designId, designVersion: designVersion}, preserveQueryParams: false});
  }

  public navigateToOrgDesign(designId:string, version:string):void {
    this.path = '/' + designId;
    let pagesMenu = PAGES_MENU;
    this.generatePath('designs', pagesMenu[0]);

    this.router.navigate([this.path], {queryParams: {designVersion: version}});
  }

  public navigateToOrgSpecification(specificationId:string, version:string):void {
    this.path = '/' + specificationId;
    let pagesMenu = PAGES_MENU;
    this.generatePath('specifications', pagesMenu[0]);

    this.router.navigate([this.path], {queryParams: {specificationVersion: version}});
  }

  public navigateToOrgInstance(instanceId:string, version:string):void {
    this.path = '/' + instanceId;
    let pagesMenu = PAGES_MENU;
    this.generatePath('instances', pagesMenu[0]);

    this.router.navigate([this.path], {queryParams: {instanceVersion: version}});
  }

  private generatePath(nameOfElement:string, route: Route):boolean {
    if (route.path === nameOfElement) {
      this.path = '/' + route.path + this.path;
      return true;
    }
    if (route.children && route.children.length > 0) {
      var found = false;
      route.children.forEach(routeChild => {
        if (this.generatePath(nameOfElement, routeChild)) {
          found = true;
        }
      });
      if (found) {
        this.path = '/' + route.path + this.path;
        return true;
      }
    }
    return false;
  }
}
