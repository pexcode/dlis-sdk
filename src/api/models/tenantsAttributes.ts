/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type tenantsAttributes = {
    id: TenantId;
    ownerId: UserId;
    phone: string;
    name: string;
    avatar?: string;
    address: string;
    country?: string;
    countryId: number;
    cityId: number;
    level: number;
    availableOnlinePayment: boolean;
    isDeleted: boolean;
    confirmedAt?: string;
    email: string;
    status: number;
    createdAt?: string;
    updatedAt?: string;
    blockedAt?: string;
};

