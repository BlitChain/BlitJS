import * as blitjs from "./codegen";
declare global {
    interface BigInt {
        toJSON(): string;
    }
    interface Window {
        keplr: any;
        getOfflineSigner: any;
    }
    interface Registry {
        types: Map<string, any>;
    }
    interface BlitClient {
        registry: Registry;
        gasPrice: string;
    }
}
export default blitjs;
