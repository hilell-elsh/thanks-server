

const PORT = 5114;
const http = require('http');

function onRequest(req, res) {
    console.log('request receve');
    res.statusCode = 200;
    res.end("thanks")
}
function onRunning() {console.log('server running in port: ' + PORT)}

const server = http.createServer(onRequest);

server.listen(PORT, onRunning);