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

// ServoServiceClient is the client API for ServoService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServoServiceClient interface {
	// Move requests the servo of the underlying robot to move.
	// This will block until done or a new operation cancels this one
	Move(ctx context.Context, in *MoveRequest, opts ...grpc.CallOption) (*MoveResponse, error)
	// GetPosition returns the current set angle (degrees) of the servo of the underlying robot.
	GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error)
	// Stop stops a robot's servo
	Stop(ctx context.Context, in *StopRequest, opts ...grpc.CallOption) (*StopResponse, error)
	// IsMoving reports if a component is in motion
	IsMoving(ctx context.Context, in *IsMovingRequest, opts ...grpc.CallOption) (*IsMovingResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
}

type servoServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewServoServiceClient(cc grpc.ClientConnInterface) ServoServiceClient {
	return &servoServiceClient{cc}
}

func (c *servoServiceClient) Move(ctx context.Context, in *MoveRequest, opts ...grpc.CallOption) (*MoveResponse, error) {
	out := new(MoveResponse)
	err := c.cc.Invoke(ctx, "/viam.component.servo.v1.ServoService/Move", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servoServiceClient) GetPosition(ctx context.Context, in *GetPositionRequest, opts ...grpc.CallOption) (*GetPositionResponse, error) {
	out := new(GetPositionResponse)
	err := c.cc.Invoke(ctx, "/viam.component.servo.v1.ServoService/GetPosition", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servoServiceClient) Stop(ctx context.Context, in *StopRequest, opts ...grpc.CallOption) (*StopResponse, error) {
	out := new(StopResponse)
	err := c.cc.Invoke(ctx, "/viam.component.servo.v1.ServoService/Stop", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servoServiceClient) IsMoving(ctx context.Context, in *IsMovingRequest, opts ...grpc.CallOption) (*IsMovingResponse, error) {
	out := new(IsMovingResponse)
	err := c.cc.Invoke(ctx, "/viam.component.servo.v1.ServoService/IsMoving", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *servoServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, "/viam.component.servo.v1.ServoService/DoCommand", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServoServiceServer is the server API for ServoService service.
// All implementations must embed UnimplementedServoServiceServer
// for forward compatibility
type ServoServiceServer interface {
	// Move requests the servo of the underlying robot to move.
	// This will block until done or a new operation cancels this one
	Move(context.Context, *MoveRequest) (*MoveResponse, error)
	// GetPosition returns the current set angle (degrees) of the servo of the underlying robot.
	GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error)
	// Stop stops a robot's servo
	Stop(context.Context, *StopRequest) (*StopResponse, error)
	// IsMoving reports if a component is in motion
	IsMoving(context.Context, *IsMovingRequest) (*IsMovingResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	mustEmbedUnimplementedServoServiceServer()
}

// UnimplementedServoServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServoServiceServer struct {
}

func (UnimplementedServoServiceServer) Move(context.Context, *MoveRequest) (*MoveResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Move not implemented")
}
func (UnimplementedServoServiceServer) GetPosition(context.Context, *GetPositionRequest) (*GetPositionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPosition not implemented")
}
func (UnimplementedServoServiceServer) Stop(context.Context, *StopRequest) (*StopResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Stop not implemented")
}
func (UnimplementedServoServiceServer) IsMoving(context.Context, *IsMovingRequest) (*IsMovingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsMoving not implemented")
}
func (UnimplementedServoServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedServoServiceServer) mustEmbedUnimplementedServoServiceServer() {}

// UnsafeServoServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServoServiceServer will
// result in compilation errors.
type UnsafeServoServiceServer interface {
	mustEmbedUnimplementedServoServiceServer()
}

func RegisterServoServiceServer(s grpc.ServiceRegistrar, srv ServoServiceServer) {
	s.RegisterService(&ServoService_ServiceDesc, srv)
}

func _ServoService_Move_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MoveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServoServiceServer).Move(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.servo.v1.ServoService/Move",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServoServiceServer).Move(ctx, req.(*MoveRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServoService_GetPosition_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPositionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServoServiceServer).GetPosition(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.servo.v1.ServoService/GetPosition",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServoServiceServer).GetPosition(ctx, req.(*GetPositionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServoService_Stop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StopRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServoServiceServer).Stop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.servo.v1.ServoService/Stop",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServoServiceServer).Stop(ctx, req.(*StopRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServoService_IsMoving_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IsMovingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServoServiceServer).IsMoving(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.servo.v1.ServoService/IsMoving",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServoServiceServer).IsMoving(ctx, req.(*IsMovingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ServoService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServoServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/viam.component.servo.v1.ServoService/DoCommand",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServoServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ServoService_ServiceDesc is the grpc.ServiceDesc for ServoService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ServoService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.component.servo.v1.ServoService",
	HandlerType: (*ServoServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Move",
			Handler:    _ServoService_Move_Handler,
		},
		{
			MethodName: "GetPosition",
			Handler:    _ServoService_GetPosition_Handler,
		},
		{
			MethodName: "Stop",
			Handler:    _ServoService_Stop_Handler,
		},
		{
			MethodName: "IsMoving",
			Handler:    _ServoService_IsMoving_Handler,
		},
		{
			MethodName: "DoCommand",
			Handler:    _ServoService_DoCommand_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "component/servo/v1/servo.proto",
}
