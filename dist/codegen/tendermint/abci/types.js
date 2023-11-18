"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseException = exports.Response = exports.RequestFinalizeBlock = exports.RequestVerifyVoteExtension = exports.RequestExtendVote = exports.RequestProcessProposal = exports.RequestPrepareProposal = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestCheckTx = exports.RequestQuery = exports.RequestInitChain = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.misbehaviorTypeToJSON = exports.misbehaviorTypeFromJSON = exports.MisbehaviorTypeAmino = exports.MisbehaviorTypeSDKType = exports.MisbehaviorType = exports.responseVerifyVoteExtension_VerifyStatusToJSON = exports.responseVerifyVoteExtension_VerifyStatusFromJSON = exports.ResponseVerifyVoteExtension_VerifyStatusAmino = exports.ResponseVerifyVoteExtension_VerifyStatusSDKType = exports.ResponseVerifyVoteExtension_VerifyStatus = exports.responseProcessProposal_ProposalStatusToJSON = exports.responseProcessProposal_ProposalStatusFromJSON = exports.ResponseProcessProposal_ProposalStatusAmino = exports.ResponseProcessProposal_ProposalStatusSDKType = exports.ResponseProcessProposal_ProposalStatus = exports.responseApplySnapshotChunk_ResultToJSON = exports.responseApplySnapshotChunk_ResultFromJSON = exports.ResponseApplySnapshotChunk_ResultAmino = exports.ResponseApplySnapshotChunk_ResultSDKType = exports.ResponseApplySnapshotChunk_Result = exports.responseOfferSnapshot_ResultToJSON = exports.responseOfferSnapshot_ResultFromJSON = exports.ResponseOfferSnapshot_ResultAmino = exports.ResponseOfferSnapshot_ResultSDKType = exports.ResponseOfferSnapshot_Result = exports.checkTxTypeToJSON = exports.checkTxTypeFromJSON = exports.CheckTxTypeAmino = exports.CheckTxTypeSDKType = exports.CheckTxType = exports.protobufPackage = void 0;
exports.Snapshot = exports.Misbehavior = exports.ExtendedVoteInfo = exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.ExecTxResult = exports.EventAttribute = exports.Event = exports.ExtendedCommitInfo = exports.CommitInfo = exports.ResponseFinalizeBlock = exports.ResponseVerifyVoteExtension = exports.ResponseExtendVote = exports.ResponseProcessProposal = exports.ResponsePrepareProposal = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseCheckTx = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = void 0;
//@ts-nocheck
const timestamp_1 = require("../../google/protobuf/timestamp");
const params_1 = require("../types/params");
const proof_1 = require("../crypto/proof");
const keys_1 = require("../crypto/keys");
const validator_1 = require("../types/validator");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "tendermint.abci";
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (exports.CheckTxType = CheckTxType = {}));
exports.CheckTxTypeSDKType = CheckTxType;
exports.CheckTxTypeAmino = CheckTxType;
function checkTxTypeFromJSON(object) {
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
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
function checkTxTypeToJSON(object) {
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
exports.checkTxTypeToJSON = checkTxTypeToJSON;
var ResponseOfferSnapshot_Result;
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
})(ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result = {}));
exports.ResponseOfferSnapshot_ResultSDKType = ResponseOfferSnapshot_Result;
exports.ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
function responseOfferSnapshot_ResultFromJSON(object) {
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
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
function responseOfferSnapshot_ResultToJSON(object) {
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
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
var ResponseApplySnapshotChunk_Result;
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
})(ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result = {}));
exports.ResponseApplySnapshotChunk_ResultSDKType = ResponseApplySnapshotChunk_Result;
exports.ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
function responseApplySnapshotChunk_ResultFromJSON(object) {
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
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
function responseApplySnapshotChunk_ResultToJSON(object) {
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
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
var ResponseProcessProposal_ProposalStatus;
(function (ResponseProcessProposal_ProposalStatus) {
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["ACCEPT"] = 1] = "ACCEPT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["REJECT"] = 2] = "REJECT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseProcessProposal_ProposalStatus || (exports.ResponseProcessProposal_ProposalStatus = ResponseProcessProposal_ProposalStatus = {}));
exports.ResponseProcessProposal_ProposalStatusSDKType = ResponseProcessProposal_ProposalStatus;
exports.ResponseProcessProposal_ProposalStatusAmino = ResponseProcessProposal_ProposalStatus;
function responseProcessProposal_ProposalStatusFromJSON(object) {
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
exports.responseProcessProposal_ProposalStatusFromJSON = responseProcessProposal_ProposalStatusFromJSON;
function responseProcessProposal_ProposalStatusToJSON(object) {
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
exports.responseProcessProposal_ProposalStatusToJSON = responseProcessProposal_ProposalStatusToJSON;
var ResponseVerifyVoteExtension_VerifyStatus;
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
})(ResponseVerifyVoteExtension_VerifyStatus || (exports.ResponseVerifyVoteExtension_VerifyStatus = ResponseVerifyVoteExtension_VerifyStatus = {}));
exports.ResponseVerifyVoteExtension_VerifyStatusSDKType = ResponseVerifyVoteExtension_VerifyStatus;
exports.ResponseVerifyVoteExtension_VerifyStatusAmino = ResponseVerifyVoteExtension_VerifyStatus;
function responseVerifyVoteExtension_VerifyStatusFromJSON(object) {
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
exports.responseVerifyVoteExtension_VerifyStatusFromJSON = responseVerifyVoteExtension_VerifyStatusFromJSON;
function responseVerifyVoteExtension_VerifyStatusToJSON(object) {
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
exports.responseVerifyVoteExtension_VerifyStatusToJSON = responseVerifyVoteExtension_VerifyStatusToJSON;
var MisbehaviorType;
(function (MisbehaviorType) {
    MisbehaviorType[MisbehaviorType["UNKNOWN"] = 0] = "UNKNOWN";
    MisbehaviorType[MisbehaviorType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    MisbehaviorType[MisbehaviorType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    MisbehaviorType[MisbehaviorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MisbehaviorType || (exports.MisbehaviorType = MisbehaviorType = {}));
exports.MisbehaviorTypeSDKType = MisbehaviorType;
exports.MisbehaviorTypeAmino = MisbehaviorType;
function misbehaviorTypeFromJSON(object) {
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
exports.misbehaviorTypeFromJSON = misbehaviorTypeFromJSON;
function misbehaviorTypeToJSON(object) {
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
exports.misbehaviorTypeToJSON = misbehaviorTypeToJSON;
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
exports.Request = {
    typeUrl: "/tendermint.abci.Request",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            exports.RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            exports.RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.prepare_proposal !== undefined) {
            exports.RequestPrepareProposal.encode(message.prepare_proposal, writer.uint32(130).fork()).ldelim();
        }
        if (message.process_proposal !== undefined) {
            exports.RequestProcessProposal.encode(message.process_proposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.extend_vote !== undefined) {
            exports.RequestExtendVote.encode(message.extend_vote, writer.uint32(146).fork()).ldelim();
        }
        if (message.verify_vote_extension !== undefined) {
            exports.RequestVerifyVoteExtension.encode(message.verify_vote_extension, writer.uint32(154).fork()).ldelim();
        }
        if (message.finalize_block !== undefined) {
            exports.RequestFinalizeBlock.encode(message.finalize_block, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.init_chain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.check_tx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.list_snapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offer_snapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.load_snapshot_chunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.apply_snapshot_chunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.prepare_proposal = exports.RequestPrepareProposal.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.process_proposal = exports.RequestProcessProposal.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.extend_vote = exports.RequestExtendVote.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.verify_vote_extension = exports.RequestVerifyVoteExtension.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.finalize_block = exports.RequestFinalizeBlock.decode(reader, reader.uint32());
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
            echo: (0, helpers_1.isSet)(object.echo) ? exports.RequestEcho.fromJSON(object.echo) : undefined,
            flush: (0, helpers_1.isSet)(object.flush) ? exports.RequestFlush.fromJSON(object.flush) : undefined,
            info: (0, helpers_1.isSet)(object.info) ? exports.RequestInfo.fromJSON(object.info) : undefined,
            init_chain: (0, helpers_1.isSet)(object.init_chain) ? exports.RequestInitChain.fromJSON(object.init_chain) : undefined,
            query: (0, helpers_1.isSet)(object.query) ? exports.RequestQuery.fromJSON(object.query) : undefined,
            check_tx: (0, helpers_1.isSet)(object.check_tx) ? exports.RequestCheckTx.fromJSON(object.check_tx) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.RequestCommit.fromJSON(object.commit) : undefined,
            list_snapshots: (0, helpers_1.isSet)(object.list_snapshots) ? exports.RequestListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: (0, helpers_1.isSet)(object.offer_snapshot) ? exports.RequestOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: (0, helpers_1.isSet)(object.load_snapshot_chunk) ? exports.RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: (0, helpers_1.isSet)(object.apply_snapshot_chunk) ? exports.RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined,
            prepare_proposal: (0, helpers_1.isSet)(object.prepare_proposal) ? exports.RequestPrepareProposal.fromJSON(object.prepare_proposal) : undefined,
            process_proposal: (0, helpers_1.isSet)(object.process_proposal) ? exports.RequestProcessProposal.fromJSON(object.process_proposal) : undefined,
            extend_vote: (0, helpers_1.isSet)(object.extend_vote) ? exports.RequestExtendVote.fromJSON(object.extend_vote) : undefined,
            verify_vote_extension: (0, helpers_1.isSet)(object.verify_vote_extension) ? exports.RequestVerifyVoteExtension.fromJSON(object.verify_vote_extension) : undefined,
            finalize_block: (0, helpers_1.isSet)(object.finalize_block) ? exports.RequestFinalizeBlock.fromJSON(object.finalize_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? exports.RequestEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.RequestFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.RequestInfo.toJSON(message.info) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? exports.RequestInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.RequestQuery.toJSON(message.query) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? exports.RequestCheckTx.toJSON(message.check_tx) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.RequestCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? exports.RequestListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? exports.RequestOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.toJSON(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.toJSON(message.apply_snapshot_chunk) : undefined);
        message.prepare_proposal !== undefined && (obj.prepare_proposal = message.prepare_proposal ? exports.RequestPrepareProposal.toJSON(message.prepare_proposal) : undefined);
        message.process_proposal !== undefined && (obj.process_proposal = message.process_proposal ? exports.RequestProcessProposal.toJSON(message.process_proposal) : undefined);
        message.extend_vote !== undefined && (obj.extend_vote = message.extend_vote ? exports.RequestExtendVote.toJSON(message.extend_vote) : undefined);
        message.verify_vote_extension !== undefined && (obj.verify_vote_extension = message.verify_vote_extension ? exports.RequestVerifyVoteExtension.toJSON(message.verify_vote_extension) : undefined);
        message.finalize_block !== undefined && (obj.finalize_block = message.finalize_block ? exports.RequestFinalizeBlock.toJSON(message.finalize_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequest();
        message.echo = object.echo !== undefined && object.echo !== null ? exports.RequestEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.RequestFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.RequestInfo.fromPartial(object.info) : undefined;
        message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? exports.RequestInitChain.fromPartial(object.init_chain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.RequestQuery.fromPartial(object.query) : undefined;
        message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? exports.RequestCheckTx.fromPartial(object.check_tx) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.RequestCommit.fromPartial(object.commit) : undefined;
        message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? exports.RequestListSnapshots.fromPartial(object.list_snapshots) : undefined;
        message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? exports.RequestOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
        message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? exports.RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
        message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? exports.RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
        message.prepare_proposal = object.prepare_proposal !== undefined && object.prepare_proposal !== null ? exports.RequestPrepareProposal.fromPartial(object.prepare_proposal) : undefined;
        message.process_proposal = object.process_proposal !== undefined && object.process_proposal !== null ? exports.RequestProcessProposal.fromPartial(object.process_proposal) : undefined;
        message.extend_vote = object.extend_vote !== undefined && object.extend_vote !== null ? exports.RequestExtendVote.fromPartial(object.extend_vote) : undefined;
        message.verify_vote_extension = object.verify_vote_extension !== undefined && object.verify_vote_extension !== null ? exports.RequestVerifyVoteExtension.fromPartial(object.verify_vote_extension) : undefined;
        message.finalize_block = object.finalize_block !== undefined && object.finalize_block !== null ? exports.RequestFinalizeBlock.fromPartial(object.finalize_block) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            echo: object.echo ? exports.RequestEcho.fromSDK(object.echo) : undefined,
            flush: object.flush ? exports.RequestFlush.fromSDK(object.flush) : undefined,
            info: object.info ? exports.RequestInfo.fromSDK(object.info) : undefined,
            init_chain: object.init_chain ? exports.RequestInitChain.fromSDK(object.init_chain) : undefined,
            query: object.query ? exports.RequestQuery.fromSDK(object.query) : undefined,
            check_tx: object.check_tx ? exports.RequestCheckTx.fromSDK(object.check_tx) : undefined,
            commit: object.commit ? exports.RequestCommit.fromSDK(object.commit) : undefined,
            list_snapshots: object.list_snapshots ? exports.RequestListSnapshots.fromSDK(object.list_snapshots) : undefined,
            offer_snapshot: object.offer_snapshot ? exports.RequestOfferSnapshot.fromSDK(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.fromSDK(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.fromSDK(object.apply_snapshot_chunk) : undefined,
            prepare_proposal: object.prepare_proposal ? exports.RequestPrepareProposal.fromSDK(object.prepare_proposal) : undefined,
            process_proposal: object.process_proposal ? exports.RequestProcessProposal.fromSDK(object.process_proposal) : undefined,
            extend_vote: object.extend_vote ? exports.RequestExtendVote.fromSDK(object.extend_vote) : undefined,
            verify_vote_extension: object.verify_vote_extension ? exports.RequestVerifyVoteExtension.fromSDK(object.verify_vote_extension) : undefined,
            finalize_block: object.finalize_block ? exports.RequestFinalizeBlock.fromSDK(object.finalize_block) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.echo !== undefined && (obj.echo = message.echo ? exports.RequestEcho.toSDK(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.RequestFlush.toSDK(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.RequestInfo.toSDK(message.info) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? exports.RequestInitChain.toSDK(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.RequestQuery.toSDK(message.query) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? exports.RequestCheckTx.toSDK(message.check_tx) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.RequestCommit.toSDK(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? exports.RequestListSnapshots.toSDK(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? exports.RequestOfferSnapshot.toSDK(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.toSDK(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.toSDK(message.apply_snapshot_chunk) : undefined);
        message.prepare_proposal !== undefined && (obj.prepare_proposal = message.prepare_proposal ? exports.RequestPrepareProposal.toSDK(message.prepare_proposal) : undefined);
        message.process_proposal !== undefined && (obj.process_proposal = message.process_proposal ? exports.RequestProcessProposal.toSDK(message.process_proposal) : undefined);
        message.extend_vote !== undefined && (obj.extend_vote = message.extend_vote ? exports.RequestExtendVote.toSDK(message.extend_vote) : undefined);
        message.verify_vote_extension !== undefined && (obj.verify_vote_extension = message.verify_vote_extension ? exports.RequestVerifyVoteExtension.toSDK(message.verify_vote_extension) : undefined);
        message.finalize_block !== undefined && (obj.finalize_block = message.finalize_block ? exports.RequestFinalizeBlock.toSDK(message.finalize_block) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            echo: object?.echo ? exports.RequestEcho.fromAmino(object.echo) : undefined,
            flush: object?.flush ? exports.RequestFlush.fromAmino(object.flush) : undefined,
            info: object?.info ? exports.RequestInfo.fromAmino(object.info) : undefined,
            init_chain: object?.init_chain ? exports.RequestInitChain.fromAmino(object.init_chain) : undefined,
            query: object?.query ? exports.RequestQuery.fromAmino(object.query) : undefined,
            check_tx: object?.check_tx ? exports.RequestCheckTx.fromAmino(object.check_tx) : undefined,
            commit: object?.commit ? exports.RequestCommit.fromAmino(object.commit) : undefined,
            list_snapshots: object?.list_snapshots ? exports.RequestListSnapshots.fromAmino(object.list_snapshots) : undefined,
            offer_snapshot: object?.offer_snapshot ? exports.RequestOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object?.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object?.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined,
            prepare_proposal: object?.prepare_proposal ? exports.RequestPrepareProposal.fromAmino(object.prepare_proposal) : undefined,
            process_proposal: object?.process_proposal ? exports.RequestProcessProposal.fromAmino(object.process_proposal) : undefined,
            extend_vote: object?.extend_vote ? exports.RequestExtendVote.fromAmino(object.extend_vote) : undefined,
            verify_vote_extension: object?.verify_vote_extension ? exports.RequestVerifyVoteExtension.fromAmino(object.verify_vote_extension) : undefined,
            finalize_block: object?.finalize_block ? exports.RequestFinalizeBlock.fromAmino(object.finalize_block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.echo = message.echo ? exports.RequestEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? exports.RequestFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? exports.RequestInfo.toAmino(message.info) : undefined;
        obj.init_chain = message.init_chain ? exports.RequestInitChain.toAmino(message.init_chain) : undefined;
        obj.query = message.query ? exports.RequestQuery.toAmino(message.query) : undefined;
        obj.check_tx = message.check_tx ? exports.RequestCheckTx.toAmino(message.check_tx) : undefined;
        obj.commit = message.commit ? exports.RequestCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.list_snapshots ? exports.RequestListSnapshots.toAmino(message.list_snapshots) : undefined;
        obj.offer_snapshot = message.offer_snapshot ? exports.RequestOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
        obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.RequestLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
        obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.RequestApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
        obj.prepare_proposal = message.prepare_proposal ? exports.RequestPrepareProposal.toAmino(message.prepare_proposal) : undefined;
        obj.process_proposal = message.process_proposal ? exports.RequestProcessProposal.toAmino(message.process_proposal) : undefined;
        obj.extend_vote = message.extend_vote ? exports.RequestExtendVote.toAmino(message.extend_vote) : undefined;
        obj.verify_vote_extension = message.verify_vote_extension ? exports.RequestVerifyVoteExtension.toAmino(message.verify_vote_extension) : undefined;
        obj.finalize_block = message.finalize_block ? exports.RequestFinalizeBlock.toAmino(message.finalize_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Request.decode(message.value);
    },
    toProto(message) {
        return exports.Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Request",
            value: exports.Request.encode(message).finish()
        };
    }
};
function createBaseRequestEcho() {
    return {
        message: ""
    };
}
exports.RequestEcho = {
    typeUrl: "/tendermint.abci.RequestEcho",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message: (0, helpers_1.isSet)(object.message) ? String(object.message) : ""
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
    fromSDK(object) {
        return {
            message: object?.message
        };
    },
    toSDK(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAmino(object) {
        return {
            message: object.message
        };
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestEcho.decode(message.value);
    },
    toProto(message) {
        return exports.RequestEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestEcho",
            value: exports.RequestEcho.encode(message).finish()
        };
    }
};
function createBaseRequestFlush() {
    return {};
}
exports.RequestFlush = {
    typeUrl: "/tendermint.abci.RequestFlush",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestFlush.decode(message.value);
    },
    toProto(message) {
        return exports.RequestFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestFlush",
            value: exports.RequestFlush.encode(message).finish()
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
exports.RequestInfo = {
    typeUrl: "/tendermint.abci.RequestInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            block_version: (0, helpers_1.isSet)(object.block_version) ? BigInt(object.block_version.toString()) : BigInt(0),
            p2p_version: (0, helpers_1.isSet)(object.p2p_version) ? BigInt(object.p2p_version.toString()) : BigInt(0),
            abci_version: (0, helpers_1.isSet)(object.abci_version) ? String(object.abci_version) : ""
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
    fromSDK(object) {
        return {
            version: object?.version,
            block_version: object?.block_version,
            p2p_version: object?.p2p_version,
            abci_version: object?.abci_version
        };
    },
    toSDK(message) {
        const obj = {};
        obj.version = message.version;
        obj.block_version = message.block_version;
        obj.p2p_version = message.p2p_version;
        obj.abci_version = message.abci_version;
        return obj;
    },
    fromAmino(object) {
        return {
            version: object.version,
            block_version: BigInt(object.block_version),
            p2p_version: BigInt(object.p2p_version),
            abci_version: object.abci_version
        };
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
        return exports.RequestInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestInfo.decode(message.value);
    },
    toProto(message) {
        return exports.RequestInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInfo",
            value: exports.RequestInfo.encode(message).finish()
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
exports.RequestInitChain = {
    typeUrl: "/tendermint.abci.RequestInitChain",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.consensus_params !== undefined) {
            params_1.ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.consensus_params = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
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
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            consensus_params: (0, helpers_1.isSet)(object.consensus_params) ? params_1.ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            app_state_bytes: (0, helpers_1.isSet)(object.app_state_bytes) ? (0, helpers_1.bytesFromBase64)(object.app_state_bytes) : new Uint8Array(),
            initial_height: (0, helpers_1.isSet)(object.initial_height) ? BigInt(object.initial_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? params_1.ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_state_bytes !== undefined && (obj.app_state_bytes = (0, helpers_1.base64FromBytes)(message.app_state_bytes !== undefined ? message.app_state_bytes : new Uint8Array()));
        message.initial_height !== undefined && (obj.initial_height = (message.initial_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestInitChain();
        message.time = object.time ?? undefined;
        message.chain_id = object.chain_id ?? "";
        message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? params_1.ConsensusParams.fromPartial(object.consensus_params) : undefined;
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.app_state_bytes = object.app_state_bytes ?? new Uint8Array();
        message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? BigInt(object.initial_height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            time: object.time ? timestamp_1.Timestamp.fromSDK(object.time) : undefined,
            chain_id: object?.chain_id,
            consensus_params: object.consensus_params ? params_1.ConsensusParams.fromSDK(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromSDK(e)) : [],
            app_state_bytes: object?.app_state_bytes,
            initial_height: object?.initial_height
        };
    },
    toSDK(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time ? timestamp_1.Timestamp.toSDK(message.time) : undefined);
        obj.chain_id = message.chain_id;
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? params_1.ConsensusParams.toSDK(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_state_bytes = message.app_state_bytes;
        obj.initial_height = message.initial_height;
        return obj;
    },
    fromAmino(object) {
        return {
            time: object.time,
            chain_id: object.chain_id,
            consensus_params: object?.consensus_params ? params_1.ConsensusParams.fromAmino(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromAmino(e)) : [],
            app_state_bytes: object.app_state_bytes,
            initial_height: BigInt(object.initial_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.time = message.time;
        obj.chain_id = message.chain_id;
        obj.consensus_params = message.consensus_params ? params_1.ConsensusParams.toAmino(message.consensus_params) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_state_bytes = message.app_state_bytes;
        obj.initial_height = message.initial_height ? message.initial_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestInitChain.decode(message.value);
    },
    toProto(message) {
        return exports.RequestInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestInitChain",
            value: exports.RequestInitChain.encode(message).finish()
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
exports.RequestQuery = {
    typeUrl: "/tendermint.abci.RequestQuery",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            prove: (0, helpers_1.isSet)(object.prove) ? Boolean(object.prove) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
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
    fromSDK(object) {
        return {
            data: object?.data,
            path: object?.path,
            height: object?.height,
            prove: object?.prove
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.path = message.path;
        obj.height = message.height;
        obj.prove = message.prove;
        return obj;
    },
    fromAmino(object) {
        return {
            data: object.data,
            path: object.path,
            height: BigInt(object.height),
            prove: object.prove
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.path = message.path;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.prove = message.prove;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestQuery.decode(message.value);
    },
    toProto(message) {
        return exports.RequestQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestQuery",
            value: exports.RequestQuery.encode(message).finish()
        };
    }
};
function createBaseRequestCheckTx() {
    return {
        tx: new Uint8Array(),
        type: 0
    };
}
exports.RequestCheckTx = {
    typeUrl: "/tendermint.abci.RequestCheckTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            tx: (0, helpers_1.isSet)(object.tx) ? (0, helpers_1.bytesFromBase64)(object.tx) : new Uint8Array(),
            type: (0, helpers_1.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = (0, helpers_1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestCheckTx();
        message.tx = object.tx ?? new Uint8Array();
        message.type = object.type ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            tx: object?.tx,
            type: (0, helpers_1.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.tx = message.tx;
        message.type !== undefined && (obj.type = checkTxTypeToJSON(message.type));
        return obj;
    },
    fromAmino(object) {
        return {
            tx: object.tx,
            type: (0, helpers_1.isSet)(object.type) ? checkTxTypeFromJSON(object.type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestCheckTx.decode(message.value);
    },
    toProto(message) {
        return exports.RequestCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCheckTx",
            value: exports.RequestCheckTx.encode(message).finish()
        };
    }
};
function createBaseRequestCommit() {
    return {};
}
exports.RequestCommit = {
    typeUrl: "/tendermint.abci.RequestCommit",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestCommit.decode(message.value);
    },
    toProto(message) {
        return exports.RequestCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestCommit",
            value: exports.RequestCommit.encode(message).finish()
        };
    }
};
function createBaseRequestListSnapshots() {
    return {};
}
exports.RequestListSnapshots = {
    typeUrl: "/tendermint.abci.RequestListSnapshots",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestListSnapshots.decode(message.value);
    },
    toProto(message) {
        return exports.RequestListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestListSnapshots",
            value: exports.RequestListSnapshots.encode(message).finish()
        };
    }
};
function createBaseRequestOfferSnapshot() {
    return {
        snapshot: undefined,
        app_hash: new Uint8Array()
    };
}
exports.RequestOfferSnapshot = {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(18).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
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
            snapshot: (0, helpers_1.isSet)(object.snapshot) ? exports.Snapshot.fromJSON(object.snapshot) : undefined,
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? exports.Snapshot.toJSON(message.snapshot) : undefined);
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestOfferSnapshot();
        message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? exports.Snapshot.fromPartial(object.snapshot) : undefined;
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            snapshot: object.snapshot ? exports.Snapshot.fromSDK(object.snapshot) : undefined,
            app_hash: object?.app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        message.snapshot !== undefined && (obj.snapshot = message.snapshot ? exports.Snapshot.toSDK(message.snapshot) : undefined);
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAmino(object) {
        return {
            snapshot: object?.snapshot ? exports.Snapshot.fromAmino(object.snapshot) : undefined,
            app_hash: object.app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.snapshot = message.snapshot ? exports.Snapshot.toAmino(message.snapshot) : undefined;
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return exports.RequestOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestOfferSnapshot",
            value: exports.RequestOfferSnapshot.encode(message).finish()
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
exports.RequestLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0,
            chunk: (0, helpers_1.isSet)(object.chunk) ? Number(object.chunk) : 0
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
    fromSDK(object) {
        return {
            height: object?.height,
            format: object?.format,
            chunk: object?.chunk
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.format = message.format;
        obj.chunk = message.chunk;
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            format: object.format,
            chunk: object.chunk
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunk = message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.RequestLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
            value: exports.RequestLoadSnapshotChunk.encode(message).finish()
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
exports.RequestApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            chunk: (0, helpers_1.isSet)(object.chunk) ? (0, helpers_1.bytesFromBase64)(object.chunk) : new Uint8Array(),
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined && (obj.chunk = (0, helpers_1.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
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
    fromSDK(object) {
        return {
            index: object?.index,
            chunk: object?.chunk,
            sender: object?.sender
        };
    },
    toSDK(message) {
        const obj = {};
        obj.index = message.index;
        obj.chunk = message.chunk;
        obj.sender = message.sender;
        return obj;
    },
    fromAmino(object) {
        return {
            index: object.index,
            chunk: object.chunk,
            sender: object.sender
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.chunk = message.chunk;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.RequestApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
            value: exports.RequestApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseRequestPrepareProposal() {
    return {
        max_tx_bytes: BigInt(0),
        txs: [],
        local_last_commit: exports.ExtendedCommitInfo.fromPartial({}),
        misbehavior: [],
        height: BigInt(0),
        time: new Date(),
        next_validators_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
exports.RequestPrepareProposal = {
    typeUrl: "/tendermint.abci.RequestPrepareProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.max_tx_bytes !== BigInt(0)) {
            writer.uint32(8).int64(message.max_tx_bytes);
        }
        for (const v of message.txs) {
            writer.uint32(18).bytes(v);
        }
        if (message.local_last_commit !== undefined) {
            exports.ExtendedCommitInfo.encode(message.local_last_commit, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.local_last_commit = exports.ExtendedCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            max_tx_bytes: (0, helpers_1.isSet)(object.max_tx_bytes) ? BigInt(object.max_tx_bytes.toString()) : BigInt(0),
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : [],
            local_last_commit: (0, helpers_1.isSet)(object.local_last_commit) ? exports.ExtendedCommitInfo.fromJSON(object.local_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromJSON(e)) : [],
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            next_validators_hash: (0, helpers_1.isSet)(object.next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
            proposer_address: (0, helpers_1.isSet)(object.proposer_address) ? (0, helpers_1.bytesFromBase64)(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_tx_bytes !== undefined && (obj.max_tx_bytes = (message.max_tx_bytes || BigInt(0)).toString());
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        message.local_last_commit !== undefined && (obj.local_last_commit = message.local_last_commit ? exports.ExtendedCommitInfo.toJSON(message.local_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toJSON(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.next_validators_hash !== undefined && (obj.next_validators_hash = (0, helpers_1.base64FromBytes)(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = (0, helpers_1.base64FromBytes)(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestPrepareProposal();
        message.max_tx_bytes = object.max_tx_bytes !== undefined && object.max_tx_bytes !== null ? BigInt(object.max_tx_bytes.toString()) : BigInt(0);
        message.txs = object.txs?.map(e => e) || [];
        message.local_last_commit = object.local_last_commit !== undefined && object.local_last_commit !== null ? exports.ExtendedCommitInfo.fromPartial(object.local_last_commit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => exports.Misbehavior.fromPartial(e)) || [];
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            max_tx_bytes: object?.max_tx_bytes,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : [],
            local_last_commit: object.local_last_commit ? exports.ExtendedCommitInfo.fromSDK(object.local_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromSDK(e)) : [],
            height: object?.height,
            time: object.time ? timestamp_1.Timestamp.fromSDK(object.time) : undefined,
            next_validators_hash: object?.next_validators_hash,
            proposer_address: object?.proposer_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.max_tx_bytes = message.max_tx_bytes;
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        message.local_last_commit !== undefined && (obj.local_last_commit = message.local_last_commit ? exports.ExtendedCommitInfo.toSDK(message.local_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toSDK(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ? timestamp_1.Timestamp.toSDK(message.time) : undefined);
        obj.next_validators_hash = message.next_validators_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAmino(object) {
        return {
            max_tx_bytes: BigInt(object.max_tx_bytes),
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : [],
            local_last_commit: object?.local_last_commit ? exports.ExtendedCommitInfo.fromAmino(object.local_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromAmino(e)) : [],
            height: BigInt(object.height),
            time: object.time,
            next_validators_hash: object.next_validators_hash,
            proposer_address: object.proposer_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_tx_bytes = message.max_tx_bytes ? message.max_tx_bytes.toString() : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        obj.local_last_commit = message.local_last_commit ? exports.ExtendedCommitInfo.toAmino(message.local_last_commit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.next_validators_hash = message.next_validators_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestPrepareProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestPrepareProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RequestPrepareProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestPrepareProposal",
            value: exports.RequestPrepareProposal.encode(message).finish()
        };
    }
};
function createBaseRequestProcessProposal() {
    return {
        txs: [],
        proposed_last_commit: exports.CommitInfo.fromPartial({}),
        misbehavior: [],
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        next_validators_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
exports.RequestProcessProposal = {
    typeUrl: "/tendermint.abci.RequestProcessProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        if (message.proposed_last_commit !== undefined) {
            exports.CommitInfo.encode(message.proposed_last_commit, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestProcessProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                case 2:
                    message.proposed_last_commit = exports.CommitInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : [],
            proposed_last_commit: (0, helpers_1.isSet)(object.proposed_last_commit) ? exports.CommitInfo.fromJSON(object.proposed_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromJSON(e)) : [],
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            next_validators_hash: (0, helpers_1.isSet)(object.next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
            proposer_address: (0, helpers_1.isSet)(object.proposer_address) ? (0, helpers_1.bytesFromBase64)(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        message.proposed_last_commit !== undefined && (obj.proposed_last_commit = message.proposed_last_commit ? exports.CommitInfo.toJSON(message.proposed_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toJSON(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.next_validators_hash !== undefined && (obj.next_validators_hash = (0, helpers_1.base64FromBytes)(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = (0, helpers_1.base64FromBytes)(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestProcessProposal();
        message.txs = object.txs?.map(e => e) || [];
        message.proposed_last_commit = object.proposed_last_commit !== undefined && object.proposed_last_commit !== null ? exports.CommitInfo.fromPartial(object.proposed_last_commit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => exports.Misbehavior.fromPartial(e)) || [];
        message.hash = object.hash ?? new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : [],
            proposed_last_commit: object.proposed_last_commit ? exports.CommitInfo.fromSDK(object.proposed_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromSDK(e)) : [],
            hash: object?.hash,
            height: object?.height,
            time: object.time ? timestamp_1.Timestamp.fromSDK(object.time) : undefined,
            next_validators_hash: object?.next_validators_hash,
            proposer_address: object?.proposer_address
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        message.proposed_last_commit !== undefined && (obj.proposed_last_commit = message.proposed_last_commit ? exports.CommitInfo.toSDK(message.proposed_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toSDK(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.hash = message.hash;
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ? timestamp_1.Timestamp.toSDK(message.time) : undefined);
        obj.next_validators_hash = message.next_validators_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : [],
            proposed_last_commit: object?.proposed_last_commit ? exports.CommitInfo.fromAmino(object.proposed_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromAmino(e)) : [],
            hash: object.hash,
            height: BigInt(object.height),
            time: object.time,
            next_validators_hash: object.next_validators_hash,
            proposer_address: object.proposer_address
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        obj.proposed_last_commit = message.proposed_last_commit ? exports.CommitInfo.toAmino(message.proposed_last_commit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.hash = message.hash;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.next_validators_hash = message.next_validators_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestProcessProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestProcessProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RequestProcessProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestProcessProposal",
            value: exports.RequestProcessProposal.encode(message).finish()
        };
    }
};
function createBaseRequestExtendVote() {
    return {
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        txs: [],
        proposed_last_commit: exports.CommitInfo.fromPartial({}),
        misbehavior: [],
        next_validators_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
exports.RequestExtendVote = {
    typeUrl: "/tendermint.abci.RequestExtendVote",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.txs) {
            writer.uint32(34).bytes(v);
        }
        if (message.proposed_last_commit !== undefined) {
            exports.CommitInfo.encode(message.proposed_last_commit, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(50).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.txs.push(reader.bytes());
                    break;
                case 5:
                    message.proposed_last_commit = exports.CommitInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : [],
            proposed_last_commit: (0, helpers_1.isSet)(object.proposed_last_commit) ? exports.CommitInfo.fromJSON(object.proposed_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromJSON(e)) : [],
            next_validators_hash: (0, helpers_1.isSet)(object.next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
            proposer_address: (0, helpers_1.isSet)(object.proposer_address) ? (0, helpers_1.bytesFromBase64)(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        message.proposed_last_commit !== undefined && (obj.proposed_last_commit = message.proposed_last_commit ? exports.CommitInfo.toJSON(message.proposed_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toJSON(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        message.next_validators_hash !== undefined && (obj.next_validators_hash = (0, helpers_1.base64FromBytes)(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = (0, helpers_1.base64FromBytes)(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestExtendVote();
        message.hash = object.hash ?? new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.txs = object.txs?.map(e => e) || [];
        message.proposed_last_commit = object.proposed_last_commit !== undefined && object.proposed_last_commit !== null ? exports.CommitInfo.fromPartial(object.proposed_last_commit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => exports.Misbehavior.fromPartial(e)) || [];
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash,
            height: object?.height,
            time: object.time ? timestamp_1.Timestamp.fromSDK(object.time) : undefined,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : [],
            proposed_last_commit: object.proposed_last_commit ? exports.CommitInfo.fromSDK(object.proposed_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromSDK(e)) : [],
            next_validators_hash: object?.next_validators_hash,
            proposer_address: object?.proposer_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ? timestamp_1.Timestamp.toSDK(message.time) : undefined);
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        message.proposed_last_commit !== undefined && (obj.proposed_last_commit = message.proposed_last_commit ? exports.CommitInfo.toSDK(message.proposed_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toSDK(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.next_validators_hash = message.next_validators_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAmino(object) {
        return {
            hash: object.hash,
            height: BigInt(object.height),
            time: object.time,
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : [],
            proposed_last_commit: object?.proposed_last_commit ? exports.CommitInfo.fromAmino(object.proposed_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromAmino(e)) : [],
            next_validators_hash: object.next_validators_hash,
            proposer_address: object.proposer_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        obj.proposed_last_commit = message.proposed_last_commit ? exports.CommitInfo.toAmino(message.proposed_last_commit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.next_validators_hash = message.next_validators_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestExtendVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestExtendVote.decode(message.value);
    },
    toProto(message) {
        return exports.RequestExtendVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestExtendVote",
            value: exports.RequestExtendVote.encode(message).finish()
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
exports.RequestVerifyVoteExtension = {
    typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? (0, helpers_1.bytesFromBase64)(object.validator_address) : new Uint8Array(),
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            vote_extension: (0, helpers_1.isSet)(object.vote_extension) ? (0, helpers_1.bytesFromBase64)(object.vote_extension) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.validator_address !== undefined && (obj.validator_address = (0, helpers_1.base64FromBytes)(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.vote_extension !== undefined && (obj.vote_extension = (0, helpers_1.base64FromBytes)(message.vote_extension !== undefined ? message.vote_extension : new Uint8Array()));
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
    fromSDK(object) {
        return {
            hash: object?.hash,
            validator_address: object?.validator_address,
            height: object?.height,
            vote_extension: object?.vote_extension
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.validator_address = message.validator_address;
        obj.height = message.height;
        obj.vote_extension = message.vote_extension;
        return obj;
    },
    fromAmino(object) {
        return {
            hash: object.hash,
            validator_address: object.validator_address,
            height: BigInt(object.height),
            vote_extension: object.vote_extension
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.validator_address = message.validator_address;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.vote_extension = message.vote_extension;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestVerifyVoteExtension.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestVerifyVoteExtension.decode(message.value);
    },
    toProto(message) {
        return exports.RequestVerifyVoteExtension.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
            value: exports.RequestVerifyVoteExtension.encode(message).finish()
        };
    }
};
function createBaseRequestFinalizeBlock() {
    return {
        txs: [],
        decided_last_commit: exports.CommitInfo.fromPartial({}),
        misbehavior: [],
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        next_validators_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
exports.RequestFinalizeBlock = {
    typeUrl: "/tendermint.abci.RequestFinalizeBlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        if (message.decided_last_commit !== undefined) {
            exports.CommitInfo.encode(message.decided_last_commit, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.misbehavior) {
            exports.Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestFinalizeBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                case 2:
                    message.decided_last_commit = exports.CommitInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : [],
            decided_last_commit: (0, helpers_1.isSet)(object.decided_last_commit) ? exports.CommitInfo.fromJSON(object.decided_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromJSON(e)) : [],
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            next_validators_hash: (0, helpers_1.isSet)(object.next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
            proposer_address: (0, helpers_1.isSet)(object.proposer_address) ? (0, helpers_1.bytesFromBase64)(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        message.decided_last_commit !== undefined && (obj.decided_last_commit = message.decided_last_commit ? exports.CommitInfo.toJSON(message.decided_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toJSON(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.next_validators_hash !== undefined && (obj.next_validators_hash = (0, helpers_1.base64FromBytes)(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = (0, helpers_1.base64FromBytes)(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestFinalizeBlock();
        message.txs = object.txs?.map(e => e) || [];
        message.decided_last_commit = object.decided_last_commit !== undefined && object.decided_last_commit !== null ? exports.CommitInfo.fromPartial(object.decided_last_commit) : undefined;
        message.misbehavior = object.misbehavior?.map(e => exports.Misbehavior.fromPartial(e)) || [];
        message.hash = object.hash ?? new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : [],
            decided_last_commit: object.decided_last_commit ? exports.CommitInfo.fromSDK(object.decided_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromSDK(e)) : [],
            hash: object?.hash,
            height: object?.height,
            time: object.time ? timestamp_1.Timestamp.fromSDK(object.time) : undefined,
            next_validators_hash: object?.next_validators_hash,
            proposer_address: object?.proposer_address
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        message.decided_last_commit !== undefined && (obj.decided_last_commit = message.decided_last_commit ? exports.CommitInfo.toSDK(message.decided_last_commit) : undefined);
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toSDK(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.hash = message.hash;
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ? timestamp_1.Timestamp.toSDK(message.time) : undefined);
        obj.next_validators_hash = message.next_validators_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : [],
            decided_last_commit: object?.decided_last_commit ? exports.CommitInfo.fromAmino(object.decided_last_commit) : undefined,
            misbehavior: Array.isArray(object?.misbehavior) ? object.misbehavior.map((e) => exports.Misbehavior.fromAmino(e)) : [],
            hash: object.hash,
            height: BigInt(object.height),
            time: object.time,
            next_validators_hash: object.next_validators_hash,
            proposer_address: object.proposer_address
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        obj.decided_last_commit = message.decided_last_commit ? exports.CommitInfo.toAmino(message.decided_last_commit) : undefined;
        if (message.misbehavior) {
            obj.misbehavior = message.misbehavior.map(e => e ? exports.Misbehavior.toAmino(e) : undefined);
        }
        else {
            obj.misbehavior = [];
        }
        obj.hash = message.hash;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.next_validators_hash = message.next_validators_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RequestFinalizeBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.RequestFinalizeBlock.decode(message.value);
    },
    toProto(message) {
        return exports.RequestFinalizeBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.RequestFinalizeBlock",
            value: exports.RequestFinalizeBlock.encode(message).finish()
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
exports.Response = {
    typeUrl: "/tendermint.abci.Response",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.init_chain !== undefined) {
            exports.ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.check_tx !== undefined) {
            exports.ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.list_snapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offer_snapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.load_snapshot_chunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.apply_snapshot_chunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
        }
        if (message.prepare_proposal !== undefined) {
            exports.ResponsePrepareProposal.encode(message.prepare_proposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.process_proposal !== undefined) {
            exports.ResponseProcessProposal.encode(message.process_proposal, writer.uint32(146).fork()).ldelim();
        }
        if (message.extend_vote !== undefined) {
            exports.ResponseExtendVote.encode(message.extend_vote, writer.uint32(154).fork()).ldelim();
        }
        if (message.verify_vote_extension !== undefined) {
            exports.ResponseVerifyVoteExtension.encode(message.verify_vote_extension, writer.uint32(162).fork()).ldelim();
        }
        if (message.finalize_block !== undefined) {
            exports.ResponseFinalizeBlock.encode(message.finalize_block, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.init_chain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.check_tx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.list_snapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offer_snapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.load_snapshot_chunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.apply_snapshot_chunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.prepare_proposal = exports.ResponsePrepareProposal.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.process_proposal = exports.ResponseProcessProposal.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.extend_vote = exports.ResponseExtendVote.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.verify_vote_extension = exports.ResponseVerifyVoteExtension.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.finalize_block = exports.ResponseFinalizeBlock.decode(reader, reader.uint32());
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
            exception: (0, helpers_1.isSet)(object.exception) ? exports.ResponseException.fromJSON(object.exception) : undefined,
            echo: (0, helpers_1.isSet)(object.echo) ? exports.ResponseEcho.fromJSON(object.echo) : undefined,
            flush: (0, helpers_1.isSet)(object.flush) ? exports.ResponseFlush.fromJSON(object.flush) : undefined,
            info: (0, helpers_1.isSet)(object.info) ? exports.ResponseInfo.fromJSON(object.info) : undefined,
            init_chain: (0, helpers_1.isSet)(object.init_chain) ? exports.ResponseInitChain.fromJSON(object.init_chain) : undefined,
            query: (0, helpers_1.isSet)(object.query) ? exports.ResponseQuery.fromJSON(object.query) : undefined,
            check_tx: (0, helpers_1.isSet)(object.check_tx) ? exports.ResponseCheckTx.fromJSON(object.check_tx) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.ResponseCommit.fromJSON(object.commit) : undefined,
            list_snapshots: (0, helpers_1.isSet)(object.list_snapshots) ? exports.ResponseListSnapshots.fromJSON(object.list_snapshots) : undefined,
            offer_snapshot: (0, helpers_1.isSet)(object.offer_snapshot) ? exports.ResponseOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
            load_snapshot_chunk: (0, helpers_1.isSet)(object.load_snapshot_chunk) ? exports.ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: (0, helpers_1.isSet)(object.apply_snapshot_chunk) ? exports.ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined,
            prepare_proposal: (0, helpers_1.isSet)(object.prepare_proposal) ? exports.ResponsePrepareProposal.fromJSON(object.prepare_proposal) : undefined,
            process_proposal: (0, helpers_1.isSet)(object.process_proposal) ? exports.ResponseProcessProposal.fromJSON(object.process_proposal) : undefined,
            extend_vote: (0, helpers_1.isSet)(object.extend_vote) ? exports.ResponseExtendVote.fromJSON(object.extend_vote) : undefined,
            verify_vote_extension: (0, helpers_1.isSet)(object.verify_vote_extension) ? exports.ResponseVerifyVoteExtension.fromJSON(object.verify_vote_extension) : undefined,
            finalize_block: (0, helpers_1.isSet)(object.finalize_block) ? exports.ResponseFinalizeBlock.fromJSON(object.finalize_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.exception !== undefined && (obj.exception = message.exception ? exports.ResponseException.toJSON(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? exports.ResponseEcho.toJSON(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.ResponseFlush.toJSON(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.ResponseInfo.toJSON(message.info) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? exports.ResponseInitChain.toJSON(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.ResponseQuery.toJSON(message.query) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? exports.ResponseCheckTx.toJSON(message.check_tx) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.ResponseCommit.toJSON(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? exports.ResponseListSnapshots.toJSON(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? exports.ResponseOfferSnapshot.toJSON(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.toJSON(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.toJSON(message.apply_snapshot_chunk) : undefined);
        message.prepare_proposal !== undefined && (obj.prepare_proposal = message.prepare_proposal ? exports.ResponsePrepareProposal.toJSON(message.prepare_proposal) : undefined);
        message.process_proposal !== undefined && (obj.process_proposal = message.process_proposal ? exports.ResponseProcessProposal.toJSON(message.process_proposal) : undefined);
        message.extend_vote !== undefined && (obj.extend_vote = message.extend_vote ? exports.ResponseExtendVote.toJSON(message.extend_vote) : undefined);
        message.verify_vote_extension !== undefined && (obj.verify_vote_extension = message.verify_vote_extension ? exports.ResponseVerifyVoteExtension.toJSON(message.verify_vote_extension) : undefined);
        message.finalize_block !== undefined && (obj.finalize_block = message.finalize_block ? exports.ResponseFinalizeBlock.toJSON(message.finalize_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponse();
        message.exception = object.exception !== undefined && object.exception !== null ? exports.ResponseException.fromPartial(object.exception) : undefined;
        message.echo = object.echo !== undefined && object.echo !== null ? exports.ResponseEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.ResponseFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.ResponseInfo.fromPartial(object.info) : undefined;
        message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? exports.ResponseInitChain.fromPartial(object.init_chain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.ResponseQuery.fromPartial(object.query) : undefined;
        message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? exports.ResponseCheckTx.fromPartial(object.check_tx) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.ResponseCommit.fromPartial(object.commit) : undefined;
        message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? exports.ResponseListSnapshots.fromPartial(object.list_snapshots) : undefined;
        message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? exports.ResponseOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
        message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? exports.ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
        message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? exports.ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
        message.prepare_proposal = object.prepare_proposal !== undefined && object.prepare_proposal !== null ? exports.ResponsePrepareProposal.fromPartial(object.prepare_proposal) : undefined;
        message.process_proposal = object.process_proposal !== undefined && object.process_proposal !== null ? exports.ResponseProcessProposal.fromPartial(object.process_proposal) : undefined;
        message.extend_vote = object.extend_vote !== undefined && object.extend_vote !== null ? exports.ResponseExtendVote.fromPartial(object.extend_vote) : undefined;
        message.verify_vote_extension = object.verify_vote_extension !== undefined && object.verify_vote_extension !== null ? exports.ResponseVerifyVoteExtension.fromPartial(object.verify_vote_extension) : undefined;
        message.finalize_block = object.finalize_block !== undefined && object.finalize_block !== null ? exports.ResponseFinalizeBlock.fromPartial(object.finalize_block) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            exception: object.exception ? exports.ResponseException.fromSDK(object.exception) : undefined,
            echo: object.echo ? exports.ResponseEcho.fromSDK(object.echo) : undefined,
            flush: object.flush ? exports.ResponseFlush.fromSDK(object.flush) : undefined,
            info: object.info ? exports.ResponseInfo.fromSDK(object.info) : undefined,
            init_chain: object.init_chain ? exports.ResponseInitChain.fromSDK(object.init_chain) : undefined,
            query: object.query ? exports.ResponseQuery.fromSDK(object.query) : undefined,
            check_tx: object.check_tx ? exports.ResponseCheckTx.fromSDK(object.check_tx) : undefined,
            commit: object.commit ? exports.ResponseCommit.fromSDK(object.commit) : undefined,
            list_snapshots: object.list_snapshots ? exports.ResponseListSnapshots.fromSDK(object.list_snapshots) : undefined,
            offer_snapshot: object.offer_snapshot ? exports.ResponseOfferSnapshot.fromSDK(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.fromSDK(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.fromSDK(object.apply_snapshot_chunk) : undefined,
            prepare_proposal: object.prepare_proposal ? exports.ResponsePrepareProposal.fromSDK(object.prepare_proposal) : undefined,
            process_proposal: object.process_proposal ? exports.ResponseProcessProposal.fromSDK(object.process_proposal) : undefined,
            extend_vote: object.extend_vote ? exports.ResponseExtendVote.fromSDK(object.extend_vote) : undefined,
            verify_vote_extension: object.verify_vote_extension ? exports.ResponseVerifyVoteExtension.fromSDK(object.verify_vote_extension) : undefined,
            finalize_block: object.finalize_block ? exports.ResponseFinalizeBlock.fromSDK(object.finalize_block) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.exception !== undefined && (obj.exception = message.exception ? exports.ResponseException.toSDK(message.exception) : undefined);
        message.echo !== undefined && (obj.echo = message.echo ? exports.ResponseEcho.toSDK(message.echo) : undefined);
        message.flush !== undefined && (obj.flush = message.flush ? exports.ResponseFlush.toSDK(message.flush) : undefined);
        message.info !== undefined && (obj.info = message.info ? exports.ResponseInfo.toSDK(message.info) : undefined);
        message.init_chain !== undefined && (obj.init_chain = message.init_chain ? exports.ResponseInitChain.toSDK(message.init_chain) : undefined);
        message.query !== undefined && (obj.query = message.query ? exports.ResponseQuery.toSDK(message.query) : undefined);
        message.check_tx !== undefined && (obj.check_tx = message.check_tx ? exports.ResponseCheckTx.toSDK(message.check_tx) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.ResponseCommit.toSDK(message.commit) : undefined);
        message.list_snapshots !== undefined && (obj.list_snapshots = message.list_snapshots ? exports.ResponseListSnapshots.toSDK(message.list_snapshots) : undefined);
        message.offer_snapshot !== undefined && (obj.offer_snapshot = message.offer_snapshot ? exports.ResponseOfferSnapshot.toSDK(message.offer_snapshot) : undefined);
        message.load_snapshot_chunk !== undefined && (obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.toSDK(message.load_snapshot_chunk) : undefined);
        message.apply_snapshot_chunk !== undefined && (obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.toSDK(message.apply_snapshot_chunk) : undefined);
        message.prepare_proposal !== undefined && (obj.prepare_proposal = message.prepare_proposal ? exports.ResponsePrepareProposal.toSDK(message.prepare_proposal) : undefined);
        message.process_proposal !== undefined && (obj.process_proposal = message.process_proposal ? exports.ResponseProcessProposal.toSDK(message.process_proposal) : undefined);
        message.extend_vote !== undefined && (obj.extend_vote = message.extend_vote ? exports.ResponseExtendVote.toSDK(message.extend_vote) : undefined);
        message.verify_vote_extension !== undefined && (obj.verify_vote_extension = message.verify_vote_extension ? exports.ResponseVerifyVoteExtension.toSDK(message.verify_vote_extension) : undefined);
        message.finalize_block !== undefined && (obj.finalize_block = message.finalize_block ? exports.ResponseFinalizeBlock.toSDK(message.finalize_block) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            exception: object?.exception ? exports.ResponseException.fromAmino(object.exception) : undefined,
            echo: object?.echo ? exports.ResponseEcho.fromAmino(object.echo) : undefined,
            flush: object?.flush ? exports.ResponseFlush.fromAmino(object.flush) : undefined,
            info: object?.info ? exports.ResponseInfo.fromAmino(object.info) : undefined,
            init_chain: object?.init_chain ? exports.ResponseInitChain.fromAmino(object.init_chain) : undefined,
            query: object?.query ? exports.ResponseQuery.fromAmino(object.query) : undefined,
            check_tx: object?.check_tx ? exports.ResponseCheckTx.fromAmino(object.check_tx) : undefined,
            commit: object?.commit ? exports.ResponseCommit.fromAmino(object.commit) : undefined,
            list_snapshots: object?.list_snapshots ? exports.ResponseListSnapshots.fromAmino(object.list_snapshots) : undefined,
            offer_snapshot: object?.offer_snapshot ? exports.ResponseOfferSnapshot.fromAmino(object.offer_snapshot) : undefined,
            load_snapshot_chunk: object?.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk) : undefined,
            apply_snapshot_chunk: object?.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk) : undefined,
            prepare_proposal: object?.prepare_proposal ? exports.ResponsePrepareProposal.fromAmino(object.prepare_proposal) : undefined,
            process_proposal: object?.process_proposal ? exports.ResponseProcessProposal.fromAmino(object.process_proposal) : undefined,
            extend_vote: object?.extend_vote ? exports.ResponseExtendVote.fromAmino(object.extend_vote) : undefined,
            verify_vote_extension: object?.verify_vote_extension ? exports.ResponseVerifyVoteExtension.fromAmino(object.verify_vote_extension) : undefined,
            finalize_block: object?.finalize_block ? exports.ResponseFinalizeBlock.fromAmino(object.finalize_block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exception = message.exception ? exports.ResponseException.toAmino(message.exception) : undefined;
        obj.echo = message.echo ? exports.ResponseEcho.toAmino(message.echo) : undefined;
        obj.flush = message.flush ? exports.ResponseFlush.toAmino(message.flush) : undefined;
        obj.info = message.info ? exports.ResponseInfo.toAmino(message.info) : undefined;
        obj.init_chain = message.init_chain ? exports.ResponseInitChain.toAmino(message.init_chain) : undefined;
        obj.query = message.query ? exports.ResponseQuery.toAmino(message.query) : undefined;
        obj.check_tx = message.check_tx ? exports.ResponseCheckTx.toAmino(message.check_tx) : undefined;
        obj.commit = message.commit ? exports.ResponseCommit.toAmino(message.commit) : undefined;
        obj.list_snapshots = message.list_snapshots ? exports.ResponseListSnapshots.toAmino(message.list_snapshots) : undefined;
        obj.offer_snapshot = message.offer_snapshot ? exports.ResponseOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
        obj.load_snapshot_chunk = message.load_snapshot_chunk ? exports.ResponseLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
        obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? exports.ResponseApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
        obj.prepare_proposal = message.prepare_proposal ? exports.ResponsePrepareProposal.toAmino(message.prepare_proposal) : undefined;
        obj.process_proposal = message.process_proposal ? exports.ResponseProcessProposal.toAmino(message.process_proposal) : undefined;
        obj.extend_vote = message.extend_vote ? exports.ResponseExtendVote.toAmino(message.extend_vote) : undefined;
        obj.verify_vote_extension = message.verify_vote_extension ? exports.ResponseVerifyVoteExtension.toAmino(message.verify_vote_extension) : undefined;
        obj.finalize_block = message.finalize_block ? exports.ResponseFinalizeBlock.toAmino(message.finalize_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Response.decode(message.value);
    },
    toProto(message) {
        return exports.Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Response",
            value: exports.Response.encode(message).finish()
        };
    }
};
function createBaseResponseException() {
    return {
        error: ""
    };
}
exports.ResponseException = {
    typeUrl: "/tendermint.abci.ResponseException",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            error: (0, helpers_1.isSet)(object.error) ? String(object.error) : ""
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
    fromSDK(object) {
        return {
            error: object?.error
        };
    },
    toSDK(message) {
        const obj = {};
        obj.error = message.error;
        return obj;
    },
    fromAmino(object) {
        return {
            error: object.error
        };
    },
    toAmino(message) {
        const obj = {};
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseException.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseException.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseException.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseException",
            value: exports.ResponseException.encode(message).finish()
        };
    }
};
function createBaseResponseEcho() {
    return {
        message: ""
    };
}
exports.ResponseEcho = {
    typeUrl: "/tendermint.abci.ResponseEcho",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            message: (0, helpers_1.isSet)(object.message) ? String(object.message) : ""
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
    fromSDK(object) {
        return {
            message: object?.message
        };
    },
    toSDK(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAmino(object) {
        return {
            message: object.message
        };
    },
    toAmino(message) {
        const obj = {};
        obj.message = message.message;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseEcho.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseEcho.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseEcho.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseEcho",
            value: exports.ResponseEcho.encode(message).finish()
        };
    }
};
function createBaseResponseFlush() {
    return {};
}
exports.ResponseFlush = {
    typeUrl: "/tendermint.abci.ResponseFlush",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseFlush.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseFlush.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseFlush.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseFlush",
            value: exports.ResponseFlush.encode(message).finish()
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
exports.ResponseInfo = {
    typeUrl: "/tendermint.abci.ResponseInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            data: (0, helpers_1.isSet)(object.data) ? String(object.data) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            app_version: (0, helpers_1.isSet)(object.app_version) ? BigInt(object.app_version.toString()) : BigInt(0),
            last_block_height: (0, helpers_1.isSet)(object.last_block_height) ? BigInt(object.last_block_height.toString()) : BigInt(0),
            last_block_app_hash: (0, helpers_1.isSet)(object.last_block_app_hash) ? (0, helpers_1.bytesFromBase64)(object.last_block_app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data);
        message.version !== undefined && (obj.version = message.version);
        message.app_version !== undefined && (obj.app_version = (message.app_version || BigInt(0)).toString());
        message.last_block_height !== undefined && (obj.last_block_height = (message.last_block_height || BigInt(0)).toString());
        message.last_block_app_hash !== undefined && (obj.last_block_app_hash = (0, helpers_1.base64FromBytes)(message.last_block_app_hash !== undefined ? message.last_block_app_hash : new Uint8Array()));
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
    fromSDK(object) {
        return {
            data: object?.data,
            version: object?.version,
            app_version: object?.app_version,
            last_block_height: object?.last_block_height,
            last_block_app_hash: object?.last_block_app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.data = message.data;
        obj.version = message.version;
        obj.app_version = message.app_version;
        obj.last_block_height = message.last_block_height;
        obj.last_block_app_hash = message.last_block_app_hash;
        return obj;
    },
    fromAmino(object) {
        return {
            data: object.data,
            version: object.version,
            app_version: BigInt(object.app_version),
            last_block_height: BigInt(object.last_block_height),
            last_block_app_hash: object.last_block_app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data;
        obj.version = message.version;
        obj.app_version = message.app_version ? message.app_version.toString() : undefined;
        obj.last_block_height = message.last_block_height ? message.last_block_height.toString() : undefined;
        obj.last_block_app_hash = message.last_block_app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInfo",
            value: exports.ResponseInfo.encode(message).finish()
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
exports.ResponseInitChain = {
    typeUrl: "/tendermint.abci.ResponseInitChain",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensus_params !== undefined) {
            params_1.ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(26).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseInitChain();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_params = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
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
            consensus_params: (0, helpers_1.isSet)(object.consensus_params) ? params_1.ConsensusParams.fromJSON(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? params_1.ConsensusParams.toJSON(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseInitChain();
        message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? params_1.ConsensusParams.fromPartial(object.consensus_params) : undefined;
        message.validators = object.validators?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            consensus_params: object.consensus_params ? params_1.ConsensusParams.fromSDK(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromSDK(e)) : [],
            app_hash: object?.app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        message.consensus_params !== undefined && (obj.consensus_params = message.consensus_params ? params_1.ConsensusParams.toSDK(message.consensus_params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAmino(object) {
        return {
            consensus_params: object?.consensus_params ? params_1.ConsensusParams.fromAmino(object.consensus_params) : undefined,
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.ValidatorUpdate.fromAmino(e)) : [],
            app_hash: object.app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_params = message.consensus_params ? params_1.ConsensusParams.toAmino(message.consensus_params) : undefined;
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseInitChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseInitChain.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseInitChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseInitChain",
            value: exports.ResponseInitChain.encode(message).finish()
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
exports.ResponseQuery = {
    typeUrl: "/tendermint.abci.ResponseQuery",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            proof_1.ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_ops = proof_1.ProofOps.decode(reader, reader.uint32());
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
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            proof_ops: (0, helpers_1.isSet)(object.proof_ops) ? proof_1.ProofOps.fromJSON(object.proof_ops) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? proof_1.ProofOps.toJSON(message.proof_ops) : undefined);
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
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? proof_1.ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            log: object?.log,
            info: object?.info,
            index: object?.index,
            key: object?.key,
            value: object?.value,
            proof_ops: object.proof_ops ? proof_1.ProofOps.fromSDK(object.proof_ops) : undefined,
            height: object?.height,
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index;
        obj.key = message.key;
        obj.value = message.value;
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? proof_1.ProofOps.toSDK(message.proof_ops) : undefined);
        obj.height = message.height;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        return {
            code: object.code,
            log: object.log,
            info: object.info,
            index: BigInt(object.index),
            key: object.key,
            value: object.value,
            proof_ops: object?.proof_ops ? proof_1.ProofOps.fromAmino(object.proof_ops) : undefined,
            height: BigInt(object.height),
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.log = message.log;
        obj.info = message.info;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.key = message.key;
        obj.value = message.value;
        obj.proof_ops = message.proof_ops ? proof_1.ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseQuery.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseQuery.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseQuery.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseQuery",
            value: exports.ResponseQuery.encode(message).finish()
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
exports.ResponseCheckTx = {
    typeUrl: "/tendermint.abci.ResponseCheckTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            gas_wanted: (0, helpers_1.isSet)(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gas_used: (0, helpers_1.isSet)(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || BigInt(0)).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || BigInt(0)).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
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
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            data: object?.data,
            log: object?.log,
            info: object?.info,
            gas_wanted: object?.gas_wanted,
            gas_used: object?.gas_used,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromSDK(e)) : [],
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted;
        obj.gas_used = message.gas_used;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        return {
            code: object.code,
            data: object.data,
            log: object.log,
            info: object.info,
            gas_wanted: BigInt(object.gas_wanted),
            gas_used: BigInt(object.gas_used),
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromAmino(e)) : [],
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseCheckTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseCheckTx.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseCheckTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCheckTx",
            value: exports.ResponseCheckTx.encode(message).finish()
        };
    }
};
function createBaseResponseCommit() {
    return {
        retain_height: BigInt(0)
    };
}
exports.ResponseCommit = {
    typeUrl: "/tendermint.abci.ResponseCommit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.retain_height !== BigInt(0)) {
            writer.uint32(24).int64(message.retain_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            retain_height: (0, helpers_1.isSet)(object.retain_height) ? BigInt(object.retain_height.toString()) : BigInt(0)
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
    fromSDK(object) {
        return {
            retain_height: object?.retain_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.retain_height = message.retain_height;
        return obj;
    },
    fromAmino(object) {
        return {
            retain_height: BigInt(object.retain_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.retain_height = message.retain_height ? message.retain_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseCommit.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseCommit",
            value: exports.ResponseCommit.encode(message).finish()
        };
    }
};
function createBaseResponseListSnapshots() {
    return {
        snapshots: []
    };
}
exports.ResponseListSnapshots = {
    typeUrl: "/tendermint.abci.ResponseListSnapshots",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.snapshots) {
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
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
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => exports.Snapshot.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toJSON(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseListSnapshots();
        message.snapshots = object.snapshots?.map(e => exports.Snapshot.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => exports.Snapshot.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toSDK(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            snapshots: Array.isArray(object?.snapshots) ? object.snapshots.map((e) => exports.Snapshot.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.snapshots) {
            obj.snapshots = message.snapshots.map(e => e ? exports.Snapshot.toAmino(e) : undefined);
        }
        else {
            obj.snapshots = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseListSnapshots.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseListSnapshots.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseListSnapshots.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseListSnapshots",
            value: exports.ResponseListSnapshots.encode(message).finish()
        };
    }
};
function createBaseResponseOfferSnapshot() {
    return {
        result: 0
    };
}
exports.ResponseOfferSnapshot = {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            result: (0, helpers_1.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
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
    fromSDK(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseOfferSnapshot_ResultToJSON(message.result));
        return obj;
    },
    fromAmino(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseOfferSnapshot_ResultFromJSON(object.result) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseOfferSnapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseOfferSnapshot.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseOfferSnapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
            value: exports.ResponseOfferSnapshot.encode(message).finish()
        };
    }
};
function createBaseResponseLoadSnapshotChunk() {
    return {
        chunk: new Uint8Array()
    };
}
exports.ResponseLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            chunk: (0, helpers_1.isSet)(object.chunk) ? (0, helpers_1.bytesFromBase64)(object.chunk) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.chunk !== undefined && (obj.chunk = (0, helpers_1.base64FromBytes)(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseLoadSnapshotChunk();
        message.chunk = object.chunk ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            chunk: object?.chunk
        };
    },
    toSDK(message) {
        const obj = {};
        obj.chunk = message.chunk;
        return obj;
    },
    fromAmino(object) {
        return {
            chunk: object.chunk
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chunk = message.chunk;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseLoadSnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseLoadSnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseLoadSnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
            value: exports.ResponseLoadSnapshotChunk.encode(message).finish()
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
exports.ResponseApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            result: (0, helpers_1.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
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
    fromSDK(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetch_chunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => e) : [],
            reject_senders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseApplySnapshotChunk_ResultToJSON(message.result));
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
    fromAmino(object) {
        return {
            result: (0, helpers_1.isSet)(object.result) ? responseApplySnapshotChunk_ResultFromJSON(object.result) : -1,
            refetch_chunks: Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e) => e) : [],
            reject_senders: Array.isArray(object?.reject_senders) ? object.reject_senders.map((e) => e) : []
        };
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
        return exports.ResponseApplySnapshotChunk.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseApplySnapshotChunk.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseApplySnapshotChunk.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
            value: exports.ResponseApplySnapshotChunk.encode(message).finish()
        };
    }
};
function createBaseResponsePrepareProposal() {
    return {
        txs: []
    };
}
exports.ResponsePrepareProposal = {
    typeUrl: "/tendermint.abci.ResponsePrepareProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
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
    fromSDK(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponsePrepareProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponsePrepareProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ResponsePrepareProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponsePrepareProposal",
            value: exports.ResponsePrepareProposal.encode(message).finish()
        };
    }
};
function createBaseResponseProcessProposal() {
    return {
        status: 0
    };
}
exports.ResponseProcessProposal = {
    typeUrl: "/tendermint.abci.ResponseProcessProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            status: (0, helpers_1.isSet)(object.status) ? responseProcessProposal_ProposalStatusFromJSON(object.status) : -1
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
    fromSDK(object) {
        return {
            status: (0, helpers_1.isSet)(object.status) ? responseProcessProposal_ProposalStatusFromJSON(object.status) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.status !== undefined && (obj.status = responseProcessProposal_ProposalStatusToJSON(message.status));
        return obj;
    },
    fromAmino(object) {
        return {
            status: (0, helpers_1.isSet)(object.status) ? responseProcessProposal_ProposalStatusFromJSON(object.status) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseProcessProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseProcessProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseProcessProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseProcessProposal",
            value: exports.ResponseProcessProposal.encode(message).finish()
        };
    }
};
function createBaseResponseExtendVote() {
    return {
        vote_extension: new Uint8Array()
    };
}
exports.ResponseExtendVote = {
    typeUrl: "/tendermint.abci.ResponseExtendVote",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vote_extension.length !== 0) {
            writer.uint32(10).bytes(message.vote_extension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            vote_extension: (0, helpers_1.isSet)(object.vote_extension) ? (0, helpers_1.bytesFromBase64)(object.vote_extension) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote_extension !== undefined && (obj.vote_extension = (0, helpers_1.base64FromBytes)(message.vote_extension !== undefined ? message.vote_extension : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseExtendVote();
        message.vote_extension = object.vote_extension ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            vote_extension: object?.vote_extension
        };
    },
    toSDK(message) {
        const obj = {};
        obj.vote_extension = message.vote_extension;
        return obj;
    },
    fromAmino(object) {
        return {
            vote_extension: object.vote_extension
        };
    },
    toAmino(message) {
        const obj = {};
        obj.vote_extension = message.vote_extension;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseExtendVote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseExtendVote.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseExtendVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseExtendVote",
            value: exports.ResponseExtendVote.encode(message).finish()
        };
    }
};
function createBaseResponseVerifyVoteExtension() {
    return {
        status: 0
    };
}
exports.ResponseVerifyVoteExtension = {
    typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            status: (0, helpers_1.isSet)(object.status) ? responseVerifyVoteExtension_VerifyStatusFromJSON(object.status) : -1
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
    fromSDK(object) {
        return {
            status: (0, helpers_1.isSet)(object.status) ? responseVerifyVoteExtension_VerifyStatusFromJSON(object.status) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.status !== undefined && (obj.status = responseVerifyVoteExtension_VerifyStatusToJSON(message.status));
        return obj;
    },
    fromAmino(object) {
        return {
            status: (0, helpers_1.isSet)(object.status) ? responseVerifyVoteExtension_VerifyStatusFromJSON(object.status) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseVerifyVoteExtension.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseVerifyVoteExtension.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseVerifyVoteExtension.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
            value: exports.ResponseVerifyVoteExtension.encode(message).finish()
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
exports.ResponseFinalizeBlock = {
    typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.events) {
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tx_results) {
            exports.ExecTxResult.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validator_updates) {
            exports.ValidatorUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.consensus_param_updates !== undefined) {
            params_1.ConsensusParams.encode(message.consensus_param_updates, writer.uint32(34).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(42).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseFinalizeBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tx_results.push(exports.ExecTxResult.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validator_updates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.consensus_param_updates = params_1.ConsensusParams.decode(reader, reader.uint32());
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
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            tx_results: Array.isArray(object?.tx_results) ? object.tx_results.map((e) => exports.ExecTxResult.fromJSON(e)) : [],
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => exports.ValidatorUpdate.fromJSON(e)) : [],
            consensus_param_updates: (0, helpers_1.isSet)(object.consensus_param_updates) ? params_1.ConsensusParams.fromJSON(object.consensus_param_updates) : undefined,
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.tx_results) {
            obj.tx_results = message.tx_results.map(e => e ? exports.ExecTxResult.toJSON(e) : undefined);
        }
        else {
            obj.tx_results = [];
        }
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? exports.ValidatorUpdate.toJSON(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined && (obj.consensus_param_updates = message.consensus_param_updates ? params_1.ConsensusParams.toJSON(message.consensus_param_updates) : undefined);
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseFinalizeBlock();
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.tx_results = object.tx_results?.map(e => exports.ExecTxResult.fromPartial(e)) || [];
        message.validator_updates = object.validator_updates?.map(e => exports.ValidatorUpdate.fromPartial(e)) || [];
        message.consensus_param_updates = object.consensus_param_updates !== undefined && object.consensus_param_updates !== null ? params_1.ConsensusParams.fromPartial(object.consensus_param_updates) : undefined;
        message.app_hash = object.app_hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromSDK(e)) : [],
            tx_results: Array.isArray(object?.tx_results) ? object.tx_results.map((e) => exports.ExecTxResult.fromSDK(e)) : [],
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => exports.ValidatorUpdate.fromSDK(e)) : [],
            consensus_param_updates: object.consensus_param_updates ? params_1.ConsensusParams.fromSDK(object.consensus_param_updates) : undefined,
            app_hash: object?.app_hash
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.tx_results) {
            obj.tx_results = message.tx_results.map(e => e ? exports.ExecTxResult.toSDK(e) : undefined);
        }
        else {
            obj.tx_results = [];
        }
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? exports.ValidatorUpdate.toSDK(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        message.consensus_param_updates !== undefined && (obj.consensus_param_updates = message.consensus_param_updates ? params_1.ConsensusParams.toSDK(message.consensus_param_updates) : undefined);
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAmino(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromAmino(e)) : [],
            tx_results: Array.isArray(object?.tx_results) ? object.tx_results.map((e) => exports.ExecTxResult.fromAmino(e)) : [],
            validator_updates: Array.isArray(object?.validator_updates) ? object.validator_updates.map((e) => exports.ValidatorUpdate.fromAmino(e)) : [],
            consensus_param_updates: object?.consensus_param_updates ? params_1.ConsensusParams.fromAmino(object.consensus_param_updates) : undefined,
            app_hash: object.app_hash
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.tx_results) {
            obj.tx_results = message.tx_results.map(e => e ? exports.ExecTxResult.toAmino(e) : undefined);
        }
        else {
            obj.tx_results = [];
        }
        if (message.validator_updates) {
            obj.validator_updates = message.validator_updates.map(e => e ? exports.ValidatorUpdate.toAmino(e) : undefined);
        }
        else {
            obj.validator_updates = [];
        }
        obj.consensus_param_updates = message.consensus_param_updates ? params_1.ConsensusParams.toAmino(message.consensus_param_updates) : undefined;
        obj.app_hash = message.app_hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ResponseFinalizeBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ResponseFinalizeBlock.decode(message.value);
    },
    toProto(message) {
        return exports.ResponseFinalizeBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
            value: exports.ResponseFinalizeBlock.encode(message).finish()
        };
    }
};
function createBaseCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
exports.CommitInfo = {
    typeUrl: "/tendermint.abci.CommitInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
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
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.VoteInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = Math.round(message.round));
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => exports.VoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            round: object?.round,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.VoteInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            round: object.round,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.VoteInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.VoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.CommitInfo",
            value: exports.CommitInfo.encode(message).finish()
        };
    }
};
function createBaseExtendedCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
exports.ExtendedCommitInfo = {
    typeUrl: "/tendermint.abci.ExtendedCommitInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (const v of message.votes) {
            exports.ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.ExtendedVoteInfo.decode(reader, reader.uint32()));
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
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.ExtendedVoteInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.round !== undefined && (obj.round = Math.round(message.round));
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.ExtendedVoteInfo.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtendedCommitInfo();
        message.round = object.round ?? 0;
        message.votes = object.votes?.map(e => exports.ExtendedVoteInfo.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            round: object?.round,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.ExtendedVoteInfo.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.ExtendedVoteInfo.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            round: object.round,
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => exports.ExtendedVoteInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.round = message.round;
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? exports.ExtendedVoteInfo.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtendedCommitInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtendedCommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ExtendedCommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ExtendedCommitInfo",
            value: exports.ExtendedCommitInfo.encode(message).finish()
        };
    }
};
function createBaseEvent() {
    return {
        type: "",
        attributes: []
    };
}
exports.Event = {
    typeUrl: "/tendermint.abci.Event",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
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
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.EventAttribute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => exports.EventAttribute.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            type: object?.type,
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.EventAttribute.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toSDK(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            type: object.type,
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.EventAttribute.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.EventAttribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Event.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Event.decode(message.value);
    },
    toProto(message) {
        return exports.Event.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Event",
            value: exports.Event.encode(message).finish()
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
exports.EventAttribute = {
    typeUrl: "/tendermint.abci.EventAttribute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            value: (0, helpers_1.isSet)(object.value) ? String(object.value) : "",
            index: (0, helpers_1.isSet)(object.index) ? Boolean(object.index) : false
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
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value,
            index: object?.index
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.index = message.index;
        return obj;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            index: object.index
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventAttribute.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventAttribute.decode(message.value);
    },
    toProto(message) {
        return exports.EventAttribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.EventAttribute",
            value: exports.EventAttribute.encode(message).finish()
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
exports.ExecTxResult = {
    typeUrl: "/tendermint.abci.ExecTxResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
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
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            gas_wanted: (0, helpers_1.isSet)(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gas_used: (0, helpers_1.isSet)(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromJSON(e)) : [],
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || BigInt(0)).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || BigInt(0)).toString());
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toJSON(e) : undefined);
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
        message.events = object.events?.map(e => exports.Event.fromPartial(e)) || [];
        message.codespace = object.codespace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            code: object?.code,
            data: object?.data,
            log: object?.log,
            info: object?.info,
            gas_wanted: object?.gas_wanted,
            gas_used: object?.gas_used,
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromSDK(e)) : [],
            codespace: object?.codespace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted;
        obj.gas_used = message.gas_used;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toSDK(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAmino(object) {
        return {
            code: object.code,
            data: object.data,
            log: object.log,
            info: object.info,
            gas_wanted: BigInt(object.gas_wanted),
            gas_used: BigInt(object.gas_used),
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.Event.fromAmino(e)) : [],
            codespace: object.codespace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code;
        obj.data = message.data;
        obj.log = message.log;
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        obj.codespace = message.codespace;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExecTxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExecTxResult.decode(message.value);
    },
    toProto(message) {
        return exports.ExecTxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ExecTxResult",
            value: exports.ExecTxResult.encode(message).finish()
        };
    }
};
function createBaseTxResult() {
    return {
        height: BigInt(0),
        index: 0,
        tx: new Uint8Array(),
        result: exports.ExecTxResult.fromPartial({})
    };
}
exports.TxResult = {
    typeUrl: "/tendermint.abci.TxResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            exports.ExecTxResult.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.result = exports.ExecTxResult.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            tx: (0, helpers_1.isSet)(object.tx) ? (0, helpers_1.bytesFromBase64)(object.tx) : new Uint8Array(),
            result: (0, helpers_1.isSet)(object.result) ? exports.ExecTxResult.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.tx !== undefined && (obj.tx = (0, helpers_1.base64FromBytes)(message.tx !== undefined ? message.tx : new Uint8Array()));
        message.result !== undefined && (obj.result = message.result ? exports.ExecTxResult.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.index = object.index ?? 0;
        message.tx = object.tx ?? new Uint8Array();
        message.result = object.result !== undefined && object.result !== null ? exports.ExecTxResult.fromPartial(object.result) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            index: object?.index,
            tx: object?.tx,
            result: object.result ? exports.ExecTxResult.fromSDK(object.result) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.index = message.index;
        obj.tx = message.tx;
        message.result !== undefined && (obj.result = message.result ? exports.ExecTxResult.toSDK(message.result) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            index: object.index,
            tx: object.tx,
            result: object?.result ? exports.ExecTxResult.fromAmino(object.result) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.index = message.index;
        obj.tx = message.tx;
        obj.result = message.result ? exports.ExecTxResult.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxResult.decode(message.value);
    },
    toProto(message) {
        return exports.TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.TxResult",
            value: exports.TxResult.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        power: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/tendermint.abci.Validator",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            address: (0, helpers_1.isSet)(object.address) ? (0, helpers_1.bytesFromBase64)(object.address) : new Uint8Array(),
            power: (0, helpers_1.isSet)(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = (0, helpers_1.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            power: object?.power
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            power: BigInt(object.power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseValidatorUpdate() {
    return {
        pub_key: keys_1.PublicKey.fromPartial({}),
        power: BigInt(0)
    };
}
exports.ValidatorUpdate = {
    typeUrl: "/tendermint.abci.ValidatorUpdate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
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
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            power: (0, helpers_1.isSet)(object.power) ? BigInt(object.power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorUpdate();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? keys_1.PublicKey.fromPartial(object.pub_key) : undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pub_key: object.pub_key ? keys_1.PublicKey.fromSDK(object.pub_key) : undefined,
            power: object?.power
        };
    },
    toSDK(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toSDK(message.pub_key) : undefined);
        obj.power = message.power;
        return obj;
    },
    fromAmino(object) {
        return {
            pub_key: object?.pub_key ? keys_1.PublicKey.fromAmino(object.pub_key) : undefined,
            power: BigInt(object.power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pub_key ? keys_1.PublicKey.toAmino(message.pub_key) : undefined;
        obj.power = message.power ? message.power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorUpdate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorUpdate.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorUpdate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ValidatorUpdate",
            value: exports.ValidatorUpdate.encode(message).finish()
        };
    }
};
function createBaseVoteInfo() {
    return {
        validator: exports.Validator.fromPartial({}),
        block_id_flag: 0
    };
}
exports.VoteInfo = {
    typeUrl: "/tendermint.abci.VoteInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_id_flag !== 0) {
            writer.uint32(24).int32(message.block_id_flag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
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
            validator: (0, helpers_1.isSet)(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.block_id_flag !== undefined && (obj.block_id_flag = (0, validator_1.blockIDFlagToJSON)(message.block_id_flag));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.block_id_flag = object.block_id_flag ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            validator: object.validator ? exports.Validator.fromSDK(object.validator) : undefined,
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toSDK(message.validator) : undefined);
        message.block_id_flag !== undefined && (obj.block_id_flag = (0, validator_1.blockIDFlagToJSON)(message.block_id_flag));
        return obj;
    },
    fromAmino(object) {
        return {
            validator: object?.validator ? exports.Validator.fromAmino(object.validator) : undefined,
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.block_id_flag = message.block_id_flag;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VoteInfo.decode(message.value);
    },
    toProto(message) {
        return exports.VoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.VoteInfo",
            value: exports.VoteInfo.encode(message).finish()
        };
    }
};
function createBaseExtendedVoteInfo() {
    return {
        validator: exports.Validator.fromPartial({}),
        vote_extension: new Uint8Array(),
        extension_signature: new Uint8Array(),
        block_id_flag: 0
    };
}
exports.ExtendedVoteInfo = {
    typeUrl: "/tendermint.abci.ExtendedVoteInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedVoteInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
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
            validator: (0, helpers_1.isSet)(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            vote_extension: (0, helpers_1.isSet)(object.vote_extension) ? (0, helpers_1.bytesFromBase64)(object.vote_extension) : new Uint8Array(),
            extension_signature: (0, helpers_1.isSet)(object.extension_signature) ? (0, helpers_1.bytesFromBase64)(object.extension_signature) : new Uint8Array(),
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.vote_extension !== undefined && (obj.vote_extension = (0, helpers_1.base64FromBytes)(message.vote_extension !== undefined ? message.vote_extension : new Uint8Array()));
        message.extension_signature !== undefined && (obj.extension_signature = (0, helpers_1.base64FromBytes)(message.extension_signature !== undefined ? message.extension_signature : new Uint8Array()));
        message.block_id_flag !== undefined && (obj.block_id_flag = (0, validator_1.blockIDFlagToJSON)(message.block_id_flag));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtendedVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.vote_extension = object.vote_extension ?? new Uint8Array();
        message.extension_signature = object.extension_signature ?? new Uint8Array();
        message.block_id_flag = object.block_id_flag ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            validator: object.validator ? exports.Validator.fromSDK(object.validator) : undefined,
            vote_extension: object?.vote_extension,
            extension_signature: object?.extension_signature,
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toSDK(message.validator) : undefined);
        obj.vote_extension = message.vote_extension;
        obj.extension_signature = message.extension_signature;
        message.block_id_flag !== undefined && (obj.block_id_flag = (0, validator_1.blockIDFlagToJSON)(message.block_id_flag));
        return obj;
    },
    fromAmino(object) {
        return {
            validator: object?.validator ? exports.Validator.fromAmino(object.validator) : undefined,
            vote_extension: object.vote_extension,
            extension_signature: object.extension_signature,
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.vote_extension = message.vote_extension;
        obj.extension_signature = message.extension_signature;
        obj.block_id_flag = message.block_id_flag;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtendedVoteInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtendedVoteInfo.decode(message.value);
    },
    toProto(message) {
        return exports.ExtendedVoteInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.ExtendedVoteInfo",
            value: exports.ExtendedVoteInfo.encode(message).finish()
        };
    }
};
function createBaseMisbehavior() {
    return {
        type: 0,
        validator: exports.Validator.fromPartial({}),
        height: BigInt(0),
        time: new Date(),
        total_voting_power: BigInt(0)
    };
}
exports.Misbehavior = {
    typeUrl: "/tendermint.abci.Misbehavior",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.total_voting_power !== BigInt(0)) {
            writer.uint32(40).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehavior();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            type: (0, helpers_1.isSet)(object.type) ? misbehaviorTypeFromJSON(object.type) : -1,
            validator: (0, helpers_1.isSet)(object.validator) ? exports.Validator.fromJSON(object.validator) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            total_voting_power: (0, helpers_1.isSet)(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = misbehaviorTypeToJSON(message.type));
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toJSON(message.validator) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehavior();
        message.type = object.type ?? 0;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? misbehaviorTypeFromJSON(object.type) : -1,
            validator: object.validator ? exports.Validator.fromSDK(object.validator) : undefined,
            height: object?.height,
            time: object.time ? timestamp_1.Timestamp.fromSDK(object.time) : undefined,
            total_voting_power: object?.total_voting_power
        };
    },
    toSDK(message) {
        const obj = {};
        message.type !== undefined && (obj.type = misbehaviorTypeToJSON(message.type));
        message.validator !== undefined && (obj.validator = message.validator ? exports.Validator.toSDK(message.validator) : undefined);
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ? timestamp_1.Timestamp.toSDK(message.time) : undefined);
        obj.total_voting_power = message.total_voting_power;
        return obj;
    },
    fromAmino(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? misbehaviorTypeFromJSON(object.type) : -1,
            validator: object?.validator ? exports.Validator.fromAmino(object.validator) : undefined,
            height: BigInt(object.height),
            time: object.time,
            total_voting_power: BigInt(object.total_voting_power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.validator = message.validator ? exports.Validator.toAmino(message.validator) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Misbehavior.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Misbehavior.decode(message.value);
    },
    toProto(message) {
        return exports.Misbehavior.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Misbehavior",
            value: exports.Misbehavior.encode(message).finish()
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
exports.Snapshot = {
    typeUrl: "/tendermint.abci.Snapshot",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0,
            chunks: (0, helpers_1.isSet)(object.chunks) ? Number(object.chunks) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            metadata: (0, helpers_1.isSet)(object.metadata) ? (0, helpers_1.bytesFromBase64)(object.metadata) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = (0, helpers_1.base64FromBytes)(message.metadata !== undefined ? message.metadata : new Uint8Array()));
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
    fromSDK(object) {
        return {
            height: object?.height,
            format: object?.format,
            chunks: object?.chunks,
            hash: object?.hash,
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            format: object.format,
            chunks: object.chunks,
            hash: object.hash,
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Snapshot.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Snapshot.decode(message.value);
    },
    toProto(message) {
        return exports.Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.abci.Snapshot",
            value: exports.Snapshot.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map