// package: viam.app.v1
// file: app/v1/app.proto

import * as app_v1_app_pb from "../../app/v1/app_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AppServiceGetUserIDByEmail = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetUserIDByEmailRequest;
  readonly responseType: typeof app_v1_app_pb.GetUserIDByEmailResponse;
};

type AppServiceCreateOrganization = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateOrganizationRequest;
  readonly responseType: typeof app_v1_app_pb.CreateOrganizationResponse;
};

type AppServiceListOrganizations = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListOrganizationsRequest;
  readonly responseType: typeof app_v1_app_pb.ListOrganizationsResponse;
};

type AppServiceGetOrganizationsWithAccessToLocation = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetOrganizationsWithAccessToLocationRequest;
  readonly responseType: typeof app_v1_app_pb.GetOrganizationsWithAccessToLocationResponse;
};

type AppServiceListOrganizationsByUser = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListOrganizationsByUserRequest;
  readonly responseType: typeof app_v1_app_pb.ListOrganizationsByUserResponse;
};

type AppServiceGetOrganization = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetOrganizationRequest;
  readonly responseType: typeof app_v1_app_pb.GetOrganizationResponse;
};

type AppServiceGetOrganizationNamespaceAvailability = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetOrganizationNamespaceAvailabilityRequest;
  readonly responseType: typeof app_v1_app_pb.GetOrganizationNamespaceAvailabilityResponse;
};

type AppServiceUpdateOrganization = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateOrganizationRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateOrganizationResponse;
};

type AppServiceDeleteOrganization = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteOrganizationRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteOrganizationResponse;
};

type AppServiceListOrganizationMembers = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListOrganizationMembersRequest;
  readonly responseType: typeof app_v1_app_pb.ListOrganizationMembersResponse;
};

type AppServiceCreateOrganizationInvite = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateOrganizationInviteRequest;
  readonly responseType: typeof app_v1_app_pb.CreateOrganizationInviteResponse;
};

type AppServiceUpdateOrganizationInviteAuthorizations = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateOrganizationInviteAuthorizationsRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateOrganizationInviteAuthorizationsResponse;
};

type AppServiceDeleteOrganizationMember = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteOrganizationMemberRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteOrganizationMemberResponse;
};

type AppServiceDeleteOrganizationInvite = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteOrganizationInviteRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteOrganizationInviteResponse;
};

type AppServiceResendOrganizationInvite = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ResendOrganizationInviteRequest;
  readonly responseType: typeof app_v1_app_pb.ResendOrganizationInviteResponse;
};

type AppServiceCreateLocation = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateLocationRequest;
  readonly responseType: typeof app_v1_app_pb.CreateLocationResponse;
};

type AppServiceGetLocation = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetLocationRequest;
  readonly responseType: typeof app_v1_app_pb.GetLocationResponse;
};

type AppServiceUpdateLocation = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateLocationRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateLocationResponse;
};

type AppServiceDeleteLocation = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteLocationRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteLocationResponse;
};

type AppServiceListLocations = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListLocationsRequest;
  readonly responseType: typeof app_v1_app_pb.ListLocationsResponse;
};

type AppServiceShareLocation = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ShareLocationRequest;
  readonly responseType: typeof app_v1_app_pb.ShareLocationResponse;
};

type AppServiceUnshareLocation = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UnshareLocationRequest;
  readonly responseType: typeof app_v1_app_pb.UnshareLocationResponse;
};

type AppServiceLocationAuth = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.LocationAuthRequest;
  readonly responseType: typeof app_v1_app_pb.LocationAuthResponse;
};

type AppServiceCreateLocationSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateLocationSecretRequest;
  readonly responseType: typeof app_v1_app_pb.CreateLocationSecretResponse;
};

type AppServiceDeleteLocationSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteLocationSecretRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteLocationSecretResponse;
};

type AppServiceGetphysicalDevice = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetphysicalDeviceRequest;
  readonly responseType: typeof app_v1_app_pb.GetphysicalDeviceResponse;
};

type AppServiceGetRoverRentalphysicalDevices = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRoverRentalphysicalDevicesRequest;
  readonly responseType: typeof app_v1_app_pb.GetRoverRentalphysicalDevicesResponse;
};

type AppServiceGetphysicalDeviceParts = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetphysicalDevicePartsRequest;
  readonly responseType: typeof app_v1_app_pb.GetphysicalDevicePartsResponse;
};

type AppServiceGetphysicalDevicePart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetphysicalDevicePartRequest;
  readonly responseType: typeof app_v1_app_pb.GetphysicalDevicePartResponse;
};

type AppServiceGetphysicalDevicePartLogs = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetphysicalDevicePartLogsRequest;
  readonly responseType: typeof app_v1_app_pb.GetphysicalDevicePartLogsResponse;
};

type AppServiceTailphysicalDevicePartLogs = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_v1_app_pb.TailphysicalDevicePartLogsRequest;
  readonly responseType: typeof app_v1_app_pb.TailphysicalDevicePartLogsResponse;
};

type AppServiceGetphysicalDevicePartHistory = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetphysicalDevicePartHistoryRequest;
  readonly responseType: typeof app_v1_app_pb.GetphysicalDevicePartHistoryResponse;
};

type AppServiceUpdatephysicalDevicePart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdatephysicalDevicePartRequest;
  readonly responseType: typeof app_v1_app_pb.UpdatephysicalDevicePartResponse;
};

type AppServiceNewphysicalDevicePart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.NewphysicalDevicePartRequest;
  readonly responseType: typeof app_v1_app_pb.NewphysicalDevicePartResponse;
};

type AppServiceDeletephysicalDevicePart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeletephysicalDevicePartRequest;
  readonly responseType: typeof app_v1_app_pb.DeletephysicalDevicePartResponse;
};

type AppServiceGetphysicalDeviceAPIKeys = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetphysicalDeviceAPIKeysRequest;
  readonly responseType: typeof app_v1_app_pb.GetphysicalDeviceAPIKeysResponse;
};

type AppServiceMarkPartAsMain = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.MarkPartAsMainRequest;
  readonly responseType: typeof app_v1_app_pb.MarkPartAsMainResponse;
};

type AppServiceMarkPartForRestart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.MarkPartForRestartRequest;
  readonly responseType: typeof app_v1_app_pb.MarkPartForRestartResponse;
};

type AppServiceCreatephysicalDevicePartSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreatephysicalDevicePartSecretRequest;
  readonly responseType: typeof app_v1_app_pb.CreatephysicalDevicePartSecretResponse;
};

type AppServiceDeletephysicalDevicePartSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeletephysicalDevicePartSecretRequest;
  readonly responseType: typeof app_v1_app_pb.DeletephysicalDevicePartSecretResponse;
};

type AppServiceListphysicalDevices = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListphysicalDevicesRequest;
  readonly responseType: typeof app_v1_app_pb.ListphysicalDevicesResponse;
};

type AppServiceNewphysicalDevice = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.NewphysicalDeviceRequest;
  readonly responseType: typeof app_v1_app_pb.NewphysicalDeviceResponse;
};

type AppServiceUpdatephysicalDevice = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdatephysicalDeviceRequest;
  readonly responseType: typeof app_v1_app_pb.UpdatephysicalDeviceResponse;
};

type AppServiceDeletephysicalDevice = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeletephysicalDeviceRequest;
  readonly responseType: typeof app_v1_app_pb.DeletephysicalDeviceResponse;
};

type AppServiceListFragments = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListFragmentsRequest;
  readonly responseType: typeof app_v1_app_pb.ListFragmentsResponse;
};

type AppServiceGetFragment = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetFragmentRequest;
  readonly responseType: typeof app_v1_app_pb.GetFragmentResponse;
};

type AppServiceCreateFragment = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateFragmentRequest;
  readonly responseType: typeof app_v1_app_pb.CreateFragmentResponse;
};

type AppServiceUpdateFragment = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateFragmentRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateFragmentResponse;
};

type AppServiceDeleteFragment = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteFragmentRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteFragmentResponse;
};

type AppServiceAddRole = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.AddRoleRequest;
  readonly responseType: typeof app_v1_app_pb.AddRoleResponse;
};

type AppServiceRemoveRole = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.RemoveRoleRequest;
  readonly responseType: typeof app_v1_app_pb.RemoveRoleResponse;
};

type AppServiceChangeRole = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ChangeRoleRequest;
  readonly responseType: typeof app_v1_app_pb.ChangeRoleResponse;
};

type AppServiceListAuthorizations = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListAuthorizationsRequest;
  readonly responseType: typeof app_v1_app_pb.ListAuthorizationsResponse;
};

type AppServiceCheckPermissions = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CheckPermissionsRequest;
  readonly responseType: typeof app_v1_app_pb.CheckPermissionsResponse;
};

type AppServiceGetRegistryItem = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRegistryItemRequest;
  readonly responseType: typeof app_v1_app_pb.GetRegistryItemResponse;
};

type AppServiceCreateRegistryItem = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateRegistryItemRequest;
  readonly responseType: typeof app_v1_app_pb.CreateRegistryItemResponse;
};

type AppServiceUpdateRegistryItem = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateRegistryItemRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateRegistryItemResponse;
};

type AppServiceListRegistryItems = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListRegistryItemsRequest;
  readonly responseType: typeof app_v1_app_pb.ListRegistryItemsResponse;
};

type AppServiceDeleteRegistryItem = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteRegistryItemRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteRegistryItemResponse;
};

type AppServiceCreateModule = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateModuleRequest;
  readonly responseType: typeof app_v1_app_pb.CreateModuleResponse;
};

type AppServiceUpdateModule = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateModuleRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateModuleResponse;
};

type AppServiceUploadModuleFile = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UploadModuleFileRequest;
  readonly responseType: typeof app_v1_app_pb.UploadModuleFileResponse;
};

type AppServiceGetModule = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetModuleRequest;
  readonly responseType: typeof app_v1_app_pb.GetModuleResponse;
};

type AppServiceListModules = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListModulesRequest;
  readonly responseType: typeof app_v1_app_pb.ListModulesResponse;
};

type AppServiceCreateKey = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateKeyRequest;
  readonly responseType: typeof app_v1_app_pb.CreateKeyResponse;
};

type AppServiceDeleteKey = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteKeyRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteKeyResponse;
};

type AppServiceListKeys = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListKeysRequest;
  readonly responseType: typeof app_v1_app_pb.ListKeysResponse;
};

type AppServiceRenameKey = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.RenameKeyRequest;
  readonly responseType: typeof app_v1_app_pb.RenameKeyResponse;
};

type AppServiceRotateKey = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.RotateKeyRequest;
  readonly responseType: typeof app_v1_app_pb.RotateKeyResponse;
};

type AppServiceCreateKeyFromExistingKeyAuthorizations = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateKeyFromExistingKeyAuthorizationsRequest;
  readonly responseType: typeof app_v1_app_pb.CreateKeyFromExistingKeyAuthorizationsResponse;
};

export class AppService {
  static readonly serviceName: string;
  static readonly GetUserIDByEmail: AppServiceGetUserIDByEmail;
  static readonly CreateOrganization: AppServiceCreateOrganization;
  static readonly ListOrganizations: AppServiceListOrganizations;
  static readonly GetOrganizationsWithAccessToLocation: AppServiceGetOrganizationsWithAccessToLocation;
  static readonly ListOrganizationsByUser: AppServiceListOrganizationsByUser;
  static readonly GetOrganization: AppServiceGetOrganization;
  static readonly GetOrganizationNamespaceAvailability: AppServiceGetOrganizationNamespaceAvailability;
  static readonly UpdateOrganization: AppServiceUpdateOrganization;
  static readonly DeleteOrganization: AppServiceDeleteOrganization;
  static readonly ListOrganizationMembers: AppServiceListOrganizationMembers;
  static readonly CreateOrganizationInvite: AppServiceCreateOrganizationInvite;
  static readonly UpdateOrganizationInviteAuthorizations: AppServiceUpdateOrganizationInviteAuthorizations;
  static readonly DeleteOrganizationMember: AppServiceDeleteOrganizationMember;
  static readonly DeleteOrganizationInvite: AppServiceDeleteOrganizationInvite;
  static readonly ResendOrganizationInvite: AppServiceResendOrganizationInvite;
  static readonly CreateLocation: AppServiceCreateLocation;
  static readonly GetLocation: AppServiceGetLocation;
  static readonly UpdateLocation: AppServiceUpdateLocation;
  static readonly DeleteLocation: AppServiceDeleteLocation;
  static readonly ListLocations: AppServiceListLocations;
  static readonly ShareLocation: AppServiceShareLocation;
  static readonly UnshareLocation: AppServiceUnshareLocation;
  static readonly LocationAuth: AppServiceLocationAuth;
  static readonly CreateLocationSecret: AppServiceCreateLocationSecret;
  static readonly DeleteLocationSecret: AppServiceDeleteLocationSecret;
  static readonly GetphysicalDevice: AppServiceGetphysicalDevice;
  static readonly GetRoverRentalphysicalDevices: AppServiceGetRoverRentalphysicalDevices;
  static readonly GetphysicalDeviceParts: AppServiceGetphysicalDeviceParts;
  static readonly GetphysicalDevicePart: AppServiceGetphysicalDevicePart;
  static readonly GetphysicalDevicePartLogs: AppServiceGetphysicalDevicePartLogs;
  static readonly TailphysicalDevicePartLogs: AppServiceTailphysicalDevicePartLogs;
  static readonly GetphysicalDevicePartHistory: AppServiceGetphysicalDevicePartHistory;
  static readonly UpdatephysicalDevicePart: AppServiceUpdatephysicalDevicePart;
  static readonly NewphysicalDevicePart: AppServiceNewphysicalDevicePart;
  static readonly DeletephysicalDevicePart: AppServiceDeletephysicalDevicePart;
  static readonly GetphysicalDeviceAPIKeys: AppServiceGetphysicalDeviceAPIKeys;
  static readonly MarkPartAsMain: AppServiceMarkPartAsMain;
  static readonly MarkPartForRestart: AppServiceMarkPartForRestart;
  static readonly CreatephysicalDevicePartSecret: AppServiceCreatephysicalDevicePartSecret;
  static readonly DeletephysicalDevicePartSecret: AppServiceDeletephysicalDevicePartSecret;
  static readonly ListphysicalDevices: AppServiceListphysicalDevices;
  static readonly NewphysicalDevice: AppServiceNewphysicalDevice;
  static readonly UpdatephysicalDevice: AppServiceUpdatephysicalDevice;
  static readonly DeletephysicalDevice: AppServiceDeletephysicalDevice;
  static readonly ListFragments: AppServiceListFragments;
  static readonly GetFragment: AppServiceGetFragment;
  static readonly CreateFragment: AppServiceCreateFragment;
  static readonly UpdateFragment: AppServiceUpdateFragment;
  static readonly DeleteFragment: AppServiceDeleteFragment;
  static readonly AddRole: AppServiceAddRole;
  static readonly RemoveRole: AppServiceRemoveRole;
  static readonly ChangeRole: AppServiceChangeRole;
  static readonly ListAuthorizations: AppServiceListAuthorizations;
  static readonly CheckPermissions: AppServiceCheckPermissions;
  static readonly GetRegistryItem: AppServiceGetRegistryItem;
  static readonly CreateRegistryItem: AppServiceCreateRegistryItem;
  static readonly UpdateRegistryItem: AppServiceUpdateRegistryItem;
  static readonly ListRegistryItems: AppServiceListRegistryItems;
  static readonly DeleteRegistryItem: AppServiceDeleteRegistryItem;
  static readonly CreateModule: AppServiceCreateModule;
  static readonly UpdateModule: AppServiceUpdateModule;
  static readonly UploadModuleFile: AppServiceUploadModuleFile;
  static readonly GetModule: AppServiceGetModule;
  static readonly ListModules: AppServiceListModules;
  static readonly CreateKey: AppServiceCreateKey;
  static readonly DeleteKey: AppServiceDeleteKey;
  static readonly ListKeys: AppServiceListKeys;
  static readonly RenameKey: AppServiceRenameKey;
  static readonly RotateKey: AppServiceRotateKey;
  static readonly CreateKeyFromExistingKeyAuthorizations: AppServiceCreateKeyFromExistingKeyAuthorizations;
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

export class AppServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUserIDByEmail(
    requestMessage: app_v1_app_pb.GetUserIDByEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetUserIDByEmailResponse|null) => void
  ): UnaryResponse;
  getUserIDByEmail(
    requestMessage: app_v1_app_pb.GetUserIDByEmailRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetUserIDByEmailResponse|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: app_v1_app_pb.CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  createOrganization(
    requestMessage: app_v1_app_pb.CreateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateOrganizationResponse|null) => void
  ): UnaryResponse;
  listOrganizations(
    requestMessage: app_v1_app_pb.ListOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOrganizationsResponse|null) => void
  ): UnaryResponse;
  listOrganizations(
    requestMessage: app_v1_app_pb.ListOrganizationsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOrganizationsResponse|null) => void
  ): UnaryResponse;
  getOrganizationsWithAccessToLocation(
    requestMessage: app_v1_app_pb.GetOrganizationsWithAccessToLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetOrganizationsWithAccessToLocationResponse|null) => void
  ): UnaryResponse;
  getOrganizationsWithAccessToLocation(
    requestMessage: app_v1_app_pb.GetOrganizationsWithAccessToLocationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetOrganizationsWithAccessToLocationResponse|null) => void
  ): UnaryResponse;
  listOrganizationsByUser(
    requestMessage: app_v1_app_pb.ListOrganizationsByUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOrganizationsByUserResponse|null) => void
  ): UnaryResponse;
  listOrganizationsByUser(
    requestMessage: app_v1_app_pb.ListOrganizationsByUserRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOrganizationsByUserResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: app_v1_app_pb.GetOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganization(
    requestMessage: app_v1_app_pb.GetOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetOrganizationResponse|null) => void
  ): UnaryResponse;
  getOrganizationNamespaceAvailability(
    requestMessage: app_v1_app_pb.GetOrganizationNamespaceAvailabilityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetOrganizationNamespaceAvailabilityResponse|null) => void
  ): UnaryResponse;
  getOrganizationNamespaceAvailability(
    requestMessage: app_v1_app_pb.GetOrganizationNamespaceAvailabilityRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetOrganizationNamespaceAvailabilityResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: app_v1_app_pb.UpdateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  updateOrganization(
    requestMessage: app_v1_app_pb.UpdateOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateOrganizationResponse|null) => void
  ): UnaryResponse;
  deleteOrganization(
    requestMessage: app_v1_app_pb.DeleteOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteOrganizationResponse|null) => void
  ): UnaryResponse;
  deleteOrganization(
    requestMessage: app_v1_app_pb.DeleteOrganizationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteOrganizationResponse|null) => void
  ): UnaryResponse;
  listOrganizationMembers(
    requestMessage: app_v1_app_pb.ListOrganizationMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOrganizationMembersResponse|null) => void
  ): UnaryResponse;
  listOrganizationMembers(
    requestMessage: app_v1_app_pb.ListOrganizationMembersRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOrganizationMembersResponse|null) => void
  ): UnaryResponse;
  createOrganizationInvite(
    requestMessage: app_v1_app_pb.CreateOrganizationInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateOrganizationInviteResponse|null) => void
  ): UnaryResponse;
  createOrganizationInvite(
    requestMessage: app_v1_app_pb.CreateOrganizationInviteRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateOrganizationInviteResponse|null) => void
  ): UnaryResponse;
  updateOrganizationInviteAuthorizations(
    requestMessage: app_v1_app_pb.UpdateOrganizationInviteAuthorizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateOrganizationInviteAuthorizationsResponse|null) => void
  ): UnaryResponse;
  updateOrganizationInviteAuthorizations(
    requestMessage: app_v1_app_pb.UpdateOrganizationInviteAuthorizationsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateOrganizationInviteAuthorizationsResponse|null) => void
  ): UnaryResponse;
  deleteOrganizationMember(
    requestMessage: app_v1_app_pb.DeleteOrganizationMemberRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteOrganizationMemberResponse|null) => void
  ): UnaryResponse;
  deleteOrganizationMember(
    requestMessage: app_v1_app_pb.DeleteOrganizationMemberRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteOrganizationMemberResponse|null) => void
  ): UnaryResponse;
  deleteOrganizationInvite(
    requestMessage: app_v1_app_pb.DeleteOrganizationInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteOrganizationInviteResponse|null) => void
  ): UnaryResponse;
  deleteOrganizationInvite(
    requestMessage: app_v1_app_pb.DeleteOrganizationInviteRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteOrganizationInviteResponse|null) => void
  ): UnaryResponse;
  resendOrganizationInvite(
    requestMessage: app_v1_app_pb.ResendOrganizationInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ResendOrganizationInviteResponse|null) => void
  ): UnaryResponse;
  resendOrganizationInvite(
    requestMessage: app_v1_app_pb.ResendOrganizationInviteRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ResendOrganizationInviteResponse|null) => void
  ): UnaryResponse;
  createLocation(
    requestMessage: app_v1_app_pb.CreateLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateLocationResponse|null) => void
  ): UnaryResponse;
  createLocation(
    requestMessage: app_v1_app_pb.CreateLocationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateLocationResponse|null) => void
  ): UnaryResponse;
  getLocation(
    requestMessage: app_v1_app_pb.GetLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetLocationResponse|null) => void
  ): UnaryResponse;
  getLocation(
    requestMessage: app_v1_app_pb.GetLocationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetLocationResponse|null) => void
  ): UnaryResponse;
  updateLocation(
    requestMessage: app_v1_app_pb.UpdateLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateLocationResponse|null) => void
  ): UnaryResponse;
  updateLocation(
    requestMessage: app_v1_app_pb.UpdateLocationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateLocationResponse|null) => void
  ): UnaryResponse;
  deleteLocation(
    requestMessage: app_v1_app_pb.DeleteLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteLocationResponse|null) => void
  ): UnaryResponse;
  deleteLocation(
    requestMessage: app_v1_app_pb.DeleteLocationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteLocationResponse|null) => void
  ): UnaryResponse;
  listLocations(
    requestMessage: app_v1_app_pb.ListLocationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListLocationsResponse|null) => void
  ): UnaryResponse;
  listLocations(
    requestMessage: app_v1_app_pb.ListLocationsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListLocationsResponse|null) => void
  ): UnaryResponse;
  shareLocation(
    requestMessage: app_v1_app_pb.ShareLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ShareLocationResponse|null) => void
  ): UnaryResponse;
  shareLocation(
    requestMessage: app_v1_app_pb.ShareLocationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ShareLocationResponse|null) => void
  ): UnaryResponse;
  unshareLocation(
    requestMessage: app_v1_app_pb.UnshareLocationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UnshareLocationResponse|null) => void
  ): UnaryResponse;
  unshareLocation(
    requestMessage: app_v1_app_pb.UnshareLocationRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UnshareLocationResponse|null) => void
  ): UnaryResponse;
  locationAuth(
    requestMessage: app_v1_app_pb.LocationAuthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.LocationAuthResponse|null) => void
  ): UnaryResponse;
  locationAuth(
    requestMessage: app_v1_app_pb.LocationAuthRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.LocationAuthResponse|null) => void
  ): UnaryResponse;
  createLocationSecret(
    requestMessage: app_v1_app_pb.CreateLocationSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateLocationSecretResponse|null) => void
  ): UnaryResponse;
  createLocationSecret(
    requestMessage: app_v1_app_pb.CreateLocationSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateLocationSecretResponse|null) => void
  ): UnaryResponse;
  deleteLocationSecret(
    requestMessage: app_v1_app_pb.DeleteLocationSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteLocationSecretResponse|null) => void
  ): UnaryResponse;
  deleteLocationSecret(
    requestMessage: app_v1_app_pb.DeleteLocationSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteLocationSecretResponse|null) => void
  ): UnaryResponse;
  getphysicalDevice(
    requestMessage: app_v1_app_pb.GetphysicalDeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDeviceResponse|null) => void
  ): UnaryResponse;
  getphysicalDevice(
    requestMessage: app_v1_app_pb.GetphysicalDeviceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDeviceResponse|null) => void
  ): UnaryResponse;
  getRoverRentalphysicalDevices(
    requestMessage: app_v1_app_pb.GetRoverRentalphysicalDevicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRoverRentalphysicalDevicesResponse|null) => void
  ): UnaryResponse;
  getRoverRentalphysicalDevices(
    requestMessage: app_v1_app_pb.GetRoverRentalphysicalDevicesRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRoverRentalphysicalDevicesResponse|null) => void
  ): UnaryResponse;
  getphysicalDeviceParts(
    requestMessage: app_v1_app_pb.GetphysicalDevicePartsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDevicePartsResponse|null) => void
  ): UnaryResponse;
  getphysicalDeviceParts(
    requestMessage: app_v1_app_pb.GetphysicalDevicePartsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDevicePartsResponse|null) => void
  ): UnaryResponse;
  getphysicalDevicePart(
    requestMessage: app_v1_app_pb.GetphysicalDevicePartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDevicePartResponse|null) => void
  ): UnaryResponse;
  getphysicalDevicePart(
    requestMessage: app_v1_app_pb.GetphysicalDevicePartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDevicePartResponse|null) => void
  ): UnaryResponse;
  getphysicalDevicePartLogs(
    requestMessage: app_v1_app_pb.GetphysicalDevicePartLogsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDevicePartLogsResponse|null) => void
  ): UnaryResponse;
  getphysicalDevicePartLogs(
    requestMessage: app_v1_app_pb.GetphysicalDevicePartLogsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDevicePartLogsResponse|null) => void
  ): UnaryResponse;
  tailphysicalDevicePartLogs(requestMessage: app_v1_app_pb.TailphysicalDevicePartLogsRequest, metadata?: grpc.Metadata): ResponseStream<app_v1_app_pb.TailphysicalDevicePartLogsResponse>;
  getphysicalDevicePartHistory(
    requestMessage: app_v1_app_pb.GetphysicalDevicePartHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDevicePartHistoryResponse|null) => void
  ): UnaryResponse;
  getphysicalDevicePartHistory(
    requestMessage: app_v1_app_pb.GetphysicalDevicePartHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDevicePartHistoryResponse|null) => void
  ): UnaryResponse;
  updatephysicalDevicePart(
    requestMessage: app_v1_app_pb.UpdatephysicalDevicePartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdatephysicalDevicePartResponse|null) => void
  ): UnaryResponse;
  updatephysicalDevicePart(
    requestMessage: app_v1_app_pb.UpdatephysicalDevicePartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdatephysicalDevicePartResponse|null) => void
  ): UnaryResponse;
  newphysicalDevicePart(
    requestMessage: app_v1_app_pb.NewphysicalDevicePartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewphysicalDevicePartResponse|null) => void
  ): UnaryResponse;
  newphysicalDevicePart(
    requestMessage: app_v1_app_pb.NewphysicalDevicePartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewphysicalDevicePartResponse|null) => void
  ): UnaryResponse;
  deletephysicalDevicePart(
    requestMessage: app_v1_app_pb.DeletephysicalDevicePartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeletephysicalDevicePartResponse|null) => void
  ): UnaryResponse;
  deletephysicalDevicePart(
    requestMessage: app_v1_app_pb.DeletephysicalDevicePartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeletephysicalDevicePartResponse|null) => void
  ): UnaryResponse;
  getphysicalDeviceAPIKeys(
    requestMessage: app_v1_app_pb.GetphysicalDeviceAPIKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDeviceAPIKeysResponse|null) => void
  ): UnaryResponse;
  getphysicalDeviceAPIKeys(
    requestMessage: app_v1_app_pb.GetphysicalDeviceAPIKeysRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetphysicalDeviceAPIKeysResponse|null) => void
  ): UnaryResponse;
  markPartAsMain(
    requestMessage: app_v1_app_pb.MarkPartAsMainRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.MarkPartAsMainResponse|null) => void
  ): UnaryResponse;
  markPartAsMain(
    requestMessage: app_v1_app_pb.MarkPartAsMainRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.MarkPartAsMainResponse|null) => void
  ): UnaryResponse;
  markPartForRestart(
    requestMessage: app_v1_app_pb.MarkPartForRestartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.MarkPartForRestartResponse|null) => void
  ): UnaryResponse;
  markPartForRestart(
    requestMessage: app_v1_app_pb.MarkPartForRestartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.MarkPartForRestartResponse|null) => void
  ): UnaryResponse;
  createphysicalDevicePartSecret(
    requestMessage: app_v1_app_pb.CreatephysicalDevicePartSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreatephysicalDevicePartSecretResponse|null) => void
  ): UnaryResponse;
  createphysicalDevicePartSecret(
    requestMessage: app_v1_app_pb.CreatephysicalDevicePartSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreatephysicalDevicePartSecretResponse|null) => void
  ): UnaryResponse;
  deletephysicalDevicePartSecret(
    requestMessage: app_v1_app_pb.DeletephysicalDevicePartSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeletephysicalDevicePartSecretResponse|null) => void
  ): UnaryResponse;
  deletephysicalDevicePartSecret(
    requestMessage: app_v1_app_pb.DeletephysicalDevicePartSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeletephysicalDevicePartSecretResponse|null) => void
  ): UnaryResponse;
  listphysicalDevices(
    requestMessage: app_v1_app_pb.ListphysicalDevicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListphysicalDevicesResponse|null) => void
  ): UnaryResponse;
  listphysicalDevices(
    requestMessage: app_v1_app_pb.ListphysicalDevicesRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListphysicalDevicesResponse|null) => void
  ): UnaryResponse;
  newphysicalDevice(
    requestMessage: app_v1_app_pb.NewphysicalDeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewphysicalDeviceResponse|null) => void
  ): UnaryResponse;
  newphysicalDevice(
    requestMessage: app_v1_app_pb.NewphysicalDeviceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewphysicalDeviceResponse|null) => void
  ): UnaryResponse;
  updatephysicalDevice(
    requestMessage: app_v1_app_pb.UpdatephysicalDeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdatephysicalDeviceResponse|null) => void
  ): UnaryResponse;
  updatephysicalDevice(
    requestMessage: app_v1_app_pb.UpdatephysicalDeviceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdatephysicalDeviceResponse|null) => void
  ): UnaryResponse;
  deletephysicalDevice(
    requestMessage: app_v1_app_pb.DeletephysicalDeviceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeletephysicalDeviceResponse|null) => void
  ): UnaryResponse;
  deletephysicalDevice(
    requestMessage: app_v1_app_pb.DeletephysicalDeviceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeletephysicalDeviceResponse|null) => void
  ): UnaryResponse;
  listFragments(
    requestMessage: app_v1_app_pb.ListFragmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListFragmentsResponse|null) => void
  ): UnaryResponse;
  listFragments(
    requestMessage: app_v1_app_pb.ListFragmentsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListFragmentsResponse|null) => void
  ): UnaryResponse;
  getFragment(
    requestMessage: app_v1_app_pb.GetFragmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetFragmentResponse|null) => void
  ): UnaryResponse;
  getFragment(
    requestMessage: app_v1_app_pb.GetFragmentRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetFragmentResponse|null) => void
  ): UnaryResponse;
  createFragment(
    requestMessage: app_v1_app_pb.CreateFragmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateFragmentResponse|null) => void
  ): UnaryResponse;
  createFragment(
    requestMessage: app_v1_app_pb.CreateFragmentRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateFragmentResponse|null) => void
  ): UnaryResponse;
  updateFragment(
    requestMessage: app_v1_app_pb.UpdateFragmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateFragmentResponse|null) => void
  ): UnaryResponse;
  updateFragment(
    requestMessage: app_v1_app_pb.UpdateFragmentRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateFragmentResponse|null) => void
  ): UnaryResponse;
  deleteFragment(
    requestMessage: app_v1_app_pb.DeleteFragmentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteFragmentResponse|null) => void
  ): UnaryResponse;
  deleteFragment(
    requestMessage: app_v1_app_pb.DeleteFragmentRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteFragmentResponse|null) => void
  ): UnaryResponse;
  addRole(
    requestMessage: app_v1_app_pb.AddRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.AddRoleResponse|null) => void
  ): UnaryResponse;
  addRole(
    requestMessage: app_v1_app_pb.AddRoleRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.AddRoleResponse|null) => void
  ): UnaryResponse;
  removeRole(
    requestMessage: app_v1_app_pb.RemoveRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.RemoveRoleResponse|null) => void
  ): UnaryResponse;
  removeRole(
    requestMessage: app_v1_app_pb.RemoveRoleRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.RemoveRoleResponse|null) => void
  ): UnaryResponse;
  changeRole(
    requestMessage: app_v1_app_pb.ChangeRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ChangeRoleResponse|null) => void
  ): UnaryResponse;
  changeRole(
    requestMessage: app_v1_app_pb.ChangeRoleRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ChangeRoleResponse|null) => void
  ): UnaryResponse;
  listAuthorizations(
    requestMessage: app_v1_app_pb.ListAuthorizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListAuthorizationsResponse|null) => void
  ): UnaryResponse;
  listAuthorizations(
    requestMessage: app_v1_app_pb.ListAuthorizationsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListAuthorizationsResponse|null) => void
  ): UnaryResponse;
  checkPermissions(
    requestMessage: app_v1_app_pb.CheckPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CheckPermissionsResponse|null) => void
  ): UnaryResponse;
  checkPermissions(
    requestMessage: app_v1_app_pb.CheckPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CheckPermissionsResponse|null) => void
  ): UnaryResponse;
  getRegistryItem(
    requestMessage: app_v1_app_pb.GetRegistryItemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRegistryItemResponse|null) => void
  ): UnaryResponse;
  getRegistryItem(
    requestMessage: app_v1_app_pb.GetRegistryItemRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRegistryItemResponse|null) => void
  ): UnaryResponse;
  createRegistryItem(
    requestMessage: app_v1_app_pb.CreateRegistryItemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateRegistryItemResponse|null) => void
  ): UnaryResponse;
  createRegistryItem(
    requestMessage: app_v1_app_pb.CreateRegistryItemRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateRegistryItemResponse|null) => void
  ): UnaryResponse;
  updateRegistryItem(
    requestMessage: app_v1_app_pb.UpdateRegistryItemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRegistryItemResponse|null) => void
  ): UnaryResponse;
  updateRegistryItem(
    requestMessage: app_v1_app_pb.UpdateRegistryItemRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRegistryItemResponse|null) => void
  ): UnaryResponse;
  listRegistryItems(
    requestMessage: app_v1_app_pb.ListRegistryItemsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListRegistryItemsResponse|null) => void
  ): UnaryResponse;
  listRegistryItems(
    requestMessage: app_v1_app_pb.ListRegistryItemsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListRegistryItemsResponse|null) => void
  ): UnaryResponse;
  deleteRegistryItem(
    requestMessage: app_v1_app_pb.DeleteRegistryItemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRegistryItemResponse|null) => void
  ): UnaryResponse;
  deleteRegistryItem(
    requestMessage: app_v1_app_pb.DeleteRegistryItemRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRegistryItemResponse|null) => void
  ): UnaryResponse;
  createModule(
    requestMessage: app_v1_app_pb.CreateModuleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateModuleResponse|null) => void
  ): UnaryResponse;
  createModule(
    requestMessage: app_v1_app_pb.CreateModuleRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateModuleResponse|null) => void
  ): UnaryResponse;
  updateModule(
    requestMessage: app_v1_app_pb.UpdateModuleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateModuleResponse|null) => void
  ): UnaryResponse;
  updateModule(
    requestMessage: app_v1_app_pb.UpdateModuleRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateModuleResponse|null) => void
  ): UnaryResponse;
  uploadModuleFile(metadata?: grpc.Metadata): RequestStream<app_v1_app_pb.UploadModuleFileRequest>;
  getModule(
    requestMessage: app_v1_app_pb.GetModuleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetModuleResponse|null) => void
  ): UnaryResponse;
  getModule(
    requestMessage: app_v1_app_pb.GetModuleRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetModuleResponse|null) => void
  ): UnaryResponse;
  listModules(
    requestMessage: app_v1_app_pb.ListModulesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListModulesResponse|null) => void
  ): UnaryResponse;
  listModules(
    requestMessage: app_v1_app_pb.ListModulesRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListModulesResponse|null) => void
  ): UnaryResponse;
  createKey(
    requestMessage: app_v1_app_pb.CreateKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateKeyResponse|null) => void
  ): UnaryResponse;
  createKey(
    requestMessage: app_v1_app_pb.CreateKeyRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateKeyResponse|null) => void
  ): UnaryResponse;
  deleteKey(
    requestMessage: app_v1_app_pb.DeleteKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteKeyResponse|null) => void
  ): UnaryResponse;
  deleteKey(
    requestMessage: app_v1_app_pb.DeleteKeyRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteKeyResponse|null) => void
  ): UnaryResponse;
  listKeys(
    requestMessage: app_v1_app_pb.ListKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListKeysResponse|null) => void
  ): UnaryResponse;
  listKeys(
    requestMessage: app_v1_app_pb.ListKeysRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListKeysResponse|null) => void
  ): UnaryResponse;
  renameKey(
    requestMessage: app_v1_app_pb.RenameKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.RenameKeyResponse|null) => void
  ): UnaryResponse;
  renameKey(
    requestMessage: app_v1_app_pb.RenameKeyRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.RenameKeyResponse|null) => void
  ): UnaryResponse;
  rotateKey(
    requestMessage: app_v1_app_pb.RotateKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.RotateKeyResponse|null) => void
  ): UnaryResponse;
  rotateKey(
    requestMessage: app_v1_app_pb.RotateKeyRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.RotateKeyResponse|null) => void
  ): UnaryResponse;
  createKeyFromExistingKeyAuthorizations(
    requestMessage: app_v1_app_pb.CreateKeyFromExistingKeyAuthorizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateKeyFromExistingKeyAuthorizationsResponse|null) => void
  ): UnaryResponse;
  createKeyFromExistingKeyAuthorizations(
    requestMessage: app_v1_app_pb.CreateKeyFromExistingKeyAuthorizationsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateKeyFromExistingKeyAuthorizationsResponse|null) => void
  ): UnaryResponse;
}

