/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingType } from './BillingType';
import type { ClientCreationAttributes } from './ClientCreationAttributes';
import type { CostId } from './CostId';
import type { EndpointId } from './EndpointId';
import type { PackageType } from './PackageType';
import type { ProofOfDeliveryType } from './ProofOfDeliveryType';
import type { ShippingOption } from './ShippingOption';
import type { TenantId } from './TenantId';
export type SdkPackagesCreationAttributes = {
    weight: number;
    shippingOption: ShippingOption;
    billingType: BillingType;
    proofOfDeliveryType: ProofOfDeliveryType;
    costId: CostId;
    futureTenantId?: TenantId;
    type: PackageType;
    note: string;
    packageCost?: number;
    endpointId?: EndpointId;
    pickup: boolean;
    includeProducts: boolean;
    isTesting: boolean;
    receiverInfo: ClientCreationAttributes;
};

