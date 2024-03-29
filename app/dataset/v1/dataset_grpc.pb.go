// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: app/dataset/v1/dataset.proto

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

// DatasetServiceClient is the client API for DatasetService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DatasetServiceClient interface {
	// CreateDataset makes a new dataset.
	CreateDataset(ctx context.Context, in *CreateDatasetRequest, opts ...grpc.CallOption) (*CreateDatasetResponse, error)
	// DeleteDatasets deletes an existing dataset.
	DeleteDataset(ctx context.Context, in *DeleteDatasetRequest, opts ...grpc.CallOption) (*DeleteDatasetResponse, error)
	// RenameDataset modifies the name of an existing dataset.
	RenameDataset(ctx context.Context, in *RenameDatasetRequest, opts ...grpc.CallOption) (*RenameDatasetResponse, error)
	// ListDatasetsByOrganizationID lists all of the datasets for an organization.
	ListDatasetsByOrganizationID(ctx context.Context, in *ListDatasetsByOrganizationIDRequest, opts ...grpc.CallOption) (*ListDatasetsByOrganizationIDResponse, error)
	// ListDatasetsByIDs lists all of the datasets specified by the given dataset IDs.
	ListDatasetsByIDs(ctx context.Context, in *ListDatasetsByIDsRequest, opts ...grpc.CallOption) (*ListDatasetsByIDsResponse, error)
}

type datasetServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDatasetServiceClient(cc grpc.ClientConnInterface) DatasetServiceClient {
	return &datasetServiceClient{cc}
}

func (c *datasetServiceClient) CreateDataset(ctx context.Context, in *CreateDatasetRequest, opts ...grpc.CallOption) (*CreateDatasetResponse, error) {
	out := new(CreateDatasetResponse)
	err := c.cc.Invoke(ctx, "/viam.app.dataset.v1.DatasetService/CreateDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) DeleteDataset(ctx context.Context, in *DeleteDatasetRequest, opts ...grpc.CallOption) (*DeleteDatasetResponse, error) {
	out := new(DeleteDatasetResponse)
	err := c.cc.Invoke(ctx, "/viam.app.dataset.v1.DatasetService/DeleteDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) RenameDataset(ctx context.Context, in *RenameDatasetRequest, opts ...grpc.CallOption) (*RenameDatasetResponse, error) {
	out := new(RenameDatasetResponse)
	err := c.cc.Invoke(ctx, "/viam.app.dataset.v1.DatasetService/RenameDataset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) ListDatasetsByOrganizationID(ctx context.Context, in *ListDatasetsByOrganizationIDRequest, opts ...grpc.CallOption) (*ListDatasetsByOrganizationIDResponse, error) {
	out := new(ListDatasetsByOrganizationIDResponse)
	err := c.cc.Invoke(ctx, "/viam.app.dataset.v1.DatasetService/ListDatasetsByOrganizationID", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datasetServiceClient) ListDatasetsByIDs(ctx context.Context, in *ListDatasetsByIDsRequest, opts ...grpc.CallOption) (*ListDatasetsByIDsResponse, error) {
	out := new(ListDatasetsByIDsResponse)
	err := c.cc.Invoke(ctx, "/viam.app.dataset.v1.DatasetService/ListDatasetsByIDs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DatasetServiceServer is the server API for DatasetService service.
// All implementations must embed UnimplementedDatasetServiceServer
// for forward compatibility
type DatasetServiceServer interface {
	// CreateDataset makes a new dataset.
	CreateDataset(context.Context, *CreateDatasetRequest) (*CreateDatasetResponse, error)
	// DeleteDatasets deletes an existing dataset.
	DeleteDataset(context.Context, *DeleteDatasetRequest) (*DeleteDatasetResponse, error)
	// RenameDataset modifies the name of an existing dataset.
	RenameDataset(context.Context, *RenameDatasetRequest) (*RenameDatasetResponse, error)
	// ListDatasetsByOrganizationID lists all of the datasets for an organization.
	ListDatasetsByOrganizationID(context.Context, *ListDatasetsByOrganizationIDRequest) (*ListDatasetsByOrganizationIDResponse, error)
	// ListDatasetsByIDs lists all of the datasets specified by the given dataset IDs.
	ListDatasetsByIDs(context.Context, *ListDatasetsByIDsRequest) (*ListDatasetsByIDsResponse, error)
	mustEmbedUnimplementedDatasetServiceServer()
}

// UnimplementedDatasetServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDatasetServiceServer struct {
}

func (UnimplementedDatasetServiceServer) CreateDataset(context.Context, *CreateDatasetRequest) (*CreateDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateDataset not implemented")
}
func (UnimplementedDatasetServiceServer) DeleteDataset(context.Context, *DeleteDatasetRequest) (*DeleteDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteDataset not implemented")
}
func (UnimplementedDatasetServiceServer) RenameDataset(context.Context, *RenameDatasetRequest) (*RenameDatasetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RenameDataset not implemented")
}
func (UnimplementedDatasetServiceServer) ListDatasetsByOrganizationID(context.Context, *ListDatasetsByOrganizationIDRequest) (*ListDatasetsByOrganizationIDResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDatasetsByOrganizationID not implemented")
}
func (UnimplementedDatasetServiceServer) ListDatasetsByIDs(context.Context, *ListDatasetsByIDsRequest) (*ListDatasetsByIDsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDatasetsByIDs not implemented")
}
func (UnimplementedDatasetServiceServer) mustEmbedUnimplementedDatasetServiceServer() {}

// UnsafeDatasetServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DatasetServiceServer will
// result in compilation errors.
type UnsafeDatasetServiceServer interface {
	mustEmbedUnimplementedDatasetServiceServer()
}

func RegisterDatasetServiceServer(s grpc.ServiceRegistrar, srv DatasetServiceServer) {
	s.RegisterService(&DatasetService_ServiceDesc, srv)
}

func _DatasetService_CreateDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).CreateDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.dataset.v1.DatasetService/CreateDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).CreateDataset(ctx, req.(*CreateDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_DeleteDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).DeleteDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.dataset.v1.DatasetService/DeleteDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).DeleteDataset(ctx, req.(*DeleteDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_RenameDataset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RenameDatasetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).RenameDataset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.dataset.v1.DatasetService/RenameDataset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).RenameDataset(ctx, req.(*RenameDatasetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_ListDatasetsByOrganizationID_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDatasetsByOrganizationIDRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).ListDatasetsByOrganizationID(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.dataset.v1.DatasetService/ListDatasetsByOrganizationID",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).ListDatasetsByOrganizationID(ctx, req.(*ListDatasetsByOrganizationIDRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatasetService_ListDatasetsByIDs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDatasetsByIDsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatasetServiceServer).ListDatasetsByIDs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.dataset.v1.DatasetService/ListDatasetsByIDs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatasetServiceServer).ListDatasetsByIDs(ctx, req.(*ListDatasetsByIDsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DatasetService_ServiceDesc is the grpc.ServiceDesc for DatasetService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DatasetService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.app.dataset.v1.DatasetService",
	HandlerType: (*DatasetServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateDataset",
			Handler:    _DatasetService_CreateDataset_Handler,
		},
		{
			MethodName: "DeleteDataset",
			Handler:    _DatasetService_DeleteDataset_Handler,
		},
		{
			MethodName: "RenameDataset",
			Handler:    _DatasetService_RenameDataset_Handler,
		},
		{
			MethodName: "ListDatasetsByOrganizationID",
			Handler:    _DatasetService_ListDatasetsByOrganizationID_Handler,
		},
		{
			MethodName: "ListDatasetsByIDs",
			Handler:    _DatasetService_ListDatasetsByIDs_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "app/dataset/v1/dataset.proto",
}
