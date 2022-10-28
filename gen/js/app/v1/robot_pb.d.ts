// package: viam.app.v1
// file: app/v1/robot.proto

import * as jspb from "google-protobuf";
import * as app_v1_app_pb from "../../app/v1/app_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as tagger_v1_tagger_pb from "../../tagger/v1/tagger_pb";

export class RobotConfig extends jspb.Message {
  hasCloud(): boolean;
  clearCloud(): void;
  getCloud(): CloudConfig | undefined;
  setCloud(value?: CloudConfig): void;

  clearRemotesList(): void;
  getRemotesList(): Array<RemoteConfig>;
  setRemotesList(value: Array<RemoteConfig>): void;
  addRemotes(value?: RemoteConfig, index?: number): RemoteConfig;

  clearComponentsList(): void;
  getComponentsList(): Array<ComponentConfig>;
  setComponentsList(value: Array<ComponentConfig>): void;
  addComponents(value?: ComponentConfig, index?: number): ComponentConfig;

  clearProcessesList(): void;
  getProcessesList(): Array<ProcessConfig>;
  setProcessesList(value: Array<ProcessConfig>): void;
  addProcesses(value?: ProcessConfig, index?: number): ProcessConfig;

  clearServicesList(): void;
  getServicesList(): Array<ServiceConfig>;
  setServicesList(value: Array<ServiceConfig>): void;
  addServices(value?: ServiceConfig, index?: number): ServiceConfig;

  hasNetwork(): boolean;
  clearNetwork(): void;
  getNetwork(): NetworkConfig | undefined;
  setNetwork(value?: NetworkConfig): void;

  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): AuthConfig | undefined;
  setAuth(value?: AuthConfig): void;

  hasDebug(): boolean;
  clearDebug(): void;
  getDebug(): boolean;
  setDebug(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RobotConfig): RobotConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotConfig;
  static deserializeBinaryFromReader(message: RobotConfig, reader: jspb.BinaryReader): RobotConfig;
}

export namespace RobotConfig {
  export type AsObject = {
    cloud?: CloudConfig.AsObject,
    remotesList: Array<RemoteConfig.AsObject>,
    componentsList: Array<ComponentConfig.AsObject>,
    processesList: Array<ProcessConfig.AsObject>,
    servicesList: Array<ServiceConfig.AsObject>,
    network?: NetworkConfig.AsObject,
    auth?: AuthConfig.AsObject,
    debug: boolean,
  }
}

export class LocationSecret extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationSecret.AsObject;
  static toObject(includeInstance: boolean, msg: LocationSecret): LocationSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationSecret;
  static deserializeBinaryFromReader(message: LocationSecret, reader: jspb.BinaryReader): LocationSecret;
}

export namespace LocationSecret {
  export type AsObject = {
    id: string,
    secret: string,
  }
}

export class CloudConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFqdn(): string;
  setFqdn(value: string): void;

  getLocalFqdn(): string;
  setLocalFqdn(value: string): void;

  getManagedBy(): string;
  setManagedBy(value: string): void;

  getSignalingAddress(): string;
  setSignalingAddress(value: string): void;

  getSignalingInsecure(): boolean;
  setSignalingInsecure(value: boolean): void;

  getLocationSecret(): string;
  setLocationSecret(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  clearLocationSecretsList(): void;
  getLocationSecretsList(): Array<LocationSecret>;
  setLocationSecretsList(value: Array<LocationSecret>): void;
  addLocationSecrets(value?: LocationSecret, index?: number): LocationSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CloudConfig): CloudConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloudConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudConfig;
  static deserializeBinaryFromReader(message: CloudConfig, reader: jspb.BinaryReader): CloudConfig;
}

export namespace CloudConfig {
  export type AsObject = {
    id: string,
    fqdn: string,
    localFqdn: string,
    managedBy: string,
    signalingAddress: string,
    signalingInsecure: boolean,
    locationSecret: string,
    secret: string,
    locationSecretsList: Array<LocationSecret.AsObject>,
  }
}

export class ComponentConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  getType(): string;
  setType(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): Frame | undefined;
  setFrame(value?: Frame): void;

  clearDependsOnList(): void;
  getDependsOnList(): Array<string>;
  setDependsOnList(value: Array<string>): void;
  addDependsOn(value: string, index?: number): string;

  clearServiceConfigsList(): void;
  getServiceConfigsList(): Array<ResourceLevelServiceConfig>;
  setServiceConfigsList(value: Array<ResourceLevelServiceConfig>): void;
  addServiceConfigs(value?: ResourceLevelServiceConfig, index?: number): ResourceLevelServiceConfig;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentConfig): ComponentConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComponentConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentConfig;
  static deserializeBinaryFromReader(message: ComponentConfig, reader: jspb.BinaryReader): ComponentConfig;
}

export namespace ComponentConfig {
  export type AsObject = {
    name: string,
    namespace: string,
    type: string,
    model: string,
    frame?: Frame.AsObject,
    dependsOnList: Array<string>,
    serviceConfigsList: Array<ResourceLevelServiceConfig.AsObject>,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ResourceLevelServiceConfig extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceLevelServiceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceLevelServiceConfig): ResourceLevelServiceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceLevelServiceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceLevelServiceConfig;
  static deserializeBinaryFromReader(message: ResourceLevelServiceConfig, reader: jspb.BinaryReader): ResourceLevelServiceConfig;
}

export namespace ResourceLevelServiceConfig {
  export type AsObject = {
    type: string,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class ProcessConfig extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearArgsList(): void;
  getArgsList(): Array<string>;
  setArgsList(value: Array<string>): void;
  addArgs(value: string, index?: number): string;

  getCwd(): string;
  setCwd(value: string): void;

  getOneShot(): boolean;
  setOneShot(value: boolean): void;

  getLog(): boolean;
  setLog(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessConfig): ProcessConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcessConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessConfig;
  static deserializeBinaryFromReader(message: ProcessConfig, reader: jspb.BinaryReader): ProcessConfig;
}

export namespace ProcessConfig {
  export type AsObject = {
    id: string,
    name: string,
    argsList: Array<string>,
    cwd: string,
    oneShot: boolean,
    log: boolean,
  }
}

export class ServiceConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNamespace(): string;
  setNamespace(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): google_protobuf_struct_pb.Struct | undefined;
  setAttributes(value?: google_protobuf_struct_pb.Struct): void;

  clearDependsOnList(): void;
  getDependsOnList(): Array<string>;
  setDependsOnList(value: Array<string>): void;
  addDependsOn(value: string, index?: number): string;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceConfig): ServiceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceConfig;
  static deserializeBinaryFromReader(message: ServiceConfig, reader: jspb.BinaryReader): ServiceConfig;
}

export namespace ServiceConfig {
  export type AsObject = {
    name: string,
    namespace: string,
    type: string,
    attributes?: google_protobuf_struct_pb.Struct.AsObject,
    dependsOnList: Array<string>,
    model: string,
  }
}

export class NetworkConfig extends jspb.Message {
  getFqdn(): string;
  setFqdn(value: string): void;

  getBindAddress(): string;
  setBindAddress(value: string): void;

  getTlsCertFile(): string;
  setTlsCertFile(value: string): void;

  getTlsKeyFile(): string;
  setTlsKeyFile(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkConfig): NetworkConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkConfig;
  static deserializeBinaryFromReader(message: NetworkConfig, reader: jspb.BinaryReader): NetworkConfig;
}

export namespace NetworkConfig {
  export type AsObject = {
    fqdn: string,
    bindAddress: string,
    tlsCertFile: string,
    tlsKeyFile: string,
  }
}

export class AuthConfig extends jspb.Message {
  clearHandlersList(): void;
  getHandlersList(): Array<AuthHandlerConfig>;
  setHandlersList(value: Array<AuthHandlerConfig>): void;
  addHandlers(value?: AuthHandlerConfig, index?: number): AuthHandlerConfig;

  clearTlsAuthEntitiesList(): void;
  getTlsAuthEntitiesList(): Array<string>;
  setTlsAuthEntitiesList(value: Array<string>): void;
  addTlsAuthEntities(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AuthConfig): AuthConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthConfig;
  static deserializeBinaryFromReader(message: AuthConfig, reader: jspb.BinaryReader): AuthConfig;
}

export namespace AuthConfig {
  export type AsObject = {
    handlersList: Array<AuthHandlerConfig.AsObject>,
    tlsAuthEntitiesList: Array<string>,
  }
}

export class AuthHandlerConfig extends jspb.Message {
  getType(): CredentialsTypeMap[keyof CredentialsTypeMap];
  setType(value: CredentialsTypeMap[keyof CredentialsTypeMap]): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): google_protobuf_struct_pb.Struct | undefined;
  setConfig(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthHandlerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AuthHandlerConfig): AuthHandlerConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthHandlerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthHandlerConfig;
  static deserializeBinaryFromReader(message: AuthHandlerConfig, reader: jspb.BinaryReader): AuthHandlerConfig;
}

export namespace AuthHandlerConfig {
  export type AsObject = {
    type: CredentialsTypeMap[keyof CredentialsTypeMap],
    config?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class Frame extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  hasTranslation(): boolean;
  clearTranslation(): void;
  getTranslation(): Translation | undefined;
  setTranslation(value?: Translation): void;

  hasOrientation(): boolean;
  clearOrientation(): void;
  getOrientation(): Orientation | undefined;
  setOrientation(value?: Orientation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Frame.AsObject;
  static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Frame;
  static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
}

export namespace Frame {
  export type AsObject = {
    parent: string,
    translation?: Translation.AsObject,
    orientation?: Orientation.AsObject,
  }
}

export class Translation extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Translation.AsObject;
  static toObject(includeInstance: boolean, msg: Translation): Translation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Translation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Translation;
  static deserializeBinaryFromReader(message: Translation, reader: jspb.BinaryReader): Translation;
}

export namespace Translation {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class Orientation extends jspb.Message {
  hasNoOrientation(): boolean;
  clearNoOrientation(): void;
  getNoOrientation(): Orientation.NoOrientation | undefined;
  setNoOrientation(value?: Orientation.NoOrientation): void;

  hasVectorRadians(): boolean;
  clearVectorRadians(): void;
  getVectorRadians(): Orientation.OrientationVectorRadians | undefined;
  setVectorRadians(value?: Orientation.OrientationVectorRadians): void;

  hasVectorDegrees(): boolean;
  clearVectorDegrees(): void;
  getVectorDegrees(): Orientation.OrientationVectorDegrees | undefined;
  setVectorDegrees(value?: Orientation.OrientationVectorDegrees): void;

  hasEulerAngles(): boolean;
  clearEulerAngles(): void;
  getEulerAngles(): Orientation.EulerAngles | undefined;
  setEulerAngles(value?: Orientation.EulerAngles): void;

  hasAxisAngles(): boolean;
  clearAxisAngles(): void;
  getAxisAngles(): Orientation.AxisAngles | undefined;
  setAxisAngles(value?: Orientation.AxisAngles): void;

  hasQuaternion(): boolean;
  clearQuaternion(): void;
  getQuaternion(): Orientation.Quaternion | undefined;
  setQuaternion(value?: Orientation.Quaternion): void;

  getTypeCase(): Orientation.TypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Orientation.AsObject;
  static toObject(includeInstance: boolean, msg: Orientation): Orientation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Orientation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Orientation;
  static deserializeBinaryFromReader(message: Orientation, reader: jspb.BinaryReader): Orientation;
}

export namespace Orientation {
  export type AsObject = {
    noOrientation?: Orientation.NoOrientation.AsObject,
    vectorRadians?: Orientation.OrientationVectorRadians.AsObject,
    vectorDegrees?: Orientation.OrientationVectorDegrees.AsObject,
    eulerAngles?: Orientation.EulerAngles.AsObject,
    axisAngles?: Orientation.AxisAngles.AsObject,
    quaternion?: Orientation.Quaternion.AsObject,
  }

  export class NoOrientation extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoOrientation.AsObject;
    static toObject(includeInstance: boolean, msg: NoOrientation): NoOrientation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoOrientation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoOrientation;
    static deserializeBinaryFromReader(message: NoOrientation, reader: jspb.BinaryReader): NoOrientation;
  }

  export namespace NoOrientation {
    export type AsObject = {
    }
  }

  export class OrientationVectorRadians extends jspb.Message {
    getTheta(): number;
    setTheta(value: number): void;

    getX(): number;
    setX(value: number): void;

    getY(): number;
    setY(value: number): void;

    getZ(): number;
    setZ(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrientationVectorRadians.AsObject;
    static toObject(includeInstance: boolean, msg: OrientationVectorRadians): OrientationVectorRadians.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrientationVectorRadians, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrientationVectorRadians;
    static deserializeBinaryFromReader(message: OrientationVectorRadians, reader: jspb.BinaryReader): OrientationVectorRadians;
  }

  export namespace OrientationVectorRadians {
    export type AsObject = {
      theta: number,
      x: number,
      y: number,
      z: number,
    }
  }

  export class OrientationVectorDegrees extends jspb.Message {
    getTheta(): number;
    setTheta(value: number): void;

    getX(): number;
    setX(value: number): void;

    getY(): number;
    setY(value: number): void;

    getZ(): number;
    setZ(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrientationVectorDegrees.AsObject;
    static toObject(includeInstance: boolean, msg: OrientationVectorDegrees): OrientationVectorDegrees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrientationVectorDegrees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrientationVectorDegrees;
    static deserializeBinaryFromReader(message: OrientationVectorDegrees, reader: jspb.BinaryReader): OrientationVectorDegrees;
  }

  export namespace OrientationVectorDegrees {
    export type AsObject = {
      theta: number,
      x: number,
      y: number,
      z: number,
    }
  }

  export class EulerAngles extends jspb.Message {
    getRoll(): number;
    setRoll(value: number): void;

    getPitch(): number;
    setPitch(value: number): void;

    getYaw(): number;
    setYaw(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EulerAngles.AsObject;
    static toObject(includeInstance: boolean, msg: EulerAngles): EulerAngles.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EulerAngles, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EulerAngles;
    static deserializeBinaryFromReader(message: EulerAngles, reader: jspb.BinaryReader): EulerAngles;
  }

  export namespace EulerAngles {
    export type AsObject = {
      roll: number,
      pitch: number,
      yaw: number,
    }
  }

  export class AxisAngles extends jspb.Message {
    getTheta(): number;
    setTheta(value: number): void;

    getX(): number;
    setX(value: number): void;

    getY(): number;
    setY(value: number): void;

    getZ(): number;
    setZ(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AxisAngles.AsObject;
    static toObject(includeInstance: boolean, msg: AxisAngles): AxisAngles.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AxisAngles, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AxisAngles;
    static deserializeBinaryFromReader(message: AxisAngles, reader: jspb.BinaryReader): AxisAngles;
  }

  export namespace AxisAngles {
    export type AsObject = {
      theta: number,
      x: number,
      y: number,
      z: number,
    }
  }

  export class Quaternion extends jspb.Message {
    getW(): number;
    setW(value: number): void;

    getX(): number;
    setX(value: number): void;

    getY(): number;
    setY(value: number): void;

    getZ(): number;
    setZ(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quaternion.AsObject;
    static toObject(includeInstance: boolean, msg: Quaternion): Quaternion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quaternion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quaternion;
    static deserializeBinaryFromReader(message: Quaternion, reader: jspb.BinaryReader): Quaternion;
  }

  export namespace Quaternion {
    export type AsObject = {
      w: number,
      x: number,
      y: number,
      z: number,
    }
  }

  export enum TypeCase {
    TYPE_NOT_SET = 0,
    NO_ORIENTATION = 1,
    VECTOR_RADIANS = 2,
    VECTOR_DEGREES = 3,
    EULER_ANGLES = 4,
    AXIS_ANGLES = 5,
    QUATERNION = 6,
  }
}

export class RemoteConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): Frame | undefined;
  setFrame(value?: Frame): void;

  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): RemoteAuth | undefined;
  setAuth(value?: RemoteAuth): void;

  getManagedBy(): string;
  setManagedBy(value: string): void;

  getInsecure(): boolean;
  setInsecure(value: boolean): void;

  hasConnectionCheckInterval(): boolean;
  clearConnectionCheckInterval(): void;
  getConnectionCheckInterval(): google_protobuf_duration_pb.Duration | undefined;
  setConnectionCheckInterval(value?: google_protobuf_duration_pb.Duration): void;

  hasReconnectInterval(): boolean;
  clearReconnectInterval(): void;
  getReconnectInterval(): google_protobuf_duration_pb.Duration | undefined;
  setReconnectInterval(value?: google_protobuf_duration_pb.Duration): void;

  clearServiceConfigsList(): void;
  getServiceConfigsList(): Array<ResourceLevelServiceConfig>;
  setServiceConfigsList(value: Array<ResourceLevelServiceConfig>): void;
  addServiceConfigs(value?: ResourceLevelServiceConfig, index?: number): ResourceLevelServiceConfig;

  getSecret(): string;
  setSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteConfig): RemoteConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoteConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteConfig;
  static deserializeBinaryFromReader(message: RemoteConfig, reader: jspb.BinaryReader): RemoteConfig;
}

export namespace RemoteConfig {
  export type AsObject = {
    name: string,
    address: string,
    frame?: Frame.AsObject,
    auth?: RemoteAuth.AsObject,
    managedBy: string,
    insecure: boolean,
    connectionCheckInterval?: google_protobuf_duration_pb.Duration.AsObject,
    reconnectInterval?: google_protobuf_duration_pb.Duration.AsObject,
    serviceConfigsList: Array<ResourceLevelServiceConfig.AsObject>,
    secret: string,
  }
}

export class RemoteAuth extends jspb.Message {
  hasCredentials(): boolean;
  clearCredentials(): void;
  getCredentials(): RemoteAuth.Credentials | undefined;
  setCredentials(value?: RemoteAuth.Credentials): void;

  getEntity(): string;
  setEntity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteAuth.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteAuth): RemoteAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoteAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteAuth;
  static deserializeBinaryFromReader(message: RemoteAuth, reader: jspb.BinaryReader): RemoteAuth;
}

export namespace RemoteAuth {
  export type AsObject = {
    credentials?: RemoteAuth.Credentials.AsObject,
    entity: string,
  }

  export class Credentials extends jspb.Message {
    getType(): CredentialsTypeMap[keyof CredentialsTypeMap];
    setType(value: CredentialsTypeMap[keyof CredentialsTypeMap]): void;

    getPayload(): string;
    setPayload(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Credentials.AsObject;
    static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Credentials;
    static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
  }

  export namespace Credentials {
    export type AsObject = {
      type: CredentialsTypeMap[keyof CredentialsTypeMap],
      payload: string,
    }
  }
}

export class AgentInfo extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getOs(): string;
  setOs(value: string): void;

  clearIpsList(): void;
  getIpsList(): Array<string>;
  setIpsList(value: Array<string>): void;
  addIps(value: string, index?: number): string;

  getVersion(): string;
  setVersion(value: string): void;

  getGitRevision(): string;
  setGitRevision(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AgentInfo): AgentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentInfo;
  static deserializeBinaryFromReader(message: AgentInfo, reader: jspb.BinaryReader): AgentInfo;
}

export namespace AgentInfo {
  export type AsObject = {
    host: string,
    os: string,
    ipsList: Array<string>,
    version: string,
    gitRevision: string,
  }
}

export class ConfigRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasAgentInfo(): boolean;
  clearAgentInfo(): void;
  getAgentInfo(): AgentInfo | undefined;
  setAgentInfo(value?: AgentInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigRequest): ConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigRequest;
  static deserializeBinaryFromReader(message: ConfigRequest, reader: jspb.BinaryReader): ConfigRequest;
}

export namespace ConfigRequest {
  export type AsObject = {
    id: string,
    agentInfo?: AgentInfo.AsObject,
  }
}

export class ConfigResponse extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): RobotConfig | undefined;
  setConfig(value?: RobotConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigResponse): ConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigResponse;
  static deserializeBinaryFromReader(message: ConfigResponse, reader: jspb.BinaryReader): ConfigResponse;
}

export namespace ConfigResponse {
  export type AsObject = {
    config?: RobotConfig.AsObject,
  }
}

export class CertificateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CertificateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CertificateRequest): CertificateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CertificateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CertificateRequest;
  static deserializeBinaryFromReader(message: CertificateRequest, reader: jspb.BinaryReader): CertificateRequest;
}

export namespace CertificateRequest {
  export type AsObject = {
    id: string,
  }
}

export class CertificateResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTlsCertificate(): string;
  setTlsCertificate(value: string): void;

  getTlsPrivateKey(): string;
  setTlsPrivateKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CertificateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CertificateResponse): CertificateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CertificateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CertificateResponse;
  static deserializeBinaryFromReader(message: CertificateResponse, reader: jspb.BinaryReader): CertificateResponse;
}

export namespace CertificateResponse {
  export type AsObject = {
    id: string,
    tlsCertificate: string,
    tlsPrivateKey: string,
  }
}

export class LogRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearLogsList(): void;
  getLogsList(): Array<app_v1_app_pb.LogEntry>;
  setLogsList(value: Array<app_v1_app_pb.LogEntry>): void;
  addLogs(value?: app_v1_app_pb.LogEntry, index?: number): app_v1_app_pb.LogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogRequest): LogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogRequest;
  static deserializeBinaryFromReader(message: LogRequest, reader: jspb.BinaryReader): LogRequest;
}

export namespace LogRequest {
  export type AsObject = {
    id: string,
    logsList: Array<app_v1_app_pb.LogEntry.AsObject>,
  }
}

export class LogResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogResponse): LogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogResponse;
  static deserializeBinaryFromReader(message: LogResponse, reader: jspb.BinaryReader): LogResponse;
}

export namespace LogResponse {
  export type AsObject = {
  }
}

export class NeedsRestartRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeedsRestartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NeedsRestartRequest): NeedsRestartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeedsRestartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeedsRestartRequest;
  static deserializeBinaryFromReader(message: NeedsRestartRequest, reader: jspb.BinaryReader): NeedsRestartRequest;
}

export namespace NeedsRestartRequest {
  export type AsObject = {
    id: string,
  }
}

export class NeedsRestartResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMustRestart(): boolean;
  setMustRestart(value: boolean): void;

  hasRestartCheckInterval(): boolean;
  clearRestartCheckInterval(): void;
  getRestartCheckInterval(): google_protobuf_duration_pb.Duration | undefined;
  setRestartCheckInterval(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeedsRestartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NeedsRestartResponse): NeedsRestartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeedsRestartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeedsRestartResponse;
  static deserializeBinaryFromReader(message: NeedsRestartResponse, reader: jspb.BinaryReader): NeedsRestartResponse;
}

export namespace NeedsRestartResponse {
  export type AsObject = {
    id: string,
    mustRestart: boolean,
    restartCheckInterval?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export interface CredentialsTypeMap {
  CREDENTIALS_TYPE_UNSPECIFIED: 0;
  CREDENTIALS_TYPE_INTERNAL: 1;
  CREDENTIALS_TYPE_API_KEY: 2;
  CREDENTIALS_TYPE_ROBOT_SECRET: 3;
  CREDENTIALS_TYPE_ROBOT_LOCATION_SECRET: 4;
}

export const CredentialsType: CredentialsTypeMap;

