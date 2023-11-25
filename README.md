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

Here are basic usage examples.

```javascript
import FetchFactory from "@wujue0115/fetch-factory";

// Creating an instance of FetchFactory with a base URL and default configuration
const myAPI = new FetchFactory({
  baseUrl: "http://...",
  baseConfig: {
    headers: {
      "Content-Type": "application/json",
      ...
    }
  }
});


// You can use the fetch method to send an HTTP request, for example, a GET request.
async function fetch() {
  const { data, error } = await myAPI.fetch("/example...", "get");

  data && console.log(data);
  error && console.error(error);
}


// In the same way, you can use the get method to send an HTTP GET request.
async function getRequest() {
  const { data, error } = await myAPI.get("/example...");

  data && console.log(data);
  error && console.error(error);
}
```