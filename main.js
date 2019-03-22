const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

var handle = {}
handle['/'] = requestHandlers.home;
handle['/about'] = requestHandlers.about;
handle['/test'] = requestHandlers.test;
handle['/layout'] = requestHandlers.layout;
handle['/destroy'] = requestHandlers.destroy;

server.start(router.route, handle);
