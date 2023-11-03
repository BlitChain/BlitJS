import * as _16 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _16.ScalarType;
    scalarTypeToJSON(object: _16.ScalarType): string;
    protobufPackage: "cosmos_proto";
    ScalarType: typeof _16.ScalarType;
    ScalarTypeSDKType: typeof _16.ScalarType;
    ScalarTypeAmino: typeof _16.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _16.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.InterfaceDescriptor;
        fromJSON(object: any): _16.InterfaceDescriptor;
        toJSON(message: _16.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_16.InterfaceDescriptor>): _16.InterfaceDescriptor;
        fromSDK(object: _16.InterfaceDescriptorSDKType): _16.InterfaceDescriptor;
        toSDK(message: _16.InterfaceDescriptor): _16.InterfaceDescriptorSDKType;
        fromAmino(object: _16.InterfaceDescriptorAmino): _16.InterfaceDescriptor;
        toAmino(message: _16.InterfaceDescriptor): _16.InterfaceDescriptorAmino;
        fromAminoMsg(object: _16.InterfaceDescriptorAminoMsg): _16.InterfaceDescriptor;
        fromProtoMsg(message: _16.InterfaceDescriptorProtoMsg): _16.InterfaceDescriptor;
        toProto(message: _16.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _16.InterfaceDescriptor): _16.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _16.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.ScalarDescriptor;
        fromJSON(object: any): _16.ScalarDescriptor;
        toJSON(message: _16.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_16.ScalarDescriptor>): _16.ScalarDescriptor;
        fromSDK(object: _16.ScalarDescriptorSDKType): _16.ScalarDescriptor;
        toSDK(message: _16.ScalarDescriptor): _16.ScalarDescriptorSDKType;
        fromAmino(object: _16.ScalarDescriptorAmino): _16.ScalarDescriptor;
        toAmino(message: _16.ScalarDescriptor): _16.ScalarDescriptorAmino;
        fromAminoMsg(object: _16.ScalarDescriptorAminoMsg): _16.ScalarDescriptor;
        fromProtoMsg(message: _16.ScalarDescriptorProtoMsg): _16.ScalarDescriptor;
        toProto(message: _16.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _16.ScalarDescriptor): _16.ScalarDescriptorProtoMsg;
    };
};
