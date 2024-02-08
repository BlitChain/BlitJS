//@ts-nocheck
import { Any } from "../../../../google/protobuf/any";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.client.v1";
function createBaseIdentifiedClientState() {
    return {
        client_id: "",
        client_state: undefined
    };
}
export const IdentifiedClientState = {
    typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
    aminoType: "cosmos-sdk/IdentifiedClientState",
    is(o) {
        return o && (o.$typeUrl === IdentifiedClientState.typeUrl || typeof o.client_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === IdentifiedClientState.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === IdentifiedClientState.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_state = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedClientState();
        message.client_id = object.client_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIdentifiedClientState();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromAmino(object.client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedClientState",
            value: IdentifiedClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedClientState.decode(message.value);
    },
    toProto(message) {
        return IdentifiedClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
            value: IdentifiedClientState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(IdentifiedClientState.typeUrl, IdentifiedClientState);
GlobalDecoderRegistry.registerAminoProtoMapping(IdentifiedClientState.aminoType, IdentifiedClientState.typeUrl);
function createBaseConsensusStateWithHeight() {
    return {
        height: Height.fromPartial({}),
        consensus_state: undefined
    };
}
export const ConsensusStateWithHeight = {
    typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
    aminoType: "cosmos-sdk/ConsensusStateWithHeight",
    is(o) {
        return o && (o.$typeUrl === ConsensusStateWithHeight.typeUrl || Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ConsensusStateWithHeight.typeUrl || Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ConsensusStateWithHeight.typeUrl || Height.isAmino(o.height));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateWithHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = Height.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
            consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateWithHeight();
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusStateWithHeight();
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = Any.fromAmino(object.consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? Height.toAmino(message.height) : undefined;
        obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusStateWithHeight.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateWithHeight",
            value: ConsensusStateWithHeight.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusStateWithHeight.decode(message.value);
    },
    toProto(message) {
        return ConsensusStateWithHeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
            value: ConsensusStateWithHeight.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ConsensusStateWithHeight.typeUrl, ConsensusStateWithHeight);
GlobalDecoderRegistry.registerAminoProtoMapping(ConsensusStateWithHeight.aminoType, ConsensusStateWithHeight.typeUrl);
function createBaseClientConsensusStates() {
    return {
        client_id: "",
        consensus_states: []
    };
}
export const ClientConsensusStates = {
    typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
    aminoType: "cosmos-sdk/ClientConsensusStates",
    is(o) {
        return o && (o.$typeUrl === ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.is(o.consensus_states[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.isSDK(o.consensus_states[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.isAmino(o.consensus_states[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.consensus_states) {
            ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientConsensusStates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => ConsensusStateWithHeight.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientConsensusStates();
        message.client_id = object.client_id ?? "";
        message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientConsensusStates();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ClientConsensusStates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientConsensusStates",
            value: ClientConsensusStates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientConsensusStates.decode(message.value);
    },
    toProto(message) {
        return ClientConsensusStates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
            value: ClientConsensusStates.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ClientConsensusStates.typeUrl, ClientConsensusStates);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientConsensusStates.aminoType, ClientConsensusStates.typeUrl);
function createBaseHeight() {
    return {
        revision_number: BigInt(0),
        revision_height: BigInt(0)
    };
}
export const Height = {
    typeUrl: "/ibc.core.client.v1.Height",
    aminoType: "cosmos-sdk/Height",
    is(o) {
        return o && (o.$typeUrl === Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.revision_number !== BigInt(0)) {
            writer.uint32(8).uint64(message.revision_number);
        }
        if (message.revision_height !== BigInt(0)) {
            writer.uint32(16).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revision_number = reader.uint64();
                    break;
                case 2:
                    message.revision_height = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            revision_number: isSet(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
            revision_height: isSet(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || BigInt(0)).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeight();
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            revision_number: BigInt(object.revision_number || "0"),
            revision_height: BigInt(object.revision_height || "0")
        };
    },
    toAmino(message) {
        const obj = {};
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Height.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Height",
            value: Height.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Height.decode(message.value);
    },
    toProto(message) {
        return Height.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Height",
            value: Height.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Height.typeUrl, Height);
GlobalDecoderRegistry.registerAminoProtoMapping(Height.aminoType, Height.typeUrl);
function createBaseParams() {
    return {
        allowed_clients: []
    };
}
export const Params = {
    typeUrl: "/ibc.core.client.v1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.allowed_clients) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowed_clients.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            allowed_clients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowed_clients) {
            obj.allowed_clients = message.allowed_clients.map(e => e);
        }
        else {
            obj.allowed_clients = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.allowed_clients = object.allowed_clients?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.allowed_clients = object.allowed_clients?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowed_clients) {
            obj.allowed_clients = message.allowed_clients.map(e => e);
        }
        else {
            obj.allowed_clients = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseClientUpdateProposal() {
    return {
        $typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
        title: "",
        description: "",
        subject_client_id: "",
        substitute_client_id: ""
    };
}
export const ClientUpdateProposal = {
    typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
    aminoType: "cosmos-sdk/ClientUpdateProposal",
    is(o) {
        return o && (o.$typeUrl === ClientUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ClientUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === ClientUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.subject_client_id !== "") {
            writer.uint32(26).string(message.subject_client_id);
        }
        if (message.substitute_client_id !== "") {
            writer.uint32(34).string(message.substitute_client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.subject_client_id = reader.string();
                    break;
                case 4:
                    message.substitute_client_id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            subject_client_id: isSet(object.subject_client_id) ? String(object.subject_client_id) : "",
            substitute_client_id: isSet(object.substitute_client_id) ? String(object.substitute_client_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.subject_client_id !== undefined && (obj.subject_client_id = message.subject_client_id);
        message.substitute_client_id !== undefined && (obj.substitute_client_id = message.substitute_client_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.subject_client_id = object.subject_client_id ?? "";
        message.substitute_client_id = object.substitute_client_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientUpdateProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.subject_client_id !== undefined && object.subject_client_id !== null) {
            message.subject_client_id = object.subject_client_id;
        }
        if (object.substitute_client_id !== undefined && object.substitute_client_id !== null) {
            message.substitute_client_id = object.substitute_client_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.subject_client_id = message.subject_client_id;
        obj.substitute_client_id = message.substitute_client_id;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientUpdateProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientUpdateProposal",
            value: ClientUpdateProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return ClientUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
            value: ClientUpdateProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ClientUpdateProposal.typeUrl, ClientUpdateProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientUpdateProposal.aminoType, ClientUpdateProposal.typeUrl);
function createBaseUpgradeProposal() {
    return {
        $typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        title: "",
        description: "",
        plan: Plan.fromPartial({}),
        upgraded_client_state: undefined
    };
}
export const UpgradeProposal = {
    typeUrl: "/ibc.core.client.v1.UpgradeProposal",
    aminoType: "cosmos-sdk/UpgradeProposal",
    is(o) {
        return o && (o.$typeUrl === UpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.is(o.plan));
    },
    isSDK(o) {
        return o && (o.$typeUrl === UpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.isSDK(o.plan));
    },
    isAmino(o) {
        return o && (o.$typeUrl === UpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.isAmino(o.plan));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        if (message.upgraded_client_state !== undefined) {
            Any.encode(message.upgraded_client_state, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.plan = Plan.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.upgraded_client_state = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
            upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromJSON(object.upgraded_client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? Any.toJSON(message.upgraded_client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUpgradeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromAmino(object.plan);
        }
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgraded_client_state = Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
        obj.upgraded_client_state = message.upgraded_client_state ? Any.toAmino(message.upgraded_client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UpgradeProposal",
            value: UpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return UpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.UpgradeProposal",
            value: UpgradeProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(UpgradeProposal.typeUrl, UpgradeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpgradeProposal.aminoType, UpgradeProposal.typeUrl);
//# sourceMappingURL=client.js.map