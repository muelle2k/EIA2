var L06_Interfaces;
(function (L06_Interfaces) {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100";
    let address = "https://eia2nodeserver.herokuapp.com";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
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
        L06_Interfaces.studiHomoAssoc[matrikel] = studi;
        console.log(L06_Interfaces.studiHomoAssoc);
        // nur um das auch noch zu zeigen...
        L06_Interfaces.studiSimpleArray.push(studi);
        sendData("StudentData", studi);
    }
    function refreshData(_event) {
        sendData("refreshData");
    }
    function refresh() {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in L06_Interfaces.studiHomoAssoc) {
            let studi = L06_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += "Studiengang:" + studi.courseOfStudy;
            line += "," + studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
    }
    function search(_event) {
        let inputs = document.getElementsByTagName("input");
        let output = document.getElementsByTagName("textarea")[1];
        let matrikel = inputs[2].value;
        let studi = L06_Interfaces.studiHomoAssoc[matrikel];
        if (studi) {
            let line = matrikel + ":";
            line += studi.firstname + ", " + studi.name + ", " + studi.age + "Jahre";
            line += studi.gender ? "(M)" : "(F)";
            line += ", Studiengang:" + studi.courseOfStudy;
            output.value = line;
        }
        else {
            output.value = "Keine Matrikelnummer gefunden!";
        }
    }
    function sendData(method, data = undefined) {
        console.log("sending data...");
        let xhr = new XMLHttpRequest();
        let datenString = JSON.stringify(data);
        xhr.open("GET", address + method + "/?method=" + method + "&data=" + encodeURIComponent(datenString), true);
        if (method == "StudentData") {
            //Sobald eine Antwort ankommt schreibe die Antwort in die Konsole
            xhr.onload = function () {
                console.log(xhr.responseText);
            };
        }
        else if (method == "refreshData") {
            xhr.onload = function () {
                console.log("Refreshing Studentdata...");
                //Überschreibe studiHomoAssoc mit der Antwort
                L06_Interfaces.studiHomoAssoc = JSON.parse(xhr.responseText);
                refresh();
            };
        }
        //Sende Request zum Server
        xhr.send();
    }
})(L06_Interfaces || (L06_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map