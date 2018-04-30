var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var insertButton = document.getElementById("insert");
        var refreshButton = document.getElementById("refresh");
        var searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        var inputs = document.getElementsByTagName("input");
        var genderButton = document.getElementById("male");
        var matrikel = inputs[2].value;
        var studi;
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
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        console.log(L04_Interfaces.studiHomoAssoc);
        // nur um das auch noch zu zeigen...
        L04_Interfaces.studiSimpleArray.push(studi);
    }
    function refresh(_event) {
        var output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (var matrikel in L04_Interfaces.studiHomoAssoc) {
            var studi = L04_Interfaces.studiHomoAssoc[matrikel];
            var line = matrikel + ": ";
            line += "Studiengang:" + studi.courseOfStudy;
            line += "," + studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
    }
    function search(_event) {
        var inputs = document.getElementsByTagName("input");
        var output = document.getElementsByTagName("textarea")[1];
        var matrikel = inputs[2].value;
        var studi = L04_Interfaces.studiHomoAssoc[matrikel];
        if (studi) {
            var line = matrikel + ":";
            line += studi.firstname + ", " + studi.name + ", " + studi.age + "Jahre";
            line += studi.gender ? "(M)" : "(F)";
            line += ", Studiengang:" + studi.courseOfStudy;
            output.value = line;
        }
        else {
            output.value = "Keine Matrikelnummer gefunden!";
        }
    }
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map