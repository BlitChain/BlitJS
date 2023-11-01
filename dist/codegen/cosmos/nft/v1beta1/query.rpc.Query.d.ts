import * as fm from "../../../grpc-gateway";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
export declare class Query {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    static Balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse>;
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    static Owner(request: QueryOwnerRequest, initRequest?: fm.InitReq): Promise<QueryOwnerResponse>;
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    static Supply(request: QuerySupplyRequest, initRequest?: fm.InitReq): Promise<QuerySupplyResponse>;
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    static NFTs(request: QueryNFTsRequest, initRequest?: fm.InitReq): Promise<QueryNFTsResponse>;
    /** NFT queries an NFT based on its class and id. */
    static NFT(request: QueryNFTRequest, initRequest?: fm.InitReq): Promise<QueryNFTResponse>;
    /** Class queries an NFT class based on its id */
    static Class(request: QueryClassRequest, initRequest?: fm.InitReq): Promise<QueryClassResponse>;
    /** Classes queries all NFT classes */
    static Classes(request: QueryClassesRequest, initRequest?: fm.InitReq): Promise<QueryClassesResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    Balance(req: QueryBalanceRequest, headers?: HeadersInit): Promise<QueryBalanceResponse>;
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    Owner(req: QueryOwnerRequest, headers?: HeadersInit): Promise<QueryOwnerResponse>;
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    Supply(req: QuerySupplyRequest, headers?: HeadersInit): Promise<QuerySupplyResponse>;
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    NFTs(req: QueryNFTsRequest, headers?: HeadersInit): Promise<QueryNFTsResponse>;
    /** NFT queries an NFT based on its class and id. */
    NFT(req: QueryNFTRequest, headers?: HeadersInit): Promise<QueryNFTResponse>;
    /** Class queries an NFT class based on its id */
    Class(req: QueryClassRequest, headers?: HeadersInit): Promise<QueryClassResponse>;
    /** Classes queries all NFT classes */
    Classes(req: QueryClassesRequest, headers?: HeadersInit): Promise<QueryClassesResponse>;
}
