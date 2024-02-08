//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.v1";
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface Metadata {
  /** version defines the ICS27 protocol version */
  version: string;
  /** controller_connection_id is the connection identifier associated with the controller chain */
  controller_connection_id: string;
  /** host_connection_id is the connection identifier associated with the host chain */
  host_connection_id: string;
  /**
   * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
   * NOTE: the address field is empty on the OnChanOpenInit handshake step
   */
  address: string;
  /** encoding defines the supported codec format */
  encoding: string;
  /** tx_type defines the type of transactions the interchain account can execute */
  tx_type: string;
}
export interface MetadataProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.v1.Metadata";
  value: Uint8Array;
}
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface MetadataAmino {
  /** version defines the ICS27 protocol version */
  version?: string;
  /** controller_connection_id is the connection identifier associated with the controller chain */
  controller_connection_id?: string;
  /** host_connection_id is the connection identifier associated with the host chain */
  host_connection_id?: string;
  /**
   * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
   * NOTE: the address field is empty on the OnChanOpenInit handshake step
   */
  address?: string;
  /** encoding defines the supported codec format */
  encoding?: string;
  /** tx_type defines the type of transactions the interchain account can execute */
  tx_type?: string;
}
export interface MetadataAminoMsg {
  type: "cosmos-sdk/Metadata";
  value: MetadataAmino;
}
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface MetadataSDKType {
  version: string;
  controller_connection_id: string;
  host_connection_id: string;
  address: string;
  encoding: string;
  tx_type: string;
}
function createBaseMetadata(): Metadata {
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
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
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
  fromJSON(object: any): Metadata {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      controller_connection_id: isSet(object.controller_connection_id) ? String(object.controller_connection_id) : "",
      host_connection_id: isSet(object.host_connection_id) ? String(object.host_connection_id) : "",
      address: isSet(object.address) ? String(object.address) : "",
      encoding: isSet(object.encoding) ? String(object.encoding) : "",
      tx_type: isSet(object.tx_type) ? String(object.tx_type) : ""
    };
  },
  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.controller_connection_id !== undefined && (obj.controller_connection_id = message.controller_connection_id);
    message.host_connection_id !== undefined && (obj.host_connection_id = message.host_connection_id);
    message.address !== undefined && (obj.address = message.address);
    message.encoding !== undefined && (obj.encoding = message.encoding);
    message.tx_type !== undefined && (obj.tx_type = message.tx_type);
    return obj;
  },
  fromPartial(object: Partial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.version = object.version ?? "";
    message.controller_connection_id = object.controller_connection_id ?? "";
    message.host_connection_id = object.host_connection_id ?? "";
    message.address = object.address ?? "";
    message.encoding = object.encoding ?? "";
    message.tx_type = object.tx_type ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
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
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.version = message.version;
    obj.controller_connection_id = message.controller_connection_id;
    obj.host_connection_id = message.host_connection_id;
    obj.address = message.address;
    obj.encoding = message.encoding;
    obj.tx_type = message.tx_type;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message: Metadata): MetadataAminoMsg {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};