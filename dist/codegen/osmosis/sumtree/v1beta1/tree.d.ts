import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Node {
    children: Child[];
}
export interface NodeProtoMsg {
    type_url: "/osmosis.store.v1beta1.Node";
    value: Uint8Array;
}
export interface NodeProtoMsg {
    type_url: "/osmosis.store.v1beta1.Node";
    value: Uint8Array;
}
export interface NodeAmino {
    children: ChildAmino[];
}
export interface NodeAminoMsg {
    type: "osmosis/store/node";
    value: NodeAmino;
}
export interface NodeSDKType {
    children: ChildSDKType[];
}
export interface Child {
    index: Uint8Array;
    accumulation: string;
}
export interface ChildProtoMsg {
    type_url: "/osmosis.store.v1beta1.Child";
    value: Uint8Array;
}
export interface ChildProtoMsg {
    type_url: "/osmosis.store.v1beta1.Child";
    value: Uint8Array;
}
export interface ChildAmino {
    index: Uint8Array;
    accumulation: string;
}
export interface ChildAminoMsg {
    type: "osmosis/store/child";
    value: ChildAmino;
}
export interface ChildSDKType {
    index: Uint8Array;
    accumulation: string;
}
export interface Leaf {
    leaf?: Child;
}
export interface LeafProtoMsg {
    type_url: "/osmosis.store.v1beta1.Leaf";
    value: Uint8Array;
}
export interface LeafProtoMsg {
    type_url: "/osmosis.store.v1beta1.Leaf";
    value: Uint8Array;
}
export interface LeafAmino {
    leaf?: ChildAmino;
}
export interface LeafAminoMsg {
    type: "osmosis/store/leaf";
    value: LeafAmino;
}
export interface LeafSDKType {
    leaf?: ChildSDKType;
}
export declare const Node: {
    typeUrl: string;
    encode(message: Node, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial(object: Partial<Node>): Node;
    fromSDK(object: NodeSDKType): Node;
    toSDK(message: Node): NodeSDKType;
    fromAmino(object: NodeAmino): Node;
    toAmino(message: Node): NodeAmino;
    fromAminoMsg(object: NodeAminoMsg): Node;
    toAminoMsg(message: Node): NodeAminoMsg;
    fromProtoMsg(message: NodeProtoMsg): Node;
    toProto(message: Node): Uint8Array;
    toProtoMsg(message: Node): NodeProtoMsg;
};
export declare const Child: {
    typeUrl: string;
    encode(message: Child, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Child;
    fromJSON(object: any): Child;
    toJSON(message: Child): unknown;
    fromPartial(object: Partial<Child>): Child;
    fromSDK(object: ChildSDKType): Child;
    toSDK(message: Child): ChildSDKType;
    fromAmino(object: ChildAmino): Child;
    toAmino(message: Child): ChildAmino;
    fromAminoMsg(object: ChildAminoMsg): Child;
    toAminoMsg(message: Child): ChildAminoMsg;
    fromProtoMsg(message: ChildProtoMsg): Child;
    toProto(message: Child): Uint8Array;
    toProtoMsg(message: Child): ChildProtoMsg;
};
export declare const Leaf: {
    typeUrl: string;
    encode(message: Leaf, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Leaf;
    fromJSON(object: any): Leaf;
    toJSON(message: Leaf): unknown;
    fromPartial(object: Partial<Leaf>): Leaf;
    fromSDK(object: LeafSDKType): Leaf;
    toSDK(message: Leaf): LeafSDKType;
    fromAmino(object: LeafAmino): Leaf;
    toAmino(message: Leaf): LeafAmino;
    fromAminoMsg(object: LeafAminoMsg): Leaf;
    toAminoMsg(message: Leaf): LeafAminoMsg;
    fromProtoMsg(message: LeafProtoMsg): Leaf;
    toProto(message: Leaf): Uint8Array;
    toProtoMsg(message: Leaf): LeafProtoMsg;
};
