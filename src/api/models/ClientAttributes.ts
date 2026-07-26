/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientAddressAttributes } from './ClientAddressAttributes';
import type { ClientTypeEnum } from './ClientTypeEnum';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type ClientAttributes = {
    id: string;
    tenantId: TenantId;
    userId?: UserId;
    appId?: string;
    countryId: number;
    firstName: string;
    lastName: string;
    businessName?: string;
    phone: string;
    email?: string;
    isVerified: boolean;
    type: ClientTypeEnum;
    comment?: string;
    hasBan?: boolean;
    createdAt?: string;
    updatedAt?: string;
    defaultAddress?: ClientAddressAttributes;
};

