const http = require('http');
const url = require('url');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json'))

const start = (route, handle) => {
  http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    route(handle, pathname, res, req);
  }).listen(config.port, config.host);
}

exports.start = start;
