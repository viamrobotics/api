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

// PackageServiceClient is the client API for PackageService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type PackageServiceClient interface {
	// AddPackage uploads a package's contents and information to the cloud
	AddPackage(ctx context.Context, opts ...grpc.CallOption) (PackageService_AddPackageClient, error)
	// DeletePackage receives an authenticated request with the package name and array of versions and removes the associated packages
	DeletePackage(ctx context.Context, in *DeletePackageRequest, opts ...grpc.CallOption) (*DeletePackageResponse, error)
	// GetPackages receives an authenticated request with the package name and version and, if present, generates returns the URL
	GetPackages(ctx context.Context, in *GetPackagesRequest, opts ...grpc.CallOption) (*GetPackagesResponse, error)
}

type packageServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPackageServiceClient(cc grpc.ClientConnInterface) PackageServiceClient {
	return &packageServiceClient{cc}
}

func (c *packageServiceClient) AddPackage(ctx context.Context, opts ...grpc.CallOption) (PackageService_AddPackageClient, error) {
	stream, err := c.cc.NewStream(ctx, &PackageService_ServiceDesc.Streams[0], "/viam.app.package.v1.PackageService/AddPackage", opts...)
	if err != nil {
		return nil, err
	}
	x := &packageServiceAddPackageClient{stream}
	return x, nil
}

type PackageService_AddPackageClient interface {
	Send(*AddPackageRequest) error
	CloseAndRecv() (*AddPackageResponse, error)
	grpc.ClientStream
}

type packageServiceAddPackageClient struct {
	grpc.ClientStream
}

func (x *packageServiceAddPackageClient) Send(m *AddPackageRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *packageServiceAddPackageClient) CloseAndRecv() (*AddPackageResponse, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(AddPackageResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *packageServiceClient) DeletePackage(ctx context.Context, in *DeletePackageRequest, opts ...grpc.CallOption) (*DeletePackageResponse, error) {
	out := new(DeletePackageResponse)
	err := c.cc.Invoke(ctx, "/viam.app.package.v1.PackageService/DeletePackage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *packageServiceClient) GetPackages(ctx context.Context, in *GetPackagesRequest, opts ...grpc.CallOption) (*GetPackagesResponse, error) {
	out := new(GetPackagesResponse)
	err := c.cc.Invoke(ctx, "/viam.app.package.v1.PackageService/GetPackages", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PackageServiceServer is the server API for PackageService service.
// All implementations must embed UnimplementedPackageServiceServer
// for forward compatibility
type PackageServiceServer interface {
	// AddPackage uploads a package's contents and information to the cloud
	AddPackage(PackageService_AddPackageServer) error
	// DeletePackage receives an authenticated request with the package name and array of versions and removes the associated packages
	DeletePackage(context.Context, *DeletePackageRequest) (*DeletePackageResponse, error)
	// GetPackages receives an authenticated request with the package name and version and, if present, generates returns the URL
	GetPackages(context.Context, *GetPackagesRequest) (*GetPackagesResponse, error)
	mustEmbedUnimplementedPackageServiceServer()
}

// UnimplementedPackageServiceServer must be embedded to have forward compatible implementations.
type UnimplementedPackageServiceServer struct {
}

func (UnimplementedPackageServiceServer) AddPackage(PackageService_AddPackageServer) error {
	return status.Errorf(codes.Unimplemented, "method AddPackage not implemented")
}
func (UnimplementedPackageServiceServer) DeletePackage(context.Context, *DeletePackageRequest) (*DeletePackageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeletePackage not implemented")
}
func (UnimplementedPackageServiceServer) GetPackages(context.Context, *GetPackagesRequest) (*GetPackagesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPackages not implemented")
}
func (UnimplementedPackageServiceServer) mustEmbedUnimplementedPackageServiceServer() {}

// UnsafePackageServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to PackageServiceServer will
// result in compilation errors.
type UnsafePackageServiceServer interface {
	mustEmbedUnimplementedPackageServiceServer()
}

func RegisterPackageServiceServer(s grpc.ServiceRegistrar, srv PackageServiceServer) {
	s.RegisterService(&PackageService_ServiceDesc, srv)
}

func _PackageService_AddPackage_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(PackageServiceServer).AddPackage(&packageServiceAddPackageServer{stream})
}

type PackageService_AddPackageServer interface {
	SendAndClose(*AddPackageResponse) error
	Recv() (*AddPackageRequest, error)
	grpc.ServerStream
}

type packageServiceAddPackageServer struct {
	grpc.ServerStream
}

func (x *packageServiceAddPackageServer) SendAndClose(m *AddPackageResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *packageServiceAddPackageServer) Recv() (*AddPackageRequest, error) {
	m := new(AddPackageRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _PackageService_DeletePackage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeletePackageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PackageServiceServer).DeletePackage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.package.v1.PackageService/DeletePackage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PackageServiceServer).DeletePackage(ctx, req.(*DeletePackageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _PackageService_GetPackages_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPackagesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PackageServiceServer).GetPackages(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.app.package.v1.PackageService/GetPackages",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PackageServiceServer).GetPackages(ctx, req.(*GetPackagesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// PackageService_ServiceDesc is the grpc.ServiceDesc for PackageService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var PackageService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.app.package.v1.PackageService",
	HandlerType: (*PackageServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DeletePackage",
			Handler:    _PackageService_DeletePackage_Handler,
		},
		{
			MethodName: "GetPackages",
			Handler:    _PackageService_GetPackages_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "AddPackage",
			Handler:       _PackageService_AddPackage_Handler,
			ClientStreams: true,
		},
	},
	Metadata: "app/package/v1/package.proto",
}
