import fetch, { Request, RequestInfo, Response } from "node-fetch";

/**
 * Postman environment emulator to facilitate authenticate with the CORI Data API
 * in anon-browser runtime environment (like the [Postman API client](https://www.postman.com/product/api-client/){.external target="_blank"}
 */
export default class PM {

  public environment: any;

  constructor(clientId: string, username: string, password: string) {
    this.environment = {
      cognitoClientId: clientId,
      cognitoUserName: username,
      cognitoUserPassword: password,
      get: function(key: string | number) {
        console.log(key);
        return this[key];
      },
      set: function(key: string | number, value: any) {
        console.log(key, value);
        this[key] = value;
      }
    };
  }

  async sendRequest(
    request: {
      url: RequestInfo;
      method: any;
      body: {
        mode?: string,
        options?: any,
        raw: any;
      };
      header: any;
    },
    callback: (arg0: null, arg1: any) => any
  ) {

    const response = await fetch(request.url, {
      method: request.method,
      body: request.body.raw,
      headers: request.header
    });

    response.json().then(data => callback(null, data));

  }
}
