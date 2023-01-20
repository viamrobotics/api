// package: viam.app.package.v1
// file: app/package/v1/package.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class FileInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    name: string,
    size: number,
  }
}

export class AddPackageRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getFileContents(): Uint8Array | string;
  getFileContents_asU8(): Uint8Array;
  getFileContents_asB64(): string;
  setFileContents(value: Uint8Array | string): void;

  getType(): PackageTypeMap[keyof PackageTypeMap];
  setType(value: PackageTypeMap[keyof PackageTypeMap]): void;

  clearFilesList(): void;
  getFilesList(): Array<FileInfo>;
  setFilesList(value: Array<FileInfo>): void;
  addFiles(value?: FileInfo, index?: number): FileInfo;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPackageRequest): AddPackageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPackageRequest;
  static deserializeBinaryFromReader(message: AddPackageRequest, reader: jspb.BinaryReader): AddPackageRequest;
}

export namespace AddPackageRequest {
  export type AsObject = {
    orgId: string,
    name: string,
    version: string,
    fileContents: Uint8Array | string,
    type: PackageTypeMap[keyof PackageTypeMap],
    filesList: Array<FileInfo.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AddPackageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPackageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPackageResponse): AddPackageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPackageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPackageResponse;
  static deserializeBinaryFromReader(message: AddPackageResponse, reader: jspb.BinaryReader): AddPackageResponse;
}

export namespace AddPackageResponse {
  export type AsObject = {
  }
}

export class DeletePackageRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearVersionsList(): void;
  getVersionsList(): Array<string>;
  setVersionsList(value: Array<string>): void;
  addVersions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePackageRequest): DeletePackageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePackageRequest;
  static deserializeBinaryFromReader(message: DeletePackageRequest, reader: jspb.BinaryReader): DeletePackageRequest;
}

export namespace DeletePackageRequest {
  export type AsObject = {
    orgId: string,
    name: string,
    versionsList: Array<string>,
  }
}

export class DeletePackageResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePackageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePackageResponse): DeletePackageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeletePackageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePackageResponse;
  static deserializeBinaryFromReader(message: DeletePackageResponse, reader: jspb.BinaryReader): DeletePackageResponse;
}

export namespace DeletePackageResponse {
  export type AsObject = {
    deletedCount: number,
  }
}

export class GetPackagesRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): PackageTypeMap[keyof PackageTypeMap];
  setType(value: PackageTypeMap[keyof PackageTypeMap]): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackagesRequest): GetPackagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackagesRequest;
  static deserializeBinaryFromReader(message: GetPackagesRequest, reader: jspb.BinaryReader): GetPackagesRequest;
}

export namespace GetPackagesRequest {
  export type AsObject = {
    orgId: string,
    type: PackageTypeMap[keyof PackageTypeMap],
    name: string,
    version: string,
  }
}

export class PackageInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<FileInfo>;
  setFilesList(value: Array<FileInfo>): void;
  addFiles(value?: FileInfo, index?: number): FileInfo;

  clearMetadataList(): void;
  getMetadataList(): Array<google_protobuf_struct_pb.Struct>;
  setMetadataList(value: Array<google_protobuf_struct_pb.Struct>): void;
  addMetadata(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PackageInfo): PackageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackageInfo;
  static deserializeBinaryFromReader(message: PackageInfo, reader: jspb.BinaryReader): PackageInfo;
}

export namespace PackageInfo {
  export type AsObject = {
    name: string,
    version: string,
    filesList: Array<FileInfo.AsObject>,
    metadataList: Array<google_protobuf_struct_pb.Struct.AsObject>,
  }
}

export class Package extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): PackageInfo | undefined;
  setInfo(value?: PackageInfo): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Package.AsObject;
  static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Package;
  static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
  export type AsObject = {
    info?: PackageInfo.AsObject,
    url: string,
  }
}

export class GetPackagesResponse extends jspb.Message {
  clearPackagesList(): void;
  getPackagesList(): Array<Package>;
  setPackagesList(value: Array<Package>): void;
  addPackages(value?: Package, index?: number): Package;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackagesResponse): GetPackagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackagesResponse;
  static deserializeBinaryFromReader(message: GetPackagesResponse, reader: jspb.BinaryReader): GetPackagesResponse;
}

export namespace GetPackagesResponse {
  export type AsObject = {
    packagesList: Array<Package.AsObject>,
  }
}

export interface PackageTypeMap {
  PACKAGE_TYPE_UNSPECIFIED: 0;
  PACKAGE_TYPE_FILE: 1;
  PACKAGE_TYPE_ML_MODEL: 2;
}

export const PackageType: PackageTypeMap;

