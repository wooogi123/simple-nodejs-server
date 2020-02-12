const fs = require('fs');
const url = require('url');
const path = require('path');

const staticMap = {
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.mp3': 'audio/mpeg'
}

exports.route = (handle, dirname, [req, res]) => {
  const pathname = url.parse(req.url).pathname;
  const extension = path.extname(pathname);
  const staticPath = `${dirname}/public`;

  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, req);
  } else {
    if (staticMap[extension]) {
      fs.readFile(staticPath + pathname, (err, data) => {
        res.writeHead(200, { 'Content-Type': staticMap[extension] });
        res.end(data);
      });
    } else {
      fs.readFile(`${staticPath}/views/404.html`, (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }
  }
}
