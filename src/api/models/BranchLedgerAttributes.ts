/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { Currencies } from './Currencies';
import type { LedgerCategory } from './LedgerCategory';
import type { LedgerStatus } from './LedgerStatus';
import type { LedgerType } from './LedgerType';
import type { PaymentMethod } from './PaymentMethod';
import type { ReferenceType } from './ReferenceType';
import type { UserId } from './UserId';
export type BranchLedgerAttributes = {
    id: string;
    branchId: BranchId;
    userId?: UserId;
    appId?: string;
    limitedSdkId?: string;
    referenceType: ReferenceType;
    shipmentId?: string;
    type: LedgerType;
    category: LedgerCategory;
    amount: number;
    currency: Currencies;
    paymentMethod?: PaymentMethod;
    paymentId?: string;
    paymentDate?: string;
    isPaidOnline?: boolean;
    status: LedgerStatus;
    createdAt?: string;
    updatedAt?: string;
};

