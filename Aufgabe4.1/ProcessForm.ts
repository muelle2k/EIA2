namespace L04_Interfaces {
    window.addEventListener("load", init);

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
    }

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
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

            output.value = line;
        } else {
           output.value = "Keine Matrikelnummer gefunden!";
        }


    }


}