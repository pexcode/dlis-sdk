/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { citiesAttributes } from '../models/citiesAttributes';
import type { regionsAttributes } from '../models/regionsAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SdkRegionsControllerService {
    /**
     * @param regionId
     * @returns any Ok
     * @throws ApiError
     */
    public static getCities(
        regionId: number,
    ): CancelablePromise<Array<citiesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/regions/cities/{regionId}',
            path: {
                'regionId': regionId,
            },
        });
    }
    /**
     * @param countryId
     * @returns any Ok
     * @throws ApiError
     */
    public static getRegions(
        countryId: number,
    ): CancelablePromise<Array<regionsAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/regions/{countryId}',
            path: {
                'countryId': countryId,
            },
        });
    }
}
