import axios from "axios";
import type { AxiosResponse } from "axios";

type TConfig = {
  url?: string;
  method?: string;
  data?: object;
  headers?: { [key: string]: string };
  parames?: object;
};

type TBase = {
  baseConfig: TConfig;
  baseUrl: string;
};

type TResponse = Promise<{ data: AxiosResponse } | { error: any }>;

export class FetchFactory {
  private _baseConfig: TConfig;
  private _baseUrl = "";

  constructor(base: TBase) {
    this._baseConfig = base.baseConfig;
    this._baseUrl = base.baseUrl;
  }

  public get baseConfig() {
    return this._baseConfig;
  }

  public get baseUrl() {
    return this._baseUrl;
  }

  public set baseUrl(url) {
    this._baseUrl = url;
  }

  public set baseConfig(config) {
    this._baseConfig = config;
  }

  private deepObjectMerge(target: any, source: any) {
    const isObject = (obj: any) => obj && typeof obj === "object";

    if (!isObject(target) || !isObject(source)) {
      return isObject(target) ? target : isObject(source) ? source : {};
    }

    for (const [key, value] of Object.entries(source)) {
      if (!isObject(value)) {
        Object.assign(target, { [key]: value });
        continue;
      }

      !target[key] && Object.assign(target, { [key]: {} });
      this.deepObjectMerge(target[key], value);
    }

    return target;
  }

  private createConfig(parameterOrder: string[], ...parameters) {
    let config = { ...this.baseConfig };

    const length = parameters.length - 1;
    for (let i = 0; i < length; ++i) {
      config = this.deepObjectMerge(config, {
        [parameterOrder[i]]: parameters[i]
      });
    }

    config = this.deepObjectMerge(config, parameters[length]);

    config.url = this._baseUrl + config.url;
    config.method = config.method.toLowerCase();

    if (config.method === "get" && config.data) {
      config.parames = config.data;
      delete config.data;
    }

    return config;
  }

  public async fetch(...parameters): TResponse {
    try {
      const parameterOrder = ["url", "method", "data", "headers"];
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

  public async get(...parameters): TResponse {
    try {
      const parameterOrder = ["method", "url", "parames", "headers"];
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

  public async post(...parameters): TResponse {
    try {
      const parameterOrder = ["method", "url", "data", "headers"];
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

  public async put(...parameters): TResponse {
    try {
      const parameterOrder = ["method", "url", "data", "headers"];
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

  public async delete(...parameters): TResponse {
    try {
      const parameterOrder = ["method", "url", "data", "headers"];
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
