//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { ConsensusParams } from "../types/params";
import { ProofOps } from "../crypto/proof";
import { PublicKey } from "../crypto/keys";
import { blockIDFlagFromJSON, blockIDFlagToJSON } from "../types/validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "tendermint.abci";
export var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (CheckTxType = {}));
export const CheckTxTypeSDKType = CheckTxType;
export const CheckTxTypeAmino = CheckTxType;
export function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
export function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (ResponseOfferSnapshot_Result = {}));
export const ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
export const ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
export function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
export function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (ResponseApplySnapshotChunk_Result = {}));
export const ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
export const ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
export function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
export function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ResponseProcessProposal_ProposalStatus;
(function (ResponseProcessProposal_ProposalStatus) {
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["ACCEPT"] = 1] = "ACCEPT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["REJECT"] = 2] = "REJECT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseProcessProposal_ProposalStatus || (ResponseProcessProposal_ProposalStatus = {}));
export const ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatus;
export const ResponseProcessProposal_ProposalStatusAmino = ResponseProcessProposal_ProposalStatus;
export function responseProcessProposal_ProposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseProcessProposal_ProposalStatus.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseProcessProposal_ProposalStatus.ACCEPT;
        case 2:
        case "REJECT":
            return ResponseProcessProposal_ProposalStatus.REJECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
    }
}
export function responseProcessProposal_ProposalStatusToJSON(object) {
    switch (object) {
        case ResponseProcessProposal_ProposalStatus.UNKNOWN:
            return "UNKNOWN";
        case ResponseProcessProposal_ProposalStatus.ACCEPT:
            return "ACCEPT";
        case ResponseProcessProposal_ProposalStatus.REJECT:
            return "REJECT";
        case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var ResponseVerifyVoteExtension_VerifyStatus;
(function (ResponseVerifyVoteExtension_VerifyStatus) {
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["ACCEPT"] = 1] = "ACCEPT";
    /**
     * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
     * Incorrectly implementing this thus has liveness implications as it may affect
     * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
     * Honest nodes should never be rejected.
     */
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["REJECT"] = 2] = "REJECT";
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseVerifyVoteExtension_VerifyStatus || (ResponseVerifyVoteExtension_VerifyStatus = {}));
export const ResponseVerifyVoteExtension_VerifyStatusSDKType = ResponseVerifyVoteExtension_VerifyStatus;
export const ResponseVerifyVoteExtension_VerifyStatusAmino = ResponseVerifyVoteExtension_VerifyStatus;
export function responseVerifyVoteExtension_VerifyStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseVerifyVoteExtension_VerifyStatus.ACCEPT;
        case 2:
        case "REJECT":
            return ResponseVerifyVoteExtension_VerifyStatus.REJECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED;
    }
}
export function responseVerifyVoteExtension_VerifyStatusToJSON(object) {
    switch (object) {
        case ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN:
            return "UNKNOWN";
        case ResponseVerifyVoteExtension_VerifyStatus.ACCEPT:
            return "ACCEPT";
        case ResponseVerifyVoteExtension_VerifyStatus.REJECT:
            return "REJECT";
        case ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var MisbehaviorType;
(function (MisbehaviorType) {
    MisbehaviorType[MisbehaviorType["UNKNOWN"] = 0] = "UNKNOWN";
    MisbehaviorType[MisbehaviorType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    MisbehaviorType[MisbehaviorType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    MisbehaviorType[MisbehaviorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MisbehaviorType || (MisbehaviorType = {}));
export const MisbehaviorTypeSDKType = MisbehaviorType;
export const MisbehaviorTypeAmino = MisbehaviorType;
export function misbehaviorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return MisbehaviorType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return MisbehaviorType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return MisbehaviorType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MisbehaviorType.UNRECOGNIZED;
    }
}
export function misbehaviorTypeToJSON(object) {
    switch (object) {
        case MisbehaviorType.UNKNOWN:
            return "UNKNOWN";
        case MisbehaviorType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case MisbehaviorType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case MisbehaviorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        init_chain: undefined,
        query: undefined,
        check_tx: undefined,
        commit: undefined,
        list_snapshots: undefined,
        offer_snapshot: undefined,
        load_snapshot_chunk: undefined,
        apply_snapshot_chunk: undefined,
        prepare_proposal: undefined,
        process_proposal: undefined,
        extend_vote: undefined,
        verify_vote_extension: undefined,
        finalize_block: undefined
    };
}
export const Request = {
    typeUrl: "/tendermint.abci.Request",
    encode(message, writer = BinaryWriter.create()) {
        if (message.echo !== undefined) {
            RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.prepare_proposal !== undefined) {
            RequestPrepareProposal.encode(message.prepare_proposal, writer.uint32(130).fork()).ldelim();
        }
        if (message.process_proposal !== undefined) {
            RequestProcessProposal.encode(message.process_proposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.extend_vote !== undefined) {
            RequestExtendVote.encode(message.extend_vote, writer.uint32(146).fork()).ldelim();
        }
        if (message.verify_vote_extension !== undefined) {
            RequestVerifyVoteExtension.encode(message.verify_vote_extension, writer.uint32(154).fork()).ldelim();
        }
        if (message.finalize_block !== undefined) {
            RequestFinalizeBlock.encode(message.finalize_block, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = RequestInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.init_chain = RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = RequestQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.check_tx = RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.list_snapshots = RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offer_snapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.load_snapshot_chunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.apply_snapshot_chunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.prepare_proposal = RequestPrepareProposal.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.process_proposal = RequestProcessProposal.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.extend_vote = RequestExtendVote.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.verify_vote_extension = RequestVerifyVoteExtension.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.finalize_block = RequestFinalizeBlock.decode(reader, reader.uint32());
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
            echo: isSet(object.echo) ? RequestEcho.fromJSON(object.echo) : undefined,
            flush: isSet(object.flush) ? RequestFlush.fromJSON(object.flush) : undefined,
            info: isSet(object.info) ? RequestInfo.fromJSON(object.info) : undefined,
            init_chain: isSet(object.init_chain) ? RequestInitChain.fromJSON(object.init_chain) : undefined,
            query: isSet(object.query) ? RequestQuery.fromJSON(object.query) : undefined,
            check_tx: isSet(object.check_tx) ? RequestCheckTx.fromJSON(object.check_tx) : undefined,
            commit: isSet(object.commit) ? RequestCommit.fromJSON(object.commit) : undefined,
            list_snapshots: isSet(object.list_snapshots) ? RequestListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: isSet(object.offer_snapshot) ? RequestOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: isSet(object.load_snapshot_chunk) ? RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: isSet(object.apply_snapshot_chunk) ? RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined,
            prepare_proposal: isSet(object.prepare_proposal) ? RequestPrepareProposal.fromJSON(object.prepare_proposal) : undefined,
            process_proposal: isSet(object.process_proposal) ? RequestProcessProposal.fromJSON(object.process_proposal) : undefined,
            extend_vote: isSet(object.extend_vote) ? RequestExtendVote.fromJSON(object.extend_vote) : undefined,
            verify_vote_extension: isSet(object.verify_vote_extension) ? RequestVerifyVoteExtension.fromJSON(object.verify_vote_extension) : undefined,
            finalize_block: isSet(object.finalize_block) ? RequestFinalizeBlock.fromJSON(object.finalize_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? RequestFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? RequestInfo.toJSON(message.info) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? RequestInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? RequestQuery.toJSON(message.query) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? RequestCheckTx.toJSON(message.check_tx) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? RequestCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? RequestListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? RequestOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? RequestLoadSnapshotChunk.toJSON(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? RequestApplySnapshotChunk.toJSON(message.apply_snapshot_chunk) : undefined);
        message.prepare_proposal !== undefined && (obj.prepare_proposal = message.prepare_proposal ? RequestPrepareProposal.toJSON(message.prepare_proposal) : undefined);
        message.process_proposal !== undefined && (obj.process_proposal = message.process_proposal ? RequestProcessProposal.toJSON(message.process_proposal) : undefined);
        message.extend_vote !== undefined && (obj.extend_vote = message.extend_vote ? RequestExtendVote.toJSON(message.extend_vote) : undefined);
        message.verify_vote_extension !== undefined && (obj.verify_vote_extension = message.verify_vote_extension ? RequestVerifyVoteExtension.toJSON(message.verify_vote_extension) : undefined);
        message.finalize_block !== undefined && (obj.finalize_block = message.finalize_block ? RequestFinalizeBlock.toJSON(message.finalize_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
        message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? RequestInitChain.fromPartial(object.init_chain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
        message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? RequestCheckTx.fromPartial(object.check_tx) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
        message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? RequestListSnapshots.fromPartial(object.list_snapshots) : undefined;
        message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? RequestOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
        message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
        message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
        message.prepare_proposal = object.prepare_proposal !== undefined && object.prepare_proposal !== null ? RequestPrepareProposal.fromPartial(object.prepare_proposal) : undefined;
        message.process_proposal = object.process_proposal !== undefined && object.process_proposal !== null ? RequestProcessProposal.fromPartial(object.process_proposal) : undefined;
        message.extend_vote = object.extend_vote !== undefined && object.extend_vote !== null ? RequestExtendVote.fromPartial(object.extend_vote) : undefined;
        message.verify_vote_extension = object.verify_vote_extension !== undefined && object.verify_vote_extension !== null ? RequestVerifyVoteExtension.fromPartial(object.verify_vote_extension) : undefined;
        message.finalize_block = object.finalize_block !== undefined && object.finalize_block !== null ? RequestFinalizeBlock.fromPartial(object.finalize_block) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequest();
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = RequestEcho.fromAmino(object.echo);
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = RequestFlush.fromAmino(object.flush);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = RequestInfo.fromAmino(object.info);
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = RequestInitChain.fromAmino(object.init_chain);
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = RequestQuery.fromAmino(object.query);
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = RequestCheckTx.fromAmino(object.check_tx);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = RequestCommit.fromAmino(object.commit);
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = RequestListSnapshots.fromAmino(object.list_snapshots);
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = RequestOfferSnapshot.fromAmino(object.offer_snapshot);
        }
        if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
        }
        if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
        }
        if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
            message.prepare_proposal = RequestPrepareProposal.fromAmino(object.prepare_proposal);
        }
        if (object.process_proposal !== undefined && object.process_proposal !== null) {
            message.process_proposal = RequestProcessProposal.fromAmino(object.process_proposal);
        }
        if (object.extend_vote !== undefined && object.extend_vote !== null) {
            message.extend_vote = RequestExtendVote.fromAmino(object.extend_vote);
        }
        if (object.verify_vote_extension !== undefined && object.verify_vote_extension !== null) {
            message.verify_vote_extension = RequestVerifyVoteExtension.fromAmino(object.verify_vote_extension);
        }
        if (object.finalize_block !== undefined && object.finalize_block !== null) {
            message.finalize_block = RequestFinalizeBlock.fromAmino(object.finalize_block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.echo = message.echo ? RequestEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? RequestFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? RequestInfo.toAmino(message.info) : undefined;
        obj.init_chain = message.init_chain ? RequestInitChain.toAmino(message.init_chain) : undefined;
        obj.query = message.query ? RequestQuery.toAmino(message.query) : undefined;
        obj.check_tx = message.check_tx ? RequestCheckTx.toAmino(message.check_tx) : undefined;
        obj.commit = message.commit ? RequestCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.list_snapshots ? RequestListSnapshots.toAmino(message.list_snapshots) : undefined;
        obj.offer_snapshot = message.offer_snapshot ? RequestOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
        obj.load_snapshot_chunk = message.load_snapshot_chunk ? RequestLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
        obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? RequestApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
        obj.prepare_proposal = message.prepare_proposal ? RequestPrepareProposal.toAmino(message.prepare_proposal) : undefined;
        obj.process_proposal = message.process_proposal ? RequestProcessProposal.toAmino(message.process_proposal) : undefined;
        obj.extend_vote = message.extend_vote ? RequestExtendVote.toAmino(message.extend_vote) : undefined;
        obj.verify_vote_extension = message.verify_vote_extension ? RequestVerifyVoteExtension.toAmino(message.verify_vote_extension) : undefined;
        obj.finalize_block = message.finalize_block ? RequestFinalizeBlock.toAmino(message.finalize_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Request.decode(message.value);
    },
    toProto(message) {
        return Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Request",
            value: Request.encode(message).finish()
        };
    }
};
function createBaseRequestEcho() {
    return {
        message: ""
    };
}
export const RequestEcho = {
    typeUrl: "/tendermint.abci.RequestEcho",
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
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
            message: isSet(object.message) ? String(object.message) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestEcho();
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestEcho.decode(message.value);
    },
    toProto(message) {
        return RequestEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEcho",
            value: RequestEcho.encode(message).finish()
        };
    }
};
function createBaseRequestFlush() {
    return {};
}
export const RequestFlush = {
    typeUrl: "/tendermint.abci.RequestFlush",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFlush();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestFlush();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRequestFlush();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RequestFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestFlush.decode(message.value);
    },
    toProto(message) {
        return RequestFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestFlush",
            value: RequestFlush.encode(message).finish()
        };
    }
};
function createBaseRequestInfo() {
    return {
        version: "",
        block_version: BigInt(0),
        p2p_version: BigInt(0),
        abci_version: ""
    };
}
export const RequestInfo = {
    typeUrl: "/tendermint.abci.RequestInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.block_version !== BigInt(0)) {
            writer.uint32(16).uint64(message.block_version);
        }
        if (message.p2p_version !== BigInt(0)) {
            writer.uint32(24).uint64(message.p2p_version);
        }
        if (message.abci_version !== "") {
            writer.uint32(34).string(message.abci_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.block_version = reader.uint64();
                    break;
                case 3:
                    message.p2p_version = reader.uint64();
                    break;
                case 4:
                    message.abci_version = reader.string();
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
            block_version: isSet(object.block_version) ? BigInt(object.block_version.toString()) : BigInt(0),
            p2p_version: isSet(object.p2p_version) ? BigInt(object.p2p_version.toString()) : BigInt(0),
            abci_version: isSet(object.abci_version) ? String(object.abci_version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.block_version !== undefined && (obj.block_version = (message.block_version || BigInt(0)).toString());
        message.p2p_version !== undefined && (obj.p2p_version = (message.p2p_version || BigInt(0)).toString());
        message.abci_version !== undefined && (obj.abci_version = message.abci_version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInfo();
        message.version = object.version ?? "";
        message.block_version = object.block_version !== undefined && object.block_version !== null ? BigInt(object.block_version.toString()) : BigInt(0);
        message.p2p_version = object.p2p_version !== undefined && object.p2p_version !== null ? BigInt(object.p2p_version.toString()) : BigInt(0);
        message.abci_version = object.abci_version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestInfo();
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.block_version !== undefined && object.block_version !== null) {
            message.block_version = BigInt(object.block_version);
        }
        if (object.p2p_version !== undefined && object.p2p_version !== null) {
            message.p2p_version = BigInt(object.p2p_version);
        }
        if (object.abci_version !== undefined && object.abci_version !== null) {
            message.abci_version = object.abci_version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version;
        obj.block_version = message.block_version ? message.block_version.toString() : undefined;
        obj.p2p_version = message.p2p_version ? message.p2p_version.toString() : undefined;
        obj.abci_version = message.abci_version;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestInfo.decode(message.value);
    },
    toProto(message) {
        return RequestInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInfo",
            value: RequestInfo.encode(message).finish()
        };
    }
};
function createBaseRequestInitChain() {
    return {
        time: new Date(),
        chain_id: "",
        consensus_params: undefined,
        validators: [],
        app_state_bytes: new Uint8Array(),
        initial_height: BigInt(0)
    };
}
export const RequestInitChain = {
    typeUrl: "/tendermint.abci.RequestInitChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.consensus_params !== undefined) {
            ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.app_state_bytes.length !== 0) {
            writer.uint32(42).bytes(message.app_state_bytes);
        }
        if (message.initial_height !== BigInt(0)) {
            writer.uint32(48).int64(message.initial_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.app_state_bytes = reader.bytes();
                    break;
                case 6:
                    message.initial_height = reader.int64();
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorUpdate.fromJSON(e)) : [],
            app_state_bytes: isSet(object.app_state_bytes) ? bytesFromBase64(object.app_state_bytes) : new Uint8Array(),
            initial_height: isSet(object.initial_height) ? BigInt(object.initial_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_state_bytes !== undefined && (obj.app_state_bytes = base64FromBytes(message.app_state_bytes !== undefined ? message.app_state_bytes : new Uint8Array()));
        message.initial_height !== undefined && (obj.initial_height = (message.initial_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInitChain();
        message.time = object.time ?? undefined;
        message.chain_id = object.chain_id ?? "";
        message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
        message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
        message.app_state_bytes = object.app_state_bytes ?? new Uint8Array();
        message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? BigInt(object.initial_height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestInitChain();
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = object.chain_id;
        }
        if (object.consensus_params !== undefined && object.consensus_params !== null) {
            message.consensus_params = ConsensusParams.fromAmino(object.consensus_params);
        }
        message.validators = object.validators?.map(e => ValidatorUpdate.fromAmino(e)) || [];
        if (object.app_state_bytes !== undefined && object.app_state_bytes !== null) {
            message.app_state_bytes = bytesFromBase64(object.app_state_bytes);
        }
        if (object.initial_height !== undefined && object.initial_height !== null) {
            message.initial_height = BigInt(object.initial_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.chain_id = message.chain_id;
        obj.consensus_params = message.consensus_params ? ConsensusParams.toAmino(message.consensus_params) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_state_bytes = message.app_state_bytes ? base64FromBytes(message.app_state_bytes) : undefined;
        obj.initial_height = message.initial_height ? message.initial_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestInitChain.decode(message.value);
    },
    toProto(message) {
        return RequestInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInitChain",
            value: RequestInitChain.encode(message).finish()
        };
    }
};
function createBaseRequestQuery() {
    return {
        data: new Uint8Array(),
        path: "",
        height: BigInt(0),
        prove: false
    };
}
export const RequestQuery = {
    typeUrl: "/tendermint.abci.RequestQuery",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            path: isSet(object.path) ? String(object.path) : "",
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            prove: isSet(object.prove) ? Boolean(object.prove) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.path !== undefined && (obj.path = message.path);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.prove !== undefined && (obj.prove = message.prove);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestQuery();
        message.data = object.data ?? new Uint8Array();
        message.path = object.path ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.prove = object.prove ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestQuery();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = object.path;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.prove !== undefined && object.prove !== null) {
            message.prove = object.prove;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.path = message.path;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.prove = message.prove;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestQuery.decode(message.value);
    },
    toProto(message) {
        return RequestQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestQuery",
            value: RequestQuery.encode(message).finish()
        };
    }
};
function createBaseRequestCheckTx() {
    return {
        tx: new Uint8Array(),
        type: 0
    };
}
export const RequestCheckTx = {
    typeUrl: "/tendermint.abci.RequestCheckTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
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
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
            type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestCheckTx();
        message.tx = object.tx ?? new Uint8Array();
        message.type = object.type ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestCheckTx();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = bytesFromBase64(object.tx);
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = checkTxTypeFromJSON(object.type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestCheckTx.decode(message.value);
    },
    toProto(message) {
        return RequestCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCheckTx",
            value: RequestCheckTx.encode(message).finish()
        };
    }
};
function createBaseRequestCommit() {
    return {};
}
export const RequestCommit = {
    typeUrl: "/tendermint.abci.RequestCommit",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestCommit();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRequestCommit();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RequestCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestCommit.decode(message.value);
    },
    toProto(message) {
        return RequestCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCommit",
            value: RequestCommit.encode(message).finish()
        };
    }
};
function createBaseRequestListSnapshots() {
    return {};
}
export const RequestListSnapshots = {
    typeUrl: "/tendermint.abci.RequestListSnapshots",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRequestListSnapshots();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRequestListSnapshots();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return RequestListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestListSnapshots.decode(message.value);
    },
    toProto(message) {
        return RequestListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestListSnapshots",
            value: RequestListSnapshots.encode(message).finish()
        };
    }
};
function createBaseRequestOfferSnapshot() {
    return {
        snapshot: undefined,
        app_hash: new Uint8Array()
    };
}
export const RequestOfferSnapshot = {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot",
    encode(message, writer = BinaryWriter.create()) {
        if (message.snapshot !== undefined) {
            Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(18).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.app_hash = reader.bytes();
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
            snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? Snapshot.toJSON(message.snapshot) : undefined);
        message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestOfferSnapshot();
        message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestOfferSnapshot();
        if (object.snapshot !== undefined && object.snapshot !== null) {
            message.snapshot = Snapshot.fromAmino(object.snapshot);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = bytesFromBase64(object.app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
        obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return RequestOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestOfferSnapshot",
            value: RequestOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseRequestLoadSnapshotChunk() {
    return {
        height: BigInt(0),
        format: 0,
        chunk: 0
    };
}
export const RequestLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: isSet(object.format) ? Number(object.format) : 0,
            chunk: isSet(object.chunk) ? Number(object.chunk) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunk !== undefined && (obj.chunk = Math.round(message.chunk));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunk = object.chunk ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestLoadSnapshotChunk();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = object.chunk;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunk = message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return RequestLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
            value: RequestLoadSnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseRequestApplySnapshotChunk() {
    return {
        index: 0,
        chunk: new Uint8Array(),
        sender: ""
    };
}
export const RequestApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
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
            index: isSet(object.index) ? Number(object.index) : 0,
            chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined && (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestApplySnapshotChunk();
        message.index = object.index ?? 0;
        message.chunk = object.chunk ?? new Uint8Array();
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestApplySnapshotChunk();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = bytesFromBase64(object.chunk);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return RequestApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
            value: RequestApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseRequestPrepareProposal() {
    return {
        max_tx_bytes: BigInt(0),
        txs: [],
        local_last_commit: ExtendedCommitInfo.fromPartial({}),
        misbehavior: [],
        height: BigInt(0),
        time: new Date(),
        next_validators_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
export const RequestPrepareProposal = {
    typeUrl: "/tendermint.abci.RequestPrepareProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.max_tx_bytes !== BigInt(0)) {
            writer.uint32(8).int64(message.max_tx_bytes);
        }
        for (const v of message.txs) {
            writer.uint32(18).bytes(v);
        }
        if (message.local_last_commit !== undefined) {
            ExtendedCommitInfo.encode(message.local_last_commit, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(58).bytes(message.next_validators_hash);
        }
        if (message.proposer_address.length !== 0) {
            writer.uint32(66).bytes(message.proposer_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestPrepareProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_tx_bytes = reader.int64();
                    break;
                case 2:
                    message.txs.push(reader.bytes());
                    break;
                case 3:
                    message.local_last_commit = ExtendedCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.next_validators_hash = reader.bytes();
                    break;
                case 8:
                    message.proposer_address = reader.bytes();
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
            max_tx_bytes: isSet(object.max_tx_bytes) ? BigInt(object.max_tx_bytes.toString()) : BigInt(0),
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
            local_last_commit: isSet(object.local_last_commit) ? ExtendedCommitInfo.fromJSON(object.local_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => Misbehavior.fromJSON(e)) : [],
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
            proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_tx_bytes !== undefined && (obj.max_tx_bytes = (message.max_tx_bytes || BigInt(0)).toString());
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        message.local_last_commit !== undefined && (obj.local_last_commit = message.local_last_commit ? ExtendedCommitInfo.toJSON(message.local_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toJSON(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.next_validators_hash !== undefined && (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = base64FromBytes(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestPrepareProposal();
        message.max_tx_bytes = object.max_tx_bytes !== undefined && object.max_tx_bytes !== null ? BigInt(object.max_tx_bytes.toString()) : BigInt(0);
        message.txs = object.txs?.map(e => e) || [];
        message.local_last_commit = object.local_last_commit !== undefined && object.local_last_commit !== null ? ExtendedCommitInfo.fromPartial(object.local_last_commit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestPrepareProposal();
        if (object.max_tx_bytes !== undefined && object.max_tx_bytes !== null) {
            message.max_tx_bytes = BigInt(object.max_tx_bytes);
        }
        message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
        if (object.local_last_commit !== undefined && object.local_last_commit !== null) {
            message.local_last_commit = ExtendedCommitInfo.fromAmino(object.local_last_commit);
        }
        message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposer_address = bytesFromBase64(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_tx_bytes = message.max_tx_bytes ? message.max_tx_bytes.toString() : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e));
        }
        else {
            obj.txs = [];
        }
        obj.local_last_commit = message.local_last_commit ? ExtendedCommitInfo.toAmino(message.local_last_commit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
        obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestPrepareProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestPrepareProposal.decode(message.value);
    },
    toProto(message) {
        return RequestPrepareProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestPrepareProposal",
            value: RequestPrepareProposal.encode(message).finish()
        };
    }
};
function createBaseRequestProcessProposal() {
    return {
        txs: [],
        proposed_last_commit: CommitInfo.fromPartial({}),
        misbehavior: [],
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        next_validators_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
export const RequestProcessProposal = {
    typeUrl: "/tendermint.abci.RequestProcessProposal",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        if (message.proposed_last_commit !== undefined) {
            CommitInfo.encode(message.proposed_last_commit, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(58).bytes(message.next_validators_hash);
        }
        if (message.proposer_address.length !== 0) {
            writer.uint32(66).bytes(message.proposer_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestProcessProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                case 2:
                    message.proposed_last_commit = CommitInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.next_validators_hash = reader.bytes();
                    break;
                case 8:
                    message.proposer_address = reader.bytes();
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
            proposed_last_commit: isSet(object.proposed_last_commit) ? CommitInfo.fromJSON(object.proposed_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => Misbehavior.fromJSON(e)) : [],
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
            proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        message.proposed_last_commit !== undefined && (obj.proposed_last_commit = message.proposed_last_commit ? CommitInfo.toJSON(message.proposed_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toJSON(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.next_validators_hash !== undefined && (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = base64FromBytes(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestProcessProposal();
        message.txs = object.txs?.map(e => e) || [];
        message.proposed_last_commit = object.proposed_last_commit !== undefined && object.proposed_last_commit !== null ? CommitInfo.fromPartial(object.proposed_last_commit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
        message.hash = object.hash ?? new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestProcessProposal();
        message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
        if (object.proposed_last_commit !== undefined && object.proposed_last_commit !== null) {
            message.proposed_last_commit = CommitInfo.fromAmino(object.proposed_last_commit);
        }
        message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposer_address = bytesFromBase64(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e));
        }
        else {
            obj.txs = [];
        }
        obj.proposed_last_commit = message.proposed_last_commit ? CommitInfo.toAmino(message.proposed_last_commit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
        obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestProcessProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestProcessProposal.decode(message.value);
    },
    toProto(message) {
        return RequestProcessProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestProcessProposal",
            value: RequestProcessProposal.encode(message).finish()
        };
    }
};
function createBaseRequestExtendVote() {
    return {
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        txs: [],
        proposed_last_commit: CommitInfo.fromPartial({}),
        misbehavior: [],
        next_validators_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
export const RequestExtendVote = {
    typeUrl: "/tendermint.abci.RequestExtendVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.txs) {
            writer.uint32(34).bytes(v);
        }
        if (message.proposed_last_commit !== undefined) {
            CommitInfo.encode(message.proposed_last_commit, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            Misbehavior.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(58).bytes(message.next_validators_hash);
        }
        if (message.proposer_address.length !== 0) {
            writer.uint32(66).bytes(message.proposer_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestExtendVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.txs.push(reader.bytes());
                    break;
                case 5:
                    message.proposed_last_commit = CommitInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.next_validators_hash = reader.bytes();
                    break;
                case 8:
                    message.proposer_address = reader.bytes();
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
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
            proposed_last_commit: isSet(object.proposed_last_commit) ? CommitInfo.fromJSON(object.proposed_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => Misbehavior.fromJSON(e)) : [],
            next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
            proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        message.proposed_last_commit !== undefined && (obj.proposed_last_commit = message.proposed_last_commit ? CommitInfo.toJSON(message.proposed_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toJSON(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        message.next_validators_hash !== undefined && (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = base64FromBytes(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestExtendVote();
        message.hash = object.hash ?? new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.txs = object.txs?.map(e => e) || [];
        message.proposed_last_commit = object.proposed_last_commit !== undefined && object.proposed_last_commit !== null ? CommitInfo.fromPartial(object.proposed_last_commit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestExtendVote();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
        if (object.proposed_last_commit !== undefined && object.proposed_last_commit !== null) {
            message.proposed_last_commit = CommitInfo.fromAmino(object.proposed_last_commit);
        }
        message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposer_address = bytesFromBase64(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e));
        }
        else {
            obj.txs = [];
        }
        obj.proposed_last_commit = message.proposed_last_commit ? CommitInfo.toAmino(message.proposed_last_commit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
        obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestExtendVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestExtendVote.decode(message.value);
    },
    toProto(message) {
        return RequestExtendVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestExtendVote",
            value: RequestExtendVote.encode(message).finish()
        };
    }
};
function createBaseRequestVerifyVoteExtension() {
    return {
        hash: new Uint8Array(),
        validator_address: new Uint8Array(),
        height: BigInt(0),
        vote_extension: new Uint8Array()
    };
}
export const RequestVerifyVoteExtension = {
    typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(18).bytes(message.validator_address);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.vote_extension.length !== 0) {
            writer.uint32(34).bytes(message.vote_extension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestVerifyVoteExtension();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.validator_address = reader.bytes();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.vote_extension = reader.bytes();
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
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(),
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            vote_extension: isSet(object.vote_extension) ? bytesFromBase64(object.vote_extension) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.validator_address !== undefined && (obj.validator_address = base64FromBytes(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.vote_extension !== undefined && (obj.vote_extension = base64FromBytes(message.vote_extension !== undefined ? message.vote_extension : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestVerifyVoteExtension();
        message.hash = object.hash ?? new Uint8Array();
        message.validator_address = object.validator_address ?? new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.vote_extension = object.vote_extension ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestVerifyVoteExtension();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = bytesFromBase64(object.validator_address);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.vote_extension !== undefined && object.vote_extension !== null) {
            message.vote_extension = bytesFromBase64(object.vote_extension);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.validator_address = message.validator_address ? base64FromBytes(message.validator_address) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.vote_extension = message.vote_extension ? base64FromBytes(message.vote_extension) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestVerifyVoteExtension.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestVerifyVoteExtension.decode(message.value);
    },
    toProto(message) {
        return RequestVerifyVoteExtension.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
            value: RequestVerifyVoteExtension.encode(message).finish()
        };
    }
};
function createBaseRequestFinalizeBlock() {
    return {
        txs: [],
        decided_last_commit: CommitInfo.fromPartial({}),
        misbehavior: [],
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        next_validators_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
export const RequestFinalizeBlock = {
    typeUrl: "/tendermint.abci.RequestFinalizeBlock",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        if (message.decided_last_commit !== undefined) {
            CommitInfo.encode(message.decided_last_commit, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(58).bytes(message.next_validators_hash);
        }
        if (message.proposer_address.length !== 0) {
            writer.uint32(66).bytes(message.proposer_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFinalizeBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                case 2:
                    message.decided_last_commit = CommitInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.next_validators_hash = reader.bytes();
                    break;
                case 8:
                    message.proposer_address = reader.bytes();
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : [],
            decided_last_commit: isSet(object.decided_last_commit) ? CommitInfo.fromJSON(object.decided_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => Misbehavior.fromJSON(e)) : [],
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
            proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        message.decided_last_commit !== undefined && (obj.decided_last_commit = message.decided_last_commit ? CommitInfo.toJSON(message.decided_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toJSON(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.next_validators_hash !== undefined && (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = base64FromBytes(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestFinalizeBlock();
        message.txs = object.txs?.map(e => e) || [];
        message.decided_last_commit = object.decided_last_commit !== undefined && object.decided_last_commit !== null ? CommitInfo.fromPartial(object.decided_last_commit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
        message.hash = object.hash ?? new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseRequestFinalizeBlock();
        message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
        if (object.decided_last_commit !== undefined && object.decided_last_commit !== null) {
            message.decided_last_commit = CommitInfo.fromAmino(object.decided_last_commit);
        }
        message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposer_address = bytesFromBase64(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e));
        }
        else {
            obj.txs = [];
        }
        obj.decided_last_commit = message.decided_last_commit ? CommitInfo.toAmino(message.decided_last_commit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
        obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RequestFinalizeBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RequestFinalizeBlock.decode(message.value);
    },
    toProto(message) {
        return RequestFinalizeBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestFinalizeBlock",
            value: RequestFinalizeBlock.encode(message).finish()
        };
    }
};
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        init_chain: undefined,
        query: undefined,
        check_tx: undefined,
        commit: undefined,
        list_snapshots: undefined,
        offer_snapshot: undefined,
        load_snapshot_chunk: undefined,
        apply_snapshot_chunk: undefined,
        prepare_proposal: undefined,
        process_proposal: undefined,
        extend_vote: undefined,
        verify_vote_extension: undefined,
        finalize_block: undefined
    };
}
export const Response = {
    typeUrl: "/tendermint.abci.Response",
    encode(message, writer = BinaryWriter.create()) {
        if (message.exception !== undefined) {
            ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
        }
        if (message.prepare_proposal !== undefined) {
            ResponsePrepareProposal.encode(message.prepare_proposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.process_proposal !== undefined) {
            ResponseProcessProposal.encode(message.process_proposal, writer.uint32(146).fork()).ldelim();
        }
        if (message.extend_vote !== undefined) {
            ResponseExtendVote.encode(message.extend_vote, writer.uint32(154).fork()).ldelim();
        }
        if (message.verify_vote_extension !== undefined) {
            ResponseVerifyVoteExtension.encode(message.verify_vote_extension, writer.uint32(162).fork()).ldelim();
        }
        if (message.finalize_block !== undefined) {
            ResponseFinalizeBlock.encode(message.finalize_block, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.init_chain = ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.list_snapshots = ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offer_snapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.load_snapshot_chunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.apply_snapshot_chunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.prepare_proposal = ResponsePrepareProposal.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.process_proposal = ResponseProcessProposal.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.extend_vote = ResponseExtendVote.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.verify_vote_extension = ResponseVerifyVoteExtension.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.finalize_block = ResponseFinalizeBlock.decode(reader, reader.uint32());
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
            exception: isSet(object.exception) ? ResponseException.fromJSON(object.exception) : undefined,
            echo: isSet(object.echo) ? ResponseEcho.fromJSON(object.echo) : undefined,
            flush: isSet(object.flush) ? ResponseFlush.fromJSON(object.flush) : undefined,
            info: isSet(object.info) ? ResponseInfo.fromJSON(object.info) : undefined,
            init_chain: isSet(object.init_chain) ? ResponseInitChain.fromJSON(object.init_chain) : undefined,
            query: isSet(object.query) ? ResponseQuery.fromJSON(object.query) : undefined,
            check_tx: isSet(object.check_tx) ? ResponseCheckTx.fromJSON(object.check_tx) : undefined,
            commit: isSet(object.commit) ? ResponseCommit.fromJSON(object.commit) : undefined,
            list_snapshots: isSet(object.list_snapshots) ? ResponseListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: isSet(object.offer_snapshot) ? ResponseOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: isSet(object.load_snapshot_chunk) ? ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: isSet(object.apply_snapshot_chunk) ? ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined,
            prepare_proposal: isSet(object.prepare_proposal) ? ResponsePrepareProposal.fromJSON(object.prepare_proposal) : undefined,
            process_proposal: isSet(object.process_proposal) ? ResponseProcessProposal.fromJSON(object.process_proposal) : undefined,
            extend_vote: isSet(object.extend_vote) ? ResponseExtendVote.fromJSON(object.extend_vote) : undefined,
            verify_vote_extension: isSet(object.verify_vote_extension) ? ResponseVerifyVoteExtension.fromJSON(object.verify_vote_extension) : undefined,
            finalize_block: isSet(object.finalize_block) ? ResponseFinalizeBlock.fromJSON(object.finalize_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.exception !== undefined && (obj.exception = message.exception ? ResponseException.toJSON(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? ResponseFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? ResponseInfo.toJSON(message.info) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? ResponseInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? ResponseQuery.toJSON(message.query) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? ResponseCheckTx.toJSON(message.check_tx) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? ResponseCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? ResponseListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? ResponseOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? ResponseLoadSnapshotChunk.toJSON(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? ResponseApplySnapshotChunk.toJSON(message.apply_snapshot_chunk) : undefined);
        message.prepare_proposal !== undefined && (obj.prepare_proposal = message.prepare_proposal ? ResponsePrepareProposal.toJSON(message.prepare_proposal) : undefined);
        message.process_proposal !== undefined && (obj.process_proposal = message.process_proposal ? ResponseProcessProposal.toJSON(message.process_proposal) : undefined);
        message.extend_vote !== undefined && (obj.extend_vote = message.extend_vote ? ResponseExtendVote.toJSON(message.extend_vote) : undefined);
        message.verify_vote_extension !== undefined && (obj.verify_vote_extension = message.verify_vote_extension ? ResponseVerifyVoteExtension.toJSON(message.verify_vote_extension) : undefined);
        message.finalize_block !== undefined && (obj.finalize_block = message.finalize_block ? ResponseFinalizeBlock.toJSON(message.finalize_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
        message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
        message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? ResponseInitChain.fromPartial(object.init_chain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
        message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? ResponseCheckTx.fromPartial(object.check_tx) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
        message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? ResponseListSnapshots.fromPartial(object.list_snapshots) : undefined;
        message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
        message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
        message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
        message.prepare_proposal = object.prepare_proposal !== undefined && object.prepare_proposal !== null ? ResponsePrepareProposal.fromPartial(object.prepare_proposal) : undefined;
        message.process_proposal = object.process_proposal !== undefined && object.process_proposal !== null ? ResponseProcessProposal.fromPartial(object.process_proposal) : undefined;
        message.extend_vote = object.extend_vote !== undefined && object.extend_vote !== null ? ResponseExtendVote.fromPartial(object.extend_vote) : undefined;
        message.verify_vote_extension = object.verify_vote_extension !== undefined && object.verify_vote_extension !== null ? ResponseVerifyVoteExtension.fromPartial(object.verify_vote_extension) : undefined;
        message.finalize_block = object.finalize_block !== undefined && object.finalize_block !== null ? ResponseFinalizeBlock.fromPartial(object.finalize_block) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponse();
        if (object.exception !== undefined && object.exception !== null) {
            message.exception = ResponseException.fromAmino(object.exception);
        }
        if (object.echo !== undefined && object.echo !== null) {
            message.echo = ResponseEcho.fromAmino(object.echo);
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = ResponseFlush.fromAmino(object.flush);
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = ResponseInfo.fromAmino(object.info);
        }
        if (object.init_chain !== undefined && object.init_chain !== null) {
            message.init_chain = ResponseInitChain.fromAmino(object.init_chain);
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = ResponseQuery.fromAmino(object.query);
        }
        if (object.check_tx !== undefined && object.check_tx !== null) {
            message.check_tx = ResponseCheckTx.fromAmino(object.check_tx);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = ResponseCommit.fromAmino(object.commit);
        }
        if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
            message.list_snapshots = ResponseListSnapshots.fromAmino(object.list_snapshots);
        }
        if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
            message.offer_snapshot = ResponseOfferSnapshot.fromAmino(object.offer_snapshot);
        }
        if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
            message.load_snapshot_chunk = ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
        }
        if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
            message.apply_snapshot_chunk = ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
        }
        if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
            message.prepare_proposal = ResponsePrepareProposal.fromAmino(object.prepare_proposal);
        }
        if (object.process_proposal !== undefined && object.process_proposal !== null) {
            message.process_proposal = ResponseProcessProposal.fromAmino(object.process_proposal);
        }
        if (object.extend_vote !== undefined && object.extend_vote !== null) {
            message.extend_vote = ResponseExtendVote.fromAmino(object.extend_vote);
        }
        if (object.verify_vote_extension !== undefined && object.verify_vote_extension !== null) {
            message.verify_vote_extension = ResponseVerifyVoteExtension.fromAmino(object.verify_vote_extension);
        }
        if (object.finalize_block !== undefined && object.finalize_block !== null) {
            message.finalize_block = ResponseFinalizeBlock.fromAmino(object.finalize_block);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exception = message.exception ? ResponseException.toAmino(message.exception) : undefined;
        obj.echo = message.echo ? ResponseEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? ResponseFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? ResponseInfo.toAmino(message.info) : undefined;
        obj.init_chain = message.init_chain ? ResponseInitChain.toAmino(message.init_chain) : undefined;
        obj.query = message.query ? ResponseQuery.toAmino(message.query) : undefined;
        obj.check_tx = message.check_tx ? ResponseCheckTx.toAmino(message.check_tx) : undefined;
        obj.commit = message.commit ? ResponseCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.list_snapshots ? ResponseListSnapshots.toAmino(message.list_snapshots) : undefined;
        obj.offer_snapshot = message.offer_snapshot ? ResponseOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
        obj.load_snapshot_chunk = message.load_snapshot_chunk ? ResponseLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
        obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? ResponseApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
        obj.prepare_proposal = message.prepare_proposal ? ResponsePrepareProposal.toAmino(message.prepare_proposal) : undefined;
        obj.process_proposal = message.process_proposal ? ResponseProcessProposal.toAmino(message.process_proposal) : undefined;
        obj.extend_vote = message.extend_vote ? ResponseExtendVote.toAmino(message.extend_vote) : undefined;
        obj.verify_vote_extension = message.verify_vote_extension ? ResponseVerifyVoteExtension.toAmino(message.verify_vote_extension) : undefined;
        obj.finalize_block = message.finalize_block ? ResponseFinalizeBlock.toAmino(message.finalize_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Response.decode(message.value);
    },
    toProto(message) {
        return Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Response",
            value: Response.encode(message).finish()
        };
    }
};
function createBaseResponseException() {
    return {
        error: ""
    };
}
export const ResponseException = {
    typeUrl: "/tendermint.abci.ResponseException",
    encode(message, writer = BinaryWriter.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseException();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
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
            error: isSet(object.error) ? String(object.error) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseException();
        message.error = object.error ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseException();
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseException.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseException.decode(message.value);
    },
    toProto(message) {
        return ResponseException.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseException",
            value: ResponseException.encode(message).finish()
        };
    }
};
function createBaseResponseEcho() {
    return {
        message: ""
    };
}
export const ResponseEcho = {
    typeUrl: "/tendermint.abci.ResponseEcho",
    encode(message, writer = BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseEcho();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
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
            message: isSet(object.message) ? String(object.message) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseEcho();
        message.message = object.message ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseEcho();
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseEcho.decode(message.value);
    },
    toProto(message) {
        return ResponseEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEcho",
            value: ResponseEcho.encode(message).finish()
        };
    }
};
function createBaseResponseFlush() {
    return {};
}
export const ResponseFlush = {
    typeUrl: "/tendermint.abci.ResponseFlush",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFlush();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseResponseFlush();
        return message;
    },
    fromAmino(_) {
        const message = createBaseResponseFlush();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseFlush.decode(message.value);
    },
    toProto(message) {
        return ResponseFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseFlush",
            value: ResponseFlush.encode(message).finish()
        };
    }
};
function createBaseResponseInfo() {
    return {
        data: "",
        version: "",
        app_version: BigInt(0),
        last_block_height: BigInt(0),
        last_block_app_hash: new Uint8Array()
    };
}
export const ResponseInfo = {
    typeUrl: "/tendermint.abci.ResponseInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.app_version !== BigInt(0)) {
            writer.uint32(24).uint64(message.app_version);
        }
        if (message.last_block_height !== BigInt(0)) {
            writer.uint32(32).int64(message.last_block_height);
        }
        if (message.last_block_app_hash.length !== 0) {
            writer.uint32(42).bytes(message.last_block_app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.app_version = reader.uint64();
                    break;
                case 4:
                    message.last_block_height = reader.int64();
                    break;
                case 5:
                    message.last_block_app_hash = reader.bytes();
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
            data: isSet(object.data) ? String(object.data) : "",
            version: isSet(object.version) ? String(object.version) : "",
            app_version: isSet(object.app_version) ? BigInt(object.app_version.toString()) : BigInt(0),
            last_block_height: isSet(object.last_block_height) ? BigInt(object.last_block_height.toString()) : BigInt(0),
            last_block_app_hash: isSet(object.last_block_app_hash) ? bytesFromBase64(object.last_block_app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.version !== undefined && (obj.version = message.version);
        message.app_version !== undefined && (obj.app_version = (message.app_version || BigInt(0)).toString());
        message.last_block_height !== undefined && (obj.last_block_height = (message.last_block_height || BigInt(0)).toString());
        message.last_block_app_hash !== undefined && (obj.last_block_app_hash = base64FromBytes(message.last_block_app_hash !== undefined ? message.last_block_app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInfo();
        message.data = object.data ?? "";
        message.version = object.version ?? "";
        message.app_version = object.app_version !== undefined && object.app_version !== null ? BigInt(object.app_version.toString()) : BigInt(0);
        message.last_block_height = object.last_block_height !== undefined && object.last_block_height !== null ? BigInt(object.last_block_height.toString()) : BigInt(0);
        message.last_block_app_hash = object.last_block_app_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseInfo();
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.app_version !== undefined && object.app_version !== null) {
            message.app_version = BigInt(object.app_version);
        }
        if (object.last_block_height !== undefined && object.last_block_height !== null) {
            message.last_block_height = BigInt(object.last_block_height);
        }
        if (object.last_block_app_hash !== undefined && object.last_block_app_hash !== null) {
            message.last_block_app_hash = bytesFromBase64(object.last_block_app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.version = message.version;
        obj.app_version = message.app_version ? message.app_version.toString() : undefined;
        obj.last_block_height = message.last_block_height ? message.last_block_height.toString() : undefined;
        obj.last_block_app_hash = message.last_block_app_hash ? base64FromBytes(message.last_block_app_hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseInfo.decode(message.value);
    },
    toProto(message) {
        return ResponseInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInfo",
            value: ResponseInfo.encode(message).finish()
        };
    }
};
function createBaseResponseInitChain() {
    return {
        consensus_params: undefined,
        validators: [],
        app_hash: new Uint8Array()
    };
}
export const ResponseInitChain = {
    typeUrl: "/tendermint.abci.ResponseInitChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.consensus_params !== undefined) {
            ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(26).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.app_hash = reader.bytes();
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
            consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => ValidatorUpdate.fromJSON(e)) : [],
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInitChain();
        message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
        message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseInitChain();
        if (object.consensus_params !== undefined && object.consensus_params !== null) {
            message.consensus_params = ConsensusParams.fromAmino(object.consensus_params);
        }
        message.validators = object.validators?.map(e => ValidatorUpdate.fromAmino(e)) || [];
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = bytesFromBase64(object.app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_params = message.consensus_params ? ConsensusParams.toAmino(message.consensus_params) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseInitChain.decode(message.value);
    },
    toProto(message) {
        return ResponseInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInitChain",
            value: ResponseInitChain.encode(message).finish()
        };
    }
};
function createBaseResponseQuery() {
    return {
        code: 0,
        log: "",
        info: "",
        index: BigInt(0),
        key: new Uint8Array(),
        value: new Uint8Array(),
        proof_ops: undefined,
        height: BigInt(0),
        codespace: ""
    };
}
export const ResponseQuery = {
    typeUrl: "/tendermint.abci.ResponseQuery",
    encode(message, writer = BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proof_ops !== undefined) {
            ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proof_ops = ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            codespace: isSet(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseQuery();
        message.code = object.code ?? 0;
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseQuery();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        if (object.proof_ops !== undefined && object.proof_ops !== null) {
            message.proof_ops = ProofOps.fromAmino(object.proof_ops);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        obj.proof_ops = message.proof_ops ? ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseQuery.decode(message.value);
    },
    toProto(message) {
        return ResponseQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseQuery",
            value: ResponseQuery.encode(message).finish()
        };
    }
};
function createBaseResponseCheckTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gas_wanted: BigInt(0),
        gas_used: BigInt(0),
        events: [],
        codespace: ""
    };
}
export const ResponseCheckTx = {
    typeUrl: "/tendermint.abci.ResponseCheckTx",
    encode(message, writer = BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gas_wanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (message.gas_used !== BigInt(0)) {
            writer.uint32(48).int64(message.gas_used);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = reader.int64();
                    break;
                case 6:
                    message.gas_used = reader.int64();
                    break;
                case 7:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            gas_wanted: isSet(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gas_used: isSet(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
            codespace: isSet(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || BigInt(0)).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || BigInt(0)).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseCheckTx();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? BigInt(object.gas_wanted.toString()) : BigInt(0);
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseCheckTx();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gas_wanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = BigInt(object.gas_used);
        }
        message.events = object.events?.map(e => Event.fromAmino(e)) || [];
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseCheckTx.decode(message.value);
    },
    toProto(message) {
        return ResponseCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCheckTx",
            value: ResponseCheckTx.encode(message).finish()
        };
    }
};
function createBaseResponseCommit() {
    return {
        retain_height: BigInt(0)
    };
}
export const ResponseCommit = {
    typeUrl: "/tendermint.abci.ResponseCommit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.retain_height !== BigInt(0)) {
            writer.uint32(24).int64(message.retain_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.retain_height = reader.int64();
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
            retain_height: isSet(object.retain_height) ? BigInt(object.retain_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.retain_height !== undefined && (obj.retain_height = (message.retain_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseCommit();
        message.retain_height = object.retain_height !== undefined && object.retain_height !== null ? BigInt(object.retain_height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseCommit();
        if (object.retain_height !== undefined && object.retain_height !== null) {
            message.retain_height = BigInt(object.retain_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.retain_height = message.retain_height ? message.retain_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseCommit.decode(message.value);
    },
    toProto(message) {
        return ResponseCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCommit",
            value: ResponseCommit.encode(message).finish()
        };
    }
};
function createBaseResponseListSnapshots() {
    return {
        snapshots: []
    };
}
export const ResponseListSnapshots = {
    typeUrl: "/tendermint.abci.ResponseListSnapshots",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.snapshots) {
            Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
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
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => Snapshot.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => Snapshot.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? Snapshot.toAmino(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseListSnapshots.decode(message.value);
    },
    toProto(message) {
        return ResponseListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseListSnapshots",
            value: ResponseListSnapshots.encode(message).finish()
        };
    }
};
function createBaseResponseOfferSnapshot() {
    return {
        result: 0
    };
}
export const ResponseOfferSnapshot = {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseOfferSnapshot();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseOfferSnapshot();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseOfferSnapshot_ResultFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return ResponseOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
            value: ResponseOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseResponseLoadSnapshotChunk() {
    return {
        chunk: new Uint8Array()
    };
}
export const ResponseLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
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
            chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.chunk !== undefined && (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        message.chunk = object.chunk ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        if (object.chunk !== undefined && object.chunk !== null) {
            message.chunk = bytesFromBase64(object.chunk);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return ResponseLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
            value: ResponseLoadSnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponseApplySnapshotChunk() {
    return {
        result: 0,
        refetch_chunks: [],
        reject_senders: []
    };
}
export const ResponseApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (const v of message.refetch_chunks) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.reject_senders) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetch_chunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetch_chunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.reject_senders.push(reader.string());
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
            result: isSet(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetch_chunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => Number(e)) : [],
            reject_senders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map(e => Math.round(e));
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseApplySnapshotChunk();
        message.result = object.result ?? 0;
        message.refetch_chunks = object.refetch_chunks?.map(e => e) || [];
        message.reject_senders = object.reject_senders?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseApplySnapshotChunk();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseApplySnapshotChunk_ResultFromJSON(object.result);
        }
        message.refetch_chunks = object.refetch_chunks?.map(e => e) || [];
        message.reject_senders = object.reject_senders?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        if (message.refetch_chunks) {
            obj.refetch_chunks = message.refetch_chunks.map(e => e);
        }
        else {
            obj.refetch_chunks = [];
        }
        if (message.reject_senders) {
            obj.reject_senders = message.reject_senders.map(e => e);
        }
        else {
            obj.reject_senders = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return ResponseApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
            value: ResponseApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponsePrepareProposal() {
    return {
        txs: []
    };
}
export const ResponsePrepareProposal = {
    typeUrl: "/tendermint.abci.ResponsePrepareProposal",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponsePrepareProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponsePrepareProposal();
        message.txs = object.txs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponsePrepareProposal();
        message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ResponsePrepareProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponsePrepareProposal.decode(message.value);
    },
    toProto(message) {
        return ResponsePrepareProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponsePrepareProposal",
            value: ResponsePrepareProposal.encode(message).finish()
        };
    }
};
function createBaseResponseProcessProposal() {
    return {
        status: 0
    };
}
export const ResponseProcessProposal = {
    typeUrl: "/tendermint.abci.ResponseProcessProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseProcessProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
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
            status: isSet(object.status) ? responseProcessProposal_ProposalStatusFromJSON(object.status) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = responseProcessProposal_ProposalStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseProcessProposal();
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseProcessProposal();
        if (object.status !== undefined && object.status !== null) {
            message.status = responseProcessProposal_ProposalStatusFromJSON(object.status);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseProcessProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseProcessProposal.decode(message.value);
    },
    toProto(message) {
        return ResponseProcessProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseProcessProposal",
            value: ResponseProcessProposal.encode(message).finish()
        };
    }
};
function createBaseResponseExtendVote() {
    return {
        vote_extension: new Uint8Array()
    };
}
export const ResponseExtendVote = {
    typeUrl: "/tendermint.abci.ResponseExtendVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.vote_extension.length !== 0) {
            writer.uint32(10).bytes(message.vote_extension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseExtendVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote_extension = reader.bytes();
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
            vote_extension: isSet(object.vote_extension) ? bytesFromBase64(object.vote_extension) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote_extension !== undefined && (obj.vote_extension = base64FromBytes(message.vote_extension !== undefined ? message.vote_extension : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseExtendVote();
        message.vote_extension = object.vote_extension ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseExtendVote();
        if (object.vote_extension !== undefined && object.vote_extension !== null) {
            message.vote_extension = bytesFromBase64(object.vote_extension);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote_extension = message.vote_extension ? base64FromBytes(message.vote_extension) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseExtendVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseExtendVote.decode(message.value);
    },
    toProto(message) {
        return ResponseExtendVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseExtendVote",
            value: ResponseExtendVote.encode(message).finish()
        };
    }
};
function createBaseResponseVerifyVoteExtension() {
    return {
        status: 0
    };
}
export const ResponseVerifyVoteExtension = {
    typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseVerifyVoteExtension();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
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
            status: isSet(object.status) ? responseVerifyVoteExtension_VerifyStatusFromJSON(object.status) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = responseVerifyVoteExtension_VerifyStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseVerifyVoteExtension();
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseVerifyVoteExtension();
        if (object.status !== undefined && object.status !== null) {
            message.status = responseVerifyVoteExtension_VerifyStatusFromJSON(object.status);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseVerifyVoteExtension.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseVerifyVoteExtension.decode(message.value);
    },
    toProto(message) {
        return ResponseVerifyVoteExtension.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
            value: ResponseVerifyVoteExtension.encode(message).finish()
        };
    }
};
function createBaseResponseFinalizeBlock() {
    return {
        events: [],
        tx_results: [],
        validator_updates: [],
        consensus_param_updates: undefined,
        app_hash: new Uint8Array()
    };
}
export const ResponseFinalizeBlock = {
    typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.events) {
            Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tx_results) {
            ExecTxResult.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validator_updates) {
            ValidatorUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.consensus_param_updates !== undefined) {
            ConsensusParams.encode(message.consensus_param_updates, writer.uint32(34).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(42).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFinalizeBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tx_results.push(ExecTxResult.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.app_hash = reader.bytes();
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
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
            tx_results: Array.isArray(object?.tx_results) ? object.tx_results.map((e) => ExecTxResult.fromJSON(e)) : [],
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => ValidatorUpdate.fromJSON(e)) : [],
            consensus_param_updates: isSet(object.consensus_param_updates) ? ConsensusParams.fromJSON(object.consensus_param_updates) : undefined,
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.tx_results) {
            obj.tx_results = message.tx_results.map(e => e ? ExecTxResult.toJSON(e) : undefined);
        }
        else {
            obj.tx_results = [];
        }
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined && (obj.consensus_param_updates = message.consensus_param_updates ? ConsensusParams.toJSON(message.consensus_param_updates) : undefined);
        message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseFinalizeBlock();
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        message.tx_results = object.tx_results?.map(e => ExecTxResult.fromPartial(e)) || [];
        message.validator_updates = object.validator_updates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
        message.consensus_param_updates = object.consensus_param_updates !== undefined && object.consensus_param_updates !== null ? ConsensusParams.fromPartial(object.consensus_param_updates) : undefined;
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseResponseFinalizeBlock();
        message.events = object.events?.map(e => Event.fromAmino(e)) || [];
        message.tx_results = object.tx_results?.map(e => ExecTxResult.fromAmino(e)) || [];
        message.validator_updates = object.validator_updates?.map(e => ValidatorUpdate.fromAmino(e)) || [];
        if (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null) {
            message.consensus_param_updates = ConsensusParams.fromAmino(object.consensus_param_updates);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = bytesFromBase64(object.app_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.tx_results) {
            obj.tx_results = message.tx_results.map(e => e ? ExecTxResult.toAmino(e) : undefined);
        }
        else {
            obj.tx_results = [];
        }
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        obj.consensus_param_updates = message.consensus_param_updates ? ConsensusParams.toAmino(message.consensus_param_updates) : undefined;
        obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ResponseFinalizeBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ResponseFinalizeBlock.decode(message.value);
    },
    toProto(message) {
        return ResponseFinalizeBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
            value: ResponseFinalizeBlock.encode(message).finish()
        };
    }
};
function createBaseCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
export const CommitInfo = {
    typeUrl: "/tendermint.abci.CommitInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(VoteInfo.decode(reader, reader.uint32()));
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
            round: isSet(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => VoteInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = Math.round(message.round));
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? VoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitInfo();
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        message.votes = object.votes?.map(e => VoteInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? VoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommitInfo.decode(message.value);
    },
    toProto(message) {
        return CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.CommitInfo",
            value: CommitInfo.encode(message).finish()
        };
    }
};
function createBaseExtendedCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
export const ExtendedCommitInfo = {
    typeUrl: "/tendermint.abci.ExtendedCommitInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
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
            round: isSet(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => ExtendedVoteInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = Math.round(message.round));
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? ExtendedVoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtendedCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => ExtendedVoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtendedCommitInfo();
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        message.votes = object.votes?.map(e => ExtendedVoteInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? ExtendedVoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ExtendedCommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExtendedCommitInfo.decode(message.value);
    },
    toProto(message) {
        return ExtendedCommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ExtendedCommitInfo",
            value: ExtendedCommitInfo.encode(message).finish()
        };
    }
};
function createBaseEvent() {
    return {
        type: "",
        attributes: []
    };
}
export const Event = {
    typeUrl: "/tendermint.abci.Event",
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => EventAttribute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? EventAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvent();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.attributes = object.attributes?.map(e => EventAttribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? EventAttribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Event.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Event.decode(message.value);
    },
    toProto(message) {
        return Event.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Event",
            value: Event.encode(message).finish()
        };
    }
};
function createBaseEventAttribute() {
    return {
        key: "",
        value: "",
        index: false
    };
}
export const EventAttribute = {
    typeUrl: "/tendermint.abci.EventAttribute",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.index = reader.bool();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : "",
            index: isSet(object.index) ? Boolean(object.index) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventAttribute();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        message.index = object.index ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventAttribute();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return EventAttribute.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventAttribute.decode(message.value);
    },
    toProto(message) {
        return EventAttribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.EventAttribute",
            value: EventAttribute.encode(message).finish()
        };
    }
};
function createBaseExecTxResult() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gas_wanted: BigInt(0),
        gas_used: BigInt(0),
        events: [],
        codespace: ""
    };
}
export const ExecTxResult = {
    typeUrl: "/tendermint.abci.ExecTxResult",
    encode(message, writer = BinaryWriter.create()) {
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gas_wanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gas_wanted);
        }
        if (message.gas_used !== BigInt(0)) {
            writer.uint32(48).int64(message.gas_used);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gas_wanted = reader.int64();
                    break;
                case 6:
                    message.gas_used = reader.int64();
                    break;
                case 7:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            info: isSet(object.info) ? String(object.info) : "",
            gas_wanted: isSet(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gas_used: isSet(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
            codespace: isSet(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || BigInt(0)).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || BigInt(0)).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        message.codespace !== undefined && (obj.codespace = message.codespace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExecTxResult();
        message.code = object.code ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.info = object.info ?? "";
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? BigInt(object.gas_wanted.toString()) : BigInt(0);
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseExecTxResult();
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gas_wanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = BigInt(object.gas_used);
        }
        message.events = object.events?.map(e => Event.fromAmino(e)) || [];
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return ExecTxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExecTxResult.decode(message.value);
    },
    toProto(message) {
        return ExecTxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ExecTxResult",
            value: ExecTxResult.encode(message).finish()
        };
    }
};
function createBaseTxResult() {
    return {
        height: BigInt(0),
        index: 0,
        tx: new Uint8Array(),
        result: ExecTxResult.fromPartial({})
    };
}
export const TxResult = {
    typeUrl: "/tendermint.abci.TxResult",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            ExecTxResult.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = ExecTxResult.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            index: isSet(object.index) ? Number(object.index) : 0,
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
            result: isSet(object.result) ? ExecTxResult.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined && (obj.result = message.result ? ExecTxResult.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.index = object.index ?? 0;
        message.tx = object.tx ?? new Uint8Array();
        message.result = object.result !== undefined && object.result !== null ? ExecTxResult.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResult();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = bytesFromBase64(object.tx);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = ExecTxResult.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.index = message.index;
        obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
        obj.result = message.result ? ExecTxResult.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TxResult.decode(message.value);
    },
    toProto(message) {
        return TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.TxResult",
            value: TxResult.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        power: BigInt(0)
    };
}
export const Validator = {
    typeUrl: "/tendermint.abci.Validator",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = reader.int64();
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseValidatorUpdate() {
    return {
        pub_key: PublicKey.fromPartial({}),
        power: BigInt(0)
    };
}
export const ValidatorUpdate = {
    typeUrl: "/tendermint.abci.ValidatorUpdate",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pub_key !== undefined) {
            PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
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
            pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
            power: isSet(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? PublicKey.toJSON(message.pub_key) : undefined);
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdate();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorUpdate();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = PublicKey.fromAmino(object.pub_key);
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pub_key ? PublicKey.toAmino(message.pub_key) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValidatorUpdate.decode(message.value);
    },
    toProto(message) {
        return ValidatorUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ValidatorUpdate",
            value: ValidatorUpdate.encode(message).finish()
        };
    }
};
function createBaseVoteInfo() {
    return {
        validator: Validator.fromPartial({}),
        block_id_flag: 0
    };
}
export const VoteInfo = {
    typeUrl: "/tendermint.abci.VoteInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_id_flag !== 0) {
            writer.uint32(24).int32(message.block_id_flag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block_id_flag = reader.int32();
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
            validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
            block_id_flag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
        message.block_id_flag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.block_id_flag));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
        message.block_id_flag = object.block_id_flag ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVoteInfo();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromAmino(object.validator);
        }
        if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
            message.block_id_flag = blockIDFlagFromJSON(object.block_id_flag);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
        obj.block_id_flag = message.block_id_flag;
        return obj;
    },
    fromAminoMsg(object) {
        return VoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VoteInfo.decode(message.value);
    },
    toProto(message) {
        return VoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.VoteInfo",
            value: VoteInfo.encode(message).finish()
        };
    }
};
function createBaseExtendedVoteInfo() {
    return {
        validator: Validator.fromPartial({}),
        vote_extension: new Uint8Array(),
        extension_signature: new Uint8Array(),
        block_id_flag: 0
    };
}
export const ExtendedVoteInfo = {
    typeUrl: "/tendermint.abci.ExtendedVoteInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.vote_extension.length !== 0) {
            writer.uint32(26).bytes(message.vote_extension);
        }
        if (message.extension_signature.length !== 0) {
            writer.uint32(34).bytes(message.extension_signature);
        }
        if (message.block_id_flag !== 0) {
            writer.uint32(40).int32(message.block_id_flag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vote_extension = reader.bytes();
                    break;
                case 4:
                    message.extension_signature = reader.bytes();
                    break;
                case 5:
                    message.block_id_flag = reader.int32();
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
            validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
            vote_extension: isSet(object.vote_extension) ? bytesFromBase64(object.vote_extension) : new Uint8Array(),
            extension_signature: isSet(object.extension_signature) ? bytesFromBase64(object.extension_signature) : new Uint8Array(),
            block_id_flag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
        message.vote_extension !== undefined && (obj.vote_extension = base64FromBytes(message.vote_extension !== undefined ? message.vote_extension : new Uint8Array()));
        message.extension_signature !== undefined && (obj.extension_signature = base64FromBytes(message.extension_signature !== undefined ? message.extension_signature : new Uint8Array()));
        message.block_id_flag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.block_id_flag));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtendedVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
        message.vote_extension = object.vote_extension ?? new Uint8Array();
        message.extension_signature = object.extension_signature ?? new Uint8Array();
        message.block_id_flag = object.block_id_flag ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtendedVoteInfo();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromAmino(object.validator);
        }
        if (object.vote_extension !== undefined && object.vote_extension !== null) {
            message.vote_extension = bytesFromBase64(object.vote_extension);
        }
        if (object.extension_signature !== undefined && object.extension_signature !== null) {
            message.extension_signature = bytesFromBase64(object.extension_signature);
        }
        if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
            message.block_id_flag = blockIDFlagFromJSON(object.block_id_flag);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
        obj.vote_extension = message.vote_extension ? base64FromBytes(message.vote_extension) : undefined;
        obj.extension_signature = message.extension_signature ? base64FromBytes(message.extension_signature) : undefined;
        obj.block_id_flag = message.block_id_flag;
        return obj;
    },
    fromAminoMsg(object) {
        return ExtendedVoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExtendedVoteInfo.decode(message.value);
    },
    toProto(message) {
        return ExtendedVoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ExtendedVoteInfo",
            value: ExtendedVoteInfo.encode(message).finish()
        };
    }
};
function createBaseMisbehavior() {
    return {
        type: 0,
        validator: Validator.fromPartial({}),
        height: BigInt(0),
        time: new Date(),
        total_voting_power: BigInt(0)
    };
}
export const Misbehavior = {
    typeUrl: "/tendermint.abci.Misbehavior",
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.total_voting_power !== BigInt(0)) {
            writer.uint32(40).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehavior();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.total_voting_power = reader.int64();
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
            type: isSet(object.type) ? misbehaviorTypeFromJSON(object.type) : -1,
            validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            total_voting_power: isSet(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = misbehaviorTypeToJSON(message.type));
        message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehavior();
        message.type = object.type ?? 0;
        message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMisbehavior();
        if (object.type !== undefined && object.type !== null) {
            message.type = misbehaviorTypeFromJSON(object.type);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = Validator.fromAmino(object.validator);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.total_voting_power = BigInt(object.total_voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Misbehavior.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Misbehavior.decode(message.value);
    },
    toProto(message) {
        return Misbehavior.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Misbehavior",
            value: Misbehavior.encode(message).finish()
        };
    }
};
function createBaseSnapshot() {
    return {
        height: BigInt(0),
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array()
    };
}
export const Snapshot = {
    typeUrl: "/tendermint.abci.Snapshot",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSnapshot();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        if (object.chunks !== undefined && object.chunks !== null) {
            message.chunks = object.chunks;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bytesFromBase64(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Snapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Snapshot.decode(message.value);
    },
    toProto(message) {
        return Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Snapshot",
            value: Snapshot.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map