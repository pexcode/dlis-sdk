# @pexcode/dlis-sdk

Official TypeScript/JavaScript SDK from [Pexcode](https://pexcode.com) for integrating with the **DLIS API** (delivery and logistics management platform).

The SDK supports package creation, cost calculation, branch and region management, ledger tracking, and webhook configuration.

---

## Requirements

- Node.js 18 or later
- API token from the DLIS dashboard
- DLIS API base URL

---

## Installation

```bash
npm install @pexcode/dlis-sdk
```

---

## Quick Start

```typescript
import { DLISystem } from "@pexcode/dlis-sdk";

const dlis = new DLISystem(
  "https://your-api-base-url.com", // DLIS API base URL
  "your-api-token"                  // API token
);

// Verify connected SDK app info
const info = await dlis.MyInfo();
console.log(info);
```

> **Note:** The SDK automatically uses API version `v3` via the `x-version` header.

### Backward Compatibility

For backward compatibility, you can import the legacy name `QDSystem` instead of `DLISystem`:

```typescript
import { QDSystem } from "@pexcode/dlis-sdk";

const dlis = new QDSystem("https://your-api-base-url.com", "your-api-token");
```

---

## Typical Workflow

Common steps to create a new package:

```
1. Fetch regions
2. Fetch cities
3. Fetch company branches in the city
4. Calculate shipping cost
5. Check blacklist (optional)
6. Create the package
7. Send package data to the center
```

```typescript
import { DLISystem } from "@pexcode/dlis-sdk";

const dlis = new DLISystem("https://your-api-base-url.com", "your-api-token");

const countryId = 1;
const regions = await dlis.GetRegionsList(countryId);
const cities = await dlis.GetCitiesListInByRegion(regions[0].id);

const cityId = cities[0].id;
const branches = await dlis.getCompanyListOfCity(cityId);
const branch = branches[0];

const cost = await dlis.CalculateCost({
  costId: branch.costModel![0].id,
  branchId: branch.id,
  receiverCityId: cityId,
  receiverAddress: "10 Example Street",
  shippingOption: "standard",
  isPickup: false,
  weight: 2,
});

await dlis.CheckBlackList({
  phone: "+966500000000",
  firstName: "John",
  lastName: "Doe",
});

const pkg = await dlis.CreatePackage({
  weight: 2,
  shippingOption: "standard",
  billingType: "prepaid",
  proofOfDeliveryType: "signature",
  branchId: branch.id,
  costId: branch.costModel![0].id,
  type: "Package",
  note: "Store order",
  pickup: false,
  includeProducts: false,
  isTesting: false,
  receiverInfo: {
    firstName: "John",
    lastName: "Doe",
    address: "10 Example Street",
    phone: "+966500000000",
    cityId,
  },
});

await dlis.SendDataToCenter(pkg.id);
```

---

## API Reference

### App Info & Branches

| Method | Description |
|--------|-------------|
| `MyInfo()` | Returns connected SDK app info (status, limits, webhook, etc.) |
| `getTenantBranches()` | Fetches all tenant branches |
| `getCompanyListOfCity(cityId)` | Fetches company branches available in a given city |

```typescript
const info = await dlis.MyInfo();
const branches = await dlis.getTenantBranches();
const cityBranches = await dlis.getCompanyListOfCity(42);
```

---

### Regions & Cities

| Method | Description |
|--------|-------------|
| `GetRegionsList(countryId)` | Fetches regions for a given country |
| `GetCitiesListInByRegion(regionId)` | Fetches cities within a given region |

```typescript
const regions = await dlis.GetRegionsList(1);
const cities = await dlis.GetCitiesListInByRegion(regions[0].id);
```

---

### Packages

| Method | Description |
|--------|-------------|
| `GetList(page?, pageSize?)` | Fetches paginated package list (default: page 1, 10 items) |
| `GetPackageDetails(id)` | Fetches a single package by ID |
| `CreatePackage(payload)` | Creates a new package |
| `CancelOne(id)` | Cancels a package |
| `ReportOne(id, body)` | Reports an issue with a package |
| `SendDataToCenter(id)` | Sends package data to the center after preparation |

```typescript
const packages = await dlis.GetList(1, 20);
const details = await dlis.GetPackageDetails("package-id");
const created = await dlis.CreatePackage({ /* ... */ });
await dlis.CancelOne("package-id");
await dlis.ReportOne("package-id", { reason: "Delivery delayed" });
await dlis.SendDataToCenter("package-id");
```

---

### Cost & Validation

| Method | Description |
|--------|-------------|
| `CalculateCost(params)` | Calculates shipping cost before creating a package |
| `CheckBlackList(query)` | Checks receiver details against the blacklist |

```typescript
const cost = await dlis.CalculateCost({
  costId: "cost-id",
  branchId: "branch-id",
  receiverCityId: 42,
  receiverAddress: "10 Example Street",
  receiverLat: 24.7136,
  receiverLng: 46.6753,
  shippingOption: "express",
  isPickup: true,
  weight: 3,
});

const blacklistCheck = await dlis.CheckBlackList({
  phone: "+966500000000",
  email: "user@example.com",
});
```

---

### Ledger

| Method | Description |
|--------|-------------|
| `GetMyLedgerOverview()` | Summary of current balance and unpaid amounts |
| `GetMyLedger(year?, month?)` | Financial transaction history (optional year and month) |

```typescript
const overview = await dlis.GetMyLedgerOverview();
// overview.currentBalance, overview.unpaidIncome, overview.unpaidExpenses, overview.expectedBalance

const ledger = await dlis.GetMyLedger(2026, 7);
```

---

### Webhook

| Method | Description |
|--------|-------------|
| `SetWebhook(payload)` | Registers a webhook URL to receive update notifications |

```typescript
await dlis.SetWebhook({
  host: "https://your-server.com",
  path: "/webhooks/dlis",
  webhookToken: "your-secret-token",
});
```

---

## Main Data Types

### Create Package — `SdkPackagesCreationAttributes`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `weight` | `number` | Yes | Package weight in kilograms |
| `shippingOption` | `ShippingOption` | Yes | Shipping type |
| `billingType` | `BillingType` | Yes | Billing type |
| `proofOfDeliveryType` | `ProofOfDeliveryType` | Yes | Proof of delivery |
| `branchId` | `string` | Yes | Branch ID |
| `costId` | `string` | Yes | Cost model ID |
| `type` | `PackageType` | Yes | Package type |
| `note` | `string` | Yes | Notes |
| `pickup` | `boolean` | Yes | Pickup from branch? |
| `includeProducts` | `boolean` | Yes | Includes products? |
| `isTesting` | `boolean` | Yes | Test package |
| `receiverInfo` | `ClientCreationAttributes` | Yes | Receiver details |
| `futureTenantId` | `string` | No | Future tenant ID |
| `packageCost` | `number` | No | Package contents value |
| `endpoint` | `string` | No | Specific delivery endpoint |

### Receiver Info — `ClientCreationAttributes`

| Field | Type | Required |
|-------|------|----------|
| `firstName` | `string` | Yes |
| `lastName` | `string` | Yes |
| `address` | `string` | Yes |
| `phone` | `string` | Yes |
| `cityId` | `number` | Yes |
| `postCode` | `string` | No |
| `email` | `string` | No |
| `lng` / `lat` | `number` | No |
| `houseNumber` | `string` | No |

---

## Enums

### `ShippingOption`

| Value | Description |
|-------|-------------|
| `standard` | Standard shipping |
| `express` | Express shipping |
| `same_day` | Same-day delivery |

### `BillingType`

| Value | Description |
|-------|-------------|
| `none` | No billing |
| `prepaid` | Prepaid |
| `postpaid` | Cash on delivery |

### `ProofOfDeliveryType`

| Value | Description |
|-------|-------------|
| `none` | No proof required |
| `signature` | Receiver signature |
| `otp` | One-time password (OTP) |

### `PackageType`

| Value | Description |
|-------|-------------|
| `Package` | Package |
| `Document` | Document |

---

## Error Handling

When a request fails, the SDK throws an `Error` with the server message. Handle it like this:

```typescript
try {
  const pkg = await dlis.CreatePackage(payload);
} catch (error) {
  console.error("Failed to create package:", (error as Error).message);
}
```

---

## TypeScript

The SDK is written in TypeScript and ships with type definitions. All request and response types are available when importing from the package.

---

## License

MIT — © Pexcode
