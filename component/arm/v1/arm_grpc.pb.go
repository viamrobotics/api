// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: component/arm/v1/arm.proto

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
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	ArmService_GetEndPosition_FullMethodName            = "/viam.component.arm.v1.ArmService/GetEndPosition"
	ArmService_MoveToPosition_FullMethodName            = "/viam.component.arm.v1.ArmService/MoveToPosition"
	ArmService_GetJointPositions_FullMethodName         = "/viam.component.arm.v1.ArmService/GetJointPositions"
	ArmService_MoveToJointPositions_FullMethodName      = "/viam.component.arm.v1.ArmService/MoveToJointPositions"
	ArmService_MoveThroughJointPositions_FullMethodName = "/viam.component.arm.v1.ArmService/MoveThroughJointPositions"
	ArmService_Stop_FullMethodName                      = "/viam.component.arm.v1.ArmService/Stop"
	ArmService_IsMoving_FullMethodName                  = "/viam.component.arm.v1.ArmService/IsMoving"
	ArmService_DoCommand_FullMethodName                 = "/viam.component.arm.v1.ArmService/DoCommand"
	ArmService_GetKinematics_FullMethodName             = "/viam.component.arm.v1.ArmService/GetKinematics"
	ArmService_GetGeometries_FullMethodName             = "/viam.component.arm.v1.ArmService/GetGeometries"
)

// ArmServiceClient is the client API for ArmService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
//
// An ArmService services all arms associated with a robot
type ArmServiceClient interface {
	// GetEndPosition gets the current position the end of the robot's arm expressed as X,Y,Z,ox,oy,oz,theta
	GetEndPosition(ctx context.Context, in *GetEndPositionRequest, opts ...grpc.CallOption) (*GetEndPositionResponse, error)
	// MoveToPosition moves the mount point of the robot's end effector to the requested position.
	// This will block until done or a new operation cancels this one
	MoveToPosition(ctx context.Context, in *MoveToPositionRequest, opts ...grpc.CallOption) (*MoveToPositionResponse, error)
	// GetJointPositions lists the joint positions (in degrees) of every joint on a robot
	GetJointPositions(ctx context.Context, in *GetJointPositionsRequest, opts ...grpc.CallOption) (*GetJointPositionsResponse, error)
	// MoveToJointPositions moves every joint on a robot's arm to specified angles which are expressed in degrees
	// This will block until done or a new operation cancels this one
	MoveToJointPositions(ctx context.Context, in *MoveToJointPositionsRequest, opts ...grpc.CallOption) (*MoveToJointPositionsResponse, error)
	// MoveThroughJointPositions moves every joint on a robot's arm to the specified JointPositions in the order they are specified,
	// obeying the specified velocity and acceleration limits.
	// This will block until done or a new operation cancels this one
	MoveThroughJointPositions(ctx context.Context, in *MoveThroughJointPositionsRequest, opts ...grpc.CallOption) (*MoveThroughJointPositionsResponse, error)
	// Stop stops a robot's arm
	Stop(ctx context.Context, in *StopRequest, opts ...grpc.CallOption) (*StopResponse, error)
	// IsMoving reports if a component is in motion
	IsMoving(ctx context.Context, in *IsMovingRequest, opts ...grpc.CallOption) (*IsMovingResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error)
	// GetKinematics returns the kinematics file for the component
	GetKinematics(ctx context.Context, in *v1.GetKinematicsRequest, opts ...grpc.CallOption) (*v1.GetKinematicsResponse, error)
	// GetGeometries returns the geometries of the component in their current configuration
	GetGeometries(ctx context.Context, in *v1.GetGeometriesRequest, opts ...grpc.CallOption) (*v1.GetGeometriesResponse, error)
}

type armServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewArmServiceClient(cc grpc.ClientConnInterface) ArmServiceClient {
	return &armServiceClient{cc}
}

func (c *armServiceClient) GetEndPosition(ctx context.Context, in *GetEndPositionRequest, opts ...grpc.CallOption) (*GetEndPositionResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetEndPositionResponse)
	err := c.cc.Invoke(ctx, ArmService_GetEndPosition_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) MoveToPosition(ctx context.Context, in *MoveToPositionRequest, opts ...grpc.CallOption) (*MoveToPositionResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(MoveToPositionResponse)
	err := c.cc.Invoke(ctx, ArmService_MoveToPosition_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) GetJointPositions(ctx context.Context, in *GetJointPositionsRequest, opts ...grpc.CallOption) (*GetJointPositionsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetJointPositionsResponse)
	err := c.cc.Invoke(ctx, ArmService_GetJointPositions_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) MoveToJointPositions(ctx context.Context, in *MoveToJointPositionsRequest, opts ...grpc.CallOption) (*MoveToJointPositionsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(MoveToJointPositionsResponse)
	err := c.cc.Invoke(ctx, ArmService_MoveToJointPositions_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) MoveThroughJointPositions(ctx context.Context, in *MoveThroughJointPositionsRequest, opts ...grpc.CallOption) (*MoveThroughJointPositionsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(MoveThroughJointPositionsResponse)
	err := c.cc.Invoke(ctx, ArmService_MoveThroughJointPositions_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) Stop(ctx context.Context, in *StopRequest, opts ...grpc.CallOption) (*StopResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(StopResponse)
	err := c.cc.Invoke(ctx, ArmService_Stop_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) IsMoving(ctx context.Context, in *IsMovingRequest, opts ...grpc.CallOption) (*IsMovingResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(IsMovingResponse)
	err := c.cc.Invoke(ctx, ArmService_IsMoving_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) DoCommand(ctx context.Context, in *v1.DoCommandRequest, opts ...grpc.CallOption) (*v1.DoCommandResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(v1.DoCommandResponse)
	err := c.cc.Invoke(ctx, ArmService_DoCommand_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) GetKinematics(ctx context.Context, in *v1.GetKinematicsRequest, opts ...grpc.CallOption) (*v1.GetKinematicsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(v1.GetKinematicsResponse)
	err := c.cc.Invoke(ctx, ArmService_GetKinematics_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *armServiceClient) GetGeometries(ctx context.Context, in *v1.GetGeometriesRequest, opts ...grpc.CallOption) (*v1.GetGeometriesResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(v1.GetGeometriesResponse)
	err := c.cc.Invoke(ctx, ArmService_GetGeometries_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ArmServiceServer is the server API for ArmService service.
// All implementations must embed UnimplementedArmServiceServer
// for forward compatibility.
//
// An ArmService services all arms associated with a robot
type ArmServiceServer interface {
	// GetEndPosition gets the current position the end of the robot's arm expressed as X,Y,Z,ox,oy,oz,theta
	GetEndPosition(context.Context, *GetEndPositionRequest) (*GetEndPositionResponse, error)
	// MoveToPosition moves the mount point of the robot's end effector to the requested position.
	// This will block until done or a new operation cancels this one
	MoveToPosition(context.Context, *MoveToPositionRequest) (*MoveToPositionResponse, error)
	// GetJointPositions lists the joint positions (in degrees) of every joint on a robot
	GetJointPositions(context.Context, *GetJointPositionsRequest) (*GetJointPositionsResponse, error)
	// MoveToJointPositions moves every joint on a robot's arm to specified angles which are expressed in degrees
	// This will block until done or a new operation cancels this one
	MoveToJointPositions(context.Context, *MoveToJointPositionsRequest) (*MoveToJointPositionsResponse, error)
	// MoveThroughJointPositions moves every joint on a robot's arm to the specified JointPositions in the order they are specified,
	// obeying the specified velocity and acceleration limits.
	// This will block until done or a new operation cancels this one
	MoveThroughJointPositions(context.Context, *MoveThroughJointPositionsRequest) (*MoveThroughJointPositionsResponse, error)
	// Stop stops a robot's arm
	Stop(context.Context, *StopRequest) (*StopResponse, error)
	// IsMoving reports if a component is in motion
	IsMoving(context.Context, *IsMovingRequest) (*IsMovingResponse, error)
	// DoCommand sends/receives arbitrary commands
	DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error)
	// GetKinematics returns the kinematics file for the component
	GetKinematics(context.Context, *v1.GetKinematicsRequest) (*v1.GetKinematicsResponse, error)
	// GetGeometries returns the geometries of the component in their current configuration
	GetGeometries(context.Context, *v1.GetGeometriesRequest) (*v1.GetGeometriesResponse, error)
	mustEmbedUnimplementedArmServiceServer()
}

// UnimplementedArmServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedArmServiceServer struct{}

func (UnimplementedArmServiceServer) GetEndPosition(context.Context, *GetEndPositionRequest) (*GetEndPositionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEndPosition not implemented")
}
func (UnimplementedArmServiceServer) MoveToPosition(context.Context, *MoveToPositionRequest) (*MoveToPositionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MoveToPosition not implemented")
}
func (UnimplementedArmServiceServer) GetJointPositions(context.Context, *GetJointPositionsRequest) (*GetJointPositionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetJointPositions not implemented")
}
func (UnimplementedArmServiceServer) MoveToJointPositions(context.Context, *MoveToJointPositionsRequest) (*MoveToJointPositionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MoveToJointPositions not implemented")
}
func (UnimplementedArmServiceServer) MoveThroughJointPositions(context.Context, *MoveThroughJointPositionsRequest) (*MoveThroughJointPositionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MoveThroughJointPositions not implemented")
}
func (UnimplementedArmServiceServer) Stop(context.Context, *StopRequest) (*StopResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Stop not implemented")
}
func (UnimplementedArmServiceServer) IsMoving(context.Context, *IsMovingRequest) (*IsMovingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsMoving not implemented")
}
func (UnimplementedArmServiceServer) DoCommand(context.Context, *v1.DoCommandRequest) (*v1.DoCommandResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DoCommand not implemented")
}
func (UnimplementedArmServiceServer) GetKinematics(context.Context, *v1.GetKinematicsRequest) (*v1.GetKinematicsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetKinematics not implemented")
}
func (UnimplementedArmServiceServer) GetGeometries(context.Context, *v1.GetGeometriesRequest) (*v1.GetGeometriesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetGeometries not implemented")
}
func (UnimplementedArmServiceServer) mustEmbedUnimplementedArmServiceServer() {}
func (UnimplementedArmServiceServer) testEmbeddedByValue()                    {}

// UnsafeArmServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ArmServiceServer will
// result in compilation errors.
type UnsafeArmServiceServer interface {
	mustEmbedUnimplementedArmServiceServer()
}

func RegisterArmServiceServer(s grpc.ServiceRegistrar, srv ArmServiceServer) {
	// If the following call pancis, it indicates UnimplementedArmServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&ArmService_ServiceDesc, srv)
}

func _ArmService_GetEndPosition_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEndPositionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).GetEndPosition(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_GetEndPosition_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).GetEndPosition(ctx, req.(*GetEndPositionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_MoveToPosition_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MoveToPositionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).MoveToPosition(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_MoveToPosition_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).MoveToPosition(ctx, req.(*MoveToPositionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_GetJointPositions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetJointPositionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).GetJointPositions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_GetJointPositions_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).GetJointPositions(ctx, req.(*GetJointPositionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_MoveToJointPositions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MoveToJointPositionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).MoveToJointPositions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_MoveToJointPositions_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).MoveToJointPositions(ctx, req.(*MoveToJointPositionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_MoveThroughJointPositions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MoveThroughJointPositionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).MoveThroughJointPositions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_MoveThroughJointPositions_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).MoveThroughJointPositions(ctx, req.(*MoveThroughJointPositionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_Stop_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StopRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).Stop(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_Stop_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).Stop(ctx, req.(*StopRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_IsMoving_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IsMovingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).IsMoving(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_IsMoving_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).IsMoving(ctx, req.(*IsMovingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_DoCommand_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.DoCommandRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).DoCommand(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_DoCommand_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).DoCommand(ctx, req.(*v1.DoCommandRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_GetKinematics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.GetKinematicsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).GetKinematics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_GetKinematics_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).GetKinematics(ctx, req.(*v1.GetKinematicsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArmService_GetGeometries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v1.GetGeometriesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArmServiceServer).GetGeometries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ArmService_GetGeometries_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArmServiceServer).GetGeometries(ctx, req.(*v1.GetGeometriesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ArmService_ServiceDesc is the grpc.ServiceDesc for ArmService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ArmService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "viam.component.arm.v1.ArmService",
	HandlerType: (*ArmServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetEndPosition",
			Handler:    _ArmService_GetEndPosition_Handler,
		},
		{
			MethodName: "MoveToPosition",
			Handler:    _ArmService_MoveToPosition_Handler,
		},
		{
			MethodName: "GetJointPositions",
			Handler:    _ArmService_GetJointPositions_Handler,
		},
		{
			MethodName: "MoveToJointPositions",
			Handler:    _ArmService_MoveToJointPositions_Handler,
		},
		{
			MethodName: "MoveThroughJointPositions",
			Handler:    _ArmService_MoveThroughJointPositions_Handler,
		},
		{
			MethodName: "Stop",
			Handler:    _ArmService_Stop_Handler,
		},
		{
			MethodName: "IsMoving",
			Handler:    _ArmService_IsMoving_Handler,
		},
		{
			MethodName: "DoCommand",
			Handler:    _ArmService_DoCommand_Handler,
		},
		{
			MethodName: "GetKinematics",
			Handler:    _ArmService_GetKinematics_Handler,
		},
		{
			MethodName: "GetGeometries",
			Handler:    _ArmService_GetGeometries_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "component/arm/v1/arm.proto",
}
