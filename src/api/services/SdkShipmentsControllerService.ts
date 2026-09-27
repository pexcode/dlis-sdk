/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckBlackListAttribute } from '../models/CheckBlackListAttribute';
import type { ClientAttributes } from '../models/ClientAttributes';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { SdkShipmentsCreationAttributes } from '../models/SdkShipmentsCreationAttributes';
import type { ShipmentId } from '../models/ShipmentId';
import type { shipmentsAttributes } from '../models/shipmentsAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SdkShipmentsControllerService {
    /**
     * @param id
     * @returns shipmentsAttributes Ok
     * @throws ApiError
     */
    public static getShipmentDetails(
        id: ShipmentId,
    ): CancelablePromise<shipmentsAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/v2/shipments/shipment-details/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param page
     * @param pageSize
     * @returns shipmentsAttributes Ok
     * @throws ApiError
     */
    public static getList(
        page: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<Array<shipmentsAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sdk/v2/shipments/list',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * @param requestBody
     * @returns shipmentsAttributes Ok
     * @throws ApiError
     */
    public static createNewShipment(
        requestBody: Array<SdkShipmentsCreationAttributes>,
    ): CancelablePromise<Array<shipmentsAttributes>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdk/v2/shipments/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns HttpSuccess Ok
     * @throws ApiError
     */
    public static sendDataToCEnter(
        requestBody: {
            shipmentIds?: Array<ShipmentId>;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdk/v2/shipments/sentDataToCenter',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns HttpSuccess Ok
     * @throws ApiError
     */
    public static canceled(
        id: ShipmentId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/sdk/v2/shipments/cancel/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns HttpSuccess Ok
     * @throws ApiError
     */
    public static reportShipment(
        id: ShipmentId,
        requestBody: {
            reportId: number;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdk/v2/shipments/report/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns ClientAttributes Ok
     * @throws ApiError
     */
    public static checkBlackList(
        requestBody: CheckBlackListAttribute,
    ): CancelablePromise<ClientAttributes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sdk/v2/shipments/check-black-list',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
