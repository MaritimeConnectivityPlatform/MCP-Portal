/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
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
export class ServicecontrollerApi {
    protected basePath = 'https://api.maritimecloud.net:443/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * createService
     *
     * @param orgShortName orgShortName
     * @param input input
     */
    public createServiceUsingPOST (orgShortName: string, input: models.Service, extraHttpRequestParams?: any ) : Observable<models.Service> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/service'
            .replace('{' + 'orgShortName' + '}', String(orgShortName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling createServiceUsingPOST.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createServiceUsingPOST.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

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
     * createService
     *
     * @param orgShortName orgShortName
     * @param input input
     */
    public createServiceUsingPOST1 (orgShortName: string, input: models.Service, extraHttpRequestParams?: any ) : Observable<models.Service> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/service'
            .replace('{' + 'orgShortName' + '}', String(orgShortName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling createServiceUsingPOST1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createServiceUsingPOST1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

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
     * deleteService
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public deleteServiceUsingDELETE (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/service/{serviceId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling deleteServiceUsingDELETE.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling deleteServiceUsingDELETE.');
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
     * deleteService
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public deleteServiceUsingDELETE1 (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/service/{serviceId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling deleteServiceUsingDELETE1.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling deleteServiceUsingDELETE1.');
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
     * getOrganizationServices
     *
     * @param orgShortName orgShortName
     */
    public getOrganizationServicesUsingGET (orgShortName: string, extraHttpRequestParams?: any ) : Observable<Array<models.Service>> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/services'
            .replace('{' + 'orgShortName' + '}', String(orgShortName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getOrganizationServicesUsingGET.');
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
     * getOrganizationServices
     *
     * @param orgShortName orgShortName
     */
    public getOrganizationServicesUsingGET1 (orgShortName: string, extraHttpRequestParams?: any ) : Observable<Array<models.Service>> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/services'
            .replace('{' + 'orgShortName' + '}', String(orgShortName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getOrganizationServicesUsingGET1.');
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
     * getServiceJbossXml
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public getServiceJbossXmlUsingGET (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/service/{serviceId}/jbossxml'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getServiceJbossXmlUsingGET.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getServiceJbossXmlUsingGET.');
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
     * getServiceJbossXml
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public getServiceJbossXmlUsingGET1 (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/service/{serviceId}/jbossxml'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getServiceJbossXmlUsingGET1.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getServiceJbossXmlUsingGET1.');
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
     * getServiceKeycloakJson
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public getServiceKeycloakJsonUsingGET (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/service/{serviceId}/keycloakjson'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getServiceKeycloakJsonUsingGET.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getServiceKeycloakJsonUsingGET.');
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
     * getServiceKeycloakJson
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public getServiceKeycloakJsonUsingGET1 (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/service/{serviceId}/keycloakjson'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getServiceKeycloakJsonUsingGET1.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getServiceKeycloakJsonUsingGET1.');
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
     * getService
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public getServiceUsingGET (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<models.Service> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/service/{serviceId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getServiceUsingGET.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getServiceUsingGET.');
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
     * getService
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public getServiceUsingGET1 (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<models.Service> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/service/{serviceId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getServiceUsingGET1.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getServiceUsingGET1.');
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
     * newServiceCert
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public newServiceCertUsingGET (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<models.PemCertificate> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/service/{serviceId}/generatecertificate'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling newServiceCertUsingGET.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling newServiceCertUsingGET.');
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
     * newServiceCert
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     */
    public newServiceCertUsingGET1 (orgShortName: string, serviceId: number, extraHttpRequestParams?: any ) : Observable<models.PemCertificate> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/service/{serviceId}/generatecertificate'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling newServiceCertUsingGET1.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling newServiceCertUsingGET1.');
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
     * revokeServiceCert
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     * @param certId certId
     * @param input input
     */
    public revokeServiceCertUsingPOST (orgShortName: string, serviceId: number, certId: number, input: models.CertificateRevocation, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/service/{serviceId}/certificates/{certId}/revoke'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId))
            .replace('{' + 'certId' + '}', String(certId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling revokeServiceCertUsingPOST.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling revokeServiceCertUsingPOST.');
        }
        // verify required parameter 'certId' is not null or undefined
        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeServiceCertUsingPOST.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling revokeServiceCertUsingPOST.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

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
     * revokeServiceCert
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     * @param certId certId
     * @param input input
     */
    public revokeServiceCertUsingPOST1 (orgShortName: string, serviceId: number, certId: number, input: models.CertificateRevocation, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/service/{serviceId}/certificates/{certId}/revoke'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId))
            .replace('{' + 'certId' + '}', String(certId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling revokeServiceCertUsingPOST1.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling revokeServiceCertUsingPOST1.');
        }
        // verify required parameter 'certId' is not null or undefined
        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeServiceCertUsingPOST1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling revokeServiceCertUsingPOST1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

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
     * updateService
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     * @param input input
     */
    public updateServiceUsingPUT (orgShortName: string, serviceId: number, input: models.Service, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/service/{serviceId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling updateServiceUsingPUT.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling updateServiceUsingPUT.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateServiceUsingPUT.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

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
     * updateService
     *
     * @param orgShortName orgShortName
     * @param serviceId serviceId
     * @param input input
     */
    public updateServiceUsingPUT1 (orgShortName: string, serviceId: number, input: models.Service, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/service/{serviceId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'serviceId' + '}', String(serviceId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling updateServiceUsingPUT1.');
        }
        // verify required parameter 'serviceId' is not null or undefined
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling updateServiceUsingPUT1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateServiceUsingPUT1.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(input);

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
