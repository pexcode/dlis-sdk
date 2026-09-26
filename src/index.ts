import { ApiCall } from "./api-handler";
import { OpenAPI } from "./api/core/OpenAPI";
import { branchesAttributes } from "./api/models/branchesAttributes";
import { CalculateCostAttributes } from "./api/models/CalculateCostAttributes";
import { CheckBlackListAttribute } from "./api/models/CheckBlackListAttribute";
import { HttpSuccess } from "./api/models/HttpSuccess";
import { SdkInfoAttributes } from "./api/models/SdkInfoAttributes";
import { ShippingServiceData } from "./api/models/ShippingServiceData";
import { regionsAttributes } from "./api/models/regionsAttributes";
import { citiesAttributes } from "./api/models/citiesAttributes";
import { BranchLedgerAttributes } from "./api/models/BranchLedgerAttributes";
import { SdkLedgerOverview } from "./api/models/SdkLedgerOverview";
import { SdkControllerService } from "./api/services/SdkControllerService";

import { SdkRegionsControllerService } from "./api/services/SdkRegionsControllerService";
import { tenantsAttributes } from "./api/models/tenantsAttributes";
import { SdkShipmentsControllerService } from "./api/services/SdkShipmentsControllerService";
import { shipmentsAttributes } from "./api/models/shipmentsAttributes";
import { SdkShipmentsCreationAttributes } from "./api/models/SdkShipmentsCreationAttributes";

const SDK_api_ver = "v3";

export class DLISystem {
  constructor(baseUrl:string ,tokenKey: string) {
    OpenAPI.TOKEN = tokenKey
    OpenAPI.BASE = baseUrl
    OpenAPI.HEADERS = { 'x-version': SDK_api_ver }
  }

  async GetList(page: number = 1, pageSize: number = 10,): Promise<shipmentsAttributes[]> {
    const { result, error } = await ApiCall(() => SdkShipmentsControllerService.getList(page, pageSize))
    if (result) {
      return result;
    }
    throw error;
  }

  async getCompanyListOfCity(): Promise<branchesAttributes[]> {
    const { result, error } = await ApiCall(() => SdkControllerService.getListOfCity())
    if (result) {
      return result;
    }
    throw error;
  }

  async MyInfo(): Promise<SdkInfoAttributes> {
    const { result, error } = await ApiCall<SdkInfoAttributes>(() => SdkControllerService.getMyInfo())
    if (result) {
      return result;
    }
    throw error;
  }
  
  async GetMyTenantInfo(): Promise<tenantsAttributes> {
    const { result, error } = await ApiCall<tenantsAttributes>(() => SdkControllerService.getMyTenant())
    if (result) {
      return result;
    }
    throw error;
  }

  async getTenantBranches(): Promise<branchesAttributes[]> {
    const { result, error } = await ApiCall<branchesAttributes[]>(() => SdkControllerService.getTenantBranches())
    if (result) {
      return result;
    }
    throw error;
  }


  async GetPackageDetails(id: string): Promise<shipmentsAttributes> {
    const { result, error } = await ApiCall(() => SdkShipmentsControllerService.getShipmentDetails(id))
    if (result) {
      return result;
    }
    throw error;
  }

  async CheckBlackList(query: CheckBlackListAttribute): Promise<CheckBlackListAttribute> {
    const { result, error } = await ApiCall(() => SdkShipmentsControllerService.checkBlackList(query))
    if (result) {
      return result;
    }
    throw error;
  }

  async CancelOne(id: string): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() => SdkShipmentsControllerService.canceled(id))
    if (result) {
      return result;
    }
    throw error;
  }

  async ReportOne(id: string, body: any): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() => SdkShipmentsControllerService.reportShipment(id, body))
    if (result) {
      return result;
    }
    throw error;
  }

  async CreatePackage(payload: SdkShipmentsCreationAttributes[]): Promise<shipmentsAttributes[]> {
    const { result, error } = await ApiCall(() => SdkShipmentsControllerService.createNewShipment(payload))
    if (result) {
      return result;
    }
    throw error;
  }

  async CalculateCost(params: CalculateCostAttributes): Promise<ShippingServiceData> {
    const { result, error } = await ApiCall(() => SdkControllerService.calculateCost(params))
    if (result) {
      return result;
    }
    throw error;
  }

  async SendDataToCenter(id: string[]): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() => SdkShipmentsControllerService.sendDataToCEnter({shipmentIds: id}))
    if (result) {
      return result;
    }
    throw error;
  }

  async GetRegionsList(countryId: number): Promise<regionsAttributes[]> {
    const { result, error } = await ApiCall(() => SdkRegionsControllerService.getRegions(countryId))
    if (result) {
      return result;
    }
    throw error;
  }

  async GetCitiesListInByRegion(regionId: number): Promise<citiesAttributes[]> {
    const { result, error } = await ApiCall(() => SdkRegionsControllerService.getCities(regionId))
    if (result) {
      return result;
    }
    throw error;
  }

  async GetMyLedger(year?: number, month?: number): Promise<BranchLedgerAttributes[]> {
    const { result, error } = await ApiCall(() => SdkControllerService.getLedgerList(year, month))
    if (result) {
      return result;
    }
    throw error;
  }

  async GetMyLedgerOverview(): Promise<SdkLedgerOverview> {
    const { result, error } = await ApiCall(() => SdkControllerService.getLedgerOverView())
    if (result) {
      return result;
    }
    throw error;
  }

  async SetWebhook(payload: {
    host: string;
    webhookToken: string;
    path: string;
  }): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() => SdkControllerService.setWebhook(payload))
    if (result) {
      return result;
    }
    throw error;
  }
}

export { DLISystem as QDSystem };