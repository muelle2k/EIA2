"use strict";
const Http = require("http");
const Url = require("url");
var Node;
(function (Node) {
    let studis = {};
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer(); //eigenen server creieren
    server.addListener("listening", handleListen); //wenn server 'listening' dann function handleListen aufrufen
    server.addListener("request", handleRequest); //server  reagiert darauf'request' 
    server.listen(port);
    function handleListen() {
        console.log("Ich höre?"); //ausgabe in console oder terminal
    }
    function handleRequest(_request, _response) {
        console.log("Ich höre Stimmen!");
        let query = Url.parse(_request.url, true).query; //übersetzung in assoziatives array und umwandeln in js 
        _response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("Ich habe dich gehört<br/>");
        if (query["method"] == "StudentData") {
            let student = JSON.parse(query["data"].toString());
            studis[student.matrikel.toString()] = student;
            _response.write("Studentdaten hinzugefügt!");
            _response.end();
        }
        if (query["method"] == "refreshData") {
            _response.write(JSON.stringify(studis));
            _response.end();
        }
    }
})(Node || (Node = {}));
//# sourceMappingURL=Server.js.map