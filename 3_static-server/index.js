import Kalos from 'kalos';
import path from 'path';

const server = new Kalos.Server();
server.static({
        source: path.join(path.resolve(__dirname), 'public')
    });
server.start((ip, port) => {
        console.log("Server started at " + ip + ":" + port);
    });