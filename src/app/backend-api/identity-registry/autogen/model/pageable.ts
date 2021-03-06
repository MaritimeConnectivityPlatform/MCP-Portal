/**
 * Maritime Connectivity Platform Identity Registry API
 * MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.
 *
 * OpenAPI spec version: 0.8.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Sort } from './sort';


export interface Pageable {
    offset?: number;
    pageNumber?: number;
    pageSize?: number;
    paged?: boolean;
    sort?: Sort;
    unpaged?: boolean;
}
