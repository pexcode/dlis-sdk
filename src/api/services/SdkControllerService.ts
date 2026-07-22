/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { branchesAttributes } from '../models/branchesAttributes';
import type { BranchLedgerAttributes } from '../models/BranchLedgerAttributes';
import type { CalculateCostAttributes } from '../models/CalculateCostAttributes';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { SdkInfoAttributes } from '../models/SdkInfoAttributes';
import type { SdkLedgerOverview } from '../models/SdkLedgerOverview';
import type { ShippingServiceData } from '../models/ShippingServiceData';
import type { tenantsAttributes } from '../models/tenantsAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SdkControllerService {
    /**
     * @returns branchesAttributes Ok
     * @throws ApiError
     */
    public static getTenantBranches(): CancelablePromise<Array<branchesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/v2/tenant-branches',
        });
    }
    /**
     * @returns SdkInfoAttributes Ok
     * @throws ApiError
     */
    public static getMyInfo(): CancelablePromise<SdkInfoAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/v2/me-info',
        });
    }
    /**
     * @returns tenantsAttributes Ok
     * @throws ApiError
     */
    public static getMyTenant(): CancelablePromise<tenantsAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/v2/me-tenant',
        });
    }
    /**
     * @param cityId
     * @returns branchesAttributes Ok
     * @throws ApiError
     */
    public static getListOfCity(
        cityId: number,
    ): CancelablePromise<Array<branchesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/v2/place/{city}',
            query: {
                'cityId': cityId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ShippingServiceData Ok
     * @throws ApiError
     */
    public static calculateCost(
        requestBody: CalculateCostAttributes,
    ): CancelablePromise<ShippingServiceData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdk/v2/shipping/cost',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param year
     * @param month
     * @returns BranchLedgerAttributes Ok
     * @throws ApiError
     */
    public static getLedgerList(
        year?: number,
        month?: number,
    ): CancelablePromise<Array<BranchLedgerAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/v2/ledger',
            query: {
                'year': year,
                'month': month,
            },
        });
    }
    /**
     * @returns SdkLedgerOverview Ok
     * @throws ApiError
     */
    public static getLedgerOverView(): CancelablePromise<SdkLedgerOverview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/v2/ledger-overview',
        });
    }
    /**
     * @param requestBody
     * @returns HttpSuccess Ok
     * @throws ApiError
     */
    public static setWebhook(
        requestBody: {
            host: string;
            webhookToken: string;
            path: string;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdk/v2/set-webhook',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
