//@ts-nocheck
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.localhost.v2";
/** ClientState defines the 09-localhost client state */
export interface ClientState {
  /** the latest block height */
  latest_height: Height;
}
export interface ClientStateProtoMsg {
  type_url: "/ibc.lightclients.localhost.v2.ClientState";
  value: Uint8Array;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateAmino {
  /** the latest block height */
  latest_height?: HeightAmino;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateSDKType {
  latest_height: HeightSDKType;
}
function createBaseClientState(): ClientState {
  return {
    latest_height: Height.fromPartial({})
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latest_height !== undefined) {
      Height.encode(message.latest_height, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latest_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    return {
      latest_height: isSet(object.latest_height) ? Height.fromJSON(object.latest_height) : undefined
    };
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.latest_height !== undefined && (obj.latest_height = message.latest_height ? Height.toJSON(message.latest_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.latest_height = object.latest_height !== undefined && object.latest_height !== null ? Height.fromPartial(object.latest_height) : undefined;
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latest_height = Height.fromAmino(object.latest_height);
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.latest_height = message.latest_height ? Height.toAmino(message.latest_height) : {};
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};