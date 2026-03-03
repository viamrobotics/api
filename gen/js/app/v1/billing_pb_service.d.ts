// package: viam.app.v1
// file: app/v1/billing.proto

import * as app_v1_billing_pb from "../../app/v1/billing_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingServiceGetCurrentMonthUsage = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetCurrentMonthUsageRequest;
  readonly responseType: typeof app_v1_billing_pb.GetCurrentMonthUsageResponse;
};

type BillingServiceGetOrgBillingInformation = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetOrgBillingInformationRequest;
  readonly responseType: typeof app_v1_billing_pb.GetOrgBillingInformationResponse;
};

type BillingServiceGetInvoicesSummary = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetInvoicesSummaryRequest;
  readonly responseType: typeof app_v1_billing_pb.GetInvoicesSummaryResponse;
};

type BillingServiceGetInvoicePdf = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_v1_billing_pb.GetInvoicePdfRequest;
  readonly responseType: typeof app_v1_billing_pb.GetInvoicePdfResponse;
};

type BillingServiceSendPaymentRequiredEmail = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.SendPaymentRequiredEmailRequest;
  readonly responseType: typeof app_v1_billing_pb.SendPaymentRequiredEmailResponse;
};

type BillingServiceGetAvailableBillingTiers = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetAvailableBillingTiersRequest;
  readonly responseType: typeof app_v1_billing_pb.GetAvailableBillingTiersResponse;
};

type BillingServiceUpdateOrganizationBillingTier = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.UpdateOrganizationBillingTierRequest;
  readonly responseType: typeof app_v1_billing_pb.UpdateOrganizationBillingTierResponse;
};

type BillingServiceGetLocationBillingOrganization = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetLocationBillingOrganizationRequest;
  readonly responseType: typeof app_v1_billing_pb.GetLocationBillingOrganizationResponse;
};

type BillingServiceUpdateLocationBillingOrganization = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.UpdateLocationBillingOrganizationRequest;
  readonly responseType: typeof app_v1_billing_pb.UpdateLocationBillingOrganizationResponse;
};

type BillingServiceChargeOrganization = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.ChargeOrganizationRequest;
  readonly responseType: typeof app_v1_billing_pb.ChargeOrganizationResponse;
};

type BillingServiceCreateInvoiceAndChargeImmediately = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.CreateInvoiceAndChargeImmediatelyRequest;
  readonly responseType: typeof app_v1_billing_pb.CreateInvoiceAndChargeImmediatelyResponse;
};

export class BillingService {
  static readonly serviceName: string;
  static readonly GetCurrentMonthUsage: BillingServiceGetCurrentMonthUsage;
  static readonly GetOrgBillingInformation: BillingServiceGetOrgBillingInformation;
  static readonly GetInvoicesSummary: BillingServiceGetInvoicesSummary;
  static readonly GetInvoicePdf: BillingServiceGetInvoicePdf;
  static readonly SendPaymentRequiredEmail: BillingServiceSendPaymentRequiredEmail;
  static readonly GetAvailableBillingTiers: BillingServiceGetAvailableBillingTiers;
  static readonly UpdateOrganizationBillingTier: BillingServiceUpdateOrganizationBillingTier;
  static readonly GetLocationBillingOrganization: BillingServiceGetLocationBillingOrganization;
  static readonly UpdateLocationBillingOrganization: BillingServiceUpdateLocationBillingOrganization;
  static readonly ChargeOrganization: BillingServiceChargeOrganization;
  static readonly CreateInvoiceAndChargeImmediately: BillingServiceCreateInvoiceAndChargeImmediately;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BillingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getCurrentMonthUsage(
    requestMessage: app_v1_billing_pb.GetCurrentMonthUsageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetCurrentMonthUsageResponse|null) => void
  ): UnaryResponse;
  getCurrentMonthUsage(
    requestMessage: app_v1_billing_pb.GetCurrentMonthUsageRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetCurrentMonthUsageResponse|null) => void
  ): UnaryResponse;
  getOrgBillingInformation(
    requestMessage: app_v1_billing_pb.GetOrgBillingInformationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetOrgBillingInformationResponse|null) => void
  ): UnaryResponse;
  getOrgBillingInformation(
    requestMessage: app_v1_billing_pb.GetOrgBillingInformationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetOrgBillingInformationResponse|null) => void
  ): UnaryResponse;
  getInvoicesSummary(
    requestMessage: app_v1_billing_pb.GetInvoicesSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetInvoicesSummaryResponse|null) => void
  ): UnaryResponse;
  getInvoicesSummary(
    requestMessage: app_v1_billing_pb.GetInvoicesSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetInvoicesSummaryResponse|null) => void
  ): UnaryResponse;
  getInvoicePdf(requestMessage: app_v1_billing_pb.GetInvoicePdfRequest, metadata?: grpc.Metadata): ResponseStream<app_v1_billing_pb.GetInvoicePdfResponse>;
  sendPaymentRequiredEmail(
    requestMessage: app_v1_billing_pb.SendPaymentRequiredEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.SendPaymentRequiredEmailResponse|null) => void
  ): UnaryResponse;
  sendPaymentRequiredEmail(
    requestMessage: app_v1_billing_pb.SendPaymentRequiredEmailRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.SendPaymentRequiredEmailResponse|null) => void
  ): UnaryResponse;
  getAvailableBillingTiers(
    requestMessage: app_v1_billing_pb.GetAvailableBillingTiersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetAvailableBillingTiersResponse|null) => void
  ): UnaryResponse;
  getAvailableBillingTiers(
    requestMessage: app_v1_billing_pb.GetAvailableBillingTiersRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetAvailableBillingTiersResponse|null) => void
  ): UnaryResponse;
  updateOrganizationBillingTier(
    requestMessage: app_v1_billing_pb.UpdateOrganizationBillingTierRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.UpdateOrganizationBillingTierResponse|null) => void
  ): UnaryResponse;
  updateOrganizationBillingTier(
    requestMessage: app_v1_billing_pb.UpdateOrganizationBillingTierRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.UpdateOrganizationBillingTierResponse|null) => void
  ): UnaryResponse;
  getLocationBillingOrganization(
    requestMessage: app_v1_billing_pb.GetLocationBillingOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetLocationBillingOrganizationResponse|null) => void
  ): UnaryResponse;
  getLocationBillingOrganization(
    requestMessage: app_v1_billing_pb.GetLocationBillingOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetLocationBillingOrganizationResponse|null) => void
  ): UnaryResponse;
  updateLocationBillingOrganization(
    requestMessage: app_v1_billing_pb.UpdateLocationBillingOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.UpdateLocationBillingOrganizationResponse|null) => void
  ): UnaryResponse;
  updateLocationBillingOrganization(
    requestMessage: app_v1_billing_pb.UpdateLocationBillingOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.UpdateLocationBillingOrganizationResponse|null) => void
  ): UnaryResponse;
  chargeOrganization(
    requestMessage: app_v1_billing_pb.ChargeOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.ChargeOrganizationResponse|null) => void
  ): UnaryResponse;
  chargeOrganization(
    requestMessage: app_v1_billing_pb.ChargeOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.ChargeOrganizationResponse|null) => void
  ): UnaryResponse;
  createInvoiceAndChargeImmediately(
    requestMessage: app_v1_billing_pb.CreateInvoiceAndChargeImmediatelyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.CreateInvoiceAndChargeImmediatelyResponse|null) => void
  ): UnaryResponse;
  createInvoiceAndChargeImmediately(
    requestMessage: app_v1_billing_pb.CreateInvoiceAndChargeImmediatelyRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.CreateInvoiceAndChargeImmediatelyResponse|null) => void
  ): UnaryResponse;
}

