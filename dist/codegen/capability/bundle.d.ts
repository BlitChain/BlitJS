import * as _16 from "./v1/capability";
import * as _17 from "./v1/genesis";
export declare namespace capability {
    const v1: {
        protobufPackage: "capability.v1";
        GenesisOwners: {
            typeUrl: string;
            encode(message: _17.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GenesisOwners;
            fromJSON(object: any): _17.GenesisOwners;
            toJSON(message: _17.GenesisOwners): unknown;
            fromPartial(object: Partial<_17.GenesisOwners>): _17.GenesisOwners;
            fromAmino(object: _17.GenesisOwnersAmino): _17.GenesisOwners;
            toAmino(message: _17.GenesisOwners): _17.GenesisOwnersAmino;
            fromAminoMsg(object: _17.GenesisOwnersAminoMsg): _17.GenesisOwners;
            fromProtoMsg(message: _17.GenesisOwnersProtoMsg): _17.GenesisOwners;
            toProto(message: _17.GenesisOwners): Uint8Array;
            toProtoMsg(message: _17.GenesisOwners): _17.GenesisOwnersProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _17.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.GenesisState;
            fromJSON(object: any): _17.GenesisState;
            toJSON(message: _17.GenesisState): unknown;
            fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
            fromAmino(object: _17.GenesisStateAmino): _17.GenesisState;
            toAmino(message: _17.GenesisState): _17.GenesisStateAmino;
            fromAminoMsg(object: _17.GenesisStateAminoMsg): _17.GenesisState;
            fromProtoMsg(message: _17.GenesisStateProtoMsg): _17.GenesisState;
            toProto(message: _17.GenesisState): Uint8Array;
            toProtoMsg(message: _17.GenesisState): _17.GenesisStateProtoMsg;
        };
        Capability: {
            typeUrl: string;
            encode(message: _16.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Capability;
            fromJSON(object: any): _16.Capability;
            toJSON(message: _16.Capability): unknown;
            fromPartial(object: Partial<_16.Capability>): _16.Capability;
            fromAmino(object: _16.CapabilityAmino): _16.Capability;
            toAmino(message: _16.Capability): _16.CapabilityAmino;
            fromAminoMsg(object: _16.CapabilityAminoMsg): _16.Capability;
            fromProtoMsg(message: _16.CapabilityProtoMsg): _16.Capability;
            toProto(message: _16.Capability): Uint8Array;
            toProtoMsg(message: _16.Capability): _16.CapabilityProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _16.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Owner;
            fromJSON(object: any): _16.Owner;
            toJSON(message: _16.Owner): unknown;
            fromPartial(object: Partial<_16.Owner>): _16.Owner;
            fromAmino(object: _16.OwnerAmino): _16.Owner;
            toAmino(message: _16.Owner): _16.OwnerAmino;
            fromAminoMsg(object: _16.OwnerAminoMsg): _16.Owner;
            fromProtoMsg(message: _16.OwnerProtoMsg): _16.Owner;
            toProto(message: _16.Owner): Uint8Array;
            toProtoMsg(message: _16.Owner): _16.OwnerProtoMsg;
        };
        CapabilityOwners: {
            typeUrl: string;
            encode(message: _16.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.CapabilityOwners;
            fromJSON(object: any): _16.CapabilityOwners;
            toJSON(message: _16.CapabilityOwners): unknown;
            fromPartial(object: Partial<_16.CapabilityOwners>): _16.CapabilityOwners;
            fromAmino(object: _16.CapabilityOwnersAmino): _16.CapabilityOwners;
            toAmino(message: _16.CapabilityOwners): _16.CapabilityOwnersAmino;
            fromAminoMsg(object: _16.CapabilityOwnersAminoMsg): _16.CapabilityOwners;
            fromProtoMsg(message: _16.CapabilityOwnersProtoMsg): _16.CapabilityOwners;
            toProto(message: _16.CapabilityOwners): Uint8Array;
            toProtoMsg(message: _16.CapabilityOwners): _16.CapabilityOwnersProtoMsg;
        };
    };
}
