const server = require('./src/server');
const router = require('./src/router');
const request = require('./src/requestHandler');

let handle = {};
handle['/'] = request.handler('index.html', 'text/html', __dirname);
handle['/about'] = request.handler('about.html', 'text/html', __dirname);
handle['/test'] = request.handler('test.html', 'text/html', __dirname);
handle['/layout'] = request.handler('layout.html', 'text/html', __dirname);
handle['/destroy'] = request.handler('destroy.txt', 'text/html', __dirname);

server.start(router.route, handle, __dirname);
