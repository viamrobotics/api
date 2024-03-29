// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: app/build/v1/build.proto

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

// BuildServiceClient is the client API for BuildService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BuildServiceClient interface {
	// Asynchronously start a build of a Viam module, with one job per platform.
	StartBuild(ctx context.Context, in *StartBuildRequest, opts ...grpc.CallOption) (*StartBuildResponse, error)
	// Fetch logs from a single job of a single build.
	GetLogs(ctx context.Context, in *GetLogsRequest, opts ...grpc.CallOption) (BuildService_GetLogsClient, error)
	// List the jobs for a module ordered by (build start time, alphabetical platform).
	ListJobs(ctx context.Context, in *ListJobsRequest, opts ...grpc.CallOption) (*ListJobsResponse, error)
}

type buildServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBuildServiceClient(cc grpc.ClientConnInterface) BuildServiceClient {
	return &buildServiceClient{cc}
}

func (c *buildServiceClient) StartBuild(ctx context.Context, in *StartBuildRequest, opts ...grpc.CallOption) (*StartBuildResponse, error) {
	out := new(StartBuildResponse)
	err := c.cc.Invoke(ctx, "/viam.app.build.v1.BuildService/StartBuild", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) GetLogs(ctx context.Context, in *GetLogsRequest, opts ...grpc.CallOption) (BuildService_GetLogsClient, error) {
	stream, err := c.cc.NewStream(ctx, &BuildService_ServiceDesc.Streams[0], "/viam.app.build.v1.BuildService/GetLogs", opts...)
	if err != nil {
		return nil, err
	}
	x := &buildServiceGetLogsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type BuildService_GetLogsClient interface {
	Recv() (*GetLogsResponse, error)
	grpc.ClientStream
}

type buildServiceGetLogsClient struct {
	grpc.ClientStream
}

func (x *buildServiceGetLogsClient) Recv() (*GetLogsResponse, error) {
	m := new(GetLogsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *buildServiceClient) ListJobs(ctx context.Context, in *ListJobsRequest, opts ...grpc.CallOption) (*ListJobsResponse, error) {
	out := new(ListJobsResponse)
	err := c.cc.Invoke(ctx, "/viam.app.build.v1.BuildService/ListJobs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BuildServiceServer is the server API for BuildService service.
// All implementations must embed UnimplementedBuildServiceServer
// for forward compatibility
type BuildServiceServer interface {
	// Asynchronously start a build of a Viam module, with one job per platform.
	StartBuild(context.Context, *StartBuildRequest) (*StartBuildResponse, error)
	// Fetch logs from a single job of a single build.
	GetLogs(*GetLogsRequest, BuildService_GetLogsServer) error
	// List the jobs for a module ordered by (build start time, alphabetical platform).
	ListJobs(context.Context, *ListJobsRequest) (*ListJobsResponse, error)
	mustEmbedUnimplementedBuildServiceServer()
}

// UnimplementedBuildServiceServer must be embedded to have forward compatible implementations.
type UnimplementedBuildServiceServer struct {
}

func (UnimplementedBuildServiceServer) StartBuild(context.Context, *StartBuildRequest) (*StartBuildResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method StartBuild not implemented")
}
func (UnimplementedBuildServiceServer) GetLogs(*GetLogsRequest, BuildService_GetLogsServer) error {
	return status.Errorf(codes.Unimplemented, "method GetLogs not implemented")
}
func (UnimplementedBuildServiceServer) ListJobs(context.Context, *ListJobsRequest) (*ListJobsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListJobs not implemented")
}
func (UnimplementedBuildServiceServer) mustEmbedUnimplementedBuildServiceServer() {}

// UnsafeBuildServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BuildServiceServer will
// result in compilation errors.
type UnsafeBuildServiceServer interface {
	mustEmbedUnimplementedBuildServiceServer()
}

func RegisterBuildServiceServer(s grpc.ServiceRegistrar, srv BuildServiceServer) {
	s.RegisterService(&BuildService_ServiceDesc, srv)
}

func _BuildService_StartBuild_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StartBuildRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).StartBuild(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.build.v1.BuildService/StartBuild",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).StartBuild(ctx, req.(*StartBuildRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BuildService_GetLogs_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetLogsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(BuildServiceServer).GetLogs(m, &buildServiceGetLogsServer{stream})
}

type BuildService_GetLogsServer interface {
	Send(*GetLogsResponse) error
	grpc.ServerStream
}

type buildServiceGetLogsServer struct {
	grpc.ServerStream
}

func (x *buildServiceGetLogsServer) Send(m *GetLogsResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _BuildService_ListJobs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListJobsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).ListJobs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.build.v1.BuildService/ListJobs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).ListJobs(ctx, req.(*ListJobsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BuildService_ServiceDesc is the grpc.ServiceDesc for BuildService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BuildService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.app.build.v1.BuildService",
	HandlerType: (*BuildServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "StartBuild",
			Handler:    _BuildService_StartBuild_Handler,
		},
		{
			MethodName: "ListJobs",
			Handler:    _BuildService_ListJobs_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetLogs",
			Handler:       _BuildService_GetLogs_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "app/build/v1/build.proto",
}
