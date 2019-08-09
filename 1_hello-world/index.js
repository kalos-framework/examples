import Kalos from 'kalos';

const server = new Kalos.Server()
    .get('/', (req, res) => {
        res.end('Hello from Kalos');
    })
    .start((ip, port) => {
        console.log("Server started at " + ip + ":" + port);
    });
