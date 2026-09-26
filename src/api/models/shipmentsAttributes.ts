/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingType } from './BillingType';
import type { BranchId } from './BranchId';
import type { CargoType } from './CargoType';
import type { ClientAddressAttributes } from './ClientAddressAttributes';
import type { ClientAttributes } from './ClientAttributes';
import type { CostId } from './CostId';
import type { EndpointId } from './EndpointId';
import type { movementsAttributes } from './movementsAttributes';
import type { ProofOfDeliveryType } from './ProofOfDeliveryType';
import type { SdkId } from './SdkId';
import type { ShipmentId } from './ShipmentId';
import type { ShipmentPlatform } from './ShipmentPlatform';
import type { ShippingOption } from './ShippingOption';
import type { ShippingZone } from './ShippingZone';
import type { Sizes } from './Sizes';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type shipmentsAttributes = {
    url?: string;
    id: ShipmentId;
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
    type: CargoType;
    note: string;
    shippingCost: number;
    /**
     * Cash-on-delivery amount collected from the recipient (goods / COD).
     */
    codAmount?: number;
    /**
     * Declared contents value for insurance/customs; unused in workflows yet.
     */
    declaredValue?: number | null;
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
    platform: ShipmentPlatform;
    isTesting: boolean;
    scanned?: string;
    stage: number;
    childrenItem?: number | null;
    shippingOption: ShippingOption;
    billingType: BillingType | null;
    proofOfDeliveryType?: ProofOfDeliveryType;
    proposedDeliveryDate?: string | null;
    tripId?: string | null;
    movementShipmentGroup?: Array<movementsAttributes>;
    receiverInfo?: ClientAttributes;
    senderInfo?: ClientAttributes;
    senderAddressInfo?: ClientAddressAttributes;
    receiverAddressInfo?: ClientAddressAttributes;
};

