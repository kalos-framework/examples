import Kalos from 'kalos';
import bodyParser from 'body-parser';
import path from 'path';

const names = ['pete', 'luan', 'hau', 'long', 'viet anh'];

const server = new Kalos.Server()
    .use(bodyParser.urlencoded())
    .static({
        source: path.join(__dirname, 'public')
    })
    .viewEngine({
        engine: require('pug'),
        source: path.join(__dirname, 'views'),
        ext: 'pug'
    })
    .get('/', (req, res) => {
        res.view('index', { names }, {});
    })
    .post('/', (req, res) => {
        if (req.body.name) {
            names.push(req.body.name);
        }
        res.redirect(302, '/');
    })
    .start((ip, port) => {
        console.log('server started at ' + ip + ':' + port);
    });
