"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Minter = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
function createBaseMinter() {
    return {
        inflation: "",
        annual_provisions: ""
    };
}
exports.Minter = {
    typeUrl: "/cosmos.mint.v1beta1.Minter",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.inflation !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.inflation, 18).atomics);
        }
        if (message.annual_provisions !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.annual_provisions, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.annual_provisions = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            inflation: (0, helpers_1.isSet)(object.inflation) ? String(object.inflation) : "",
            annual_provisions: (0, helpers_1.isSet)(object.annual_provisions) ? String(object.annual_provisions) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.inflation !== undefined && (obj.inflation = message.inflation);
        message.annual_provisions !== undefined && (obj.annual_provisions = message.annual_provisions);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.inflation = object.inflation ?? "";
        message.annual_provisions = object.annual_provisions ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            inflation: object?.inflation,
            annual_provisions: object?.annual_provisions
        };
    },
    toSDK(message) {
        const obj = {};
        obj.inflation = message.inflation;
        obj.annual_provisions = message.annual_provisions;
        return obj;
    },
    fromAmino(object) {
        return {
            inflation: object.inflation,
            annual_provisions: object.annual_provisions
        };
    },
    toAmino(message) {
        const obj = {};
        obj.inflation = message.inflation;
        obj.annual_provisions = message.annual_provisions;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Minter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Minter",
            value: exports.Minter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Minter.decode(message.value);
    },
    toProto(message) {
        return exports.Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.Minter",
            value: exports.Minter.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mint_denom: "",
        inflation_rate_change: "",
        inflation_max: "",
        inflation_min: "",
        goal_bonded: "",
        blocks_per_year: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/cosmos.mint.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mint_denom !== "") {
            writer.uint32(10).string(message.mint_denom);
        }
        if (message.inflation_rate_change !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.inflation_rate_change, 18).atomics);
        }
        if (message.inflation_max !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.inflation_max, 18).atomics);
        }
        if (message.inflation_min !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.inflation_min, 18).atomics);
        }
        if (message.goal_bonded !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.goal_bonded, 18).atomics);
        }
        if (message.blocks_per_year !== BigInt(0)) {
            writer.uint32(48).uint64(message.blocks_per_year);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mint_denom = reader.string();
                    break;
                case 2:
                    message.inflation_rate_change = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.inflation_max = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.inflation_min = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.goal_bonded = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.blocks_per_year = reader.uint64();
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
            mint_denom: (0, helpers_1.isSet)(object.mint_denom) ? String(object.mint_denom) : "",
            inflation_rate_change: (0, helpers_1.isSet)(object.inflation_rate_change) ? String(object.inflation_rate_change) : "",
            inflation_max: (0, helpers_1.isSet)(object.inflation_max) ? String(object.inflation_max) : "",
            inflation_min: (0, helpers_1.isSet)(object.inflation_min) ? String(object.inflation_min) : "",
            goal_bonded: (0, helpers_1.isSet)(object.goal_bonded) ? String(object.goal_bonded) : "",
            blocks_per_year: (0, helpers_1.isSet)(object.blocks_per_year) ? BigInt(object.blocks_per_year.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
        message.inflation_rate_change !== undefined && (obj.inflation_rate_change = message.inflation_rate_change);
        message.inflation_max !== undefined && (obj.inflation_max = message.inflation_max);
        message.inflation_min !== undefined && (obj.inflation_min = message.inflation_min);
        message.goal_bonded !== undefined && (obj.goal_bonded = message.goal_bonded);
        message.blocks_per_year !== undefined && (obj.blocks_per_year = (message.blocks_per_year || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mint_denom = object.mint_denom ?? "";
        message.inflation_rate_change = object.inflation_rate_change ?? "";
        message.inflation_max = object.inflation_max ?? "";
        message.inflation_min = object.inflation_min ?? "";
        message.goal_bonded = object.goal_bonded ?? "";
        message.blocks_per_year = object.blocks_per_year !== undefined && object.blocks_per_year !== null ? BigInt(object.blocks_per_year.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            mint_denom: object?.mint_denom,
            inflation_rate_change: object?.inflation_rate_change,
            inflation_max: object?.inflation_max,
            inflation_min: object?.inflation_min,
            goal_bonded: object?.goal_bonded,
            blocks_per_year: object?.blocks_per_year
        };
    },
    toSDK(message) {
        const obj = {};
        obj.mint_denom = message.mint_denom;
        obj.inflation_rate_change = message.inflation_rate_change;
        obj.inflation_max = message.inflation_max;
        obj.inflation_min = message.inflation_min;
        obj.goal_bonded = message.goal_bonded;
        obj.blocks_per_year = message.blocks_per_year;
        return obj;
    },
    fromAmino(object) {
        return {
            mint_denom: object.mint_denom,
            inflation_rate_change: object.inflation_rate_change,
            inflation_max: object.inflation_max,
            inflation_min: object.inflation_min,
            goal_bonded: object.goal_bonded,
            blocks_per_year: BigInt(object.blocks_per_year)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mint_denom;
        obj.inflation_rate_change = message.inflation_rate_change;
        obj.inflation_max = message.inflation_max;
        obj.inflation_min = message.inflation_min;
        obj.goal_bonded = message.goal_bonded;
        obj.blocks_per_year = message.blocks_per_year ? message.blocks_per_year.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=mint.js.map