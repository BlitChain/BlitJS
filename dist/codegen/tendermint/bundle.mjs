//@ts-nocheck
import * as _168 from "./abci/types";
import * as _169 from "./crypto/keys";
import * as _170 from "./crypto/proof";
import * as _171 from "./libs/bits/types";
import * as _172 from "./p2p/types";
import * as _173 from "./types/block";
import * as _174 from "./types/evidence";
import * as _175 from "./types/params";
import * as _176 from "./types/types";
import * as _177 from "./types/validator";
import * as _178 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._168
    };
    tendermint.crypto = {
        ..._169,
        ..._170
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._171
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._172
    };
    tendermint.types = {
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._177
    };
    tendermint.version = {
        ..._178
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map