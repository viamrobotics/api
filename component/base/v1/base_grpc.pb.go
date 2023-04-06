// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package v1

import (
	context "context"
	v1 "go.viam.com/api/common/v1"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// BaseServiceClient is the client API for BaseService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BaseServiceClient interface {
	// MoveStraight moves a robot's base in a straight line by a given distance, expressed in millimeters
	// and a given speed, expressed in millimeters per second
	// This method blocks until completed or cancelled
	MoveStraight(ctx context.Context, in *MoveStraightRequest, opts ...grpc.CallOption) (*MoveStraightResponse, error)
	// Spin spins a robot's base by an given angle, expressed in degrees, and a given
	// angular speed, expressed in degrees per second
	// This method blocks until completed or cancelled
	Spin(ctx context.Context, in *SpinRequest, opts ...grpc.CallOption) (*SpinResponse, error)
	// SetPower sets the linear and angular power of a base
	// -1 -> 1 in terms of power for each direction
	SetPower(ctx context.Context, in *SetPowerRequest, opts ...grpc.CallOption) (*SetPowerResponse, error)
	// SetVelocity sets the linear and angular velocity of a base
	SetVelocity(ctx context.Context, in *SetVelocityRequest, opts ...grpc.CallOption) (*SetVelocityResponse, error)
	// Stop stops a robot's base
	Stop(ctx context.Context, in *StopRequest, opts ...grpc.CallOption) (*StopResponse, error)
	// IsMoving reports if a component is in motion
	IsMoving(ctx context.Context, in *IsMovingRequest, opts ...grpc.CallOption) (*IsMovingResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
}

type baseServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewBaseServiceClient(cc grpc.ClientConnInterface) BaseServiceClient {
	return &baseServiceClient{cc}
}

func (c *baseServiceClient) MoveStraight(ctx context.Context, in *MoveStraightRequest, opts ...grpc.CallOption) (*MoveStraightResponse, error) {
	out := new(MoveStraightResponse)
	err := c.cc.Invoke(ctx, "/viam.component.base.v1.BaseService/MoveStraight", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *baseServiceClient) Spin(ctx context.Context, in *SpinRequest, opts ...grpc.CallOption) (*SpinResponse, error) {
	out := new(SpinResponse)
	err := c.cc.Invoke(ctx, "/viam.component.base.v1.BaseService/Spin", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *baseServiceClient) SetPower(ctx context.Context, in *SetPowerRequest, opts ...grpc.CallOption) (*SetPowerResponse, error) {
	out := new(SetPowerResponse)
	err := c.cc.Invoke(ctx, "/viam.component.base.v1.BaseService/SetPower", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *baseServiceClient) SetVelocity(ctx context.Context, in *SetVelocityRequest, opts ...grpc.CallOption) (*SetVelocityResponse, error) {
	out := new(SetVelocityResponse)
	err := c.cc.Invoke(ctx, "/viam.component.base.v1.BaseService/SetVelocity", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *baseServiceClient) Stop(ctx context.Context, in *StopRequest, opts ...grpc.CallOption) (*StopResponse, error) {
	out := new(StopResponse)
	err := c.cc.Invoke(ctx, "/viam.component.base.v1.BaseService/Stop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *baseServiceClient) IsMoving(ctx context.Context, in *IsMovingRequest, opts ...grpc.CallOption) (*IsMovingResponse, error) {
	out := new(IsMovingResponse)
	err := c.cc.Invoke(ctx, "/viam.component.base.v1.BaseService/IsMoving", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *baseServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, "/viam.component.base.v1.BaseService/DoCommand", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BaseServiceServer is the server API for BaseService service.
// All implementations must embed UnimplementedBaseServiceServer
// for forward compatibility
type BaseServiceServer interface {
	// MoveStraight moves a robot's base in a straight line by a given distance, expressed in millimeters
	// and a given speed, expressed in millimeters per second
	// This method blocks until completed or cancelled
	MoveStraight(context.Context, *MoveStraightRequest) (*MoveStraightResponse, error)
	// Spin spins a robot's base by an given angle, expressed in degrees, and a given
	// angular speed, expressed in degrees per second
	// This method blocks until completed or cancelled
	Spin(context.Context, *SpinRequest) (*SpinResponse, error)
	// SetPower sets the linear and angular power of a base
	// -1 -> 1 in terms of power for each direction
	SetPower(context.Context, *SetPowerRequest) (*SetPowerResponse, error)
	// SetVelocity sets the linear and angular velocity of a base
	SetVelocity(context.Context, *SetVelocityRequest) (*SetVelocityResponse, error)
	// Stop stops a robot's base
	Stop(context.Context, *StopRequest) (*StopResponse, error)
	// IsMoving reports if a component is in motion
	IsMoving(context.Context, *IsMovingRequest) (*IsMovingResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	mustEmbedUnimplementedBaseServiceServer()
}

// UnimplementedBaseServiceServer must be embedded to have forward compatible implementations.
type UnimplementedBaseServiceServer struct {
}

func (UnimplementedBaseServiceServer) MoveStraight(context.Context, *MoveStraightRequest) (*MoveStraightResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MoveStraight not implemented")
}
func (UnimplementedBaseServiceServer) Spin(context.Context, *SpinRequest) (*SpinResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Spin not implemented")
}
func (UnimplementedBaseServiceServer) SetPower(context.Context, *SetPowerRequest) (*SetPowerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetPower not implemented")
}
func (UnimplementedBaseServiceServer) SetVelocity(context.Context, *SetVelocityRequest) (*SetVelocityResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetVelocity not implemented")
}
func (UnimplementedBaseServiceServer) Stop(context.Context, *StopRequest) (*StopResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Stop not implemented")
}
func (UnimplementedBaseServiceServer) IsMoving(context.Context, *IsMovingRequest) (*IsMovingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsMoving not implemented")
}
func (UnimplementedBaseServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedBaseServiceServer) mustEmbedUnimplementedBaseServiceServer() {}

// UnsafeBaseServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BaseServiceServer will
// result in compilation errors.
type UnsafeBaseServiceServer interface {
	mustEmbedUnimplementedBaseServiceServer()
}

func RegisterBaseServiceServer(s grpc.ServiceRegistrar, srv BaseServiceServer) {
	s.RegisterService(&BaseService_ServiceDesc, srv)
}

func _BaseService_MoveStraight_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MoveStraightRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BaseServiceServer).MoveStraight(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.base.v1.BaseService/MoveStraight",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BaseServiceServer).MoveStraight(ctx, req.(*MoveStraightRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BaseService_Spin_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SpinRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BaseServiceServer).Spin(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.base.v1.BaseService/Spin",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BaseServiceServer).Spin(ctx, req.(*SpinRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BaseService_SetPower_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetPowerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BaseServiceServer).SetPower(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.base.v1.BaseService/SetPower",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BaseServiceServer).SetPower(ctx, req.(*SetPowerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BaseService_SetVelocity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetVelocityRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BaseServiceServer).SetVelocity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.base.v1.BaseService/SetVelocity",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BaseServiceServer).SetVelocity(ctx, req.(*SetVelocityRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BaseService_Stop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StopRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BaseServiceServer).Stop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.base.v1.BaseService/Stop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BaseServiceServer).Stop(ctx, req.(*StopRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BaseService_IsMoving_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IsMovingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BaseServiceServer).IsMoving(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.base.v1.BaseService/IsMoving",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BaseServiceServer).IsMoving(ctx, req.(*IsMovingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BaseService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BaseServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.base.v1.BaseService/DoCommand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BaseServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BaseService_ServiceDesc is the grpc.ServiceDesc for BaseService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BaseService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.component.base.v1.BaseService",
	HandlerType: (*BaseServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "MoveStraight",
			Handler:    _BaseService_MoveStraight_Handler,
		},
		{
			MethodName: "Spin",
			Handler:    _BaseService_Spin_Handler,
		},
		{
			MethodName: "SetPower",
			Handler:    _BaseService_SetPower_Handler,
		},
		{
			MethodName: "SetVelocity",
			Handler:    _BaseService_SetVelocity_Handler,
		},
		{
			MethodName: "Stop",
			Handler:    _BaseService_Stop_Handler,
		},
		{
			MethodName: "IsMoving",
			Handler:    _BaseService_IsMoving_Handler,
		},
		{
			MethodName: "DoCommand",
			Handler:    _BaseService_DoCommand_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "component/base/v1/base.proto",
}
