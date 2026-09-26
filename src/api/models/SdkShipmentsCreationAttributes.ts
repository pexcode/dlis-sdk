/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingType } from './BillingType';
import type { CargoType } from './CargoType';
import type { ClientCreationAttributes } from './ClientCreationAttributes';
import type { CostId } from './CostId';
import type { EndpointId } from './EndpointId';
import type { ProofOfDeliveryType } from './ProofOfDeliveryType';
import type { ShippingOption } from './ShippingOption';
import type { TenantId } from './TenantId';
export type SdkShipmentsCreationAttributes = {
    weight: number;
    shippingOption: ShippingOption;
    billingType: BillingType;
    proofOfDeliveryType: ProofOfDeliveryType;
    costId: CostId;
    futureTenantId?: TenantId;
    type: CargoType;
    note: string;
    /**
     * Cash-on-delivery amount collected from the recipient.
     */
    codAmount?: number;
    /**
     * Declared contents value for insurance/customs; unused in workflows yet.
     */
    declaredValue?: number | null;
    endpointId?: EndpointId;
    pickup: boolean;
    includeProducts: boolean;
    isTesting: boolean;
    receiverInfo: ClientCreationAttributes;
};

