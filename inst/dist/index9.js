/*
 * Frontend UI component library for the CORI Data API 
 * {@link https://github.com/ruralinnovation/cori.data.api}
 * @copyright Rural Innovation Strategies, Inc.
 * @license ISC
 */
import { __awaiter } from './index13.js';
import fetch from './index14.js';

/**
 * Postman environment emulator to facilitate authenticate with the CORI Data API
 * in anon-browser runtime environment (like the [Postman API client](https://www.postman.com/product/api-client/){.external target="_blank"}
 */
class PM {
    constructor(clientId, username, password) {
        this.environment = {
            cognitoClientId: clientId,
            cognitoUserName: username,
            cognitoUserPassword: password,
            get: function (key) {
                console.log(key);
                return this[key];
            },
            set: function (key, value) {
                console.log(key, value);
                this[key] = value;
            }
        };
    }
    sendRequest(request, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(request.url, {
                method: request.method,
                body: request.body.raw,
                headers: request.header
            });
            response.json().then(data => callback(null, data));
        });
    }
}

export { PM as default };
//# sourceMappingURL=index9.js.map
