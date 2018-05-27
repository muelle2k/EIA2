import * as Http from "http";
import * as Url from "url";

namespace Node {

    let studis: L06_Interface.Studis = {};

    interface AssocStringString {
        [key: string]: string | string[];
    }


    let port: number = process.env.PORT;

    if (port == undefined)
        port = 8100;

    let server: Http.Server = Http.createServer();//eigenen server creieren
    server.addListener("listening", handleListen);//wenn server 'listening' dann function handleListen aufrufen
    server.addListener("request", handleRequest);//server  reagiert darauf'request' 
    server.listen(port);

    function handleListen(): void {
        console.log("Ich höre?");//ausgabe in console oder terminal
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Ich höre Stimmen!");

        let query: AssocStringString = Url.parse(_request.url, true).query;//übersetzung in assoziatives array und umwandeln in js 



        _response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write("Ich habe dich gehört<br/>");

        if (query["method"] == "StudentData") {
            let student = <L06_Interface.Studi>JSON.parse(query["data"].toString());
            studis[student.matrikel.toString()] = student;
            _response.write("Student added!");
            _response.end();
        }
        
        if (query["method"] == "refreshData") {
            _response.write(JSON.stringify(studis));
            _response.end();
        }
    }
}