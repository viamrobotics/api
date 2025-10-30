// package: viam.app.v1
// file: app/v1/billing.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class InvoiceSummary extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasInvoiceDate(): boolean;
  clearInvoiceDate(): void;
  getInvoiceDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvoiceDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInvoiceAmount(): number;
  setInvoiceAmount(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasDueDate(): boolean;
  clearDueDate(): void;
  getDueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPaidDate(): boolean;
  clearPaidDate(): void;
  getPaidDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPaidDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceSummary.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceSummary): InvoiceSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceSummary;
  static deserializeBinaryFromReader(message: InvoiceSummary, reader: jspb.BinaryReader): InvoiceSummary;
}

export namespace InvoiceSummary {
  export type AsObject = {
    id: string,
    invoiceDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    invoiceAmount: number,
    status: string,
    dueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    paidDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PaymentMethodCard extends jspb.Message {
  getBrand(): string;
  setBrand(value: string): void;

  getLastFourDigits(): string;
  setLastFourDigits(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentMethodCard.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentMethodCard): PaymentMethodCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentMethodCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentMethodCard;
  static deserializeBinaryFromReader(message: PaymentMethodCard, reader: jspb.BinaryReader): PaymentMethodCard;
}

export namespace PaymentMethodCard {
  export type AsObject = {
    brand: string,
    lastFourDigits: string,
  }
}

export class VerificationInfo extends jspb.Message {
  getArrivalDate(): number;
  setArrivalDate(value: number): void;

  getHostedVerificationPageUrl(): string;
  setHostedVerificationPageUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationInfo): VerificationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationInfo;
  static deserializeBinaryFromReader(message: VerificationInfo, reader: jspb.BinaryReader): VerificationInfo;
}

export namespace VerificationInfo {
  export type AsObject = {
    arrivalDate: number,
    hostedVerificationPageUrl: string,
  }
}

export class PaymentMethodUSBankAccount extends jspb.Message {
  getBankName(): string;
  setBankName(value: string): void;

  getLastFourDigitsAccountNumber(): string;
  setLastFourDigitsAccountNumber(value: string): void;

  getRoutingNumber(): string;
  setRoutingNumber(value: string): void;

  getAccountType(): string;
  setAccountType(value: string): void;

  hasVerificationInfo(): boolean;
  clearVerificationInfo(): void;
  getVerificationInfo(): VerificationInfo | undefined;
  setVerificationInfo(value?: VerificationInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentMethodUSBankAccount.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentMethodUSBankAccount): PaymentMethodUSBankAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentMethodUSBankAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentMethodUSBankAccount;
  static deserializeBinaryFromReader(message: PaymentMethodUSBankAccount, reader: jspb.BinaryReader): PaymentMethodUSBankAccount;
}

export namespace PaymentMethodUSBankAccount {
  export type AsObject = {
    bankName: string,
    lastFourDigitsAccountNumber: string,
    routingNumber: string,
    accountType: string,
    verificationInfo?: VerificationInfo.AsObject,
  }
}

export class GetCurrentMonthUsageRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentMonthUsageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentMonthUsageRequest): GetCurrentMonthUsageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentMonthUsageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentMonthUsageRequest;
  static deserializeBinaryFromReader(message: GetCurrentMonthUsageRequest, reader: jspb.BinaryReader): GetCurrentMonthUsageRequest;
}

export namespace GetCurrentMonthUsageRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class UsageCost extends jspb.Message {
  getResourceType(): UsageCostTypeMap[keyof UsageCostTypeMap];
  setResourceType(value: UsageCostTypeMap[keyof UsageCostTypeMap]): void;

  getCost(): number;
  setCost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageCost.AsObject;
  static toObject(includeInstance: boolean, msg: UsageCost): UsageCost.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageCost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageCost;
  static deserializeBinaryFromReader(message: UsageCost, reader: jspb.BinaryReader): UsageCost;
}

export namespace UsageCost {
  export type AsObject = {
    resourceType: UsageCostTypeMap[keyof UsageCostTypeMap],
    cost: number,
  }
}

export class ResourceUsageCostsBySource extends jspb.Message {
  getSourceType(): SourceTypeMap[keyof SourceTypeMap];
  setSourceType(value: SourceTypeMap[keyof SourceTypeMap]): void;

  hasResourceUsageCosts(): boolean;
  clearResourceUsageCosts(): void;
  getResourceUsageCosts(): ResourceUsageCosts | undefined;
  setResourceUsageCosts(value?: ResourceUsageCosts): void;

  getTierName(): string;
  setTierName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceUsageCostsBySource.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceUsageCostsBySource): ResourceUsageCostsBySource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceUsageCostsBySource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceUsageCostsBySource;
  static deserializeBinaryFromReader(message: ResourceUsageCostsBySource, reader: jspb.BinaryReader): ResourceUsageCostsBySource;
}

export namespace ResourceUsageCostsBySource {
  export type AsObject = {
    sourceType: SourceTypeMap[keyof SourceTypeMap],
    resourceUsageCosts?: ResourceUsageCosts.AsObject,
    tierName: string,
  }
}

export class ResourceUsageCosts extends jspb.Message {
  clearUsageCostsList(): void;
  getUsageCostsList(): Array<UsageCost>;
  setUsageCostsList(value: Array<UsageCost>): void;
  addUsageCosts(value?: UsageCost, index?: number): UsageCost;

  getDiscount(): number;
  setDiscount(value: number): void;

  getTotalWithDiscount(): number;
  setTotalWithDiscount(value: number): void;

  getTotalWithoutDiscount(): number;
  setTotalWithoutDiscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceUsageCosts.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceUsageCosts): ResourceUsageCosts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceUsageCosts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceUsageCosts;
  static deserializeBinaryFromReader(message: ResourceUsageCosts, reader: jspb.BinaryReader): ResourceUsageCosts;
}

export namespace ResourceUsageCosts {
  export type AsObject = {
    usageCostsList: Array<UsageCost.AsObject>,
    discount: number,
    totalWithDiscount: number,
    totalWithoutDiscount: number,
  }
}

export class GetCurrentMonthUsageResponse extends jspb.Message {
  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearResourceUsageCostsBySourceList(): void;
  getResourceUsageCostsBySourceList(): Array<ResourceUsageCostsBySource>;
  setResourceUsageCostsBySourceList(value: Array<ResourceUsageCostsBySource>): void;
  addResourceUsageCostsBySource(value?: ResourceUsageCostsBySource, index?: number): ResourceUsageCostsBySource;

  getSubtotal(): number;
  setSubtotal(value: number): void;

  getCloudStorageUsageCost(): number;
  setCloudStorageUsageCost(value: number): void;

  getDataUploadUsageCost(): number;
  setDataUploadUsageCost(value: number): void;

  getDataEgresUsageCost(): number;
  setDataEgresUsageCost(value: number): void;

  getRemoteControlUsageCost(): number;
  setRemoteControlUsageCost(value: number): void;

  getStandardComputeUsageCost(): number;
  setStandardComputeUsageCost(value: number): void;

  getDiscountAmount(): number;
  setDiscountAmount(value: number): void;

  getTotalUsageWithDiscount(): number;
  setTotalUsageWithDiscount(value: number): void;

  getTotalUsageWithoutDiscount(): number;
  setTotalUsageWithoutDiscount(value: number): void;

  getPerMachineUsageCost(): number;
  setPerMachineUsageCost(value: number): void;

  getBinaryDataCloudStorageUsageCost(): number;
  setBinaryDataCloudStorageUsageCost(value: number): void;

  getOtherCloudStorageUsageCost(): number;
  setOtherCloudStorageUsageCost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentMonthUsageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentMonthUsageResponse): GetCurrentMonthUsageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentMonthUsageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentMonthUsageResponse;
  static deserializeBinaryFromReader(message: GetCurrentMonthUsageResponse, reader: jspb.BinaryReader): GetCurrentMonthUsageResponse;
}

export namespace GetCurrentMonthUsageResponse {
  export type AsObject = {
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resourceUsageCostsBySourceList: Array<ResourceUsageCostsBySource.AsObject>,
    subtotal: number,
    cloudStorageUsageCost: number,
    dataUploadUsageCost: number,
    dataEgresUsageCost: number,
    remoteControlUsageCost: number,
    standardComputeUsageCost: number,
    discountAmount: number,
    totalUsageWithDiscount: number,
    totalUsageWithoutDiscount: number,
    perMachineUsageCost: number,
    binaryDataCloudStorageUsageCost: number,
    otherCloudStorageUsageCost: number,
  }
}

export class GetOrgBillingInformationRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgBillingInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgBillingInformationRequest): GetOrgBillingInformationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgBillingInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgBillingInformationRequest;
  static deserializeBinaryFromReader(message: GetOrgBillingInformationRequest, reader: jspb.BinaryReader): GetOrgBillingInformationRequest;
}

export namespace GetOrgBillingInformationRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetOrgBillingInformationResponse extends jspb.Message {
  getType(): PaymentMethodTypeMap[keyof PaymentMethodTypeMap];
  setType(value: PaymentMethodTypeMap[keyof PaymentMethodTypeMap]): void;

  getBillingEmail(): string;
  setBillingEmail(value: string): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): PaymentMethodCard | undefined;
  setMethod(value?: PaymentMethodCard): void;

  hasBillingTier(): boolean;
  clearBillingTier(): void;
  getBillingTier(): string;
  setBillingTier(value: string): void;

  hasMethodUsBankAccount(): boolean;
  clearMethodUsBankAccount(): void;
  getMethodUsBankAccount(): PaymentMethodUSBankAccount | undefined;
  setMethodUsBankAccount(value?: PaymentMethodUSBankAccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrgBillingInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrgBillingInformationResponse): GetOrgBillingInformationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrgBillingInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrgBillingInformationResponse;
  static deserializeBinaryFromReader(message: GetOrgBillingInformationResponse, reader: jspb.BinaryReader): GetOrgBillingInformationResponse;
}

export namespace GetOrgBillingInformationResponse {
  export type AsObject = {
    type: PaymentMethodTypeMap[keyof PaymentMethodTypeMap],
    billingEmail: string,
    method?: PaymentMethodCard.AsObject,
    billingTier: string,
    methodUsBankAccount?: PaymentMethodUSBankAccount.AsObject,
  }
}

export class GetInvoicesSummaryRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoicesSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoicesSummaryRequest): GetInvoicesSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoicesSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoicesSummaryRequest;
  static deserializeBinaryFromReader(message: GetInvoicesSummaryRequest, reader: jspb.BinaryReader): GetInvoicesSummaryRequest;
}

export namespace GetInvoicesSummaryRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class GetInvoicesSummaryResponse extends jspb.Message {
  getOutstandingBalance(): number;
  setOutstandingBalance(value: number): void;

  clearInvoicesList(): void;
  getInvoicesList(): Array<InvoiceSummary>;
  setInvoicesList(value: Array<InvoiceSummary>): void;
  addInvoices(value?: InvoiceSummary, index?: number): InvoiceSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoicesSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoicesSummaryResponse): GetInvoicesSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoicesSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoicesSummaryResponse;
  static deserializeBinaryFromReader(message: GetInvoicesSummaryResponse, reader: jspb.BinaryReader): GetInvoicesSummaryResponse;
}

export namespace GetInvoicesSummaryResponse {
  export type AsObject = {
    outstandingBalance: number,
    invoicesList: Array<InvoiceSummary.AsObject>,
  }
}

export class GetInvoicePdfRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoicePdfRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoicePdfRequest): GetInvoicePdfRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoicePdfRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoicePdfRequest;
  static deserializeBinaryFromReader(message: GetInvoicePdfRequest, reader: jspb.BinaryReader): GetInvoicePdfRequest;
}

export namespace GetInvoicePdfRequest {
  export type AsObject = {
    id: string,
    orgId: string,
  }
}

export class GetInvoicePdfResponse extends jspb.Message {
  getChunk(): Uint8Array | string;
  getChunk_asU8(): Uint8Array;
  getChunk_asB64(): string;
  setChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInvoicePdfResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInvoicePdfResponse): GetInvoicePdfResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInvoicePdfResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInvoicePdfResponse;
  static deserializeBinaryFromReader(message: GetInvoicePdfResponse, reader: jspb.BinaryReader): GetInvoicePdfResponse;
}

export namespace GetInvoicePdfResponse {
  export type AsObject = {
    chunk: Uint8Array | string,
  }
}

export class SendPaymentRequiredEmailRequest extends jspb.Message {
  getCustomerOrgId(): string;
  setCustomerOrgId(value: string): void;

  getBillingOwnerOrgId(): string;
  setBillingOwnerOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPaymentRequiredEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendPaymentRequiredEmailRequest): SendPaymentRequiredEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPaymentRequiredEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPaymentRequiredEmailRequest;
  static deserializeBinaryFromReader(message: SendPaymentRequiredEmailRequest, reader: jspb.BinaryReader): SendPaymentRequiredEmailRequest;
}

export namespace SendPaymentRequiredEmailRequest {
  export type AsObject = {
    customerOrgId: string,
    billingOwnerOrgId: string,
  }
}

export class SendPaymentRequiredEmailResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPaymentRequiredEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendPaymentRequiredEmailResponse): SendPaymentRequiredEmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPaymentRequiredEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPaymentRequiredEmailResponse;
  static deserializeBinaryFromReader(message: SendPaymentRequiredEmailResponse, reader: jspb.BinaryReader): SendPaymentRequiredEmailResponse;
}

export namespace SendPaymentRequiredEmailResponse {
  export type AsObject = {
  }
}

export class GetAvailableBillingTiersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableBillingTiersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableBillingTiersRequest): GetAvailableBillingTiersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailableBillingTiersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableBillingTiersRequest;
  static deserializeBinaryFromReader(message: GetAvailableBillingTiersRequest, reader: jspb.BinaryReader): GetAvailableBillingTiersRequest;
}

export namespace GetAvailableBillingTiersRequest {
  export type AsObject = {
  }
}

export class GetAvailableBillingTiersResponse extends jspb.Message {
  clearTiersList(): void;
  getTiersList(): Array<string>;
  setTiersList(value: Array<string>): void;
  addTiers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableBillingTiersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableBillingTiersResponse): GetAvailableBillingTiersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAvailableBillingTiersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableBillingTiersResponse;
  static deserializeBinaryFromReader(message: GetAvailableBillingTiersResponse, reader: jspb.BinaryReader): GetAvailableBillingTiersResponse;
}

export namespace GetAvailableBillingTiersResponse {
  export type AsObject = {
    tiersList: Array<string>,
  }
}

export class UpdateOrganizationBillingTierRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getBillingTier(): string;
  setBillingTier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationBillingTierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationBillingTierRequest): UpdateOrganizationBillingTierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationBillingTierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationBillingTierRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationBillingTierRequest, reader: jspb.BinaryReader): UpdateOrganizationBillingTierRequest;
}

export namespace UpdateOrganizationBillingTierRequest {
  export type AsObject = {
    organizationId: string,
    billingTier: string,
  }
}

export class UpdateOrganizationBillingTierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationBillingTierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationBillingTierResponse): UpdateOrganizationBillingTierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationBillingTierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationBillingTierResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationBillingTierResponse, reader: jspb.BinaryReader): UpdateOrganizationBillingTierResponse;
}

export namespace UpdateOrganizationBillingTierResponse {
  export type AsObject = {
  }
}

export class CreateInvoiceAndChargeImmediatelyRequest extends jspb.Message {
  getOrgIdToCharge(): string;
  setOrgIdToCharge(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string;
  setDescription(value: string): void;

  hasOrgIdForBranding(): boolean;
  clearOrgIdForBranding(): void;
  getOrgIdForBranding(): string;
  setOrgIdForBranding(value: string): void;

  getDisableEmail(): boolean;
  setDisableEmail(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInvoiceAndChargeImmediatelyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInvoiceAndChargeImmediatelyRequest): CreateInvoiceAndChargeImmediatelyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInvoiceAndChargeImmediatelyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInvoiceAndChargeImmediatelyRequest;
  static deserializeBinaryFromReader(message: CreateInvoiceAndChargeImmediatelyRequest, reader: jspb.BinaryReader): CreateInvoiceAndChargeImmediatelyRequest;
}

export namespace CreateInvoiceAndChargeImmediatelyRequest {
  export type AsObject = {
    orgIdToCharge: string,
    amount: number,
    description: string,
    orgIdForBranding: string,
    disableEmail: boolean,
  }
}

export class CreateInvoiceAndChargeImmediatelyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInvoiceAndChargeImmediatelyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInvoiceAndChargeImmediatelyResponse): CreateInvoiceAndChargeImmediatelyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInvoiceAndChargeImmediatelyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInvoiceAndChargeImmediatelyResponse;
  static deserializeBinaryFromReader(message: CreateInvoiceAndChargeImmediatelyResponse, reader: jspb.BinaryReader): CreateInvoiceAndChargeImmediatelyResponse;
}

export namespace CreateInvoiceAndChargeImmediatelyResponse {
  export type AsObject = {
  }
}

export interface PaymentMethodTypeMap {
  PAYMENT_METHOD_TYPE_UNSPECIFIED: 0;
  PAYMENT_METHOD_TYPE_CARD: 1;
  PAYMENT_METHOD_TYPE_USBANKACCOUNT: 2;
}

export const PaymentMethodType: PaymentMethodTypeMap;

export interface UsageCostTypeMap {
  USAGE_COST_TYPE_UNSPECIFIED: 0;
  USAGE_COST_TYPE_DATA_UPLOAD: 1;
  USAGE_COST_TYPE_DATA_EGRESS: 2;
  USAGE_COST_TYPE_REMOTE_CONTROL: 3;
  USAGE_COST_TYPE_STANDARD_COMPUTE: 4;
  USAGE_COST_TYPE_CLOUD_STORAGE: 5;
  USAGE_COST_TYPE_BINARY_DATA_CLOUD_STORAGE: 6;
  USAGE_COST_TYPE_OTHER_CLOUD_STORAGE: 7;
  USAGE_COST_TYPE_PER_MACHINE: 8;
  USAGE_COST_TYPE_TRIGGER_NOTIFICATION: 9;
  USAGE_COST_TYPE_TABULAR_DATA_CLOUD_STORAGE: 10;
  USAGE_COST_TYPE_CONFIG_HISTORY_CLOUD_STORAGE: 11;
  USAGE_COST_TYPE_LOGS_CLOUD_STORAGE: 12;
  USAGE_COST_TYPE_TRAINING_LOGS_CLOUD_STORAGE: 13;
  USAGE_COST_TYPE_PACKAGES_CLOUD_STORAGE: 14;
  USAGE_COST_TYPE_BINARY_DATA_UPLOAD: 15;
  USAGE_COST_TYPE_TABULAR_DATA_UPLOAD: 16;
  USAGE_COST_TYPE_LOGS_UPLOAD: 17;
  USAGE_COST_TYPE_BINARY_DATA_EGRESS: 18;
  USAGE_COST_TYPE_TABULAR_DATA_EGRESS: 19;
  USAGE_COST_TYPE_LOGS_EGRESS: 20;
  USAGE_COST_TYPE_TRAINING_LOGS_EGRESS: 21;
  USAGE_COST_TYPE_TABULAR_DATA_DATABASE_CLOUD_STORAGE: 22;
  USAGE_COST_TYPE_TABULAR_DATA_DATABASE_COMPUTE: 23;
  USAGE_COST_TYPE_BINARY_DATA_CROSS_REGION_EGRESS: 24;
}

export const UsageCostType: UsageCostTypeMap;

export interface SourceTypeMap {
  SOURCE_TYPE_UNSPECIFIED: 0;
  SOURCE_TYPE_ORG: 1;
  SOURCE_TYPE_FRAGMENT: 2;
}

export const SourceType: SourceTypeMap;

