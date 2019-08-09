import Kalos from 'kalos';

const server = new Kalos.Server()
    .get('/', (req, res) => {
        res.end('Home page');
    })
    .get('/hello/:name', (req, res) => {
        res.end('Hello ' + req.params.name);
    })
    .start((ip, port) => {
        console.log('Server started at ' + ip + ':' + port);
    });