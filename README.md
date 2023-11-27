# fetch-factory

The fetch-factory is a TypeScript class that simplifies HTTP requests using Axios. It provides a convenient way to create and send HTTP requests with a customizable configuration.

## Installation

Install fetch-factory using a package manager such as npm, yarn, or pnpm.

### npm
```bash
npm install @wujue0115/fetch-factory
```
### yarn
```bash
yarn add @wujue0115/fetch-factory
```
### pnpm
```bash
pnpm install @wujue0115/fetch-factory
```

## Usage

### Basic Usage

Create an instance of FetchFactory by providing a base URL and default configuration:

```javascript
import FetchFactory from "@wujue0115/fetch-factory";


const myAPI = new FetchFactory({
  baseUrl: "http://...",
  baseConfig: {
    headers: {
      ...
    }
  }
});
```

Use the fetch method for making HTTP requests, such as a GET request:

```javascript
async function fetch() {
  const { data, error } = await myAPI.fetch("/example...", "get");

  data && console.log(data);
  error && console.error(error);
}
```

Similarly, you can use the get method to send an HTTP GET request.

```javascript
async function getRequest() {
  const { data, error } = await myAPI.get("/example...");

  data && console.log(data);
  error && console.error(error);
}
```

### Flexible Configuration for the fetch Method

The fetch method in FetchFactory supports multiple configurations, providing flexibility for various use cases. Each argument enables you to customize the URL, HTTP method, request data, headers, and additional options. Here are the different configurations:

```javascript
myAPI.fetch(/* options */);
myAPI.fetch(/* url */, /* options */);
myAPI.fetch(/* url */, /* method */, /* options */);
myAPI.fetch(/* url */, /* method */, /* data */, /* options */);
myAPI.fetch(/* url */, /* method */, /* data */, /* headers */, /* options */);
```

### Flexible Configuration for the get, post, put, delete Method

For get, post, put, and delete methods, the example below presents the support for multiple parameters. 

```javascript
myAPI.get(/* options */);
myAPI.get(/* url */, /* options */);
myAPI.get(/* url */, /* params */, /* options */);
myAPI.get(/* url */, /* params */, /* headers */, /* options */);

myAPI.post(/* options */);
myAPI.post(/* url */, /* options */);
myAPI.post(/* url */, /* data */, /* options */);
myAPI.post(/* url */, /* data */, /* headers */, /* options */);
```

The options argument is equivalent to the [axios request config](https://axios-http.com/docs/req_config).

## License
[MIT](https://github.com/wujue0115/fetch-factory/blob/main/LICENSE)