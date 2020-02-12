const fs = require('fs');
const path = require('path');

const contentMap = {
  '.txt': 'text/plain',
  '.html': 'text/html',
};

exports.handler = (name, dirname) => {
  const contentType = path.extname(name);
  const filePath = `${dirname}/public/views/${name}`;
  return function (res) {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  };
}
