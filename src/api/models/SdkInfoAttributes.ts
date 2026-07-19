/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppLevel } from './AppLevel';
import type { ClientAttributes } from './ClientAttributes';
import type { limitedSdkAttributes } from './limitedSdkAttributes';
import type { SdkId } from './SdkId';
import type { TenantId } from './TenantId';
export type SdkInfoAttributes = {
    id: SdkId;
    tenantId: TenantId;
    clientId: string;
    countryId: number;
    isActive: boolean;
    currentRequestCount: number;
    lastRequestAt: string;
    host?: string;
    token?: string;
    hook_url?: string;
    hookToken?: string;
    hash?: string;
    appLevel: AppLevel;
    blockedAt?: string;
    createdAt?: string;
    updatedAt?: string;
    limitedApp?: limitedSdkAttributes;
    clientInfo?: ClientAttributes;
};

