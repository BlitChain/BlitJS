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
     * CreateVestingAccount defines a method that enables creating a vesting
     * account.
     */
    static CreateVestingAccount(request, initRequest) {
        return fm.fetchReq(`/cosmos.vesting.v1beta1/CreateVestingAccount`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CreatePermanentLockedAccount defines a method that enables creating a permanent
     * locked account.
     *
     * Since: cosmos-sdk 0.46
     */
    static CreatePermanentLockedAccount(request, initRequest) {
        return fm.fetchReq(`/cosmos.vesting.v1beta1/CreatePermanentLockedAccount`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CreatePeriodicVestingAccount defines a method that enables creating a
     * periodic vesting account.
     *
     * Since: cosmos-sdk 0.46
     */
    static CreatePeriodicVestingAccount(request, initRequest) {
        return fm.fetchReq(`/cosmos.vesting.v1beta1/CreatePeriodicVestingAccount`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
exports.Msg = Msg;
//# sourceMappingURL=tx.rpc.msg.js.map