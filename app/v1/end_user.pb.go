// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: app/v1/end_user.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type IsLegalAcceptedRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *IsLegalAcceptedRequest) Reset() {
	*x = IsLegalAcceptedRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_v1_end_user_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IsLegalAcceptedRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IsLegalAcceptedRequest) ProtoMessage() {}

func (x *IsLegalAcceptedRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_v1_end_user_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IsLegalAcceptedRequest.ProtoReflect.Descriptor instead.
func (*IsLegalAcceptedRequest) Descriptor() ([]byte, []int) {
	return file_app_v1_end_user_proto_rawDescGZIP(), []int{0}
}

type IsLegalAcceptedResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// If false, the user should not be able to use the application.
	AcceptedLegal bool `protobuf:"varint,1,opt,name=accepted_legal,json=acceptedLegal,proto3" json:"accepted_legal,omitempty"`
}

func (x *IsLegalAcceptedResponse) Reset() {
	*x = IsLegalAcceptedResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_v1_end_user_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IsLegalAcceptedResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IsLegalAcceptedResponse) ProtoMessage() {}

func (x *IsLegalAcceptedResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_v1_end_user_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IsLegalAcceptedResponse.ProtoReflect.Descriptor instead.
func (*IsLegalAcceptedResponse) Descriptor() ([]byte, []int) {
	return file_app_v1_end_user_proto_rawDescGZIP(), []int{1}
}

func (x *IsLegalAcceptedResponse) GetAcceptedLegal() bool {
	if x != nil {
		return x.AcceptedLegal
	}
	return false
}

type AcceptLegalRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AcceptLegalRequest) Reset() {
	*x = AcceptLegalRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_v1_end_user_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AcceptLegalRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AcceptLegalRequest) ProtoMessage() {}

func (x *AcceptLegalRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_v1_end_user_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AcceptLegalRequest.ProtoReflect.Descriptor instead.
func (*AcceptLegalRequest) Descriptor() ([]byte, []int) {
	return file_app_v1_end_user_proto_rawDescGZIP(), []int{2}
}

type AcceptLegalResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AcceptLegalResponse) Reset() {
	*x = AcceptLegalResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_v1_end_user_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AcceptLegalResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AcceptLegalResponse) ProtoMessage() {}

func (x *AcceptLegalResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_v1_end_user_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AcceptLegalResponse.ProtoReflect.Descriptor instead.
func (*AcceptLegalResponse) Descriptor() ([]byte, []int) {
	return file_app_v1_end_user_proto_rawDescGZIP(), []int{3}
}

type RegisterAuthApplicationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApplicationName string   `protobuf:"bytes,1,opt,name=application_name,json=applicationName,proto3" json:"application_name,omitempty"`
	OrgId           string   `protobuf:"bytes,2,opt,name=org_id,json=orgId,proto3" json:"org_id,omitempty"`
	OriginUris      []string `protobuf:"bytes,3,rep,name=origin_uris,json=originUris,proto3" json:"origin_uris,omitempty"`
	RedirectUris    []string `protobuf:"bytes,4,rep,name=redirect_uris,json=redirectUris,proto3" json:"redirect_uris,omitempty"`
	LogoutUri       string   `protobuf:"bytes,5,opt,name=logout_uri,json=logoutUri,proto3" json:"logout_uri,omitempty"`
}

func (x *RegisterAuthApplicationRequest) Reset() {
	*x = RegisterAuthApplicationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_v1_end_user_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RegisterAuthApplicationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterAuthApplicationRequest) ProtoMessage() {}

func (x *RegisterAuthApplicationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_v1_end_user_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterAuthApplicationRequest.ProtoReflect.Descriptor instead.
func (*RegisterAuthApplicationRequest) Descriptor() ([]byte, []int) {
	return file_app_v1_end_user_proto_rawDescGZIP(), []int{4}
}

func (x *RegisterAuthApplicationRequest) GetApplicationName() string {
	if x != nil {
		return x.ApplicationName
	}
	return ""
}

func (x *RegisterAuthApplicationRequest) GetOrgId() string {
	if x != nil {
		return x.OrgId
	}
	return ""
}

func (x *RegisterAuthApplicationRequest) GetOriginUris() []string {
	if x != nil {
		return x.OriginUris
	}
	return nil
}

func (x *RegisterAuthApplicationRequest) GetRedirectUris() []string {
	if x != nil {
		return x.RedirectUris
	}
	return nil
}

func (x *RegisterAuthApplicationRequest) GetLogoutUri() string {
	if x != nil {
		return x.LogoutUri
	}
	return ""
}

type RegisterAuthApplicationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApplicationId   string `protobuf:"bytes,1,opt,name=application_id,json=applicationId,proto3" json:"application_id,omitempty"`
	ApplicationName string `protobuf:"bytes,2,opt,name=application_name,json=applicationName,proto3" json:"application_name,omitempty"`
	Secret          string `protobuf:"bytes,3,opt,name=secret,proto3" json:"secret,omitempty"`
}

func (x *RegisterAuthApplicationResponse) Reset() {
	*x = RegisterAuthApplicationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_v1_end_user_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RegisterAuthApplicationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterAuthApplicationResponse) ProtoMessage() {}

func (x *RegisterAuthApplicationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_v1_end_user_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterAuthApplicationResponse.ProtoReflect.Descriptor instead.
func (*RegisterAuthApplicationResponse) Descriptor() ([]byte, []int) {
	return file_app_v1_end_user_proto_rawDescGZIP(), []int{5}
}

func (x *RegisterAuthApplicationResponse) GetApplicationId() string {
	if x != nil {
		return x.ApplicationId
	}
	return ""
}

func (x *RegisterAuthApplicationResponse) GetApplicationName() string {
	if x != nil {
		return x.ApplicationName
	}
	return ""
}

func (x *RegisterAuthApplicationResponse) GetSecret() string {
	if x != nil {
		return x.Secret
	}
	return ""
}

type UpdateAuthApplicationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OrgId              string   `protobuf:"bytes,1,opt,name=org_id,json=orgId,proto3" json:"org_id,omitempty"`
	ApplicationId      string   `protobuf:"bytes,2,opt,name=application_id,json=applicationId,proto3" json:"application_id,omitempty"`
	NewApplicationName string   `protobuf:"bytes,3,opt,name=new_application_name,json=newApplicationName,proto3" json:"new_application_name,omitempty"`
	NewOriginUris      []string `protobuf:"bytes,4,rep,name=new_origin_uris,json=newOriginUris,proto3" json:"new_origin_uris,omitempty"`
	NewRedirectUris    []string `protobuf:"bytes,5,rep,name=new_redirect_uris,json=newRedirectUris,proto3" json:"new_redirect_uris,omitempty"`
	NewLogoutUri       string   `protobuf:"bytes,6,opt,name=new_logout_uri,json=newLogoutUri,proto3" json:"new_logout_uri,omitempty"`
}

func (x *UpdateAuthApplicationRequest) Reset() {
	*x = UpdateAuthApplicationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_v1_end_user_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateAuthApplicationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateAuthApplicationRequest) ProtoMessage() {}

func (x *UpdateAuthApplicationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_app_v1_end_user_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateAuthApplicationRequest.ProtoReflect.Descriptor instead.
func (*UpdateAuthApplicationRequest) Descriptor() ([]byte, []int) {
	return file_app_v1_end_user_proto_rawDescGZIP(), []int{6}
}

func (x *UpdateAuthApplicationRequest) GetOrgId() string {
	if x != nil {
		return x.OrgId
	}
	return ""
}

func (x *UpdateAuthApplicationRequest) GetApplicationId() string {
	if x != nil {
		return x.ApplicationId
	}
	return ""
}

func (x *UpdateAuthApplicationRequest) GetNewApplicationName() string {
	if x != nil {
		return x.NewApplicationName
	}
	return ""
}

func (x *UpdateAuthApplicationRequest) GetNewOriginUris() []string {
	if x != nil {
		return x.NewOriginUris
	}
	return nil
}

func (x *UpdateAuthApplicationRequest) GetNewRedirectUris() []string {
	if x != nil {
		return x.NewRedirectUris
	}
	return nil
}

func (x *UpdateAuthApplicationRequest) GetNewLogoutUri() string {
	if x != nil {
		return x.NewLogoutUri
	}
	return ""
}

type UpdateAuthApplicationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ApplicationId   string `protobuf:"bytes,1,opt,name=application_id,json=applicationId,proto3" json:"application_id,omitempty"`
	ApplicationName string `protobuf:"bytes,2,opt,name=application_name,json=applicationName,proto3" json:"application_name,omitempty"`
}

func (x *UpdateAuthApplicationResponse) Reset() {
	*x = UpdateAuthApplicationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_app_v1_end_user_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateAuthApplicationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateAuthApplicationResponse) ProtoMessage() {}

func (x *UpdateAuthApplicationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_app_v1_end_user_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateAuthApplicationResponse.ProtoReflect.Descriptor instead.
func (*UpdateAuthApplicationResponse) Descriptor() ([]byte, []int) {
	return file_app_v1_end_user_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateAuthApplicationResponse) GetApplicationId() string {
	if x != nil {
		return x.ApplicationId
	}
	return ""
}

func (x *UpdateAuthApplicationResponse) GetApplicationName() string {
	if x != nil {
		return x.ApplicationName
	}
	return ""
}

var File_app_v1_end_user_proto protoreflect.FileDescriptor

var file_app_v1_end_user_proto_rawDesc = []byte{
	0x0a, 0x15, 0x61, 0x70, 0x70, 0x2f, 0x76, 0x31, 0x2f, 0x65, 0x6e, 0x64, 0x5f, 0x75, 0x73, 0x65,
	0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70,
	0x70, 0x2e, 0x76, 0x31, 0x22, 0x18, 0x0a, 0x16, 0x49, 0x73, 0x4c, 0x65, 0x67, 0x61, 0x6c, 0x41,
	0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x40,
	0x0a, 0x17, 0x49, 0x73, 0x4c, 0x65, 0x67, 0x61, 0x6c, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65,
	0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x61, 0x63, 0x63,
	0x65, 0x70, 0x74, 0x65, 0x64, 0x5f, 0x6c, 0x65, 0x67, 0x61, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x0d, 0x61, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x4c, 0x65, 0x67, 0x61, 0x6c,
	0x22, 0x14, 0x0a, 0x12, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x4c, 0x65, 0x67, 0x61, 0x6c, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x15, 0x0a, 0x13, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74,
	0x4c, 0x65, 0x67, 0x61, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xc7, 0x01,
	0x0a, 0x1e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70,
	0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x29, 0x0a, 0x10, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x61, 0x70, 0x70, 0x6c,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x15, 0x0a, 0x06, 0x6f,
	0x72, 0x67, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x6f, 0x72, 0x67,
	0x49, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x5f, 0x75, 0x72, 0x69,
	0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0a, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x55,
	0x72, 0x69, 0x73, 0x12, 0x23, 0x0a, 0x0d, 0x72, 0x65, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x5f,
	0x75, 0x72, 0x69, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0c, 0x72, 0x65, 0x64, 0x69,
	0x72, 0x65, 0x63, 0x74, 0x55, 0x72, 0x69, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x6c, 0x6f, 0x67, 0x6f,
	0x75, 0x74, 0x5f, 0x75, 0x72, 0x69, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6c, 0x6f,
	0x67, 0x6f, 0x75, 0x74, 0x55, 0x72, 0x69, 0x22, 0x8b, 0x01, 0x0a, 0x1f, 0x52, 0x65, 0x67, 0x69,
	0x73, 0x74, 0x65, 0x72, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x61,
	0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0d, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x49, 0x64, 0x12, 0x29, 0x0a, 0x10, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x61, 0x70,
	0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73,
	0x65, 0x63, 0x72, 0x65, 0x74, 0x22, 0x88, 0x02, 0x0a, 0x1c, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x41, 0x75, 0x74, 0x68, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x15, 0x0a, 0x06, 0x6f, 0x72, 0x67, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x6f, 0x72, 0x67, 0x49, 0x64, 0x12, 0x25, 0x0a,
	0x0e, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x49, 0x64, 0x12, 0x30, 0x0a, 0x14, 0x6e, 0x65, 0x77, 0x5f, 0x61, 0x70, 0x70, 0x6c,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x12, 0x6e, 0x65, 0x77, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x26, 0x0a, 0x0f, 0x6e, 0x65, 0x77, 0x5f, 0x6f, 0x72,
	0x69, 0x67, 0x69, 0x6e, 0x5f, 0x75, 0x72, 0x69, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52,
	0x0d, 0x6e, 0x65, 0x77, 0x4f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x55, 0x72, 0x69, 0x73, 0x12, 0x2a,
	0x0a, 0x11, 0x6e, 0x65, 0x77, 0x5f, 0x72, 0x65, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x5f, 0x75,
	0x72, 0x69, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0f, 0x6e, 0x65, 0x77, 0x52, 0x65,
	0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x55, 0x72, 0x69, 0x73, 0x12, 0x24, 0x0a, 0x0e, 0x6e, 0x65,
	0x77, 0x5f, 0x6c, 0x6f, 0x67, 0x6f, 0x75, 0x74, 0x5f, 0x75, 0x72, 0x69, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0c, 0x6e, 0x65, 0x77, 0x4c, 0x6f, 0x67, 0x6f, 0x75, 0x74, 0x55, 0x72, 0x69,
	0x22, 0x71, 0x0a, 0x1d, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70,
	0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x25, 0x0a, 0x0e, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x61, 0x70, 0x70, 0x6c, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x29, 0x0a, 0x10, 0x61, 0x70, 0x70, 0x6c,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0f, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4e,
	0x61, 0x6d, 0x65, 0x32, 0xa6, 0x03, 0x0a, 0x0e, 0x45, 0x6e, 0x64, 0x55, 0x73, 0x65, 0x72, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x5c, 0x0a, 0x0f, 0x49, 0x73, 0x4c, 0x65, 0x67, 0x61,
	0x6c, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x12, 0x23, 0x2e, 0x76, 0x69, 0x61, 0x6d,
	0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x73, 0x4c, 0x65, 0x67, 0x61, 0x6c, 0x41,
	0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x73, 0x4c,
	0x65, 0x67, 0x61, 0x6c, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x50, 0x0a, 0x0b, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x4c, 0x65,
	0x67, 0x61, 0x6c, 0x12, 0x1f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76,
	0x31, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x4c, 0x65, 0x67, 0x61, 0x6c, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e,
	0x76, 0x31, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x4c, 0x65, 0x67, 0x61, 0x6c, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x74, 0x0a, 0x17, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74,
	0x65, 0x72, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x2b, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e,
	0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70, 0x70, 0x6c,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c,
	0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x67,
	0x69, 0x73, 0x74, 0x65, 0x72, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x6e, 0x0a, 0x15,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x29, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70,
	0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70,
	0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x2a, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x61, 0x70, 0x70, 0x2e, 0x76, 0x31, 0x2e, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x75, 0x74, 0x68, 0x41, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x18, 0x5a, 0x16,
	0x67, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x61, 0x70, 0x70, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_app_v1_end_user_proto_rawDescOnce sync.Once
	file_app_v1_end_user_proto_rawDescData = file_app_v1_end_user_proto_rawDesc
)

func file_app_v1_end_user_proto_rawDescGZIP() []byte {
	file_app_v1_end_user_proto_rawDescOnce.Do(func() {
		file_app_v1_end_user_proto_rawDescData = protoimpl.X.CompressGZIP(file_app_v1_end_user_proto_rawDescData)
	})
	return file_app_v1_end_user_proto_rawDescData
}

var file_app_v1_end_user_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_app_v1_end_user_proto_goTypes = []interface{}{
	(*IsLegalAcceptedRequest)(nil),          // 0: viam.app.v1.IsLegalAcceptedRequest
	(*IsLegalAcceptedResponse)(nil),         // 1: viam.app.v1.IsLegalAcceptedResponse
	(*AcceptLegalRequest)(nil),              // 2: viam.app.v1.AcceptLegalRequest
	(*AcceptLegalResponse)(nil),             // 3: viam.app.v1.AcceptLegalResponse
	(*RegisterAuthApplicationRequest)(nil),  // 4: viam.app.v1.RegisterAuthApplicationRequest
	(*RegisterAuthApplicationResponse)(nil), // 5: viam.app.v1.RegisterAuthApplicationResponse
	(*UpdateAuthApplicationRequest)(nil),    // 6: viam.app.v1.UpdateAuthApplicationRequest
	(*UpdateAuthApplicationResponse)(nil),   // 7: viam.app.v1.UpdateAuthApplicationResponse
}
var file_app_v1_end_user_proto_depIdxs = []int32{
	0, // 0: viam.app.v1.EndUserService.IsLegalAccepted:input_type -> viam.app.v1.IsLegalAcceptedRequest
	2, // 1: viam.app.v1.EndUserService.AcceptLegal:input_type -> viam.app.v1.AcceptLegalRequest
	4, // 2: viam.app.v1.EndUserService.RegisterAuthApplication:input_type -> viam.app.v1.RegisterAuthApplicationRequest
	6, // 3: viam.app.v1.EndUserService.UpdateAuthApplication:input_type -> viam.app.v1.UpdateAuthApplicationRequest
	1, // 4: viam.app.v1.EndUserService.IsLegalAccepted:output_type -> viam.app.v1.IsLegalAcceptedResponse
	3, // 5: viam.app.v1.EndUserService.AcceptLegal:output_type -> viam.app.v1.AcceptLegalResponse
	5, // 6: viam.app.v1.EndUserService.RegisterAuthApplication:output_type -> viam.app.v1.RegisterAuthApplicationResponse
	7, // 7: viam.app.v1.EndUserService.UpdateAuthApplication:output_type -> viam.app.v1.UpdateAuthApplicationResponse
	4, // [4:8] is the sub-list for method output_type
	0, // [0:4] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_app_v1_end_user_proto_init() }
func file_app_v1_end_user_proto_init() {
	if File_app_v1_end_user_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_app_v1_end_user_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IsLegalAcceptedRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_app_v1_end_user_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IsLegalAcceptedResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_app_v1_end_user_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AcceptLegalRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_app_v1_end_user_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AcceptLegalResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_app_v1_end_user_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RegisterAuthApplicationRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_app_v1_end_user_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RegisterAuthApplicationResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_app_v1_end_user_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateAuthApplicationRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_app_v1_end_user_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateAuthApplicationResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_app_v1_end_user_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_app_v1_end_user_proto_goTypes,
		DependencyIndexes: file_app_v1_end_user_proto_depIdxs,
		MessageInfos:      file_app_v1_end_user_proto_msgTypes,
	}.Build()
	File_app_v1_end_user_proto = out.File
	file_app_v1_end_user_proto_rawDesc = nil
	file_app_v1_end_user_proto_goTypes = nil
	file_app_v1_end_user_proto_depIdxs = nil
}
