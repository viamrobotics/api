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

type AppServiceSearchOrganizations = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.SearchOrganizationsRequest;
  readonly responseType: typeof app_v1_app_pb.SearchOrganizationsResponse;
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

type AppServiceGetOrganizationMetadata = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetOrganizationMetadataRequest;
  readonly responseType: typeof app_v1_app_pb.GetOrganizationMetadataResponse;
};

type AppServiceUpdateOrganizationMetadata = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateOrganizationMetadataRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateOrganizationMetadataResponse;
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

type AppServiceEnableBillingService = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.EnableBillingServiceRequest;
  readonly responseType: typeof app_v1_app_pb.EnableBillingServiceResponse;
};

type AppServiceDisableBillingService = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DisableBillingServiceRequest;
  readonly responseType: typeof app_v1_app_pb.DisableBillingServiceResponse;
};

type AppServiceUpdateBillingService = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateBillingServiceRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateBillingServiceResponse;
};

type AppServiceGetBillingServiceConfig = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetBillingServiceConfigRequest;
  readonly responseType: typeof app_v1_app_pb.GetBillingServiceConfigResponse;
};

type AppServiceOrganizationSetSupportEmail = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.OrganizationSetSupportEmailRequest;
  readonly responseType: typeof app_v1_app_pb.OrganizationSetSupportEmailResponse;
};

type AppServiceOrganizationGetSupportEmail = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.OrganizationGetSupportEmailRequest;
  readonly responseType: typeof app_v1_app_pb.OrganizationGetSupportEmailResponse;
};

type AppServiceOrganizationSetLogo = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.OrganizationSetLogoRequest;
  readonly responseType: typeof app_v1_app_pb.OrganizationSetLogoResponse;
};

type AppServiceOrganizationGetLogo = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.OrganizationGetLogoRequest;
  readonly responseType: typeof app_v1_app_pb.OrganizationGetLogoResponse;
};

type AppServiceEnableAuthService = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.EnableAuthServiceRequest;
  readonly responseType: typeof app_v1_app_pb.EnableAuthServiceResponse;
};

type AppServiceDisableAuthService = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DisableAuthServiceRequest;
  readonly responseType: typeof app_v1_app_pb.DisableAuthServiceResponse;
};

type AppServiceCreateOAuthApp = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateOAuthAppRequest;
  readonly responseType: typeof app_v1_app_pb.CreateOAuthAppResponse;
};

type AppServiceReadOAuthApp = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ReadOAuthAppRequest;
  readonly responseType: typeof app_v1_app_pb.ReadOAuthAppResponse;
};

type AppServiceUpdateOAuthApp = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateOAuthAppRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateOAuthAppResponse;
};

type AppServiceDeleteOAuthApp = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteOAuthAppRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteOAuthAppResponse;
};

type AppServiceListOAuthApps = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListOAuthAppsRequest;
  readonly responseType: typeof app_v1_app_pb.ListOAuthAppsResponse;
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

type AppServiceGetLocationMetadata = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetLocationMetadataRequest;
  readonly responseType: typeof app_v1_app_pb.GetLocationMetadataResponse;
};

type AppServiceUpdateLocationMetadata = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateLocationMetadataRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateLocationMetadataResponse;
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

type AppServiceGetRobot = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotResponse;
};

type AppServiceGetRobotMetadata = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotMetadataRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotMetadataResponse;
};

type AppServiceUpdateRobotMetadata = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateRobotMetadataRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateRobotMetadataResponse;
};

type AppServiceGetRoverRentalRobots = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRoverRentalRobotsRequest;
  readonly responseType: typeof app_v1_app_pb.GetRoverRentalRobotsResponse;
};

type AppServiceGetRobotParts = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartsRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartsResponse;
};

type AppServiceGetRobotPart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartResponse;
};

type AppServiceGetRobotPartLogs = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartLogsRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartLogsResponse;
};

type AppServiceTailRobotPartLogs = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof app_v1_app_pb.TailRobotPartLogsRequest;
  readonly responseType: typeof app_v1_app_pb.TailRobotPartLogsResponse;
};

type AppServiceGetRobotPartHistory = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartHistoryRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartHistoryResponse;
};

type AppServiceUpdateRobotPart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateRobotPartRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateRobotPartResponse;
};

type AppServiceNewRobotPart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.NewRobotPartRequest;
  readonly responseType: typeof app_v1_app_pb.NewRobotPartResponse;
};

type AppServiceDeleteRobotPart = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteRobotPartRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteRobotPartResponse;
};

type AppServiceGetRobotPartMetadata = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotPartMetadataRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotPartMetadataResponse;
};

type AppServiceUpdateRobotPartMetadata = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateRobotPartMetadataRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateRobotPartMetadataResponse;
};

type AppServiceGetRobotAPIKeys = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetRobotAPIKeysRequest;
  readonly responseType: typeof app_v1_app_pb.GetRobotAPIKeysResponse;
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

type AppServiceCreateRobotPartSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.CreateRobotPartSecretRequest;
  readonly responseType: typeof app_v1_app_pb.CreateRobotPartSecretResponse;
};

type AppServiceDeleteRobotPartSecret = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteRobotPartSecretRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteRobotPartSecretResponse;
};

type AppServiceListRobots = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListRobotsRequest;
  readonly responseType: typeof app_v1_app_pb.ListRobotsResponse;
};

type AppServiceNewRobot = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.NewRobotRequest;
  readonly responseType: typeof app_v1_app_pb.NewRobotResponse;
};

type AppServiceUpdateRobot = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.UpdateRobotRequest;
  readonly responseType: typeof app_v1_app_pb.UpdateRobotResponse;
};

type AppServiceDeleteRobot = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteRobotRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteRobotResponse;
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

type AppServiceListMachineFragments = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.ListMachineFragmentsRequest;
  readonly responseType: typeof app_v1_app_pb.ListMachineFragmentsResponse;
};

type AppServiceGetFragmentHistory = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetFragmentHistoryRequest;
  readonly responseType: typeof app_v1_app_pb.GetFragmentHistoryResponse;
};

type AppServiceGetFragmentUsage = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.GetFragmentUsageRequest;
  readonly responseType: typeof app_v1_app_pb.GetFragmentUsageResponse;
};

type AppServiceSetFragmentTag = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.SetFragmentTagRequest;
  readonly responseType: typeof app_v1_app_pb.SetFragmentTagResponse;
};

type AppServiceDeleteFragmentTag = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.DeleteFragmentTagRequest;
  readonly responseType: typeof app_v1_app_pb.DeleteFragmentTagResponse;
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

type AppServiceTransferRegistryItem = {
  readonly methodName: string;
  readonly service: typeof AppService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_app_pb.TransferRegistryItemRequest;
  readonly responseType: typeof app_v1_app_pb.TransferRegistryItemResponse;
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
  static readonly SearchOrganizations: AppServiceSearchOrganizations;
  static readonly GetOrganization: AppServiceGetOrganization;
  static readonly GetOrganizationNamespaceAvailability: AppServiceGetOrganizationNamespaceAvailability;
  static readonly UpdateOrganization: AppServiceUpdateOrganization;
  static readonly DeleteOrganization: AppServiceDeleteOrganization;
  static readonly GetOrganizationMetadata: AppServiceGetOrganizationMetadata;
  static readonly UpdateOrganizationMetadata: AppServiceUpdateOrganizationMetadata;
  static readonly ListOrganizationMembers: AppServiceListOrganizationMembers;
  static readonly CreateOrganizationInvite: AppServiceCreateOrganizationInvite;
  static readonly UpdateOrganizationInviteAuthorizations: AppServiceUpdateOrganizationInviteAuthorizations;
  static readonly DeleteOrganizationMember: AppServiceDeleteOrganizationMember;
  static readonly DeleteOrganizationInvite: AppServiceDeleteOrganizationInvite;
  static readonly ResendOrganizationInvite: AppServiceResendOrganizationInvite;
  static readonly EnableBillingService: AppServiceEnableBillingService;
  static readonly DisableBillingService: AppServiceDisableBillingService;
  static readonly UpdateBillingService: AppServiceUpdateBillingService;
  static readonly GetBillingServiceConfig: AppServiceGetBillingServiceConfig;
  static readonly OrganizationSetSupportEmail: AppServiceOrganizationSetSupportEmail;
  static readonly OrganizationGetSupportEmail: AppServiceOrganizationGetSupportEmail;
  static readonly OrganizationSetLogo: AppServiceOrganizationSetLogo;
  static readonly OrganizationGetLogo: AppServiceOrganizationGetLogo;
  static readonly EnableAuthService: AppServiceEnableAuthService;
  static readonly DisableAuthService: AppServiceDisableAuthService;
  static readonly CreateOAuthApp: AppServiceCreateOAuthApp;
  static readonly ReadOAuthApp: AppServiceReadOAuthApp;
  static readonly UpdateOAuthApp: AppServiceUpdateOAuthApp;
  static readonly DeleteOAuthApp: AppServiceDeleteOAuthApp;
  static readonly ListOAuthApps: AppServiceListOAuthApps;
  static readonly CreateLocation: AppServiceCreateLocation;
  static readonly GetLocation: AppServiceGetLocation;
  static readonly UpdateLocation: AppServiceUpdateLocation;
  static readonly DeleteLocation: AppServiceDeleteLocation;
  static readonly GetLocationMetadata: AppServiceGetLocationMetadata;
  static readonly UpdateLocationMetadata: AppServiceUpdateLocationMetadata;
  static readonly ListLocations: AppServiceListLocations;
  static readonly ShareLocation: AppServiceShareLocation;
  static readonly UnshareLocation: AppServiceUnshareLocation;
  static readonly LocationAuth: AppServiceLocationAuth;
  static readonly CreateLocationSecret: AppServiceCreateLocationSecret;
  static readonly DeleteLocationSecret: AppServiceDeleteLocationSecret;
  static readonly GetRobot: AppServiceGetRobot;
  static readonly GetRobotMetadata: AppServiceGetRobotMetadata;
  static readonly UpdateRobotMetadata: AppServiceUpdateRobotMetadata;
  static readonly GetRoverRentalRobots: AppServiceGetRoverRentalRobots;
  static readonly GetRobotParts: AppServiceGetRobotParts;
  static readonly GetRobotPart: AppServiceGetRobotPart;
  static readonly GetRobotPartLogs: AppServiceGetRobotPartLogs;
  static readonly TailRobotPartLogs: AppServiceTailRobotPartLogs;
  static readonly GetRobotPartHistory: AppServiceGetRobotPartHistory;
  static readonly UpdateRobotPart: AppServiceUpdateRobotPart;
  static readonly NewRobotPart: AppServiceNewRobotPart;
  static readonly DeleteRobotPart: AppServiceDeleteRobotPart;
  static readonly GetRobotPartMetadata: AppServiceGetRobotPartMetadata;
  static readonly UpdateRobotPartMetadata: AppServiceUpdateRobotPartMetadata;
  static readonly GetRobotAPIKeys: AppServiceGetRobotAPIKeys;
  static readonly MarkPartAsMain: AppServiceMarkPartAsMain;
  static readonly MarkPartForRestart: AppServiceMarkPartForRestart;
  static readonly CreateRobotPartSecret: AppServiceCreateRobotPartSecret;
  static readonly DeleteRobotPartSecret: AppServiceDeleteRobotPartSecret;
  static readonly ListRobots: AppServiceListRobots;
  static readonly NewRobot: AppServiceNewRobot;
  static readonly UpdateRobot: AppServiceUpdateRobot;
  static readonly DeleteRobot: AppServiceDeleteRobot;
  static readonly ListFragments: AppServiceListFragments;
  static readonly GetFragment: AppServiceGetFragment;
  static readonly CreateFragment: AppServiceCreateFragment;
  static readonly UpdateFragment: AppServiceUpdateFragment;
  static readonly DeleteFragment: AppServiceDeleteFragment;
  static readonly ListMachineFragments: AppServiceListMachineFragments;
  static readonly GetFragmentHistory: AppServiceGetFragmentHistory;
  static readonly GetFragmentUsage: AppServiceGetFragmentUsage;
  static readonly SetFragmentTag: AppServiceSetFragmentTag;
  static readonly DeleteFragmentTag: AppServiceDeleteFragmentTag;
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
  static readonly TransferRegistryItem: AppServiceTransferRegistryItem;
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
  searchOrganizations(
    requestMessage: app_v1_app_pb.SearchOrganizationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.SearchOrganizationsResponse|null) => void
  ): UnaryResponse;
  searchOrganizations(
    requestMessage: app_v1_app_pb.SearchOrganizationsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.SearchOrganizationsResponse|null) => void
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
  getOrganizationMetadata(
    requestMessage: app_v1_app_pb.GetOrganizationMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetOrganizationMetadataResponse|null) => void
  ): UnaryResponse;
  getOrganizationMetadata(
    requestMessage: app_v1_app_pb.GetOrganizationMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetOrganizationMetadataResponse|null) => void
  ): UnaryResponse;
  updateOrganizationMetadata(
    requestMessage: app_v1_app_pb.UpdateOrganizationMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateOrganizationMetadataResponse|null) => void
  ): UnaryResponse;
  updateOrganizationMetadata(
    requestMessage: app_v1_app_pb.UpdateOrganizationMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateOrganizationMetadataResponse|null) => void
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
  enableBillingService(
    requestMessage: app_v1_app_pb.EnableBillingServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.EnableBillingServiceResponse|null) => void
  ): UnaryResponse;
  enableBillingService(
    requestMessage: app_v1_app_pb.EnableBillingServiceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.EnableBillingServiceResponse|null) => void
  ): UnaryResponse;
  disableBillingService(
    requestMessage: app_v1_app_pb.DisableBillingServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DisableBillingServiceResponse|null) => void
  ): UnaryResponse;
  disableBillingService(
    requestMessage: app_v1_app_pb.DisableBillingServiceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DisableBillingServiceResponse|null) => void
  ): UnaryResponse;
  updateBillingService(
    requestMessage: app_v1_app_pb.UpdateBillingServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateBillingServiceResponse|null) => void
  ): UnaryResponse;
  updateBillingService(
    requestMessage: app_v1_app_pb.UpdateBillingServiceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateBillingServiceResponse|null) => void
  ): UnaryResponse;
  getBillingServiceConfig(
    requestMessage: app_v1_app_pb.GetBillingServiceConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetBillingServiceConfigResponse|null) => void
  ): UnaryResponse;
  getBillingServiceConfig(
    requestMessage: app_v1_app_pb.GetBillingServiceConfigRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetBillingServiceConfigResponse|null) => void
  ): UnaryResponse;
  organizationSetSupportEmail(
    requestMessage: app_v1_app_pb.OrganizationSetSupportEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.OrganizationSetSupportEmailResponse|null) => void
  ): UnaryResponse;
  organizationSetSupportEmail(
    requestMessage: app_v1_app_pb.OrganizationSetSupportEmailRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.OrganizationSetSupportEmailResponse|null) => void
  ): UnaryResponse;
  organizationGetSupportEmail(
    requestMessage: app_v1_app_pb.OrganizationGetSupportEmailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.OrganizationGetSupportEmailResponse|null) => void
  ): UnaryResponse;
  organizationGetSupportEmail(
    requestMessage: app_v1_app_pb.OrganizationGetSupportEmailRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.OrganizationGetSupportEmailResponse|null) => void
  ): UnaryResponse;
  organizationSetLogo(
    requestMessage: app_v1_app_pb.OrganizationSetLogoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.OrganizationSetLogoResponse|null) => void
  ): UnaryResponse;
  organizationSetLogo(
    requestMessage: app_v1_app_pb.OrganizationSetLogoRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.OrganizationSetLogoResponse|null) => void
  ): UnaryResponse;
  organizationGetLogo(
    requestMessage: app_v1_app_pb.OrganizationGetLogoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.OrganizationGetLogoResponse|null) => void
  ): UnaryResponse;
  organizationGetLogo(
    requestMessage: app_v1_app_pb.OrganizationGetLogoRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.OrganizationGetLogoResponse|null) => void
  ): UnaryResponse;
  enableAuthService(
    requestMessage: app_v1_app_pb.EnableAuthServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.EnableAuthServiceResponse|null) => void
  ): UnaryResponse;
  enableAuthService(
    requestMessage: app_v1_app_pb.EnableAuthServiceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.EnableAuthServiceResponse|null) => void
  ): UnaryResponse;
  disableAuthService(
    requestMessage: app_v1_app_pb.DisableAuthServiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DisableAuthServiceResponse|null) => void
  ): UnaryResponse;
  disableAuthService(
    requestMessage: app_v1_app_pb.DisableAuthServiceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DisableAuthServiceResponse|null) => void
  ): UnaryResponse;
  createOAuthApp(
    requestMessage: app_v1_app_pb.CreateOAuthAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateOAuthAppResponse|null) => void
  ): UnaryResponse;
  createOAuthApp(
    requestMessage: app_v1_app_pb.CreateOAuthAppRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateOAuthAppResponse|null) => void
  ): UnaryResponse;
  readOAuthApp(
    requestMessage: app_v1_app_pb.ReadOAuthAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ReadOAuthAppResponse|null) => void
  ): UnaryResponse;
  readOAuthApp(
    requestMessage: app_v1_app_pb.ReadOAuthAppRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ReadOAuthAppResponse|null) => void
  ): UnaryResponse;
  updateOAuthApp(
    requestMessage: app_v1_app_pb.UpdateOAuthAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateOAuthAppResponse|null) => void
  ): UnaryResponse;
  updateOAuthApp(
    requestMessage: app_v1_app_pb.UpdateOAuthAppRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateOAuthAppResponse|null) => void
  ): UnaryResponse;
  deleteOAuthApp(
    requestMessage: app_v1_app_pb.DeleteOAuthAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteOAuthAppResponse|null) => void
  ): UnaryResponse;
  deleteOAuthApp(
    requestMessage: app_v1_app_pb.DeleteOAuthAppRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteOAuthAppResponse|null) => void
  ): UnaryResponse;
  listOAuthApps(
    requestMessage: app_v1_app_pb.ListOAuthAppsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOAuthAppsResponse|null) => void
  ): UnaryResponse;
  listOAuthApps(
    requestMessage: app_v1_app_pb.ListOAuthAppsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListOAuthAppsResponse|null) => void
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
  getLocationMetadata(
    requestMessage: app_v1_app_pb.GetLocationMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetLocationMetadataResponse|null) => void
  ): UnaryResponse;
  getLocationMetadata(
    requestMessage: app_v1_app_pb.GetLocationMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetLocationMetadataResponse|null) => void
  ): UnaryResponse;
  updateLocationMetadata(
    requestMessage: app_v1_app_pb.UpdateLocationMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateLocationMetadataResponse|null) => void
  ): UnaryResponse;
  updateLocationMetadata(
    requestMessage: app_v1_app_pb.UpdateLocationMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateLocationMetadataResponse|null) => void
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
  getRobot(
    requestMessage: app_v1_app_pb.GetRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotResponse|null) => void
  ): UnaryResponse;
  getRobot(
    requestMessage: app_v1_app_pb.GetRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotResponse|null) => void
  ): UnaryResponse;
  getRobotMetadata(
    requestMessage: app_v1_app_pb.GetRobotMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotMetadataResponse|null) => void
  ): UnaryResponse;
  getRobotMetadata(
    requestMessage: app_v1_app_pb.GetRobotMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotMetadataResponse|null) => void
  ): UnaryResponse;
  updateRobotMetadata(
    requestMessage: app_v1_app_pb.UpdateRobotMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotMetadataResponse|null) => void
  ): UnaryResponse;
  updateRobotMetadata(
    requestMessage: app_v1_app_pb.UpdateRobotMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotMetadataResponse|null) => void
  ): UnaryResponse;
  getRoverRentalRobots(
    requestMessage: app_v1_app_pb.GetRoverRentalRobotsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRoverRentalRobotsResponse|null) => void
  ): UnaryResponse;
  getRoverRentalRobots(
    requestMessage: app_v1_app_pb.GetRoverRentalRobotsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRoverRentalRobotsResponse|null) => void
  ): UnaryResponse;
  getRobotParts(
    requestMessage: app_v1_app_pb.GetRobotPartsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartsResponse|null) => void
  ): UnaryResponse;
  getRobotParts(
    requestMessage: app_v1_app_pb.GetRobotPartsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartsResponse|null) => void
  ): UnaryResponse;
  getRobotPart(
    requestMessage: app_v1_app_pb.GetRobotPartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartResponse|null) => void
  ): UnaryResponse;
  getRobotPart(
    requestMessage: app_v1_app_pb.GetRobotPartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartResponse|null) => void
  ): UnaryResponse;
  getRobotPartLogs(
    requestMessage: app_v1_app_pb.GetRobotPartLogsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartLogsResponse|null) => void
  ): UnaryResponse;
  getRobotPartLogs(
    requestMessage: app_v1_app_pb.GetRobotPartLogsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartLogsResponse|null) => void
  ): UnaryResponse;
  tailRobotPartLogs(requestMessage: app_v1_app_pb.TailRobotPartLogsRequest, metadata?: grpc.Metadata): ResponseStream<app_v1_app_pb.TailRobotPartLogsResponse>;
  getRobotPartHistory(
    requestMessage: app_v1_app_pb.GetRobotPartHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartHistoryResponse|null) => void
  ): UnaryResponse;
  getRobotPartHistory(
    requestMessage: app_v1_app_pb.GetRobotPartHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartHistoryResponse|null) => void
  ): UnaryResponse;
  updateRobotPart(
    requestMessage: app_v1_app_pb.UpdateRobotPartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotPartResponse|null) => void
  ): UnaryResponse;
  updateRobotPart(
    requestMessage: app_v1_app_pb.UpdateRobotPartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotPartResponse|null) => void
  ): UnaryResponse;
  newRobotPart(
    requestMessage: app_v1_app_pb.NewRobotPartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewRobotPartResponse|null) => void
  ): UnaryResponse;
  newRobotPart(
    requestMessage: app_v1_app_pb.NewRobotPartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewRobotPartResponse|null) => void
  ): UnaryResponse;
  deleteRobotPart(
    requestMessage: app_v1_app_pb.DeleteRobotPartRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotPartResponse|null) => void
  ): UnaryResponse;
  deleteRobotPart(
    requestMessage: app_v1_app_pb.DeleteRobotPartRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotPartResponse|null) => void
  ): UnaryResponse;
  getRobotPartMetadata(
    requestMessage: app_v1_app_pb.GetRobotPartMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartMetadataResponse|null) => void
  ): UnaryResponse;
  getRobotPartMetadata(
    requestMessage: app_v1_app_pb.GetRobotPartMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotPartMetadataResponse|null) => void
  ): UnaryResponse;
  updateRobotPartMetadata(
    requestMessage: app_v1_app_pb.UpdateRobotPartMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotPartMetadataResponse|null) => void
  ): UnaryResponse;
  updateRobotPartMetadata(
    requestMessage: app_v1_app_pb.UpdateRobotPartMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotPartMetadataResponse|null) => void
  ): UnaryResponse;
  getRobotAPIKeys(
    requestMessage: app_v1_app_pb.GetRobotAPIKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotAPIKeysResponse|null) => void
  ): UnaryResponse;
  getRobotAPIKeys(
    requestMessage: app_v1_app_pb.GetRobotAPIKeysRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetRobotAPIKeysResponse|null) => void
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
  createRobotPartSecret(
    requestMessage: app_v1_app_pb.CreateRobotPartSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateRobotPartSecretResponse|null) => void
  ): UnaryResponse;
  createRobotPartSecret(
    requestMessage: app_v1_app_pb.CreateRobotPartSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.CreateRobotPartSecretResponse|null) => void
  ): UnaryResponse;
  deleteRobotPartSecret(
    requestMessage: app_v1_app_pb.DeleteRobotPartSecretRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotPartSecretResponse|null) => void
  ): UnaryResponse;
  deleteRobotPartSecret(
    requestMessage: app_v1_app_pb.DeleteRobotPartSecretRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotPartSecretResponse|null) => void
  ): UnaryResponse;
  listRobots(
    requestMessage: app_v1_app_pb.ListRobotsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListRobotsResponse|null) => void
  ): UnaryResponse;
  listRobots(
    requestMessage: app_v1_app_pb.ListRobotsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListRobotsResponse|null) => void
  ): UnaryResponse;
  newRobot(
    requestMessage: app_v1_app_pb.NewRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewRobotResponse|null) => void
  ): UnaryResponse;
  newRobot(
    requestMessage: app_v1_app_pb.NewRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.NewRobotResponse|null) => void
  ): UnaryResponse;
  updateRobot(
    requestMessage: app_v1_app_pb.UpdateRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotResponse|null) => void
  ): UnaryResponse;
  updateRobot(
    requestMessage: app_v1_app_pb.UpdateRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.UpdateRobotResponse|null) => void
  ): UnaryResponse;
  deleteRobot(
    requestMessage: app_v1_app_pb.DeleteRobotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotResponse|null) => void
  ): UnaryResponse;
  deleteRobot(
    requestMessage: app_v1_app_pb.DeleteRobotRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteRobotResponse|null) => void
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
  listMachineFragments(
    requestMessage: app_v1_app_pb.ListMachineFragmentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListMachineFragmentsResponse|null) => void
  ): UnaryResponse;
  listMachineFragments(
    requestMessage: app_v1_app_pb.ListMachineFragmentsRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.ListMachineFragmentsResponse|null) => void
  ): UnaryResponse;
  getFragmentHistory(
    requestMessage: app_v1_app_pb.GetFragmentHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetFragmentHistoryResponse|null) => void
  ): UnaryResponse;
  getFragmentHistory(
    requestMessage: app_v1_app_pb.GetFragmentHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetFragmentHistoryResponse|null) => void
  ): UnaryResponse;
  getFragmentUsage(
    requestMessage: app_v1_app_pb.GetFragmentUsageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetFragmentUsageResponse|null) => void
  ): UnaryResponse;
  getFragmentUsage(
    requestMessage: app_v1_app_pb.GetFragmentUsageRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.GetFragmentUsageResponse|null) => void
  ): UnaryResponse;
  setFragmentTag(
    requestMessage: app_v1_app_pb.SetFragmentTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.SetFragmentTagResponse|null) => void
  ): UnaryResponse;
  setFragmentTag(
    requestMessage: app_v1_app_pb.SetFragmentTagRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.SetFragmentTagResponse|null) => void
  ): UnaryResponse;
  deleteFragmentTag(
    requestMessage: app_v1_app_pb.DeleteFragmentTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteFragmentTagResponse|null) => void
  ): UnaryResponse;
  deleteFragmentTag(
    requestMessage: app_v1_app_pb.DeleteFragmentTagRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.DeleteFragmentTagResponse|null) => void
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
  transferRegistryItem(
    requestMessage: app_v1_app_pb.TransferRegistryItemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.TransferRegistryItemResponse|null) => void
  ): UnaryResponse;
  transferRegistryItem(
    requestMessage: app_v1_app_pb.TransferRegistryItemRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_app_pb.TransferRegistryItemResponse|null) => void
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

