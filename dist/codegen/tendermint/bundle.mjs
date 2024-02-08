//@ts-nocheck
import * as _170 from "./abci/types";
import * as _171 from "./crypto/keys";
import * as _172 from "./crypto/proof";
import * as _173 from "./libs/bits/types";
import * as _174 from "./p2p/types";
import * as _175 from "./types/block";
import * as _176 from "./types/evidence";
import * as _177 from "./types/params";
import * as _178 from "./types/types";
import * as _179 from "./types/validator";
import * as _180 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._170
    };
    tendermint.crypto = {
        ..._171,
        ..._172
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._173
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._174
    };
    tendermint.types = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._179
    };
    tendermint.version = {
        ..._180
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map