var socketServer = new (require('ws').Server)({port: 8084});

var SerialPort = require("serialport").SerialPort
//var serialPort = new SerialPort("/dev/cu.usbmodem00000001", {baudrate: 57600} );

//serialPort.open();

socketServer.on('connection', function(socket){
  console.log("New Web socket connection (" + socketServer.clients.length + 'total )');

    socket.on('message', function(message){

    console.log(">"+message);
    serialPort.write(message);
  });
});

