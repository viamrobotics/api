// package: viam.app.packages.v1
// file: app/packages/v1/packages.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
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

export class PackageInfo extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

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
    organizationId: string,
    name: string,
    version: string,
    type: PackageTypeMap[keyof PackageTypeMap],
    filesList: Array<FileInfo.AsObject>,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CreatePackageRequest extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): PackageInfo | undefined;
  setInfo(value?: PackageInfo): void;

  hasContents(): boolean;
  clearContents(): void;
  getContents(): Uint8Array | string;
  getContents_asU8(): Uint8Array;
  getContents_asB64(): string;
  setContents(value: Uint8Array | string): void;

  getPackageCase(): CreatePackageRequest.PackageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePackageRequest): CreatePackageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePackageRequest;
  static deserializeBinaryFromReader(message: CreatePackageRequest, reader: jspb.BinaryReader): CreatePackageRequest;
}

export namespace CreatePackageRequest {
  export type AsObject = {
    info?: PackageInfo.AsObject,
    contents: Uint8Array | string,
  }

  export enum PackageCase {
    PACKAGE_NOT_SET = 0,
    INFO = 1,
    CONTENTS = 2,
  }
}

export class CreatePackageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePackageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePackageResponse): CreatePackageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatePackageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePackageResponse;
  static deserializeBinaryFromReader(message: CreatePackageResponse, reader: jspb.BinaryReader): CreatePackageResponse;
}

export namespace CreatePackageResponse {
  export type AsObject = {
  }
}

export class DeletePackageRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

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
    organizationId: string,
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

export class Package extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): PackageInfo | undefined;
  setInfo(value?: PackageInfo): void;

  getUri(): string;
  setUri(value: string): void;

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
    uri: string,
  }
}

export class GetPackageRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackageRequest): GetPackageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackageRequest;
  static deserializeBinaryFromReader(message: GetPackageRequest, reader: jspb.BinaryReader): GetPackageRequest;
}

export namespace GetPackageRequest {
  export type AsObject = {
    organizationId: string,
    name: string,
    version: string,
  }
}

export class GetPackageResponse extends jspb.Message {
  hasPackage(): boolean;
  clearPackage(): void;
  getPackage(): Package | undefined;
  setPackage(value?: Package): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackageResponse): GetPackageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackageResponse;
  static deserializeBinaryFromReader(message: GetPackageResponse, reader: jspb.BinaryReader): GetPackageResponse;
}

export namespace GetPackageResponse {
  export type AsObject = {
    pb_package?: Package.AsObject,
  }
}

export class ListPackagesRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string;
  setVersion(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): PackageTypeMap[keyof PackageTypeMap];
  setType(value: PackageTypeMap[keyof PackageTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPackagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPackagesRequest): ListPackagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPackagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPackagesRequest;
  static deserializeBinaryFromReader(message: ListPackagesRequest, reader: jspb.BinaryReader): ListPackagesRequest;
}

export namespace ListPackagesRequest {
  export type AsObject = {
    organizationId: string,
    name: string,
    version: string,
    type: PackageTypeMap[keyof PackageTypeMap],
  }
}

export class ListPackagesResponse extends jspb.Message {
  clearPackagesList(): void;
  getPackagesList(): Array<Package>;
  setPackagesList(value: Array<Package>): void;
  addPackages(value?: Package, index?: number): Package;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPackagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPackagesResponse): ListPackagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPackagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPackagesResponse;
  static deserializeBinaryFromReader(message: ListPackagesResponse, reader: jspb.BinaryReader): ListPackagesResponse;
}

export namespace ListPackagesResponse {
  export type AsObject = {
    packagesList: Array<Package.AsObject>,
  }
}

export interface PackageTypeMap {
  PACKAGE_TYPE_UNSPECIFIED: 0;
  PACKAGE_TYPE_ARCHIVE: 1;
  PACKAGE_TYPE_ML_MODEL: 2;
}

export const PackageType: PackageTypeMap;

