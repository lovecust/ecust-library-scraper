# Ecust Library Scraper

> 11:46 PM, Saturday, August 20, 2016.

A scraper for Ecust Library based on *NodeJs*.

## Installation

```bash
npm install --save ecust-library-scraper
```

## Usage Examples

### Library Status

```js
const LibraryStatus = require('ecust-library-scraper/status');

LibraryStatus.status().then(status => {
	console.log('Ecust Library Status: ', status);
}).catch(ex => console.error(ex));
```

## HTTP Client

Internally, `Ecust Library Scraper` uses [`curlrequest`][github-curl-request] as HTTP client.

## References

Github: [Curl Request][github-curl-request].


[github-curl-request]: https://github.com/node-js-libs/curlrequest "Github: Curl Request"
