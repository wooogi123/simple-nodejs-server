const http = require('http');
const url = require('url');
const fs = require('fs');

exports.start = (route, handle, dirname) => {
  const config = JSON.parse(fs.readFileSync(dirname + '/config.json'))
  http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    route(handle, pathname, res, req, dirname);
  }).listen(config.port, config.host);
}
