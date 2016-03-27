var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/cu.usbmodem00000001", {baudrate: 57600} );

serialPort.open(function(err){
  if(err){
    console.log('failed to open: ' + err);
  }else{
    serialPort.on('data', function(data){
      console.log('data received : ' + data);
    });

    serialPort.write("ls\n", function(err, results){
      if(err)
        console.log('err ' + err);
      else
       console.log('results ' + results);
    });
  }
});
