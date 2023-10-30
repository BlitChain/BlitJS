//@ts-nocheck
import { MsgSetValidatorSetPreference, MsgDelegateToValidatorSet, MsgUndelegateFromValidatorSet, MsgRedelegateValidatorSet, MsgWithdrawDelegationRewards } from "./tx";
export const AminoConverter = {
    "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
        aminoType: "osmosis/valset-pref/MsgSetValidatorSetPreference",
        toAmino: MsgSetValidatorSetPreference.toAmino,
        fromAmino: MsgSetValidatorSetPreference.fromAmino
    },
    "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
        aminoType: "osmosis/valset-pref/MsgDelegateToValidatorSet",
        toAmino: MsgDelegateToValidatorSet.toAmino,
        fromAmino: MsgDelegateToValidatorSet.fromAmino
    },
    "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
        aminoType: "osmosis/valset-pref/MsgUndelegateFromValidatorSet",
        toAmino: MsgUndelegateFromValidatorSet.toAmino,
        fromAmino: MsgUndelegateFromValidatorSet.fromAmino
    },
    "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
        aminoType: "osmosis/valsetpref/redelegate-validator-set",
        toAmino: MsgRedelegateValidatorSet.toAmino,
        fromAmino: MsgRedelegateValidatorSet.fromAmino
    },
    "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
        aminoType: "osmosis/valset-pref/MsgWithdrawDelegationRewards",
        toAmino: MsgWithdrawDelegationRewards.toAmino,
        fromAmino: MsgWithdrawDelegationRewards.fromAmino
    }
};
//# sourceMappingURL=tx.amino.js.map