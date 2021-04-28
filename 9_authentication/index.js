import Kalos from 'kalos';
const jwt = require("jsonwebtoken");
const config = require("config");

// test with this token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwidXNlck5hbWUiOiJDb2R5IiwiaWF0IjoxNTY1MzY1NjYxfQ.HfbWdo_tlEE18ydZhwFRITFmBp66LQ5N2OKpFaZFebQ

const server = new Kalos.Server()
    .use(checkAuth())
    .use((req, res, next) => {
        console.log('This is a middleware');
        console.log('req.userName = ' + req.userName);
        req.helloMsg = 'Hello from Middleware';
        next();
    })
    .get('/', (req, res) => {
        res.end(req.helloMsg);
    })
    .start((ip, port) => {
        console.log('server started at ' + ip + ':' + port);
    });
;

function checkAuth() {
    return (req, res, next) => {
        //get the token from the header if present
        const token = req.headers["x-access-token"] || req.headers["authorization"];
        //if no token found, return response (without going to the next middleware)
        if (!token) {
            res.statusCode = 401;
            res.end("Access denied. No token provided.");
        } else {
            try {
                //if can verify the token, set req.user and pass to next middleware
                const decoded = jwt.verify(token, "kalos@123");
                console.log("decoded = " + JSON.stringify(decoded));
                req.userName = decoded.userName;
                next();
            } catch (ex) {
                //if invalid token
                res.statusCode = 400;
                res.end("Invalid token.");
            }

        }
    };
}
