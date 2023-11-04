"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msg = void 0;
//@ts-nocheck
const fm = __importStar(require("../../../grpc-gateway"));
class Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    static SetWithdrawAddress(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/SetWithdrawAddress`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    static WithdrawDelegatorReward(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/WithdrawDelegatorReward`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    static WithdrawValidatorCommission(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/WithdrawValidatorCommission`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    static FundCommunityPool(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/FundCommunityPool`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * UpdateParams defines a governance operation for updating the x/distribution
     * module parameters. The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CommunityPoolSpend defines a governance operation for sending tokens from
     * the community pool in the x/distribution module to another account, which
     * could be the governance module itself. The authority is defined in the
     * keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static CommunityPoolSpend(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/CommunityPoolSpend`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
exports.Msg = Msg;
//# sourceMappingURL=tx.rpc.msg.js.map