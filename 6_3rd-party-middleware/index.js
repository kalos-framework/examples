import Kalos from 'kalos';
import cookieParser from 'cookie-parser';

const server = new Kalos.Server()
    .use(cookieParser())
    .get('/', (req, res) => {
        console.log(req.cookies);
        res.end('Use 3rd party middleware');
    })
    .start((ip, port) => {
        console.log('Server started at ' + ip + ':' + port);
    });