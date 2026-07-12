/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { CostId } from './CostId';
import type { ShippingOption } from './ShippingOption';
export type CalculateCostAttributes = {
    costId: CostId;
    branchId: BranchId;
    receiverLng?: number;
    receiverLat?: number;
    receiverAddress?: string;
    receiverCityId: number;
    shippingOption: ShippingOption;
    isPickup: boolean;
    weight: number;
};

