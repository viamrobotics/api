// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        (unknown)
// source: component/sensor/v1/sensor.proto

package v1

import (
	v1 "go.viam.com/api/common/v1"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_component_sensor_v1_sensor_proto protoreflect.FileDescriptor

var file_component_sensor_v1_sensor_proto_rawDesc = []byte{
	0x0a, 0x20, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x6e, 0x73,
	0x6f, 0x72, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x18, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65,
	0x6e, 0x74, 0x2e, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2e, 0x76, 0x31, 0x1a, 0x16, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x32, 0xc3, 0x03, 0x0a, 0x0d, 0x53, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x8d, 0x01, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x52, 0x65, 0x61, 0x64,
	0x69, 0x6e, 0x67, 0x73, 0x12, 0x22, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x65, 0x61, 0x64, 0x69, 0x6e, 0x67,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x65, 0x61,
	0x64, 0x69, 0x6e, 0x67, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x35, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x2f, 0x12, 0x2d, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65,
	0x6e, 0x73, 0x6f, 0x72, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x72, 0x65, 0x61, 0x64,
	0x69, 0x6e, 0x67, 0x73, 0x12, 0x89, 0x01, 0x0a, 0x09, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61,
	0x6e, 0x64, 0x12, 0x20, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x37, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x31, 0x22,
	0x2f, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2f, 0x7b,
	0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x64, 0x6f, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64,
	0x12, 0x95, 0x01, 0x0a, 0x0d, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69,
	0x65, 0x73, 0x12, 0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x65,
	0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f,
	0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x37, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x31, 0x12, 0x2f, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61,
	0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f,
	0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x67, 0x65,
	0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x42, 0x43, 0x0a, 0x1c, 0x63, 0x6f, 0x6d, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x73,
	0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2e, 0x76, 0x31, 0x5a, 0x23, 0x67, 0x6f, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_component_sensor_v1_sensor_proto_goTypes = []any{
	(*v1.GetReadingsRequest)(nil),    // 0: viam.common.v1.GetReadingsRequest
	(*v1.DoCommandRequest)(nil),      // 1: viam.common.v1.DoCommandRequest
	(*v1.GetGeometriesRequest)(nil),  // 2: viam.common.v1.GetGeometriesRequest
	(*v1.GetReadingsResponse)(nil),   // 3: viam.common.v1.GetReadingsResponse
	(*v1.DoCommandResponse)(nil),     // 4: viam.common.v1.DoCommandResponse
	(*v1.GetGeometriesResponse)(nil), // 5: viam.common.v1.GetGeometriesResponse
}
var file_component_sensor_v1_sensor_proto_depIdxs = []int32{
	0, // 0: viam.component.sensor.v1.SensorService.GetReadings:input_type -> viam.common.v1.GetReadingsRequest
	1, // 1: viam.component.sensor.v1.SensorService.DoCommand:input_type -> viam.common.v1.DoCommandRequest
	2, // 2: viam.component.sensor.v1.SensorService.GetGeometries:input_type -> viam.common.v1.GetGeometriesRequest
	3, // 3: viam.component.sensor.v1.SensorService.GetReadings:output_type -> viam.common.v1.GetReadingsResponse
	4, // 4: viam.component.sensor.v1.SensorService.DoCommand:output_type -> viam.common.v1.DoCommandResponse
	5, // 5: viam.component.sensor.v1.SensorService.GetGeometries:output_type -> viam.common.v1.GetGeometriesResponse
	3, // [3:6] is the sub-list for method output_type
	0, // [0:3] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_component_sensor_v1_sensor_proto_init() }
func file_component_sensor_v1_sensor_proto_init() {
	if File_component_sensor_v1_sensor_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_component_sensor_v1_sensor_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_component_sensor_v1_sensor_proto_goTypes,
		DependencyIndexes: file_component_sensor_v1_sensor_proto_depIdxs,
	}.Build()
	File_component_sensor_v1_sensor_proto = out.File
	file_component_sensor_v1_sensor_proto_rawDesc = nil
	file_component_sensor_v1_sensor_proto_goTypes = nil
	file_component_sensor_v1_sensor_proto_depIdxs = nil
}
