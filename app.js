const server = require('./src/server');
const router = require('./src/router');
const request = require('./src/requestHandler');

let handle = {};
handle['/'] = request.handler('index.html', __dirname);
handle['/about'] = request.handler('about.html', __dirname);
handle['/test'] = request.handler('test.html', __dirname);
handle['/layout'] = request.handler('layout.html', __dirname);
handle['/destroy'] = request.handler('destroy.txt', __dirname);

server.start(handle, __dirname);
