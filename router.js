const fs = require('fs');
const path = require('path');

const route = (handle, pathname, res, req) => {
  const extension = path.extname(pathname);
  const staticMap = JSON.parse(fs.readFileSync('MIME.json'));
  const staticPath = './public/';

  if(typeof handle[pathname] === 'function'){
    handle[pathname](res, req);
  }else{
    if(staticMap[extension]){
      fs.readFile(staticPath + pathname, (err, data) => {
        res.writeHead(200, {'Content-Type': staticMap[extension]});
        res.end(data);
      });
    }else{
      fs.readFile('./404.html', (err, data) => {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(data);
      });
    }
  }
}

exports.route = route;
