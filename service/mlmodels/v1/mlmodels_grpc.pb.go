// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

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

// MLModelServiceClient is the client API for MLModelService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MLModelServiceClient interface {
	// Infer takes an already ordered input tensor as a map, and makes an inference on the model, returning an output data map
	Infer(ctx context.Context, in *InferRequest, opts ...grpc.CallOption) (*InferResponse, error)
	// Metadata returns the metadata associated with the ML model
	Metadata(ctx context.Context, in *MetadataRequest, opts ...grpc.CallOption) (*MetadataResponse, error)
}

type mLModelServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMLModelServiceClient(cc grpc.ClientConnInterface) MLModelServiceClient {
	return &mLModelServiceClient{cc}
}

func (c *mLModelServiceClient) Infer(ctx context.Context, in *InferRequest, opts ...grpc.CallOption) (*InferResponse, error) {
	out := new(InferResponse)
	err := c.cc.Invoke(ctx, "/viam.service.mlmodels.v1.MLModelService/Infer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mLModelServiceClient) Metadata(ctx context.Context, in *MetadataRequest, opts ...grpc.CallOption) (*MetadataResponse, error) {
	out := new(MetadataResponse)
	err := c.cc.Invoke(ctx, "/viam.service.mlmodels.v1.MLModelService/Metadata", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MLModelServiceServer is the server API for MLModelService service.
// All implementations must embed UnimplementedMLModelServiceServer
// for forward compatibility
type MLModelServiceServer interface {
	// Infer takes an already ordered input tensor as a map, and makes an inference on the model, returning an output data map
	Infer(context.Context, *InferRequest) (*InferResponse, error)
	// Metadata returns the metadata associated with the ML model
	Metadata(context.Context, *MetadataRequest) (*MetadataResponse, error)
	mustEmbedUnimplementedMLModelServiceServer()
}

// UnimplementedMLModelServiceServer must be embedded to have forward compatible implementations.
type UnimplementedMLModelServiceServer struct {
}

func (UnimplementedMLModelServiceServer) Infer(context.Context, *InferRequest) (*InferResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Infer not implemented")
}
func (UnimplementedMLModelServiceServer) Metadata(context.Context, *MetadataRequest) (*MetadataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Metadata not implemented")
}
func (UnimplementedMLModelServiceServer) mustEmbedUnimplementedMLModelServiceServer() {}

// UnsafeMLModelServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MLModelServiceServer will
// result in compilation errors.
type UnsafeMLModelServiceServer interface {
	mustEmbedUnimplementedMLModelServiceServer()
}

func RegisterMLModelServiceServer(s grpc.ServiceRegistrar, srv MLModelServiceServer) {
	s.RegisterService(&MLModelService_ServiceDesc, srv)
}

func _MLModelService_Infer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InferRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MLModelServiceServer).Infer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.mlmodels.v1.MLModelService/Infer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MLModelServiceServer).Infer(ctx, req.(*InferRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MLModelService_Metadata_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MetadataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MLModelServiceServer).Metadata(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.service.mlmodels.v1.MLModelService/Metadata",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MLModelServiceServer).Metadata(ctx, req.(*MetadataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MLModelService_ServiceDesc is the grpc.ServiceDesc for MLModelService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MLModelService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.service.mlmodels.v1.MLModelService",
	HandlerType: (*MLModelServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Infer",
			Handler:    _MLModelService_Infer_Handler,
		},
		{
			MethodName: "Metadata",
			Handler:    _MLModelService_Metadata_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service/mlmodels/v1/mlmodels.proto",
}
