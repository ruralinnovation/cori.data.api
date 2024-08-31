import { RequestInfo } from "node-fetch";
/**
 * Postman environment emulator to facilitate authenticate with the CORI Data API
 * in anon-browser runtime environment (like the [Postman API client](https://www.postman.com/product/api-client/){.external target="_blank"}
 */
export default class PM {
    environment: any;
    constructor(clientId: string, username: string, password: string);
    sendRequest(request: {
        url: RequestInfo;
        method: any;
        body: {
            mode?: string;
            options?: any;
            raw: any;
        };
        header: any;
    }, callback: (arg0: null, arg1: any) => any): Promise<void>;
}
//# sourceMappingURL=PM.d.ts.map