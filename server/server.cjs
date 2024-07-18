const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'ProductData.json'));
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter(require(path.join(__dirname, 'routes.json')));
const port = 3000;

server.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

    server.use(cors());
    server.unsubscribe(jsonServer.bodyParser);
    server.use(middlewares);
    server.use(router);
    server.use(rewriter);

    server.listen(port, () => {
        console.log(`JSON server is running on http://localhost:${port}`)
    });