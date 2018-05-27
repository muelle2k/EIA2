
namespace L06_Interface {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100";
    let address: string = "https://eia2nodeserver.herokuapp.com/";



    function init(_event: Event): void {
        console.log("Init");

        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");

        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            courseOfStudy: inputs[3].value,
            age: parseInt(inputs[4].value),
            gender: genderButton.checked
        };

        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;
        console.log(studiHomoAssoc);

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);

        sendData("StudentData", studi);

    }


    function refreshData(_event: Event): void {
        sendData("refreshData");
    }

    function refresh(): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";

        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += "Studiengang:" + studi.courseOfStudy;
            line += "," + studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
    }

    function search(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        let matrikel: string = inputs[2].value;
        let studi: Studi = studiHomoAssoc[matrikel];

        if (studi) {
            let line: string = matrikel + ":";
            line += studi.firstname + ", " + studi.name + ", " + studi.age + "Jahre";
            line += studi.gender ? "(M)" : "(F)";
            line += ", Studiengang:" + studi.courseOfStudy;

            output.value = line + "\n";
        } else {
            alert("Die angegebene Matrikelnummer ist nicht zu finden. Bitte nochmal versuchen.");
        }


    }

    function sendData(method: string, data: any = undefined) {
        console.log("sending data...");

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let datenString: string = JSON.stringify(data);

        xhr.open("GET", address + method + "/?method=" + method + "&data=" + encodeURIComponent(datenString), true);

        if (method == "StudentData") {

            //Sobald eine Antwort ankommt schreibe die Antwort in die Konsole

            xhr.onload = function() {
                console.log(xhr.responseText)
            }
            if (xhr.readyState == XMLHttpRequest.DONE) {
                alert("Daten empfangen.");
            }
        }
        else if (method == "refreshData") {
            xhr.onload = function() {

                console.log("Refreshing Studentdata...");

                //Überschreibe studiHomoAssoc mit der Antwort
                studiHomoAssoc = JSON.parse(xhr.responseText);
                refresh();
            }
        }

        //Sende Request zum Server
        xhr.send();
        console.log("Daten gesendet.");
    }

}


