//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseMetadata() {
    return {
        version: "",
        controller_connection_id: "",
        host_connection_id: "",
        address: "",
        encoding: "",
        tx_type: ""
    };
}
export const Metadata = {
    typeUrl: "/ibc.applications.interchain_accounts.v1.Metadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.controller_connection_id !== "") {
            writer.uint32(18).string(message.controller_connection_id);
        }
        if (message.host_connection_id !== "") {
            writer.uint32(26).string(message.host_connection_id);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        if (message.encoding !== "") {
            writer.uint32(42).string(message.encoding);
        }
        if (message.tx_type !== "") {
            writer.uint32(50).string(message.tx_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.controller_connection_id = reader.string();
                    break;
                case 3:
                    message.host_connection_id = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.encoding = reader.string();
                    break;
                case 6:
                    message.tx_type = reader.string();
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
            version: isSet(object.version) ? String(object.version) : "",
            controller_connection_id: isSet(object.controller_connection_id) ? String(object.controller_connection_id) : "",
            host_connection_id: isSet(object.host_connection_id) ? String(object.host_connection_id) : "",
            address: isSet(object.address) ? String(object.address) : "",
            encoding: isSet(object.encoding) ? String(object.encoding) : "",
            tx_type: isSet(object.tx_type) ? String(object.tx_type) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.controller_connection_id !== undefined && (obj.controller_connection_id = message.controller_connection_id);
        message.host_connection_id !== undefined && (obj.host_connection_id = message.host_connection_id);
        message.address !== undefined && (obj.address = message.address);
        message.encoding !== undefined && (obj.encoding = message.encoding);
        message.tx_type !== undefined && (obj.tx_type = message.tx_type);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.version = object.version ?? "";
        message.controller_connection_id = object.controller_connection_id ?? "";
        message.host_connection_id = object.host_connection_id ?? "";
        message.address = object.address ?? "";
        message.encoding = object.encoding ?? "";
        message.tx_type = object.tx_type ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMetadata();
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.controller_connection_id !== undefined && object.controller_connection_id !== null) {
            message.controller_connection_id = object.controller_connection_id;
        }
        if (object.host_connection_id !== undefined && object.host_connection_id !== null) {
            message.host_connection_id = object.host_connection_id;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.encoding !== undefined && object.encoding !== null) {
            message.encoding = object.encoding;
        }
        if (object.tx_type !== undefined && object.tx_type !== null) {
            message.tx_type = object.tx_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version;
        obj.controller_connection_id = message.controller_connection_id;
        obj.host_connection_id = message.host_connection_id;
        obj.address = message.address;
        obj.encoding = message.encoding;
        obj.tx_type = message.tx_type;
        return obj;
    },
    fromAminoMsg(object) {
        return Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Metadata.decode(message.value);
    },
    toProto(message) {
        return Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.v1.Metadata",
            value: Metadata.encode(message).finish()
        };
    }
};
//# sourceMappingURL=metadata.js.map