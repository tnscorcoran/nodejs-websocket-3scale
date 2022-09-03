const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();
// _tc server.listen(9898);
server.listen(8080);

const wsServer = new WebSocketServer({
    httpServer: server,
    path: "/myws"
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
      console.log('Received Message:', message.utf8Data);
      //connection.sendUTF('Hi this is WebSocket server!');


      function logEvery2Seconds(i) {
        setTimeout(() => {
            var message = 'Message '+i+' from the Node JS WebSocket server!';
            
            console.log(message);
            
            connection.sendUTF(message);

            logEvery2Seconds(++i);
        }, 4000)
      }

      logEvery2Seconds(1);





    });
    connection.on('close', function(reasonCode, description) {
        console.log('Client has disconnected.');
    });
});
