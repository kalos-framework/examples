import Kalos from 'kalos';

const isAuthed = true;

const isLogin = (req, res, next) => {
    if (!!isAuthed) {
        next();
    } else {
        res.writeHead(401);
        res.end('Access Denied');
    }
};

const server = new Kalos.Server()
    .get('/profile', isLogin, (req, res) => {
        res.end('Welcome to dashboard!');
    })
    .start((ip, port) => {
        console.log('Server started at ' + ip + ':' + port);
    });