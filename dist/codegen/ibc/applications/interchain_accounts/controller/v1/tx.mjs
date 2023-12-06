//@ts-nocheck
import { InterchainAccountPacketData } from "../../v1/packet";
import { Params } from "./controller";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseMsgRegisterInterchainAccount() {
    return {
        owner: "",
        connection_id: "",
        version: ""
    };
}
export const MsgRegisterInterchainAccount = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            version: isSet(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccount();
        message.owner = object.owner ?? "";
        message.connection_id = object.connection_id ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            connection_id: object.connection_id,
            version: object.version
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.connection_id = message.connection_id;
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterInterchainAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRegisterInterchainAccount",
            value: MsgRegisterInterchainAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRegisterInterchainAccount.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterInterchainAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
            value: MsgRegisterInterchainAccount.encode(message).finish()
        };
    }
};
function createBaseMsgRegisterInterchainAccountResponse() {
    return {
        channel_id: "",
        port_id: ""
    };
}
export const MsgRegisterInterchainAccountResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.port_id !== "") {
            writer.uint32(18).string(message.port_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.string();
                    break;
                case 2:
                    message.port_id = reader.string();
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
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            port_id: isSet(object.port_id) ? String(object.port_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccountResponse();
        message.channel_id = object.channel_id ?? "";
        message.port_id = object.port_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            channel_id: object.channel_id,
            port_id: object.port_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channel_id;
        obj.port_id = message.port_id;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRegisterInterchainAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRegisterInterchainAccountResponse",
            value: MsgRegisterInterchainAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRegisterInterchainAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRegisterInterchainAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse",
            value: MsgRegisterInterchainAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSendTx() {
    return {
        owner: "",
        connection_id: "",
        packet_data: InterchainAccountPacketData.fromPartial({}),
        relative_timeout: BigInt(0)
    };
}
export const MsgSendTx = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.packet_data !== undefined) {
            InterchainAccountPacketData.encode(message.packet_data, writer.uint32(26).fork()).ldelim();
        }
        if (message.relative_timeout !== BigInt(0)) {
            writer.uint32(32).uint64(message.relative_timeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.packet_data = InterchainAccountPacketData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.relative_timeout = reader.uint64();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            packet_data: isSet(object.packet_data) ? InterchainAccountPacketData.fromJSON(object.packet_data) : undefined,
            relative_timeout: isSet(object.relative_timeout) ? BigInt(object.relative_timeout.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.packet_data !== undefined && (obj.packet_data = message.packet_data ? InterchainAccountPacketData.toJSON(message.packet_data) : undefined);
        message.relative_timeout !== undefined && (obj.relative_timeout = (message.relative_timeout || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSendTx();
        message.owner = object.owner ?? "";
        message.connection_id = object.connection_id ?? "";
        message.packet_data = object.packet_data !== undefined && object.packet_data !== null ? InterchainAccountPacketData.fromPartial(object.packet_data) : undefined;
        message.relative_timeout = object.relative_timeout !== undefined && object.relative_timeout !== null ? BigInt(object.relative_timeout.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            connection_id: object.connection_id,
            packet_data: object?.packet_data ? InterchainAccountPacketData.fromAmino(object.packet_data) : undefined,
            relative_timeout: BigInt(object.relative_timeout)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.connection_id = message.connection_id;
        obj.packet_data = message.packet_data ? InterchainAccountPacketData.toAmino(message.packet_data) : undefined;
        obj.relative_timeout = message.relative_timeout ? message.relative_timeout.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendTx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendTx",
            value: MsgSendTx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSendTx.decode(message.value);
    },
    toProto(message) {
        return MsgSendTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
            value: MsgSendTx.encode(message).finish()
        };
    }
};
function createBaseMsgSendTxResponse() {
    return {
        sequence: BigInt(0)
    };
}
export const MsgSendTxResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
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
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSendTxResponse();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            sequence: BigInt(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendTxResponse",
            value: MsgSendTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSendTxResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse",
            value: MsgSendTxResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        signer: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.signer = object.signer ?? "";
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            signer: object.signer,
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParams",
            value: MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map