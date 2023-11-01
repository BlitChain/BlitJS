import { Vote, VoteAmino, VoteSDKType, LightBlock, LightBlockAmino, LightBlockSDKType } from "./types";
import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "tendermint.types";
export interface Evidence {
    duplicate_vote_evidence?: DuplicateVoteEvidence;
    light_client_attack_evidence?: LightClientAttackEvidence;
}
export interface EvidenceProtoMsg {
    type_url: "/tendermint.types.Evidence";
    value: Uint8Array;
}
export interface EvidenceProtoMsg {
    type_url: "/tendermint.types.Evidence";
    value: Uint8Array;
}
export interface EvidenceAmino {
    duplicate_vote_evidence?: DuplicateVoteEvidenceAmino;
    light_client_attack_evidence?: LightClientAttackEvidenceAmino;
}
export interface EvidenceAminoMsg {
    type: "/tendermint.types.Evidence";
    value: EvidenceAmino;
}
export interface EvidenceSDKType {
    duplicate_vote_evidence?: DuplicateVoteEvidenceSDKType;
    light_client_attack_evidence?: LightClientAttackEvidenceSDKType;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    vote_a?: Vote;
    vote_b?: Vote;
    total_voting_power: bigint;
    validator_power: bigint;
    timestamp: Date;
}
export interface DuplicateVoteEvidenceProtoMsg {
    type_url: "/tendermint.types.DuplicateVoteEvidence";
    value: Uint8Array;
}
export interface DuplicateVoteEvidenceProtoMsg {
    type_url: "/tendermint.types.DuplicateVoteEvidence";
    value: Uint8Array;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceAmino {
    vote_a?: VoteAmino;
    vote_b?: VoteAmino;
    total_voting_power: string;
    validator_power: string;
    timestamp?: Date;
}
export interface DuplicateVoteEvidenceAminoMsg {
    type: "/tendermint.types.DuplicateVoteEvidence";
    value: DuplicateVoteEvidenceAmino;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceSDKType {
    vote_a?: VoteSDKType;
    vote_b?: VoteSDKType;
    total_voting_power: bigint;
    validator_power: bigint;
    timestamp: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflicting_block?: LightBlock;
    common_height: bigint;
    byzantine_validators: Validator[];
    total_voting_power: bigint;
    timestamp: Date;
}
export interface LightClientAttackEvidenceProtoMsg {
    type_url: "/tendermint.types.LightClientAttackEvidence";
    value: Uint8Array;
}
export interface LightClientAttackEvidenceProtoMsg {
    type_url: "/tendermint.types.LightClientAttackEvidence";
    value: Uint8Array;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceAmino {
    conflicting_block?: LightBlockAmino;
    common_height: string;
    byzantine_validators: ValidatorAmino[];
    total_voting_power: string;
    timestamp?: Date;
}
export interface LightClientAttackEvidenceAminoMsg {
    type: "/tendermint.types.LightClientAttackEvidence";
    value: LightClientAttackEvidenceAmino;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceSDKType {
    conflicting_block?: LightBlockSDKType;
    common_height: bigint;
    byzantine_validators: ValidatorSDKType[];
    total_voting_power: bigint;
    timestamp: Date;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export interface EvidenceListProtoMsg {
    type_url: "/tendermint.types.EvidenceList";
    value: Uint8Array;
}
export interface EvidenceListProtoMsg {
    type_url: "/tendermint.types.EvidenceList";
    value: Uint8Array;
}
export interface EvidenceListAmino {
    evidence: EvidenceAmino[];
}
export interface EvidenceListAminoMsg {
    type: "/tendermint.types.EvidenceList";
    value: EvidenceListAmino;
}
export interface EvidenceListSDKType {
    evidence: EvidenceSDKType[];
}
export declare const Evidence: {
    typeUrl: string;
    encode(message: Evidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial(object: Partial<Evidence>): Evidence;
    fromSDK(object: EvidenceSDKType): Evidence;
    toSDK(message: Evidence): EvidenceSDKType;
    fromAmino(object: EvidenceAmino): Evidence;
    toAmino(message: Evidence): EvidenceAmino;
    fromAminoMsg(object: EvidenceAminoMsg): Evidence;
    fromProtoMsg(message: EvidenceProtoMsg): Evidence;
    toProto(message: Evidence): Uint8Array;
    toProtoMsg(message: Evidence): EvidenceProtoMsg;
};
export declare const DuplicateVoteEvidence: {
    typeUrl: string;
    encode(message: DuplicateVoteEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromJSON(object: any): DuplicateVoteEvidence;
    toJSON(message: DuplicateVoteEvidence): unknown;
    fromPartial(object: Partial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
    fromSDK(object: DuplicateVoteEvidenceSDKType): DuplicateVoteEvidence;
    toSDK(message: DuplicateVoteEvidence): DuplicateVoteEvidenceSDKType;
    fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence;
    toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino;
    fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence;
    fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence;
    toProto(message: DuplicateVoteEvidence): Uint8Array;
    toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg;
};
export declare const LightClientAttackEvidence: {
    typeUrl: string;
    encode(message: LightClientAttackEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromJSON(object: any): LightClientAttackEvidence;
    toJSON(message: LightClientAttackEvidence): unknown;
    fromPartial(object: Partial<LightClientAttackEvidence>): LightClientAttackEvidence;
    fromSDK(object: LightClientAttackEvidenceSDKType): LightClientAttackEvidence;
    toSDK(message: LightClientAttackEvidence): LightClientAttackEvidenceSDKType;
    fromAmino(object: LightClientAttackEvidenceAmino): LightClientAttackEvidence;
    toAmino(message: LightClientAttackEvidence): LightClientAttackEvidenceAmino;
    fromAminoMsg(object: LightClientAttackEvidenceAminoMsg): LightClientAttackEvidence;
    fromProtoMsg(message: LightClientAttackEvidenceProtoMsg): LightClientAttackEvidence;
    toProto(message: LightClientAttackEvidence): Uint8Array;
    toProtoMsg(message: LightClientAttackEvidence): LightClientAttackEvidenceProtoMsg;
};
export declare const EvidenceList: {
    typeUrl: string;
    encode(message: EvidenceList, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EvidenceList;
    fromJSON(object: any): EvidenceList;
    toJSON(message: EvidenceList): unknown;
    fromPartial(object: Partial<EvidenceList>): EvidenceList;
    fromSDK(object: EvidenceListSDKType): EvidenceList;
    toSDK(message: EvidenceList): EvidenceListSDKType;
    fromAmino(object: EvidenceListAmino): EvidenceList;
    toAmino(message: EvidenceList): EvidenceListAmino;
    fromAminoMsg(object: EvidenceListAminoMsg): EvidenceList;
    fromProtoMsg(message: EvidenceListProtoMsg): EvidenceList;
    toProto(message: EvidenceList): Uint8Array;
    toProtoMsg(message: EvidenceList): EvidenceListProtoMsg;
};
