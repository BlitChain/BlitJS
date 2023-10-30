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
     * SetValidatorSetPreference creates a set of validator preference.
     * This message will process both create + update request.
     */
    static SetValidatorSetPreference(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/SetValidatorSetPreference`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * DelegateToValidatorSet gets the owner, coins and delegates to a
     * validator-set.
     */
    static DelegateToValidatorSet(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/DelegateToValidatorSet`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * UndelegateFromValidatorSet gets the owner and coins and undelegates from
     * validator-set. The unbonding logic will follow the `Undelegate` logic from
     * the sdk.
     */
    static UndelegateFromValidatorSet(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/UndelegateFromValidatorSet`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * RedelegateValidatorSet takes the existing validator set and redelegates to
     * a new set.
     */
    static RedelegateValidatorSet(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/RedelegateValidatorSet`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * WithdrawDelegationRewards allows users to claim rewards from the
     * validator-set.
     */
    static WithdrawDelegationRewards(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/WithdrawDelegationRewards`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
exports.Msg = Msg;
//# sourceMappingURL=tx.rpc.msg.js.map