const WebSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();

server.listen(5001, function() {
    console.log((new Date()) + ' Server is listening on port 5001');
});


let conections = []
let salas = []

const wsServer = new WebSocketServer({ httpServer: server });

server.on('request', (req, res)=>{
    if (req.url == '/sala'){
        req.on('data', (data)=>{
            const body = data.toString('utf8')
            if (salas.find(body)){
                res.end('no')
            }
        })
    }
    if (req.url == '/sala'){
        req.on('data', (data)=>{
            const body = data.toString('utf8')
            if (salas.find(body)){
                res.end('no')
            }
        })
    }
})


wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', function(message) {
        console.log(message)
        conections.forEach((con)=> con.send(message.utf8Data))
        
    });

    conections.push(connection)
    conections.forEach((con)=> con.send('alguien se ha conectado'))





    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});