//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    static Balance(request, initRequest) {
        return fm.fetchReq(`/cosmos/nft/v1beta1/balance/${request["owner"]}/${request["class_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner", "class_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    static Owner(request, initRequest) {
        return fm.fetchReq(`/cosmos/nft/v1beta1/owner/${request["class_id"]}/${request["id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["class_id", "id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    static Supply(request, initRequest) {
        return fm.fetchReq(`/cosmos/nft/v1beta1/supply/${request["class_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["class_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    static NFTs(request, initRequest) {
        return fm.fetchReq(`/cosmos/nft/v1beta1/nfts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** NFT queries an NFT based on its class and id. */
    static NFT(request, initRequest) {
        return fm.fetchReq(`/cosmos/nft/v1beta1/nfts/${request["class_id"]}/${request["id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["class_id", "id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Class queries an NFT class based on its id */
    static Class(request, initRequest) {
        return fm.fetchReq(`/cosmos/nft/v1beta1/classes/${request["class_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["class_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Classes queries all NFT classes */
    static Classes(request, initRequest) {
        return fm.fetchReq(`/cosmos/nft/v1beta1/classes?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
export class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
    async Balance(req, headers) {
        return Query.Balance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
    async Owner(req, headers) {
        return Query.Owner(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
    async Supply(req, headers) {
        return Query.Supply(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    async NFTs(req, headers) {
        return Query.NFTs(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** NFT queries an NFT based on its class and id. */
    async NFT(req, headers) {
        return Query.NFT(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Class queries an NFT class based on its id */
    async Class(req, headers) {
        return Query.Class(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Classes queries all NFT classes */
    async Classes(req, headers) {
        return Query.Classes(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map