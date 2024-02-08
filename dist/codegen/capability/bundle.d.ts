import * as _18 from "./v1/capability";
import * as _19 from "./v1/genesis";
export declare namespace capability {
    const v1: {
        protobufPackage: "capability.v1";
        GenesisOwners: {
            typeUrl: string;
            encode(message: _19.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.GenesisOwners;
            fromJSON(object: any): _19.GenesisOwners;
            toJSON(message: _19.GenesisOwners): unknown;
            fromPartial(object: Partial<_19.GenesisOwners>): _19.GenesisOwners;
            fromAmino(object: _19.GenesisOwnersAmino): _19.GenesisOwners;
            toAmino(message: _19.GenesisOwners): _19.GenesisOwnersAmino;
            fromAminoMsg(object: _19.GenesisOwnersAminoMsg): _19.GenesisOwners;
            fromProtoMsg(message: _19.GenesisOwnersProtoMsg): _19.GenesisOwners;
            toProto(message: _19.GenesisOwners): Uint8Array;
            toProtoMsg(message: _19.GenesisOwners): _19.GenesisOwnersProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _19.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.GenesisState;
            fromJSON(object: any): _19.GenesisState;
            toJSON(message: _19.GenesisState): unknown;
            fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            fromAmino(object: _19.GenesisStateAmino): _19.GenesisState;
            toAmino(message: _19.GenesisState): _19.GenesisStateAmino;
            fromAminoMsg(object: _19.GenesisStateAminoMsg): _19.GenesisState;
            fromProtoMsg(message: _19.GenesisStateProtoMsg): _19.GenesisState;
            toProto(message: _19.GenesisState): Uint8Array;
            toProtoMsg(message: _19.GenesisState): _19.GenesisStateProtoMsg;
        };
        Capability: {
            typeUrl: string;
            encode(message: _18.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.Capability;
            fromJSON(object: any): _18.Capability;
            toJSON(message: _18.Capability): unknown;
            fromPartial(object: Partial<_18.Capability>): _18.Capability;
            fromAmino(object: _18.CapabilityAmino): _18.Capability;
            toAmino(message: _18.Capability): _18.CapabilityAmino;
            fromAminoMsg(object: _18.CapabilityAminoMsg): _18.Capability;
            fromProtoMsg(message: _18.CapabilityProtoMsg): _18.Capability;
            toProto(message: _18.Capability): Uint8Array;
            toProtoMsg(message: _18.Capability): _18.CapabilityProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _18.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.Owner;
            fromJSON(object: any): _18.Owner;
            toJSON(message: _18.Owner): unknown;
            fromPartial(object: Partial<_18.Owner>): _18.Owner;
            fromAmino(object: _18.OwnerAmino): _18.Owner;
            toAmino(message: _18.Owner): _18.OwnerAmino;
            fromAminoMsg(object: _18.OwnerAminoMsg): _18.Owner;
            fromProtoMsg(message: _18.OwnerProtoMsg): _18.Owner;
            toProto(message: _18.Owner): Uint8Array;
            toProtoMsg(message: _18.Owner): _18.OwnerProtoMsg;
        };
        CapabilityOwners: {
            typeUrl: string;
            encode(message: _18.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.CapabilityOwners;
            fromJSON(object: any): _18.CapabilityOwners;
            toJSON(message: _18.CapabilityOwners): unknown;
            fromPartial(object: Partial<_18.CapabilityOwners>): _18.CapabilityOwners;
            fromAmino(object: _18.CapabilityOwnersAmino): _18.CapabilityOwners;
            toAmino(message: _18.CapabilityOwners): _18.CapabilityOwnersAmino;
            fromAminoMsg(object: _18.CapabilityOwnersAminoMsg): _18.CapabilityOwners;
            fromProtoMsg(message: _18.CapabilityOwnersProtoMsg): _18.CapabilityOwners;
            toProto(message: _18.CapabilityOwners): Uint8Array;
            toProtoMsg(message: _18.CapabilityOwners): _18.CapabilityOwnersProtoMsg;
        };
    };
}
