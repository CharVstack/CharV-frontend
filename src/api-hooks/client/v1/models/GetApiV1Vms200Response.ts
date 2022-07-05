/* tslint:disable */
/* eslint-disable */
/**
 * CharVstack-API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import { Vm, VmFromJSON, VmFromJSONTyped, VmToJSON } from './Vm';

/**
 *
 * @export
 * @interface GetApiV1Vms200Response
 */
export interface GetApiV1Vms200Response {
  /**
   *
   * @type {Array<Vm>}
   * @memberof GetApiV1Vms200Response
   */
  vms?: Array<Vm>;
}

export function GetApiV1Vms200ResponseFromJSON(json: any): GetApiV1Vms200Response {
  return GetApiV1Vms200ResponseFromJSONTyped(json, false);
}

export function GetApiV1Vms200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetApiV1Vms200Response {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    vms: !exists(json, 'vms') ? undefined : (json['vms'] as Array<any>).map(VmFromJSON),
  };
}

export function GetApiV1Vms200ResponseToJSON(value?: GetApiV1Vms200Response | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    vms: value.vms === undefined ? undefined : (value.vms as Array<any>).map(VmToJSON),
  };
}
