import Kalos from 'kalos';

const server = new Kalos.Server()
    .use((req, res, next) => {
        console.log('This is a middleware');
        req.helloMsg = 'Hello from Middleware';
        next();
    })
    .get('/', (req, res) => {
        res.end(req.helloMsg);
    })
    .start((ip, port) => {
        console.log('server started at ' + ip + ':' + port);
    });
