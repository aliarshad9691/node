var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var gpio = require("pi-gpio");


app.get('/', function(req, res){
    //res.sendFile(__dirname + '/index.html');
    res.send("Server Running!!!");
    //res.close();
});

io.on('connection', function(socket){
    console.log("user connected");

    socket.on('on', function(data){
        console.log("on signal");
        console.log(data.port+": is now on...");
        //gpio.open(data.port, "output", function(err) {
        //    gpio.write(data.port, 1, function() {
        //        gpio.close(data.port);
        //    });
        //    io.emit("state", "port: data.port<center>is On</center>");
        //});

    });
    socket.on('off', function(data){
        console.log("off signal");
        console.log(data.port+": is now off...");
        //gpio.open(12, "output", function(err) {
        //    gpio.write(12, 0, function() {
        //        gpio.close(12);
        //    });
        //    io.emit("state", "<center>Light is Off</center>");
        //});
    });
    socket.on('disconnect', function(){
        console.log("user dc");
    });
});

http.listen(3000, function(){
    console.log('listening on *:4000');
});
