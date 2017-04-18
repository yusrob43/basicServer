var http = require("http");

var PORTa = 7000;
var PORTb = 7500;

function serverResponsea(request, response) {

    response.end("All those deep, crushing insecurities that keep you up at night? They're wrong. Love Yourself.");

};

function serverResponseb(request, response) {

    response.end("All those deep, crushing insecurities that keep you up at night? They're right. Go to sleep.");
};

var servera = http.createServer(serverResponsea);
var serverb = http.createServer(serverResponseb);

servera.listen(PORTa, function(){
//Do something when we start the server
console.log("Server has been started, listening on: http://localhost:" + PORTa);

});

serverb.listen(PORTb, function(){
//Do something when we start the server
console.log("Server has been started, listening on: http://localhost:" + PORTb);

});