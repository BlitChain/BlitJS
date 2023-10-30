//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
function createBaseMinter() {
    return {
        epoch_provisions: ""
    };
}
export const Minter = {
    typeUrl: "/osmosis.mint.v1beta1.Minter",
    encode(message, writer = BinaryWriter.create()) {
        if (message.epoch_provisions !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.epoch_provisions, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epoch_provisions = Decimal.fromAtomics(reader.string(), 18).toString();
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
            epoch_provisions: isSet(object.epoch_provisions) ? String(object.epoch_provisions) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.epoch_provisions !== undefined && (obj.epoch_provisions = message.epoch_provisions);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.epoch_provisions = object.epoch_provisions ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            epoch_provisions: object?.epoch_provisions
        };
    },
    toSDK(message) {
        const obj = {};
        obj.epoch_provisions = message.epoch_provisions;
        return obj;
    },
    fromAmino(object) {
        return {
            epoch_provisions: object.epoch_provisions
        };
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_provisions = message.epoch_provisions;
        return obj;
    },
    fromAminoMsg(object) {
        return Minter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/minter",
            value: Minter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Minter.decode(message.value);
    },
    toProto(message) {
        return Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.Minter",
            value: Minter.encode(message).finish()
        };
    }
};
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
export const WeightedAddress = {
    typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
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
            address: isSet(object.address) ? String(object.address) : "",
            weight: isSet(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            weight: object?.weight
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            weight: object.weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return WeightedAddress.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/weighted-address",
            value: WeightedAddress.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
            value: WeightedAddress.encode(message).finish()
        };
    }
};
function createBaseDistributionProportions() {
    return {
        staking: "",
        pool_incentives: "",
        developer_rewards: "",
        community_pool: ""
    };
}
export const DistributionProportions = {
    typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
    encode(message, writer = BinaryWriter.create()) {
        if (message.staking !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
        }
        if (message.pool_incentives !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.pool_incentives, 18).atomics);
        }
        if (message.developer_rewards !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.developer_rewards, 18).atomics);
        }
        if (message.community_pool !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.community_pool, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.pool_incentives = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.developer_rewards = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.community_pool = Decimal.fromAtomics(reader.string(), 18).toString();
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
            staking: isSet(object.staking) ? String(object.staking) : "",
            pool_incentives: isSet(object.pool_incentives) ? String(object.pool_incentives) : "",
            developer_rewards: isSet(object.developer_rewards) ? String(object.developer_rewards) : "",
            community_pool: isSet(object.community_pool) ? String(object.community_pool) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.staking !== undefined && (obj.staking = message.staking);
        message.pool_incentives !== undefined && (obj.pool_incentives = message.pool_incentives);
        message.developer_rewards !== undefined && (obj.developer_rewards = message.developer_rewards);
        message.community_pool !== undefined && (obj.community_pool = message.community_pool);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.staking = object.staking ?? "";
        message.pool_incentives = object.pool_incentives ?? "";
        message.developer_rewards = object.developer_rewards ?? "";
        message.community_pool = object.community_pool ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            staking: object?.staking,
            pool_incentives: object?.pool_incentives,
            developer_rewards: object?.developer_rewards,
            community_pool: object?.community_pool
        };
    },
    toSDK(message) {
        const obj = {};
        obj.staking = message.staking;
        obj.pool_incentives = message.pool_incentives;
        obj.developer_rewards = message.developer_rewards;
        obj.community_pool = message.community_pool;
        return obj;
    },
    fromAmino(object) {
        return {
            staking: object.staking,
            pool_incentives: object.pool_incentives,
            developer_rewards: object.developer_rewards,
            community_pool: object.community_pool
        };
    },
    toAmino(message) {
        const obj = {};
        obj.staking = message.staking;
        obj.pool_incentives = message.pool_incentives;
        obj.developer_rewards = message.developer_rewards;
        obj.community_pool = message.community_pool;
        return obj;
    },
    fromAminoMsg(object) {
        return DistributionProportions.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/distribution-proportions",
            value: DistributionProportions.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
            value: DistributionProportions.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mint_denom: "",
        genesis_epoch_provisions: "",
        epoch_identifier: "",
        reduction_period_in_epochs: BigInt(0),
        reduction_factor: "",
        distribution_proportions: DistributionProportions.fromPartial({}),
        weighted_developer_rewards_receivers: [],
        minting_rewards_distribution_start_epoch: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/osmosis.mint.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.mint_denom !== "") {
            writer.uint32(10).string(message.mint_denom);
        }
        if (message.genesis_epoch_provisions !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.genesis_epoch_provisions, 18).atomics);
        }
        if (message.epoch_identifier !== "") {
            writer.uint32(26).string(message.epoch_identifier);
        }
        if (message.reduction_period_in_epochs !== BigInt(0)) {
            writer.uint32(32).int64(message.reduction_period_in_epochs);
        }
        if (message.reduction_factor !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.reduction_factor, 18).atomics);
        }
        if (message.distribution_proportions !== undefined) {
            DistributionProportions.encode(message.distribution_proportions, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.weighted_developer_rewards_receivers) {
            WeightedAddress.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.minting_rewards_distribution_start_epoch !== BigInt(0)) {
            writer.uint32(64).int64(message.minting_rewards_distribution_start_epoch);
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
                    message.mint_denom = reader.string();
                    break;
                case 2:
                    message.genesis_epoch_provisions = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.epoch_identifier = reader.string();
                    break;
                case 4:
                    message.reduction_period_in_epochs = reader.int64();
                    break;
                case 5:
                    message.reduction_factor = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.distribution_proportions = DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.weighted_developer_rewards_receivers.push(WeightedAddress.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.minting_rewards_distribution_start_epoch = reader.int64();
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
            mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
            genesis_epoch_provisions: isSet(object.genesis_epoch_provisions) ? String(object.genesis_epoch_provisions) : "",
            epoch_identifier: isSet(object.epoch_identifier) ? String(object.epoch_identifier) : "",
            reduction_period_in_epochs: isSet(object.reduction_period_in_epochs) ? BigInt(object.reduction_period_in_epochs.toString()) : BigInt(0),
            reduction_factor: isSet(object.reduction_factor) ? String(object.reduction_factor) : "",
            distribution_proportions: isSet(object.distribution_proportions) ? DistributionProportions.fromJSON(object.distribution_proportions) : undefined,
            weighted_developer_rewards_receivers: Array.isArray(object?.weighted_developer_rewards_receivers) ? object.weighted_developer_rewards_receivers.map((e) => WeightedAddress.fromJSON(e)) : [],
            minting_rewards_distribution_start_epoch: isSet(object.minting_rewards_distribution_start_epoch) ? BigInt(object.minting_rewards_distribution_start_epoch.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
        message.genesis_epoch_provisions !== undefined && (obj.genesis_epoch_provisions = message.genesis_epoch_provisions);
        message.epoch_identifier !== undefined && (obj.epoch_identifier = message.epoch_identifier);
        message.reduction_period_in_epochs !== undefined && (obj.reduction_period_in_epochs = (message.reduction_period_in_epochs || BigInt(0)).toString());
        message.reduction_factor !== undefined && (obj.reduction_factor = message.reduction_factor);
        message.distribution_proportions !== undefined && (obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toJSON(message.distribution_proportions) : undefined);
        if (message.weighted_developer_rewards_receivers) {
            obj.weighted_developer_rewards_receivers = message.weighted_developer_rewards_receivers.map(e => e ? WeightedAddress.toJSON(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = [];
        }
        message.minting_rewards_distribution_start_epoch !== undefined && (obj.minting_rewards_distribution_start_epoch = (message.minting_rewards_distribution_start_epoch || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mint_denom = object.mint_denom ?? "";
        message.genesis_epoch_provisions = object.genesis_epoch_provisions ?? "";
        message.epoch_identifier = object.epoch_identifier ?? "";
        message.reduction_period_in_epochs = object.reduction_period_in_epochs !== undefined && object.reduction_period_in_epochs !== null ? BigInt(object.reduction_period_in_epochs.toString()) : BigInt(0);
        message.reduction_factor = object.reduction_factor ?? "";
        message.distribution_proportions = object.distribution_proportions !== undefined && object.distribution_proportions !== null ? DistributionProportions.fromPartial(object.distribution_proportions) : undefined;
        message.weighted_developer_rewards_receivers = object.weighted_developer_rewards_receivers?.map(e => WeightedAddress.fromPartial(e)) || [];
        message.minting_rewards_distribution_start_epoch = object.minting_rewards_distribution_start_epoch !== undefined && object.minting_rewards_distribution_start_epoch !== null ? BigInt(object.minting_rewards_distribution_start_epoch.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            mint_denom: object?.mint_denom,
            genesis_epoch_provisions: object?.genesis_epoch_provisions,
            epoch_identifier: object?.epoch_identifier,
            reduction_period_in_epochs: object?.reduction_period_in_epochs,
            reduction_factor: object?.reduction_factor,
            distribution_proportions: object.distribution_proportions ? DistributionProportions.fromSDK(object.distribution_proportions) : undefined,
            weighted_developer_rewards_receivers: Array.isArray(object?.weighted_developer_rewards_receivers) ? object.weighted_developer_rewards_receivers.map((e) => WeightedAddress.fromSDK(e)) : [],
            minting_rewards_distribution_start_epoch: object?.minting_rewards_distribution_start_epoch
        };
    },
    toSDK(message) {
        const obj = {};
        obj.mint_denom = message.mint_denom;
        obj.genesis_epoch_provisions = message.genesis_epoch_provisions;
        obj.epoch_identifier = message.epoch_identifier;
        obj.reduction_period_in_epochs = message.reduction_period_in_epochs;
        obj.reduction_factor = message.reduction_factor;
        message.distribution_proportions !== undefined && (obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toSDK(message.distribution_proportions) : undefined);
        if (message.weighted_developer_rewards_receivers) {
            obj.weighted_developer_rewards_receivers = message.weighted_developer_rewards_receivers.map(e => e ? WeightedAddress.toSDK(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = [];
        }
        obj.minting_rewards_distribution_start_epoch = message.minting_rewards_distribution_start_epoch;
        return obj;
    },
    fromAmino(object) {
        return {
            mint_denom: object.mint_denom,
            genesis_epoch_provisions: object.genesis_epoch_provisions,
            epoch_identifier: object.epoch_identifier,
            reduction_period_in_epochs: BigInt(object.reduction_period_in_epochs),
            reduction_factor: object.reduction_factor,
            distribution_proportions: object?.distribution_proportions ? DistributionProportions.fromAmino(object.distribution_proportions) : undefined,
            weighted_developer_rewards_receivers: Array.isArray(object?.weighted_developer_rewards_receivers) ? object.weighted_developer_rewards_receivers.map((e) => WeightedAddress.fromAmino(e)) : [],
            minting_rewards_distribution_start_epoch: BigInt(object.minting_rewards_distribution_start_epoch)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mint_denom;
        obj.genesis_epoch_provisions = message.genesis_epoch_provisions;
        obj.epoch_identifier = message.epoch_identifier;
        obj.reduction_period_in_epochs = message.reduction_period_in_epochs ? message.reduction_period_in_epochs.toString() : undefined;
        obj.reduction_factor = message.reduction_factor;
        obj.distribution_proportions = message.distribution_proportions ? DistributionProportions.toAmino(message.distribution_proportions) : undefined;
        if (message.weighted_developer_rewards_receivers) {
            obj.weighted_developer_rewards_receivers = message.weighted_developer_rewards_receivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = [];
        }
        obj.minting_rewards_distribution_start_epoch = message.minting_rewards_distribution_start_epoch ? message.minting_rewards_distribution_start_epoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/params",
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
            typeUrl: "/osmosis.mint.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=mint.js.map