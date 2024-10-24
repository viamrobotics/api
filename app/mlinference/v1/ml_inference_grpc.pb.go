// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: app/mlinference/v1/ml_inference.proto

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

// MLInferenceServiceClient is the client API for MLInferenceService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MLInferenceServiceClient interface {
	GetInference(ctx context.Context, in *GetInferenceRequest, opts ...grpc.CallOption) (*GetInferenceResponse, error)
}

type mLInferenceServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMLInferenceServiceClient(cc grpc.ClientConnInterface) MLInferenceServiceClient {
	return &mLInferenceServiceClient{cc}
}

func (c *mLInferenceServiceClient) GetInference(ctx context.Context, in *GetInferenceRequest, opts ...grpc.CallOption) (*GetInferenceResponse, error) {
	out := new(GetInferenceResponse)
	err := c.cc.Invoke(ctx, "/viam.app.mlinference.v1.MLInferenceService/GetInference", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MLInferenceServiceServer is the server API for MLInferenceService service.
// All implementations must embed UnimplementedMLInferenceServiceServer
// for forward compatibility
type MLInferenceServiceServer interface {
	GetInference(context.Context, *GetInferenceRequest) (*GetInferenceResponse, error)
	mustEmbedUnimplementedMLInferenceServiceServer()
}

// UnimplementedMLInferenceServiceServer must be embedded to have forward compatible implementations.
type UnimplementedMLInferenceServiceServer struct {
}

func (UnimplementedMLInferenceServiceServer) GetInference(context.Context, *GetInferenceRequest) (*GetInferenceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetInference not implemented")
}
func (UnimplementedMLInferenceServiceServer) mustEmbedUnimplementedMLInferenceServiceServer() {}

// UnsafeMLInferenceServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MLInferenceServiceServer will
// result in compilation errors.
type UnsafeMLInferenceServiceServer interface {
	mustEmbedUnimplementedMLInferenceServiceServer()
}

func RegisterMLInferenceServiceServer(s grpc.ServiceRegistrar, srv MLInferenceServiceServer) {
	s.RegisterService(&MLInferenceService_ServiceDesc, srv)
}

func _MLInferenceService_GetInference_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetInferenceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MLInferenceServiceServer).GetInference(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.mlinference.v1.MLInferenceService/GetInference",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MLInferenceServiceServer).GetInference(ctx, req.(*GetInferenceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MLInferenceService_ServiceDesc is the grpc.ServiceDesc for MLInferenceService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MLInferenceService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.app.mlinference.v1.MLInferenceService",
	HandlerType: (*MLInferenceServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetInference",
			Handler:    _MLInferenceService_GetInference_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "app/mlinference/v1/ml_inference.proto",
}
