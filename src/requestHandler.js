const fs = require('fs');
const path = require('path');

exports.handler = (name, contentType, dirname) => {
  const filePath = dirname + '/public/views/' + name;
  return function (res) {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  };
}
