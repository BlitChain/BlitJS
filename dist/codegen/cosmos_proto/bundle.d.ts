import * as _21 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _21.ScalarType;
    scalarTypeToJSON(object: _21.ScalarType): string;
    protobufPackage: "cosmos_proto";
    ScalarType: typeof _21.ScalarType;
    ScalarTypeSDKType: typeof _21.ScalarType;
    ScalarTypeAmino: typeof _21.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _21.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.InterfaceDescriptor;
        fromJSON(object: any): _21.InterfaceDescriptor;
        toJSON(message: _21.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_21.InterfaceDescriptor>): _21.InterfaceDescriptor;
        fromAmino(object: _21.InterfaceDescriptorAmino): _21.InterfaceDescriptor;
        toAmino(message: _21.InterfaceDescriptor): _21.InterfaceDescriptorAmino;
        fromAminoMsg(object: _21.InterfaceDescriptorAminoMsg): _21.InterfaceDescriptor;
        fromProtoMsg(message: _21.InterfaceDescriptorProtoMsg): _21.InterfaceDescriptor;
        toProto(message: _21.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _21.InterfaceDescriptor): _21.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _21.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.ScalarDescriptor;
        fromJSON(object: any): _21.ScalarDescriptor;
        toJSON(message: _21.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_21.ScalarDescriptor>): _21.ScalarDescriptor;
        fromAmino(object: _21.ScalarDescriptorAmino): _21.ScalarDescriptor;
        toAmino(message: _21.ScalarDescriptor): _21.ScalarDescriptorAmino;
        fromAminoMsg(object: _21.ScalarDescriptorAminoMsg): _21.ScalarDescriptor;
        fromProtoMsg(message: _21.ScalarDescriptorProtoMsg): _21.ScalarDescriptor;
        toProto(message: _21.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _21.ScalarDescriptor): _21.ScalarDescriptorProtoMsg;
    };
};
