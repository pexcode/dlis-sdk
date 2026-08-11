/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingType } from './BillingType';
import type { BranchId } from './BranchId';
import type { ClientAddressAttributes } from './ClientAddressAttributes';
import type { ClientAttributes } from './ClientAttributes';
import type { CostId } from './CostId';
import type { EndpointId } from './EndpointId';
import type { movementsAttributes } from './movementsAttributes';
import type { PackageId } from './PackageId';
import type { PackagePlatform } from './PackagePlatform';
import type { PackageType } from './PackageType';
import type { ProofOfDeliveryType } from './ProofOfDeliveryType';
import type { SdkId } from './SdkId';
import type { ShippingOption } from './ShippingOption';
import type { ShippingZone } from './ShippingZone';
import type { Sizes } from './Sizes';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type packagesAttributes = {
    url?: string;
    id: PackageId;
    adminId?: UserId;
    deliveryId?: UserId | null;
    tenantId?: TenantId;
    futureTenantId?: TenantId;
    appId?: SdkId;
    limitedSdkId?: string;
    receiverCityId?: number;
    senderAddressId?: string | null;
    receiverAddressId?: string | null;
    code?: string;
    branchId?: BranchId;
    receiverId: string;
    senderId: string;
    type: PackageType;
    note: string;
    shippingCost: number;
    packageCost?: number;
    costId?: CostId;
    showCostBox: boolean;
    km?: number;
    travelTimeInSeconds?: number;
    travelMode?: string;
    status: number;
    createdAt?: string;
    updatedAt?: string;
    uuid: string;
    roadGroupId?: string;
    /**
     * V1: sm/md/lg. V2: dimensions string e.g. "50×50×50".
     */
    size: (Sizes | string);
    /**
     * Copied from cost model V2 when created.
     */
    shippingZone?: ShippingZone;
    kg: number;
    roadAt?: string;
    endpointId?: EndpointId;
    pickup: boolean;
    includeProducts: boolean;
    platform: PackagePlatform;
    isTesting: boolean;
    scanned?: string;
    stage: number;
    childrenItem?: number | null;
    shippingOption: ShippingOption;
    billingType: BillingType | null;
    proofOfDeliveryType?: ProofOfDeliveryType;
    proposedDeliveryDate?: string | null;
    tripId?: string | null;
    movementPackageGroup?: Array<movementsAttributes>;
    receiverInfo?: ClientAttributes;
    senderInfo?: ClientAttributes;
    senderAddressInfo?: ClientAddressAttributes;
    receiverAddressInfo?: ClientAddressAttributes;
};

