// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: provisioning/v1/provisioning.proto

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ProvisioningServiceClient is the client API for ProvisioningService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProvisioningServiceClient interface {
	// GetSmartphysicalDeviceStatus is for retrieving the status of the smart physicalDevice including networking.
	GetSmartphysicalDeviceStatus(ctx context.Context, in *GetSmartphysicalDeviceStatusRequest, opts ...grpc.CallOption) (*GetSmartphysicalDeviceStatusResponse, error)
	// SetNetworkCredentials is to set the wifi credentials.
	SetNetworkCredentials(ctx context.Context, in *SetNetworkCredentialsRequest, opts ...grpc.CallOption) (*SetNetworkCredentialsResponse, error)
	// SetSmartphysicalDeviceCredentials is to set the smart physicalDevice credentials.
	SetSmartphysicalDeviceCredentials(ctx context.Context, in *SetSmartphysicalDeviceCredentialsRequest, opts ...grpc.CallOption) (*SetSmartphysicalDeviceCredentialsResponse, error)
	// GetNetworkList is to retrieve the list of networks that are visible to the smart physicalDevice.
	GetNetworkList(ctx context.Context, in *GetNetworkListRequest, opts ...grpc.CallOption) (*GetNetworkListResponse, error)
}

type provisioningServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewProvisioningServiceClient(cc grpc.ClientConnInterface) ProvisioningServiceClient {
	return &provisioningServiceClient{cc}
}

func (c *provisioningServiceClient) GetSmartphysicalDeviceStatus(ctx context.Context, in *GetSmartphysicalDeviceStatusRequest, opts ...grpc.CallOption) (*GetSmartphysicalDeviceStatusResponse, error) {
	out := new(GetSmartphysicalDeviceStatusResponse)
	err := c.cc.Invoke(ctx, "/viam.provisioning.v1.ProvisioningService/GetSmartphysicalDeviceStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisioningServiceClient) SetNetworkCredentials(ctx context.Context, in *SetNetworkCredentialsRequest, opts ...grpc.CallOption) (*SetNetworkCredentialsResponse, error) {
	out := new(SetNetworkCredentialsResponse)
	err := c.cc.Invoke(ctx, "/viam.provisioning.v1.ProvisioningService/SetNetworkCredentials", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisioningServiceClient) SetSmartphysicalDeviceCredentials(ctx context.Context, in *SetSmartphysicalDeviceCredentialsRequest, opts ...grpc.CallOption) (*SetSmartphysicalDeviceCredentialsResponse, error) {
	out := new(SetSmartphysicalDeviceCredentialsResponse)
	err := c.cc.Invoke(ctx, "/viam.provisioning.v1.ProvisioningService/SetSmartphysicalDeviceCredentials", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisioningServiceClient) GetNetworkList(ctx context.Context, in *GetNetworkListRequest, opts ...grpc.CallOption) (*GetNetworkListResponse, error) {
	out := new(GetNetworkListResponse)
	err := c.cc.Invoke(ctx, "/viam.provisioning.v1.ProvisioningService/GetNetworkList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProvisioningServiceServer is the server API for ProvisioningService service.
// All implementations must embed UnimplementedProvisioningServiceServer
// for forward compatibility
type ProvisioningServiceServer interface {
	// GetSmartphysicalDeviceStatus is for retrieving the status of the smart physicalDevice including networking.
	GetSmartphysicalDeviceStatus(context.Context, *GetSmartphysicalDeviceStatusRequest) (*GetSmartphysicalDeviceStatusResponse, error)
	// SetNetworkCredentials is to set the wifi credentials.
	SetNetworkCredentials(context.Context, *SetNetworkCredentialsRequest) (*SetNetworkCredentialsResponse, error)
	// SetSmartphysicalDeviceCredentials is to set the smart physicalDevice credentials.
	SetSmartphysicalDeviceCredentials(context.Context, *SetSmartphysicalDeviceCredentialsRequest) (*SetSmartphysicalDeviceCredentialsResponse, error)
	// GetNetworkList is to retrieve the list of networks that are visible to the smart physicalDevice.
	GetNetworkList(context.Context, *GetNetworkListRequest) (*GetNetworkListResponse, error)
	mustEmbedUnimplementedProvisioningServiceServer()
}

// UnimplementedProvisioningServiceServer must be embedded to have forward compatible implementations.
type UnimplementedProvisioningServiceServer struct {
}

func (UnimplementedProvisioningServiceServer) GetSmartphysicalDeviceStatus(context.Context, *GetSmartphysicalDeviceStatusRequest) (*GetSmartphysicalDeviceStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSmartphysicalDeviceStatus not implemented")
}
func (UnimplementedProvisioningServiceServer) SetNetworkCredentials(context.Context, *SetNetworkCredentialsRequest) (*SetNetworkCredentialsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetNetworkCredentials not implemented")
}
func (UnimplementedProvisioningServiceServer) SetSmartphysicalDeviceCredentials(context.Context, *SetSmartphysicalDeviceCredentialsRequest) (*SetSmartphysicalDeviceCredentialsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetSmartphysicalDeviceCredentials not implemented")
}
func (UnimplementedProvisioningServiceServer) GetNetworkList(context.Context, *GetNetworkListRequest) (*GetNetworkListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNetworkList not implemented")
}
func (UnimplementedProvisioningServiceServer) mustEmbedUnimplementedProvisioningServiceServer() {}

// UnsafeProvisioningServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProvisioningServiceServer will
// result in compilation errors.
type UnsafeProvisioningServiceServer interface {
	mustEmbedUnimplementedProvisioningServiceServer()
}

func RegisterProvisioningServiceServer(s grpc.ServiceRegistrar, srv ProvisioningServiceServer) {
	s.RegisterService(&ProvisioningService_ServiceDesc, srv)
}

func _ProvisioningService_GetSmartphysicalDeviceStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSmartphysicalDeviceStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisioningServiceServer).GetSmartphysicalDeviceStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.provisioning.v1.ProvisioningService/GetSmartphysicalDeviceStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisioningServiceServer).GetSmartphysicalDeviceStatus(ctx, req.(*GetSmartphysicalDeviceStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProvisioningService_SetNetworkCredentials_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetNetworkCredentialsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisioningServiceServer).SetNetworkCredentials(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.provisioning.v1.ProvisioningService/SetNetworkCredentials",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisioningServiceServer).SetNetworkCredentials(ctx, req.(*SetNetworkCredentialsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProvisioningService_SetSmartphysicalDeviceCredentials_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetSmartphysicalDeviceCredentialsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisioningServiceServer).SetSmartphysicalDeviceCredentials(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.provisioning.v1.ProvisioningService/SetSmartphysicalDeviceCredentials",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisioningServiceServer).SetSmartphysicalDeviceCredentials(ctx, req.(*SetSmartphysicalDeviceCredentialsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ProvisioningService_GetNetworkList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetNetworkListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisioningServiceServer).GetNetworkList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.provisioning.v1.ProvisioningService/GetNetworkList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisioningServiceServer).GetNetworkList(ctx, req.(*GetNetworkListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ProvisioningService_ServiceDesc is the grpc.ServiceDesc for ProvisioningService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ProvisioningService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.provisioning.v1.ProvisioningService",
	HandlerType: (*ProvisioningServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetSmartphysicalDeviceStatus",
			Handler:    _ProvisioningService_GetSmartphysicalDeviceStatus_Handler,
		},
		{
			MethodName: "SetNetworkCredentials",
			Handler:    _ProvisioningService_SetNetworkCredentials_Handler,
		},
		{
			MethodName: "SetSmartphysicalDeviceCredentials",
			Handler:    _ProvisioningService_SetSmartphysicalDeviceCredentials_Handler,
		},
		{
			MethodName: "GetNetworkList",
			Handler:    _ProvisioningService_GetNetworkList_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "provisioning/v1/provisioning.proto",
}
