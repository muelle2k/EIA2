
import * as Url from "url";// URL 
import * as Http from "http";//HTTP wird erstellt im Code erstellt, damit einzelne HTTP.Objekte im Code angehängt werden können

namespace Node {

    interface AssocStringString {
        [key: string]: string;
    }


    let port: number = process.env.PORT; //process.env.PORT wird als Umgebungsvar festgelegt für den gegebenen PORT
    
    if (port == undefined)//wenn undefinded 
        port = 8100;//dann port = 8100

    let server: Http.Server = Http.createServer();//eigenen server creieren
    server.addListener("listening", handleListen);//wenn server 'listening dann function handleListen aufrufen
    server.addListener("request", handleRequest);//sever 'requeste' reagieren beibringen
    server.listen(port);



    function handleListen(): void {
        console.log("Ich höre?");//ausgabe in console oder terminal
    }



    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {//Http.IncomingMessage: Einkommende Info
        console.log("Ich höre Stimmen!");

        let query: AssocStringString = Url.parse(_request.url, true).query;//übersetzung in assoziatives array und umwandeln in js (/?a=10&b=20)
        let a: number = parseInt(query["a"]);
        let b: number = parseInt(query["b"]);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("Ich habe dich gehört<br/>");

        for (let key in query)//Schlüsseldurchgabe

        _response.write("eingegebene Infos: " + (query[key]) + "<br>");
        _response.write("Ergebnis: " + (a + b));
        _response.end();
    }
} 