/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostId } from './CostId';
import type { ShippingOption } from './ShippingOption';
export type CalculateCostAttributes = {
    costId: CostId;
    receiverLng?: number;
    receiverLat?: number;
    receiverAddress?: string;
    receiverCityId: number;
    shippingOption: ShippingOption;
    isPickup: boolean;
    weight: number;
};

