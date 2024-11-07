// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
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
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	BuildService_StartBuild_FullMethodName    = "/viam.app.build.v1.BuildService/StartBuild"
	BuildService_GetLogs_FullMethodName       = "/viam.app.build.v1.BuildService/GetLogs"
	BuildService_ListJobs_FullMethodName      = "/viam.app.build.v1.BuildService/ListJobs"
	BuildService_LinkRepo_FullMethodName      = "/viam.app.build.v1.BuildService/LinkRepo"
	BuildService_UnlinkRepo_FullMethodName    = "/viam.app.build.v1.BuildService/UnlinkRepo"
	BuildService_ListRepoLinks_FullMethodName = "/viam.app.build.v1.BuildService/ListRepoLinks"
	BuildService_ListAppLinks_FullMethodName  = "/viam.app.build.v1.BuildService/ListAppLinks"
	BuildService_RemoveAppLink_FullMethodName = "/viam.app.build.v1.BuildService/RemoveAppLink"
	BuildService_LinkOrg_FullMethodName       = "/viam.app.build.v1.BuildService/LinkOrg"
	BuildService_UnlinkOrg_FullMethodName     = "/viam.app.build.v1.BuildService/UnlinkOrg"
)

// BuildServiceClient is the client API for BuildService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// 2023-11-28: Unstable API. Will change.
type BuildServiceClient interface {
	// Asynchronously start a build of a Viam module, with one job per platform.
	StartBuild(ctx context.Context, in *StartBuildRequest, opts ...grpc.CallOption) (*StartBuildResponse, error)
	// Fetch logs from a single job of a single build.
	GetLogs(ctx context.Context, in *GetLogsRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[GetLogsResponse], error)
	// List the jobs for a module ordered by (build start time, alphabetical platform).
	ListJobs(ctx context.Context, in *ListJobsRequest, opts ...grpc.CallOption) (*ListJobsResponse, error)
	// link a git repo to a module.
	LinkRepo(ctx context.Context, in *LinkRepoRequest, opts ...grpc.CallOption) (*LinkRepoResponse, error)
	// delete a module-repo link.
	UnlinkRepo(ctx context.Context, in *UnlinkRepoRequest, opts ...grpc.CallOption) (*UnlinkRepoResponse, error)
	// list module-repo links owned by user (directly or through orgs).
	ListRepoLinks(ctx context.Context, in *ListRepoLinksRequest, opts ...grpc.CallOption) (*ListRepoLinksResponse, error)
	// list external oauth apps owned by user (directly or through orgs).
	ListAppLinks(ctx context.Context, in *ListAppLinksRequest, opts ...grpc.CallOption) (*ListAppLinksResponse, error)
	// delete a viam-app link.
	RemoveAppLink(ctx context.Context, in *RemoveAppLinkRequest, opts ...grpc.CallOption) (*RemoveAppLinkResponse, error)
	// add an org to an oauth app link.
	LinkOrg(ctx context.Context, in *LinkOrgRequest, opts ...grpc.CallOption) (*LinkOrgResponse, error)
	// remove an org from an oauth app link.
	UnlinkOrg(ctx context.Context, in *UnlinkOrgRequest, opts ...grpc.CallOption) (*UnlinkOrgResponse, error)
}

type buildServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBuildServiceClient(cc grpc.ClientConnInterface) BuildServiceClient {
	return &buildServiceClient{cc}
}

func (c *buildServiceClient) StartBuild(ctx context.Context, in *StartBuildRequest, opts ...grpc.CallOption) (*StartBuildResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(StartBuildResponse)
	err := c.cc.Invoke(ctx, BuildService_StartBuild_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) GetLogs(ctx context.Context, in *GetLogsRequest, opts ...grpc.CallOption) (grpc.ServerStreamingClient[GetLogsResponse], error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	stream, err := c.cc.NewStream(ctx, &BuildService_ServiceDesc.Streams[0], BuildService_GetLogs_FullMethodName, cOpts...)
	if err != nil {
		return nil, err
	}
	x := &grpc.GenericClientStream[GetLogsRequest, GetLogsResponse]{ClientStream: stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type BuildService_GetLogsClient = grpc.ServerStreamingClient[GetLogsResponse]

func (c *buildServiceClient) ListJobs(ctx context.Context, in *ListJobsRequest, opts ...grpc.CallOption) (*ListJobsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListJobsResponse)
	err := c.cc.Invoke(ctx, BuildService_ListJobs_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) LinkRepo(ctx context.Context, in *LinkRepoRequest, opts ...grpc.CallOption) (*LinkRepoResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(LinkRepoResponse)
	err := c.cc.Invoke(ctx, BuildService_LinkRepo_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) UnlinkRepo(ctx context.Context, in *UnlinkRepoRequest, opts ...grpc.CallOption) (*UnlinkRepoResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UnlinkRepoResponse)
	err := c.cc.Invoke(ctx, BuildService_UnlinkRepo_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) ListRepoLinks(ctx context.Context, in *ListRepoLinksRequest, opts ...grpc.CallOption) (*ListRepoLinksResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListRepoLinksResponse)
	err := c.cc.Invoke(ctx, BuildService_ListRepoLinks_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) ListAppLinks(ctx context.Context, in *ListAppLinksRequest, opts ...grpc.CallOption) (*ListAppLinksResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListAppLinksResponse)
	err := c.cc.Invoke(ctx, BuildService_ListAppLinks_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) RemoveAppLink(ctx context.Context, in *RemoveAppLinkRequest, opts ...grpc.CallOption) (*RemoveAppLinkResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(RemoveAppLinkResponse)
	err := c.cc.Invoke(ctx, BuildService_RemoveAppLink_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) LinkOrg(ctx context.Context, in *LinkOrgRequest, opts ...grpc.CallOption) (*LinkOrgResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(LinkOrgResponse)
	err := c.cc.Invoke(ctx, BuildService_LinkOrg_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *buildServiceClient) UnlinkOrg(ctx context.Context, in *UnlinkOrgRequest, opts ...grpc.CallOption) (*UnlinkOrgResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UnlinkOrgResponse)
	err := c.cc.Invoke(ctx, BuildService_UnlinkOrg_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BuildServiceServer is the server API for BuildService service.
// All implementations must embed UnimplementedBuildServiceServer
// for forward compatibility.
//
// 2023-11-28: Unstable API. Will change.
type BuildServiceServer interface {
	// Asynchronously start a build of a Viam module, with one job per platform.
	StartBuild(context.Context, *StartBuildRequest) (*StartBuildResponse, error)
	// Fetch logs from a single job of a single build.
	GetLogs(*GetLogsRequest, grpc.ServerStreamingServer[GetLogsResponse]) error
	// List the jobs for a module ordered by (build start time, alphabetical platform).
	ListJobs(context.Context, *ListJobsRequest) (*ListJobsResponse, error)
	// link a git repo to a module.
	LinkRepo(context.Context, *LinkRepoRequest) (*LinkRepoResponse, error)
	// delete a module-repo link.
	UnlinkRepo(context.Context, *UnlinkRepoRequest) (*UnlinkRepoResponse, error)
	// list module-repo links owned by user (directly or through orgs).
	ListRepoLinks(context.Context, *ListRepoLinksRequest) (*ListRepoLinksResponse, error)
	// list external oauth apps owned by user (directly or through orgs).
	ListAppLinks(context.Context, *ListAppLinksRequest) (*ListAppLinksResponse, error)
	// delete a viam-app link.
	RemoveAppLink(context.Context, *RemoveAppLinkRequest) (*RemoveAppLinkResponse, error)
	// add an org to an oauth app link.
	LinkOrg(context.Context, *LinkOrgRequest) (*LinkOrgResponse, error)
	// remove an org from an oauth app link.
	UnlinkOrg(context.Context, *UnlinkOrgRequest) (*UnlinkOrgResponse, error)
	mustEmbedUnimplementedBuildServiceServer()
}

// UnimplementedBuildServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedBuildServiceServer struct{}

func (UnimplementedBuildServiceServer) StartBuild(context.Context, *StartBuildRequest) (*StartBuildResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method StartBuild not implemented")
}
func (UnimplementedBuildServiceServer) GetLogs(*GetLogsRequest, grpc.ServerStreamingServer[GetLogsResponse]) error {
	return status.Errorf(codes.Unimplemented, "method GetLogs not implemented")
}
func (UnimplementedBuildServiceServer) ListJobs(context.Context, *ListJobsRequest) (*ListJobsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListJobs not implemented")
}
func (UnimplementedBuildServiceServer) LinkRepo(context.Context, *LinkRepoRequest) (*LinkRepoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LinkRepo not implemented")
}
func (UnimplementedBuildServiceServer) UnlinkRepo(context.Context, *UnlinkRepoRequest) (*UnlinkRepoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UnlinkRepo not implemented")
}
func (UnimplementedBuildServiceServer) ListRepoLinks(context.Context, *ListRepoLinksRequest) (*ListRepoLinksResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListRepoLinks not implemented")
}
func (UnimplementedBuildServiceServer) ListAppLinks(context.Context, *ListAppLinksRequest) (*ListAppLinksResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAppLinks not implemented")
}
func (UnimplementedBuildServiceServer) RemoveAppLink(context.Context, *RemoveAppLinkRequest) (*RemoveAppLinkResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveAppLink not implemented")
}
func (UnimplementedBuildServiceServer) LinkOrg(context.Context, *LinkOrgRequest) (*LinkOrgResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LinkOrg not implemented")
}
func (UnimplementedBuildServiceServer) UnlinkOrg(context.Context, *UnlinkOrgRequest) (*UnlinkOrgResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UnlinkOrg not implemented")
}
func (UnimplementedBuildServiceServer) mustEmbedUnimplementedBuildServiceServer() {}
func (UnimplementedBuildServiceServer) testEmbeddedByValue()                      {}

// UnsafeBuildServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BuildServiceServer will
// result in compilation errors.
type UnsafeBuildServiceServer interface {
	mustEmbedUnimplementedBuildServiceServer()
}

func RegisterBuildServiceServer(s grpc.ServiceRegistrar, srv BuildServiceServer) {
	// If the following call pancis, it indicates UnimplementedBuildServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
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
		FullMethod: BuildService_StartBuild_FullMethodName,
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
	return srv.(BuildServiceServer).GetLogs(m, &grpc.GenericServerStream[GetLogsRequest, GetLogsResponse]{ServerStream: stream})
}

// This type alias is provided for backwards compatibility with existing code that references the prior non-generic stream type by name.
type BuildService_GetLogsServer = grpc.ServerStreamingServer[GetLogsResponse]

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
		FullMethod: BuildService_ListJobs_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).ListJobs(ctx, req.(*ListJobsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BuildService_LinkRepo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LinkRepoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).LinkRepo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BuildService_LinkRepo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).LinkRepo(ctx, req.(*LinkRepoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BuildService_UnlinkRepo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UnlinkRepoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).UnlinkRepo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BuildService_UnlinkRepo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).UnlinkRepo(ctx, req.(*UnlinkRepoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BuildService_ListRepoLinks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRepoLinksRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).ListRepoLinks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BuildService_ListRepoLinks_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).ListRepoLinks(ctx, req.(*ListRepoLinksRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BuildService_ListAppLinks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAppLinksRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).ListAppLinks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BuildService_ListAppLinks_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).ListAppLinks(ctx, req.(*ListAppLinksRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BuildService_RemoveAppLink_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveAppLinkRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).RemoveAppLink(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BuildService_RemoveAppLink_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).RemoveAppLink(ctx, req.(*RemoveAppLinkRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BuildService_LinkOrg_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LinkOrgRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).LinkOrg(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BuildService_LinkOrg_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).LinkOrg(ctx, req.(*LinkOrgRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BuildService_UnlinkOrg_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UnlinkOrgRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BuildServiceServer).UnlinkOrg(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BuildService_UnlinkOrg_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BuildServiceServer).UnlinkOrg(ctx, req.(*UnlinkOrgRequest))
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
		{
			MethodName: "LinkRepo",
			Handler:    _BuildService_LinkRepo_Handler,
		},
		{
			MethodName: "UnlinkRepo",
			Handler:    _BuildService_UnlinkRepo_Handler,
		},
		{
			MethodName: "ListRepoLinks",
			Handler:    _BuildService_ListRepoLinks_Handler,
		},
		{
			MethodName: "ListAppLinks",
			Handler:    _BuildService_ListAppLinks_Handler,
		},
		{
			MethodName: "RemoveAppLink",
			Handler:    _BuildService_RemoveAppLink_Handler,
		},
		{
			MethodName: "LinkOrg",
			Handler:    _BuildService_LinkOrg_Handler,
		},
		{
			MethodName: "UnlinkOrg",
			Handler:    _BuildService_UnlinkOrg_Handler,
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
