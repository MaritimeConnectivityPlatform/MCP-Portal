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
export class VesselcontrollerApi {
    protected basePath = 'https://api.maritimecloud.net:443/';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * createVessel
     *
     * @param orgShortName orgShortName
     * @param input input
     */
    public createVesselUsingPOST (orgShortName: string, input: models.Vessel, extraHttpRequestParams?: any ) : Observable<models.Vessel> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/vessel'
            .replace('{' + 'orgShortName' + '}', String(orgShortName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling createVesselUsingPOST.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createVesselUsingPOST.');
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
     * createVessel
     *
     * @param orgShortName orgShortName
     * @param input input
     */
    public createVesselUsingPOST1 (orgShortName: string, input: models.Vessel, extraHttpRequestParams?: any ) : Observable<models.Vessel> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/vessel'
            .replace('{' + 'orgShortName' + '}', String(orgShortName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling createVesselUsingPOST1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling createVesselUsingPOST1.');
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
     * deleteVessel
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     */
    public deleteVesselUsingDELETE (orgShortName: string, vesselId: number, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/vessel/{vesselId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling deleteVesselUsingDELETE.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling deleteVesselUsingDELETE.');
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
     * deleteVessel
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     */
    public deleteVesselUsingDELETE1 (orgShortName: string, vesselId: number, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/vessel/{vesselId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling deleteVesselUsingDELETE1.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling deleteVesselUsingDELETE1.');
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
     * getOrganizationVessels
     *
     * @param orgShortName orgShortName
     */
    public getOrganizationVesselsUsingGET (orgShortName: string, extraHttpRequestParams?: any ) : Observable<Array<models.Vessel>> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/vessels'
            .replace('{' + 'orgShortName' + '}', String(orgShortName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getOrganizationVesselsUsingGET.');
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
     * getOrganizationVessels
     *
     * @param orgShortName orgShortName
     */
    public getOrganizationVesselsUsingGET1 (orgShortName: string, extraHttpRequestParams?: any ) : Observable<Array<models.Vessel>> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/vessels'
            .replace('{' + 'orgShortName' + '}', String(orgShortName));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getOrganizationVesselsUsingGET1.');
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
     * getVessel
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     */
    public getVesselUsingGET (orgShortName: string, vesselId: number, extraHttpRequestParams?: any ) : Observable<models.Vessel> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/vessel/{vesselId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getVesselUsingGET.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling getVesselUsingGET.');
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
     * getVessel
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     */
    public getVesselUsingGET1 (orgShortName: string, vesselId: number, extraHttpRequestParams?: any ) : Observable<models.Vessel> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/vessel/{vesselId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling getVesselUsingGET1.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling getVesselUsingGET1.');
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
     * newVesselCert
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     */
    public newVesselCertUsingGET (orgShortName: string, vesselId: number, extraHttpRequestParams?: any ) : Observable<models.PemCertificate> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/vessel/{vesselId}/generatecertificate'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling newVesselCertUsingGET.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling newVesselCertUsingGET.');
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
     * newVesselCert
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     */
    public newVesselCertUsingGET1 (orgShortName: string, vesselId: number, extraHttpRequestParams?: any ) : Observable<models.PemCertificate> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/vessel/{vesselId}/generatecertificate'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling newVesselCertUsingGET1.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling newVesselCertUsingGET1.');
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
     * revokeVesselCert
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     * @param certId certId
     * @param input input
     */
    public revokeVesselCertUsingPOST (orgShortName: string, vesselId: number, certId: number, input: models.CertificateRevocation, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/vessel/{vesselId}/certificates/{certId}/revoke'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId))
            .replace('{' + 'certId' + '}', String(certId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling revokeVesselCertUsingPOST.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling revokeVesselCertUsingPOST.');
        }
        // verify required parameter 'certId' is not null or undefined
        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeVesselCertUsingPOST.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling revokeVesselCertUsingPOST.');
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
     * revokeVesselCert
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     * @param certId certId
     * @param input input
     */
    public revokeVesselCertUsingPOST1 (orgShortName: string, vesselId: number, certId: number, input: models.CertificateRevocation, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/vessel/{vesselId}/certificates/{certId}/revoke'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId))
            .replace('{' + 'certId' + '}', String(certId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling revokeVesselCertUsingPOST1.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling revokeVesselCertUsingPOST1.');
        }
        // verify required parameter 'certId' is not null or undefined
        if (certId === null || certId === undefined) {
            throw new Error('Required parameter certId was null or undefined when calling revokeVesselCertUsingPOST1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling revokeVesselCertUsingPOST1.');
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
     * updateVessel
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     * @param input input
     */
    public updateVesselUsingPUT (orgShortName: string, vesselId: number, input: models.Vessel, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/oidc/api/org/{orgShortName}/vessel/{vesselId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling updateVesselUsingPUT.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling updateVesselUsingPUT.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateVesselUsingPUT.');
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
     * updateVessel
     *
     * @param orgShortName orgShortName
     * @param vesselId vesselId
     * @param input input
     */
    public updateVesselUsingPUT1 (orgShortName: string, vesselId: number, input: models.Vessel, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/x509/api/org/{orgShortName}/vessel/{vesselId}'
            .replace('{' + 'orgShortName' + '}', String(orgShortName))
            .replace('{' + 'vesselId' + '}', String(vesselId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'orgShortName' is not null or undefined
        if (orgShortName === null || orgShortName === undefined) {
            throw new Error('Required parameter orgShortName was null or undefined when calling updateVesselUsingPUT1.');
        }
        // verify required parameter 'vesselId' is not null or undefined
        if (vesselId === null || vesselId === undefined) {
            throw new Error('Required parameter vesselId was null or undefined when calling updateVesselUsingPUT1.');
        }
        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new Error('Required parameter input was null or undefined when calling updateVesselUsingPUT1.');
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
