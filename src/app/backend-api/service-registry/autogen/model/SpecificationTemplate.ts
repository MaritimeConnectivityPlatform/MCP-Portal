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

'use strict';
import * as models from './models';

/**
 * A SpecificationTemplate contains information on how to define a aspects ofa service.It has a type do differentiate between e.g. logical definitions andconcrete service instances.Templates will evolve, that's why they have a version.
 */
export interface SpecificationTemplate {
    

    comment?: string;

    docs?: Array<models.Doc>;

    guidelineDoc?: models.Doc;

    id?: number;

    name?: string;

    templateDoc?: models.Doc;

    type?: SpecificationTemplate.TypeEnum;

    version?: string;

    xsds?: Array<models.Xsd>;
}
export namespace SpecificationTemplate {

    export enum TypeEnum { 
        SPECIFICATION = <any> 'SPECIFICATION',
        DESIGN = <any> 'DESIGN',
        INSTANCE = <any> 'INSTANCE',
    }
}
