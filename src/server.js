const http = require('http');
const fs = require('fs');
const router = require('./router');

exports.start = (handle, dirname) => {
  const config = JSON.parse(fs.readFileSync(`${dirname}/config.json`))
  http.createServer((req, res) => {
    router.route(handle, dirname, [req, res]);
  }).listen(config.port, config.host);
}
