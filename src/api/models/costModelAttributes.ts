/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { CostId } from './CostId';
import type { Currencies } from './Currencies';
import type { PackageType } from './PackageType';
import type { ShippingZone } from './ShippingZone';
import type { Sizes } from './Sizes';
import type { TenantId } from './TenantId';
export type costModelAttributes = {
    id: CostId;
    tenantId: TenantId;
    branchId: BranchId;
    type: PackageType;
    typeId: number;
    /**
     * true = V1 (enum size); false = V2 (numeric size/height/width)
     */
    modelV1: boolean;
    costPerKilometer: number;
    costPerKg: number;
    expressServiceFee: number;
    sameDayServiceFee: number;
    taxRate: number;
    cityBaseCosts: number;
    unit: string;
    currency: Currencies;
    /**
     * V2: package size (manual number). V1: unused (0).
     */
    maxLong: number;
    /**
     * V2: package width
     */
    maxWidth?: number;
    /**
     * V2: package height
     */
    maxHeight?: number;
    /**
     * V2 only: shipping coverage zone
     */
    shippingZone?: ShippingZone;
    weight: number;
    isDeleted: boolean;
    createdAt?: string;
    updatedAt?: string;
    /**
     * V1 only: sm / md / lg. Optional for V2.
     */
    size?: Sizes;
};

