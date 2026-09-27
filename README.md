# @pexcode/dlis-sdk

Official TypeScript/JavaScript SDK from [Pexcode](https://pexcode.com) for integrating with the **DLIS API** (delivery and logistics management platform).

The SDK supports shipment creation, cost calculation, branch and region management, ledger tracking, and webhook configuration.

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

Common steps to create a new shipment:

```
1. Fetch regions
2. Fetch cities
3. Fetch company branches in the city
4. Calculate shipping cost
5. Check blacklist (optional)
6. Create the shipment(s)
7. Send shipment data to the center
```

```typescript
import { DLISystem } from "@pexcode/dlis-sdk";

const dlis = new DLISystem("https://your-api-base-url.com", "your-api-token");

const countryId = 1;
const regions = await dlis.GetRegionsList(countryId);
const cities = await dlis.GetCitiesListInByRegion(regions[0].id);

const cityId = cities[0].id;
const branches = await dlis.getCompanyListOfCity();
const branch = branches[0];

const cost = await dlis.CalculateCost({
  costId: branch.costModel![0].id,
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

const shipments = await dlis.CreateShipment([
  {
    weight: 2,
    shippingOption: "standard",
    billingType: "prepaid",
    proofOfDeliveryType: "signature",
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
      neighborhoodId: 5,
    },
  },
]);

await dlis.SendDataToCenter(shipments.map((shipment) => shipment.id));
```

---

## API Reference

### App Info & Branches

| Method | Description |
|--------|-------------|
| `MyInfo()` | Returns connected SDK app info (status, limits, webhook, etc.) |
| `GetMyTenantInfo()` | Returns the connected tenant details |
| `getTenantBranches()` | Fetches all tenant branches |
| `getCompanyListOfCity()` | Fetches available company branches |

```typescript
const info = await dlis.MyInfo();
const tenant = await dlis.GetMyTenantInfo();
const branches = await dlis.getTenantBranches();
const cityBranches = await dlis.getCompanyListOfCity();
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

### Shipments

| Method | Description |
|--------|-------------|
| `GetList(page?, pageSize?)` | Fetches paginated shipment list (default: page 1, 10 items) |
| `GetShipmentDetails(id)` | Fetches a single shipment by ID |
| `CreateShipment(payload)` | Creates one or more shipments (accepts an array) |
| `CancelOne(id)` | Cancels a shipment |
| `ReportOne(id, body)` | Reports an issue with a shipment (`{ reportId: number }`) |
| `SendDataToCenter(ids)` | Sends shipment data to the center after preparation (accepts an array of IDs) |

```typescript
const shipments = await dlis.GetList(1, 20);
const details = await dlis.GetShipmentDetails("shipment-id");
const created = await dlis.CreateShipment([/* ... */]);
await dlis.CancelOne("shipment-id");
await dlis.ReportOne("shipment-id", { reportId: 1 });
await dlis.SendDataToCenter(["shipment-id"]);
```

---

### Cost & Validation

| Method | Description |
|--------|-------------|
| `CalculateCost(params)` | Calculates shipping cost before creating a shipment |
| `CheckBlackList(query)` | Checks receiver details against the blacklist |

```typescript
const cost = await dlis.CalculateCost({
  costId: "cost-id",
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
// ledger entries include paymentMethod, paymentId, paymentDate, isPaidOnline, limitedSdkId, shipmentId
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

### Create Shipment — `SdkShipmentsCreationAttributes`

`CreateShipment` accepts an **array** of these objects.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `weight` | `number` | Yes | Shipment weight in kilograms |
| `shippingOption` | `ShippingOption` | Yes | Shipping type |
| `billingType` | `BillingType` | Yes | Billing type |
| `proofOfDeliveryType` | `ProofOfDeliveryType` | Yes | Proof of delivery |
| `costId` | `string` | Yes | Cost model ID |
| `type` | `CargoType` | Yes | Cargo type |
| `note` | `string` | Yes | Notes |
| `pickup` | `boolean` | Yes | Pickup from branch? |
| `includeProducts` | `boolean` | Yes | Includes products? |
| `isTesting` | `boolean` | Yes | Test shipment |
| `receiverInfo` | `ClientCreationAttributes` | Yes | Receiver details |
| `futureTenantId` | `string` | No | Future tenant ID |
| `codAmount` | `number` | No | Cash-on-delivery amount collected from the recipient |
| `declaredValue` | `number \| null` | No | Declared contents value for insurance/customs |
| `endpointId` | `string` | No | Specific delivery endpoint ID |

### Receiver Info — `ClientCreationAttributes`

Used when creating a shipment (`receiverInfo`).

| Field | Type | Required |
|-------|------|----------|
| `firstName` | `string` | Yes |
| `lastName` | `string` | Yes |
| `address` | `string` | Yes |
| `phone` | `string` | Yes |
| `cityId` | `number` | Yes |
| `neighborhoodId` | `number` | No |
| `postCode` | `string` | No |
| `email` | `string` | No |
| `lng` / `lat` | `number` | No |
| `houseNumber` | `string` | No |

### Address Info — `ClientAddressAttributes`

Returned on shipment details as `senderAddressInfo` and `receiverAddressInfo`, and on client details as `defaultAddress` / `addresses`.

| Field | Type | Required |
|-------|------|----------|
| `id` | `string` | Yes |
| `clientId` | `string` | Yes |
| `countryId` | `number` | Yes |
| `cityId` | `number` | Yes |
| `address` | `string` | Yes |
| `isDefault` | `boolean` | Yes |
| `neighborhoodId` | `number \| null` | No |
| `houseNumber` | `string \| null` | No |
| `postCode` | `string \| null` | No |
| `lat` / `lng` | `number \| null` | No |
| `createdAt` / `updatedAt` | `string` | No |

### Ledger Entry — `BranchLedgerAttributes`

Returned by `GetMyLedger()`.

| Field | Type | Required |
|-------|------|----------|
| `id` | `string` | Yes |
| `branchId` | `string` | Yes |
| `referenceType` | `ReferenceType` | Yes |
| `type` | `LedgerType` | Yes |
| `category` | `LedgerCategory` | Yes |
| `amount` | `number` | Yes |
| `currency` | `Currencies` | Yes |
| `status` | `LedgerStatus` | Yes |
| `userId` | `string` | No |
| `appId` | `string` | No |
| `limitedSdkId` | `string` | No |
| `shipmentId` | `string` | No |
| `paymentMethod` | `PaymentMethod` | No |
| `paymentId` | `string` | No |
| `paymentDate` | `string` | No |
| `isPaidOnline` | `boolean` | No |
| `createdAt` / `updatedAt` | `string` | No |

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

### `CargoType`

| Value | Description |
|-------|-------------|
| `Package` | Package |
| `Document` | Document |
| `Truck` | Truck |
| `Container` | Container |

### `ShipmentPlatform`

| Value | Description |
|-------|-------------|
| `dlis` | DLIS platform |
| `sdk` | SDK |
| `android` | Android app |
| `endpoint` | Endpoint |

### `PaymentMethod`

| Value | Description |
|-------|-------------|
| `Cash` | Cash payment |

---

## Error Handling

When a request fails, the SDK throws an `Error` with the server message. Handle it like this:

```typescript
try {
  const shipments = await dlis.CreateShipment([payload]);
} catch (error) {
  console.error("Failed to create shipment:", (error as Error).message);
}
```

---

## TypeScript

The SDK is written in TypeScript and ships with type definitions. All request and response types are available when importing from the package.

---

## License

MIT — © Pexcode
