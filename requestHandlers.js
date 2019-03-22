const fs = require('fs');
const path = require('path');

function handlerClosure(name, contentType){
  const filePath = './views/' + name
  return function(res){
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, {'Content-Type': contentType});
      res.end(data);
    });
  };
}

const home = handlerClosure('index.html', 'text/html');
const about = handlerClosure('about.html', 'text/html');
const test = handlerClosure('test.html', 'text/html');
const layout = handlerClosure('layout.html', 'text/html');
const destroy = handlerClosure('destroy.txt', 'text/plain');

module.exports = { home, about, test, layout, destroy }
