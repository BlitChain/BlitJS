//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "cosmos.tx.config.v1";
/** Config is the config object of the x/auth/tx package. */
export interface Config {
  /**
   * skip_ante_handler defines whether the ante handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skip_ante_handler: boolean;
  /**
   * skip_post_handler defines whether the post handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skip_post_handler: boolean;
}
export interface ConfigProtoMsg {
  type_url: "/cosmos.tx.config.v1.Config";
  value: Uint8Array;
}
/** Config is the config object of the x/auth/tx package. */
export interface ConfigAmino {
  /**
   * skip_ante_handler defines whether the ante handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skip_ante_handler?: boolean;
  /**
   * skip_post_handler defines whether the post handler registration should be skipped in case an app wants to override
   * this functionality.
   */
  skip_post_handler?: boolean;
}
export interface ConfigAminoMsg {
  type: "cosmos-sdk/Config";
  value: ConfigAmino;
}
/** Config is the config object of the x/auth/tx package. */
export interface ConfigSDKType {
  skip_ante_handler: boolean;
  skip_post_handler: boolean;
}
function createBaseConfig(): Config {
  return {
    skip_ante_handler: false,
    skip_post_handler: false
  };
}
export const Config = {
  typeUrl: "/cosmos.tx.config.v1.Config",
  encode(message: Config, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.skip_ante_handler === true) {
      writer.uint32(8).bool(message.skip_ante_handler);
    }
    if (message.skip_post_handler === true) {
      writer.uint32(16).bool(message.skip_post_handler);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Config {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip_ante_handler = reader.bool();
          break;
        case 2:
          message.skip_post_handler = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Config {
    return {
      skip_ante_handler: isSet(object.skip_ante_handler) ? Boolean(object.skip_ante_handler) : false,
      skip_post_handler: isSet(object.skip_post_handler) ? Boolean(object.skip_post_handler) : false
    };
  },
  toJSON(message: Config): unknown {
    const obj: any = {};
    message.skip_ante_handler !== undefined && (obj.skip_ante_handler = message.skip_ante_handler);
    message.skip_post_handler !== undefined && (obj.skip_post_handler = message.skip_post_handler);
    return obj;
  },
  fromPartial(object: Partial<Config>): Config {
    const message = createBaseConfig();
    message.skip_ante_handler = object.skip_ante_handler ?? false;
    message.skip_post_handler = object.skip_post_handler ?? false;
    return message;
  },
  fromAmino(object: ConfigAmino): Config {
    const message = createBaseConfig();
    if (object.skip_ante_handler !== undefined && object.skip_ante_handler !== null) {
      message.skip_ante_handler = object.skip_ante_handler;
    }
    if (object.skip_post_handler !== undefined && object.skip_post_handler !== null) {
      message.skip_post_handler = object.skip_post_handler;
    }
    return message;
  },
  toAmino(message: Config): ConfigAmino {
    const obj: any = {};
    obj.skip_ante_handler = message.skip_ante_handler;
    obj.skip_post_handler = message.skip_post_handler;
    return obj;
  },
  fromAminoMsg(object: ConfigAminoMsg): Config {
    return Config.fromAmino(object.value);
  },
  toAminoMsg(message: Config): ConfigAminoMsg {
    return {
      type: "cosmos-sdk/Config",
      value: Config.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigProtoMsg): Config {
    return Config.decode(message.value);
  },
  toProto(message: Config): Uint8Array {
    return Config.encode(message).finish();
  },
  toProtoMsg(message: Config): ConfigProtoMsg {
    return {
      typeUrl: "/cosmos.tx.config.v1.Config",
      value: Config.encode(message).finish()
    };
  }
};