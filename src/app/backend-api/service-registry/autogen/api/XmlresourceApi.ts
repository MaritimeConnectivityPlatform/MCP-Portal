/**
 * mcsr API
 * mcsr API documentation
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class XmlresourceApi {
    protected basePath2 = 'http://195.34.146.186:8080/';
  protected basePath = 'https://sr.maritimecloud.net:8443/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * createXml
     *
     * @param xml xml
     */
    public createXmlUsingPOST (xml: models.Xml, extraHttpRequestParams?: any ) : Observable<models.Xml> {
        const path = this.basePath + '/api/xmls';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'xml' is not null or undefined
        if (xml === null || xml === undefined) {
            throw new Error('Required parameter xml was null or undefined when calling createXmlUsingPOST.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(xml);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * deleteXml
     *
     * @param id id
     */
    public deleteXmlUsingDELETE (id: number, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/api/xmls/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteXmlUsingDELETE.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getAllXmls
     *
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllXmlsUsingGET (page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any ) : Observable<Array<models.Xml>> {
        const path = this.basePath + '/api/xmls';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (page !== undefined) {
            queryParameters.set('page', String(page));
        }

        if (size !== undefined) {
            queryParameters.set('size', String(size));
        }

        if (sort !== undefined) {
            queryParameters.set('sort', String(sort));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getXml
     *
     * @param id id
     */
    public getXmlUsingGET (id: number, extraHttpRequestParams?: any ) : Observable<models.Xml> {
        const path = this.basePath + '/api/xmls/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getXmlUsingGET.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchXmls
     *
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchXmlsUsingGET (query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any ) : Observable<Array<models.Xml>> {
        const path = this.basePath + '/api/_search/xmls';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchXmlsUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', String(page));
        }

        if (size !== undefined) {
            queryParameters.set('size', String(size));
        }

        if (query !== undefined) {
            queryParameters.set('query', String(query));
        }

        if (sort !== undefined) {
            queryParameters.set('sort', String(sort));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * updateXml
     *
     * @param xml xml
     */
    public updateXmlUsingPUT (xml: models.Xml, extraHttpRequestParams?: any ) : Observable<models.Xml> {
        const path = this.basePath + '/api/xmls';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'xml' is not null or undefined
        if (xml === null || xml === undefined) {
            throw new Error('Required parameter xml was null or undefined when calling updateXmlUsingPUT.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(xml);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
