import Kalos from 'kalos';

const server = new Kalos.Server()
    .get('/', (req, res) => {
        res.end(JSON.stringify(req.query));
    })
    .start((ip, port) => {
        console.log('server started at ' + ip + ':' + port);
    });
// try to access browser with this url:
// http://127.0.0.1:8080/?name=kalos&lang=js&platform=node