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

export class BillableResourceEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getUsageQuantity(): number;
  setUsageQuantity(value: number): void;

  getUsageQuantityUnit(): string;
  setUsageQuantityUnit(value: string): void;

  getUsageCost(): string;
  setUsageCost(value: string): void;

  hasOccurredAt(): boolean;
  clearOccurredAt(): void;
  getOccurredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillableResourceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: BillableResourceEvent): BillableResourceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillableResourceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillableResourceEvent;
  static deserializeBinaryFromReader(message: BillableResourceEvent, reader: jspb.BinaryReader): BillableResourceEvent;
}

export namespace BillableResourceEvent {
  export type AsObject = {
    id: string,
    type: string,
    usageQuantity: number,
    usageQuantityUnit: string,
    usageCost: string,
    occurredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userName: string,
  }
}

export class Invoice extends jspb.Message {
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

  clearItemsList(): void;
  getItemsList(): Array<BillableResourceEvent>;
  setItemsList(value: Array<BillableResourceEvent>): void;
  addItems(value?: BillableResourceEvent, index?: number): BillableResourceEvent;

  getEmailedTo(): string;
  setEmailedTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    id: string,
    invoiceDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    invoiceAmount: number,
    status: string,
    dueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    itemsList: Array<BillableResourceEvent.AsObject>,
    emailedTo: string,
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

export class GetCurrentMonthUsageResponse extends jspb.Message {
  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

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
    cloudStorageUsageCost: number,
    dataUploadUsageCost: number,
    dataEgresUsageCost: number,
    remoteControlUsageCost: number,
    standardComputeUsageCost: number,
    discountAmount: number,
    totalUsageWithDiscount: number,
    totalUsageWithoutDiscount: number,
    perMachineUsageCost: number,
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

export interface PaymentMethodTypeMap {
  PAYMENT_METHOD_TYPE_UNSPECIFIED: 0;
  PAYMENT_METHOD_TYPE_CARD: 1;
}

export const PaymentMethodType: PaymentMethodTypeMap;

