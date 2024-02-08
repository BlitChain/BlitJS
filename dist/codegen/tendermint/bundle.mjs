//@ts-nocheck
import * as _171 from "./abci/types";
import * as _172 from "./crypto/keys";
import * as _173 from "./crypto/proof";
import * as _174 from "./libs/bits/types";
import * as _175 from "./p2p/types";
import * as _176 from "./types/block";
import * as _177 from "./types/evidence";
import * as _178 from "./types/params";
import * as _179 from "./types/types";
import * as _180 from "./types/validator";
import * as _181 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._171
    };
    tendermint.crypto = {
        ..._172,
        ..._173
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._174
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._175
    };
    tendermint.types = {
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._180
    };
    tendermint.version = {
        ..._181
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map