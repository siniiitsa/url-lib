const make = (url) => new URL(url);

const getProtocol = (url) => url.protocol;
const setProtocol = (url, protocol) => url.protocol = protocol;

const getHost = (url) => url.host;
const setHost = (url, host) => url.host = host;

const getPath = (url) => url.pathname;
const setPath = (url, path) => url.pathname = path;

const getQueryParam = (url, paramName, def = null) => (
  url.searchParams.get(paramName) || def
);

const setQueryParam = (url, key, value) => url.searchParams.set(key, value);

const toString = (url) => url.href;

module.exports = {
  make,
  getProtocol,
  setProtocol,
  getHost,
  setHost,
  getPath,
  setPath,
  getQueryParam,
  setQueryParam,
  toString,
};