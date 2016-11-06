// NOTE: be carefull when autogenerating. This file is changed manually
/**
 * Maritime Cloud Identity Registry API
 * Maritime Cloud Identity Registry API can be used for managing entities in the Maritime Cloud.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: info@maritimecloud.net
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

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams, ResponseContentType} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';
import {DONT_OVERWRITE_CONTENT_TYPE} from "../../../../shared/app.constants";
// NOTE: be carefull when autogenerating. This file is changed manually

@Injectable()
export class LogocontrollerApi {
    protected basePath = 'https://api.maritimecloud.net/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * createLogoPost
     * 
     * @param orgMrn orgMrn
     * @param logo logo
     */
    public createLogoPostUsingPOST (orgMrn: string, logo: any, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/logo'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let formParams = new URLSearchParams();

        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling createLogoPostUsingPOST.');
        }
        // verify required parameter 'logo' is not null or undefined
        if (logo === null || logo === undefined) {
            throw new Error('Required parameter logo was null or undefined when calling createLogoPostUsingPOST.');
        }
       // headerParams.set('Content-Type', 'application/x-www-form-urlencoded');

      let requestOptions: RequestOptionsArgs = {
          method: 'POST',
          headers: headerParams,
          search: queryParameters
      };
      requestOptions.body = formParams.toString();

	    var fd = new FormData();
	    fd.append('logo', logo);

	    headerParams.set('Content-Type', undefined);
	    requestOptions.body = fd;
	    // NOTE: be carefull when autogenerating. This file is changed manually
	    requestOptions.headers.set(DONT_OVERWRITE_CONTENT_TYPE, 'dont');
	    //requestOptions.responseType = ResponseContentType.Blob;
        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.blob();
                }
            });
    }

    /**
     * createLogoPost
     * 
     * @param orgMrn orgMrn
     * @param logo logo
     */
    public createLogoPostUsingPOST1 (orgMrn: string, logo: any, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/logo'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let formParams = new URLSearchParams();

        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling createLogoPostUsingPOST1.');
        }
        // verify required parameter 'logo' is not null or undefined
        if (logo === null || logo === undefined) {
            throw new Error('Required parameter logo was null or undefined when calling createLogoPostUsingPOST1.');
        }
        headerParams.set('Content-Type', 'application/x-www-form-urlencoded');

        formParams['logo'] = logo;

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = formParams.toString();

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
     * createLogoPut
     * 
     * @param orgMrn orgMrn
     * @param logo logo
     */
    public createLogoPutUsingPUT (orgMrn: string, logo: Array<string>, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/logo'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling createLogoPutUsingPUT.');
        }
        // verify required parameter 'logo' is not null or undefined
        if (logo === null || logo === undefined) {
            throw new Error('Required parameter logo was null or undefined when calling createLogoPutUsingPUT.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(logo);

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
     * createLogoPut
     * 
     * @param orgMrn orgMrn
     * @param logo logo
     */
    public createLogoPutUsingPUT1 (orgMrn: string, logo: Array<string>, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/logo'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling createLogoPutUsingPUT1.');
        }
        // verify required parameter 'logo' is not null or undefined
        if (logo === null || logo === undefined) {
            throw new Error('Required parameter logo was null or undefined when calling createLogoPutUsingPUT1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(logo);

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
     * deleteLogo
     * 
     * @param orgMrn orgMrn
     */
    public deleteLogoUsingDELETE (orgMrn: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/logo'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteLogoUsingDELETE.');
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
     * deleteLogo
     * 
     * @param orgMrn orgMrn
     */
    public deleteLogoUsingDELETE1 (orgMrn: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/logo'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling deleteLogoUsingDELETE1.');
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
     * getLogo
     * 
     * @param orgMrn orgMrn
     */
    public getLogoUsingGET (orgMrn: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgMrn}/logo'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getLogoUsingGET.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };
        // NOTE: be carefull when autogenerating. This file is changed manually
				requestOptions.responseType = ResponseContentType.Blob;
        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
	                return response.blob();
                }
            });
    }

    /**
     * getLogo
     * 
     * @param orgMrn orgMrn
     */
    public getLogoUsingGET1 (orgMrn: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgMrn}/logo'
            .replace('{' + 'orgMrn' + '}', String(orgMrn));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgMrn' is not null or undefined
        if (orgMrn === null || orgMrn === undefined) {
            throw new Error('Required parameter orgMrn was null or undefined when calling getLogoUsingGET1.');
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

}
