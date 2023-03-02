// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: app/data/v1/data.proto

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

// DataServiceClient is the client API for DataService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DataServiceClient interface {
	// TabularDataByFilter queries tabular data and metadata based on given filters.
	TabularDataByFilter(ctx context.Context, in *TabularDataByFilterRequest, opts ...grpc.CallOption) (*TabularDataByFilterResponse, error)
	// BinaryDataByFilter queries binary data and metadata based on given filters.
	BinaryDataByFilter(ctx context.Context, in *BinaryDataByFilterRequest, opts ...grpc.CallOption) (*BinaryDataByFilterResponse, error)
	// BinaryDataByIDs queries binary data and metadata based on given IDs.
	BinaryDataByIDs(ctx context.Context, in *BinaryDataByIDsRequest, opts ...grpc.CallOption) (*BinaryDataByIDsResponse, error)
	// DeleteTabularDataByFilter deletes tabular data based on given filters.
	DeleteTabularDataByFilter(ctx context.Context, in *DeleteTabularDataByFilterRequest, opts ...grpc.CallOption) (*DeleteTabularDataByFilterResponse, error)
	// DeleteBinaryDataByFilter deletes binary data based on given filters.
	DeleteBinaryDataByFilter(ctx context.Context, in *DeleteBinaryDataByFilterRequest, opts ...grpc.CallOption) (*DeleteBinaryDataByFilterResponse, error)
	// DeleteBinaryDataByIDs deletes binary data based on given IDs.
	DeleteBinaryDataByIDs(ctx context.Context, in *DeleteBinaryDataByIDsRequest, opts ...grpc.CallOption) (*DeleteBinaryDataByIDsResponse, error)
	// AddTagsToBinaryDataByFileIDs adds string tags, unless the tags are already present, to binary data based on given IDs.
	AddTagsToBinaryDataByFileIDs(ctx context.Context, in *AddTagsToBinaryDataByFileIDsRequest, opts ...grpc.CallOption) (*AddTagsToBinaryDataByFileIDsResponse, error)
	// AddTagsToBinaryDataByFilter adds string tags, unless the tags are already present, to binary data based on the given filter.
	AddTagsToBinaryDataByFilter(ctx context.Context, in *AddTagsToBinaryDataByFilterRequest, opts ...grpc.CallOption) (*AddTagsToBinaryDataByFilterResponse, error)
	// RemoveTagsToBinaryDataByFileIDs removes string tags from binary data based on given IDs.
	RemoveTagsFromBinaryDataByFileIDs(ctx context.Context, in *RemoveTagsFromBinaryDataByFileIDsRequest, opts ...grpc.CallOption) (*RemoveTagsFromBinaryDataByFileIDsResponse, error)
	// RemoveTagsToBinaryDataByFilter removes string tags from binary data based on the given filter.
	RemoveTagsFromBinaryDataByFilter(ctx context.Context, in *RemoveTagsFromBinaryDataByFilterRequest, opts ...grpc.CallOption) (*RemoveTagsFromBinaryDataByFilterResponse, error)
	// TagsByFilter gets all unique tags from data based on given filter.
	TagsByFilter(ctx context.Context, in *TagsByFilterRequest, opts ...grpc.CallOption) (*TagsByFilterResponse, error)
}

type dataServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDataServiceClient(cc grpc.ClientConnInterface) DataServiceClient {
	return &dataServiceClient{cc}
}

func (c *dataServiceClient) TabularDataByFilter(ctx context.Context, in *TabularDataByFilterRequest, opts ...grpc.CallOption) (*TabularDataByFilterResponse, error) {
	out := new(TabularDataByFilterResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/TabularDataByFilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) BinaryDataByFilter(ctx context.Context, in *BinaryDataByFilterRequest, opts ...grpc.CallOption) (*BinaryDataByFilterResponse, error) {
	out := new(BinaryDataByFilterResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/BinaryDataByFilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) BinaryDataByIDs(ctx context.Context, in *BinaryDataByIDsRequest, opts ...grpc.CallOption) (*BinaryDataByIDsResponse, error) {
	out := new(BinaryDataByIDsResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/BinaryDataByIDs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) DeleteTabularDataByFilter(ctx context.Context, in *DeleteTabularDataByFilterRequest, opts ...grpc.CallOption) (*DeleteTabularDataByFilterResponse, error) {
	out := new(DeleteTabularDataByFilterResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/DeleteTabularDataByFilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) DeleteBinaryDataByFilter(ctx context.Context, in *DeleteBinaryDataByFilterRequest, opts ...grpc.CallOption) (*DeleteBinaryDataByFilterResponse, error) {
	out := new(DeleteBinaryDataByFilterResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/DeleteBinaryDataByFilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) DeleteBinaryDataByIDs(ctx context.Context, in *DeleteBinaryDataByIDsRequest, opts ...grpc.CallOption) (*DeleteBinaryDataByIDsResponse, error) {
	out := new(DeleteBinaryDataByIDsResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/DeleteBinaryDataByIDs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) AddTagsToBinaryDataByFileIDs(ctx context.Context, in *AddTagsToBinaryDataByFileIDsRequest, opts ...grpc.CallOption) (*AddTagsToBinaryDataByFileIDsResponse, error) {
	out := new(AddTagsToBinaryDataByFileIDsResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/AddTagsToBinaryDataByFileIDs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) AddTagsToBinaryDataByFilter(ctx context.Context, in *AddTagsToBinaryDataByFilterRequest, opts ...grpc.CallOption) (*AddTagsToBinaryDataByFilterResponse, error) {
	out := new(AddTagsToBinaryDataByFilterResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/AddTagsToBinaryDataByFilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) RemoveTagsFromBinaryDataByFileIDs(ctx context.Context, in *RemoveTagsFromBinaryDataByFileIDsRequest, opts ...grpc.CallOption) (*RemoveTagsFromBinaryDataByFileIDsResponse, error) {
	out := new(RemoveTagsFromBinaryDataByFileIDsResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFileIDs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) RemoveTagsFromBinaryDataByFilter(ctx context.Context, in *RemoveTagsFromBinaryDataByFilterRequest, opts ...grpc.CallOption) (*RemoveTagsFromBinaryDataByFilterResponse, error) {
	out := new(RemoveTagsFromBinaryDataByFilterResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *dataServiceClient) TagsByFilter(ctx context.Context, in *TagsByFilterRequest, opts ...grpc.CallOption) (*TagsByFilterResponse, error) {
	out := new(TagsByFilterResponse)
	err := c.cc.Invoke(ctx, "/viam.app.data.v1.DataService/TagsByFilter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DataServiceServer is the server API for DataService service.
// All implementations must embed UnimplementedDataServiceServer
// for forward compatibility
type DataServiceServer interface {
	// TabularDataByFilter queries tabular data and metadata based on given filters.
	TabularDataByFilter(context.Context, *TabularDataByFilterRequest) (*TabularDataByFilterResponse, error)
	// BinaryDataByFilter queries binary data and metadata based on given filters.
	BinaryDataByFilter(context.Context, *BinaryDataByFilterRequest) (*BinaryDataByFilterResponse, error)
	// BinaryDataByIDs queries binary data and metadata based on given IDs.
	BinaryDataByIDs(context.Context, *BinaryDataByIDsRequest) (*BinaryDataByIDsResponse, error)
	// DeleteTabularDataByFilter deletes tabular data based on given filters.
	DeleteTabularDataByFilter(context.Context, *DeleteTabularDataByFilterRequest) (*DeleteTabularDataByFilterResponse, error)
	// DeleteBinaryDataByFilter deletes binary data based on given filters.
	DeleteBinaryDataByFilter(context.Context, *DeleteBinaryDataByFilterRequest) (*DeleteBinaryDataByFilterResponse, error)
	// DeleteBinaryDataByIDs deletes binary data based on given IDs.
	DeleteBinaryDataByIDs(context.Context, *DeleteBinaryDataByIDsRequest) (*DeleteBinaryDataByIDsResponse, error)
	// AddTagsToBinaryDataByFileIDs adds string tags, unless the tags are already present, to binary data based on given IDs.
	AddTagsToBinaryDataByFileIDs(context.Context, *AddTagsToBinaryDataByFileIDsRequest) (*AddTagsToBinaryDataByFileIDsResponse, error)
	// AddTagsToBinaryDataByFilter adds string tags, unless the tags are already present, to binary data based on the given filter.
	AddTagsToBinaryDataByFilter(context.Context, *AddTagsToBinaryDataByFilterRequest) (*AddTagsToBinaryDataByFilterResponse, error)
	// RemoveTagsToBinaryDataByFileIDs removes string tags from binary data based on given IDs.
	RemoveTagsFromBinaryDataByFileIDs(context.Context, *RemoveTagsFromBinaryDataByFileIDsRequest) (*RemoveTagsFromBinaryDataByFileIDsResponse, error)
	// RemoveTagsToBinaryDataByFilter removes string tags from binary data based on the given filter.
	RemoveTagsFromBinaryDataByFilter(context.Context, *RemoveTagsFromBinaryDataByFilterRequest) (*RemoveTagsFromBinaryDataByFilterResponse, error)
	// TagsByFilter gets all unique tags from data based on given filter.
	TagsByFilter(context.Context, *TagsByFilterRequest) (*TagsByFilterResponse, error)
	mustEmbedUnimplementedDataServiceServer()
}

// UnimplementedDataServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDataServiceServer struct {
}

func (UnimplementedDataServiceServer) TabularDataByFilter(context.Context, *TabularDataByFilterRequest) (*TabularDataByFilterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TabularDataByFilter not implemented")
}
func (UnimplementedDataServiceServer) BinaryDataByFilter(context.Context, *BinaryDataByFilterRequest) (*BinaryDataByFilterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BinaryDataByFilter not implemented")
}
func (UnimplementedDataServiceServer) BinaryDataByIDs(context.Context, *BinaryDataByIDsRequest) (*BinaryDataByIDsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BinaryDataByIDs not implemented")
}
func (UnimplementedDataServiceServer) DeleteTabularDataByFilter(context.Context, *DeleteTabularDataByFilterRequest) (*DeleteTabularDataByFilterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteTabularDataByFilter not implemented")
}
func (UnimplementedDataServiceServer) DeleteBinaryDataByFilter(context.Context, *DeleteBinaryDataByFilterRequest) (*DeleteBinaryDataByFilterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteBinaryDataByFilter not implemented")
}
func (UnimplementedDataServiceServer) DeleteBinaryDataByIDs(context.Context, *DeleteBinaryDataByIDsRequest) (*DeleteBinaryDataByIDsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteBinaryDataByIDs not implemented")
}
func (UnimplementedDataServiceServer) AddTagsToBinaryDataByFileIDs(context.Context, *AddTagsToBinaryDataByFileIDsRequest) (*AddTagsToBinaryDataByFileIDsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddTagsToBinaryDataByFileIDs not implemented")
}
func (UnimplementedDataServiceServer) AddTagsToBinaryDataByFilter(context.Context, *AddTagsToBinaryDataByFilterRequest) (*AddTagsToBinaryDataByFilterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddTagsToBinaryDataByFilter not implemented")
}
func (UnimplementedDataServiceServer) RemoveTagsFromBinaryDataByFileIDs(context.Context, *RemoveTagsFromBinaryDataByFileIDsRequest) (*RemoveTagsFromBinaryDataByFileIDsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveTagsFromBinaryDataByFileIDs not implemented")
}
func (UnimplementedDataServiceServer) RemoveTagsFromBinaryDataByFilter(context.Context, *RemoveTagsFromBinaryDataByFilterRequest) (*RemoveTagsFromBinaryDataByFilterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveTagsFromBinaryDataByFilter not implemented")
}
func (UnimplementedDataServiceServer) TagsByFilter(context.Context, *TagsByFilterRequest) (*TagsByFilterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TagsByFilter not implemented")
}
func (UnimplementedDataServiceServer) mustEmbedUnimplementedDataServiceServer() {}

// UnsafeDataServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DataServiceServer will
// result in compilation errors.
type UnsafeDataServiceServer interface {
	mustEmbedUnimplementedDataServiceServer()
}

func RegisterDataServiceServer(s grpc.ServiceRegistrar, srv DataServiceServer) {
	s.RegisterService(&DataService_ServiceDesc, srv)
}

func _DataService_TabularDataByFilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TabularDataByFilterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).TabularDataByFilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/TabularDataByFilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).TabularDataByFilter(ctx, req.(*TabularDataByFilterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_BinaryDataByFilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BinaryDataByFilterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).BinaryDataByFilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/BinaryDataByFilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).BinaryDataByFilter(ctx, req.(*BinaryDataByFilterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_BinaryDataByIDs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BinaryDataByIDsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).BinaryDataByIDs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/BinaryDataByIDs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).BinaryDataByIDs(ctx, req.(*BinaryDataByIDsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_DeleteTabularDataByFilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteTabularDataByFilterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).DeleteTabularDataByFilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/DeleteTabularDataByFilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).DeleteTabularDataByFilter(ctx, req.(*DeleteTabularDataByFilterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_DeleteBinaryDataByFilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteBinaryDataByFilterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).DeleteBinaryDataByFilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/DeleteBinaryDataByFilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).DeleteBinaryDataByFilter(ctx, req.(*DeleteBinaryDataByFilterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_DeleteBinaryDataByIDs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteBinaryDataByIDsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).DeleteBinaryDataByIDs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/DeleteBinaryDataByIDs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).DeleteBinaryDataByIDs(ctx, req.(*DeleteBinaryDataByIDsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_AddTagsToBinaryDataByFileIDs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddTagsToBinaryDataByFileIDsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).AddTagsToBinaryDataByFileIDs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/AddTagsToBinaryDataByFileIDs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).AddTagsToBinaryDataByFileIDs(ctx, req.(*AddTagsToBinaryDataByFileIDsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_AddTagsToBinaryDataByFilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddTagsToBinaryDataByFilterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).AddTagsToBinaryDataByFilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/AddTagsToBinaryDataByFilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).AddTagsToBinaryDataByFilter(ctx, req.(*AddTagsToBinaryDataByFilterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_RemoveTagsFromBinaryDataByFileIDs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveTagsFromBinaryDataByFileIDsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).RemoveTagsFromBinaryDataByFileIDs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFileIDs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).RemoveTagsFromBinaryDataByFileIDs(ctx, req.(*RemoveTagsFromBinaryDataByFileIDsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_RemoveTagsFromBinaryDataByFilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveTagsFromBinaryDataByFilterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).RemoveTagsFromBinaryDataByFilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/RemoveTagsFromBinaryDataByFilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).RemoveTagsFromBinaryDataByFilter(ctx, req.(*RemoveTagsFromBinaryDataByFilterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _DataService_TagsByFilter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TagsByFilterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DataServiceServer).TagsByFilter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.data.v1.DataService/TagsByFilter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DataServiceServer).TagsByFilter(ctx, req.(*TagsByFilterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// DataService_ServiceDesc is the grpc.ServiceDesc for DataService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DataService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.app.data.v1.DataService",
	HandlerType: (*DataServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TabularDataByFilter",
			Handler:    _DataService_TabularDataByFilter_Handler,
		},
		{
			MethodName: "BinaryDataByFilter",
			Handler:    _DataService_BinaryDataByFilter_Handler,
		},
		{
			MethodName: "BinaryDataByIDs",
			Handler:    _DataService_BinaryDataByIDs_Handler,
		},
		{
			MethodName: "DeleteTabularDataByFilter",
			Handler:    _DataService_DeleteTabularDataByFilter_Handler,
		},
		{
			MethodName: "DeleteBinaryDataByFilter",
			Handler:    _DataService_DeleteBinaryDataByFilter_Handler,
		},
		{
			MethodName: "DeleteBinaryDataByIDs",
			Handler:    _DataService_DeleteBinaryDataByIDs_Handler,
		},
		{
			MethodName: "AddTagsToBinaryDataByFileIDs",
			Handler:    _DataService_AddTagsToBinaryDataByFileIDs_Handler,
		},
		{
			MethodName: "AddTagsToBinaryDataByFilter",
			Handler:    _DataService_AddTagsToBinaryDataByFilter_Handler,
		},
		{
			MethodName: "RemoveTagsFromBinaryDataByFileIDs",
			Handler:    _DataService_RemoveTagsFromBinaryDataByFileIDs_Handler,
		},
		{
			MethodName: "RemoveTagsFromBinaryDataByFilter",
			Handler:    _DataService_RemoveTagsFromBinaryDataByFilter_Handler,
		},
		{
			MethodName: "TagsByFilter",
			Handler:    _DataService_TagsByFilter_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "app/data/v1/data.proto",
}
