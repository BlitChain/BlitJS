//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "tendermint.version";
function createBaseApp() {
    return {
        protocol: BigInt(0),
        software: ""
    };
}
export const App = {
    typeUrl: "/tendermint.version.App",
    is(o) {
        return o && (o.$typeUrl === App.typeUrl || typeof o.protocol === "bigint" && typeof o.software === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === App.typeUrl || typeof o.protocol === "bigint" && typeof o.software === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === App.typeUrl || typeof o.protocol === "bigint" && typeof o.software === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.protocol !== BigInt(0)) {
            writer.uint32(8).uint64(message.protocol);
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseApp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.uint64();
                    break;
                case 2:
                    message.software = reader.string();
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
            protocol: isSet(object.protocol) ? BigInt(object.protocol.toString()) : BigInt(0),
            software: isSet(object.software) ? String(object.software) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol !== undefined && (obj.protocol = (message.protocol || BigInt(0)).toString());
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseApp();
        message.protocol = object.protocol !== undefined && object.protocol !== null ? BigInt(object.protocol.toString()) : BigInt(0);
        message.software = object.software ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseApp();
        if (object.protocol !== undefined && object.protocol !== null) {
            message.protocol = BigInt(object.protocol);
        }
        if (object.software !== undefined && object.software !== null) {
            message.software = object.software;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.protocol = message.protocol ? message.protocol.toString() : undefined;
        obj.software = message.software;
        return obj;
    },
    fromAminoMsg(object) {
        return App.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return App.decode(message.value);
    },
    toProto(message) {
        return App.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.App",
            value: App.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(App.typeUrl, App);
function createBaseConsensus() {
    return {
        block: BigInt(0),
        app: BigInt(0)
    };
}
export const Consensus = {
    typeUrl: "/tendermint.version.Consensus",
    is(o) {
        return o && (o.$typeUrl === Consensus.typeUrl || typeof o.block === "bigint" && typeof o.app === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Consensus.typeUrl || typeof o.block === "bigint" && typeof o.app === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Consensus.typeUrl || typeof o.block === "bigint" && typeof o.app === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.block !== BigInt(0)) {
            writer.uint32(8).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(16).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = reader.uint64();
                    break;
                case 2:
                    message.app = reader.uint64();
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
            block: isSet(object.block) ? BigInt(object.block.toString()) : BigInt(0),
            app: isSet(object.app) ? BigInt(object.app.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
        message.app !== undefined && (obj.app = (message.app || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensus();
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensus();
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? message.block.toString() : undefined;
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Consensus.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Consensus.decode(message.value);
    },
    toProto(message) {
        return Consensus.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.version.Consensus",
            value: Consensus.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Consensus.typeUrl, Consensus);
//# sourceMappingURL=types.js.map