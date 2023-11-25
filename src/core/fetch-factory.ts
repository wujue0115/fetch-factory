import axios from "axios";

type TConfig = {
  url?: string;
  method?: string;
  data?: object;
  headers?: object;
  parames?: object;
};

type TBase = {
  config: object;
  header: object;
  baseUrl: string;
};

export class FetchFactory {
  private _baseConfig: TConfig;
  private _baseHeaders: object;
  private _baseUrl = "";

  constructor(base: TBase) {
    this._baseConfig = base.config;
    this._baseHeaders = base.header;
    this._baseUrl = base.baseUrl;
  }

  public get baseConfig() {
    return this._baseConfig;
  }

  public get baseHeader() {
    return this._baseHeaders;
  }

  public get baseUrl() {
    return this._baseUrl;
  }

  public set baseUrl(url) {
    this._baseUrl = url;
  }

  public set baseHeaders(headers) {
    this._baseHeaders = headers;
    this._baseConfig.headers = headers;
  }

  public set baseConfig(config) {
    this._baseConfig = config;
  }

  createConfig(parameterOrder: string[], ...parameters) {
    const config = { ...this.baseConfig };
    const length = parameters.length;
    for (let i = 0; i < length; ++i) {
      parameterOrder[i] === "options"
        ? Object.assign(config, parameters[i])
        : (config[parameterOrder[i]] = parameters[i]);
    }

    console.log(config);

    config.url = this._baseUrl + config.url;
    config.method = config.method.toLowerCase();

    return config;
  }

  async fetch(...parameters) {
    try {
      const parameterOrder = ["url", "method", "data", "headers", "options"];
      const config = this.createConfig(parameterOrder, ...parameters);

      return axios(config)
        .then((response) => {
          return { data: response };
        })
        .catch((error) => {
          return { error };
        });
    } catch (error) {
      console.error(`[Fetch Factory] ${error}`);
    }
  }

  async get(...parameters) {
    try {
      const parameterOrder = ["method", "url", "data", "headers", "options"];
      const config = this.createConfig(parameterOrder, "get", ...parameters);

      return axios(config)
        .then((response) => {
          return { data: response };
        })
        .catch((error) => {
          return { error };
        });
    } catch (error) {
      console.error(`[Fetch Factory] ${error}`);
    }
  }

  async post(...parameters) {
    try {
      const parameterOrder = ["method", "url", "data", "headers", "options"];
      const config = this.createConfig(parameterOrder, "post", ...parameters);

      return axios(config)
        .then((response) => {
          return { data: response };
        })
        .catch((error) => {
          return { error };
        });
    } catch (error) {
      console.error(`[Fetch Factory] ${error}`);
    }
  }

  async put(...parameters) {
    try {
      const parameterOrder = ["method", "url", "data", "headers", "options"];
      const config = this.createConfig(parameterOrder, "put", ...parameters);

      return axios(config)
        .then((response) => {
          return { data: response };
        })
        .catch((error) => {
          return { error };
        });
    } catch (error) {
      console.error(`[Fetch Factory] ${error}`);
    }
  }

  async delete(...parameters) {
    try {
      const parameterOrder = ["method", "url", "data", "headers", "options"];
      const config = this.createConfig(parameterOrder, "delete", ...parameters);

      return axios(config)
        .then((response) => {
          return { data: response };
        })
        .catch((error) => {
          return { error };
        });
    } catch (error) {
      console.error(`[Fetch Factory] ${error}`);
    }
  }
}
