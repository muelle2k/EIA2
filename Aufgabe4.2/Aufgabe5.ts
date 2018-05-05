namespace Aufgabe_5 {


    let numPlayers: number = 0;

    export let numPairs: number = 5;

    let openCards: HTMLElement[] = [];

    //Variable des momentanen Kartendecks
    let currentCardDeck: Deck = undefined;

    let flippedCards: number = 0;

    //Zählvariable l für die Gratulation erstellen
    let l: number = 0;

    let clickGo: boolean = true;

    //Karten speichern
    let cardArray: string[] = [];

    //Spieleranzahl und Punktzahl
    let playerNames: string[] = [];
    let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert

    window.addEventListener("click", clickCard);

    createDecks();



    function clickCard(_event: Event): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;


        console.log(_event);

        //Bedingung umgedrehte Karte und die Klicks müssen angenommen werden
        if (target.classList.contains("hidden") && clickGo) {


            if (flippedCards < 2) {
                target.classList.remove("hidden");
                openCards.push(target);             //angeklickte Karte in openCard Array gepusht
            }

            flippedCards++;

            if (flippedCards == 2) {

                //keine Klicks mehr möglich
                clickGo = false;

                //flippedCards auf 0
                flippedCards = 0;

                //vergleich die visible Karten
                if (openCards[0].innerText === openCards[1].innerText) {

                    //setTimeout Funktion
                    setTimeout(() => {

                        //Die Karten werden genommen
                        openCards[0].classList.add("taken");
                        openCards[1].classList.add("taken");

                        //Das openCards Array wird geleert
                        openCards = [];

                        //Klicks werden wieder angenommen
                        clickGo = true;

                        //if keine Karte mehr auf hidden dann alert
                        if (document.getElementsByClassName("hidden").length == 0) {
                            alert("Gratuliere Dir!")
                        }

                        //Karte wird nach 2000milliSekunden ENTFERNT
                    }, 2000);


                }
                else { //2 Karten sind ungleich

                    //setTimeout Funktion
                    setTimeout(() => {

                        //ungleiche Kartenpaare werden wieder umgedreht
                        openCards[0].classList.add("hidden");
                        openCards[1].classList.add("hidden");

                        //Das openCards Array wird wieder geleert
                        openCards = [];

                        //Danach werden wieder Klicks angenommen
                        clickGo = true;

                        //Karten werden nach 2Sekunden wieder umgedreht
                    }, 2000);


                }


            }

        }


    }



    function shuffleCards(): void {

        let i: number = cardArray.length;

        let j: number = 0;

        //Variable temp wird definiert als string ohne Textinhalt.
        let temp: string = "";

        //Variable i(Länge des Arrays) wird immer um 1 herunter gezählt und muss immer größer 0 sein
        while (--i > 0) {

            //j=0, eine random Zahl zwischen 0 und 1 tritt dadurch auf
            j = Math.floor(Math.random() * (i + 1));
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }

    //Spielfeld wird erzeugt
    //Funktion wird erstellt, um das Hauptspielfeld zu erzeugen
    function createGame(): void {

        let node: any = document.getElementById("Spielfeld");

        //AufrufshuffleCards damit die Karten bei jedem Spiel gemischt werden
        shuffleCards();

        //Überschrift wird erstellt
        let header = document.createElement("h2");
        header.innerText = "Spielbrett";
        node.appendChild(header);

        //Spielfeld innerhalb eines Divs
        let spielFeld = document.createElement("div");

        for (let i: number = 0; i < cardArray.length; i++) {

            let card = document.createElement("div");
            card.id = i.toString();
            card.setAttribute("attr", i.toString());

            card.classList.add(cardArray[i]);
            card.classList.add("hidden");

            card.textContent = cardArray[i];

            //CSS wird definiert
            card.style.backgroundColor = currentCardDeck.color;
            card.style.fontFamily = currentCardDeck.font;
            card.style.fontSize = currentCardDeck.size + "px";
            card.style.color = currentCardDeck.textColor;

            spielFeld.appendChild(card);
        }

        node.appendChild(spielFeld);

    }

    //Spieleranzeige erstellen
    //Funktion playerInfo erstellen
    function playerInfo(): void {

        //Aufruf bzw Zugriff mit der id im Html Dokument
        let node: any = document.getElementById("Spielerinfo");

        //HTML string
        let childNodeHTML: string = "";

        //Div erzeugen
        childNodeHTML += "<div>";

        for (let i: number = 0; i < playerNames.length; i++) {

            //div Box
            childNodeHTML += "<div class='player' id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";

            //Spielername
            childNodeHTML += "<p class='playerInfo'> ";
            childNodeHTML += playerNames[i];
            childNodeHTML += "</p>";

            //Punktestand
            childNodeHTML += "<p class='punkte'>Punktestand: ";

            //Zugriff auf den Punktestandarray
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
        }

        childNodeHTML += "</div>";

        //Inhalt der Knoten mit childNodeHTML befüllen
        node.innerHTML += childNodeHTML;


        console.log(childNodeHTML);
    }

    //Funktion gratulation erstellen
    function gratulation(): void {

        //Es wird geprüft, ob die Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind
        if (l == numPairs) {

            alert("Gratuliere Dir!")

        }
    }

    //Hauptfunktion
    export function main(): void {

        //Funtion für die Spielerabfrage erstellen

        let spielerAnzahl: number;

        //Variable eingabe als NodeListOfElement
        //NodeList Objekte sind Sammlungen von Knoten

        let eingabe: NodeListOf<Element> = document.getElementById("spieleranzahl").getElementsByTagName("input");

        for (let i = 0; i < eingabe.length; i++) {

            //Spieleranzahl wird hochgezählt 

            if ((<HTMLInputElement>eingabe[i]).checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }

        //Eingabe Spielernamen
        eingabe = document.getElementById("name").getElementsByTagName("input");

        //Wenn keine eingabe Spielername, dann Spielername: Patrick
        for (let i = 0; i < eingabe.length; i++) {
            if ((<HTMLInputElement>eingabe[i]).value == "" && i == 0) {
                playerNames.push("Patrick")
            }

            //Ansonsten wird der Spielername ins Spiel gepusht
            else if ((<HTMLInputElement>eingabe[i]).value != "") {
                playerNames.push((<HTMLInputElement>eingabe[i]).value)
            }
        }

        //Auswahl des Kartensatzes
        eingabe = document.getElementById("kartensatz").getElementsByTagName("input");


        //Wenn beim Kartendeck nichts ausgewählt wird, erscheint automatisch das Kartendeck "animals"
        if (currentCardDeck == undefined)
            currentCardDeck = decks["animals"];

        //Karten werden erzeugt
        createCardArray(currentCardDeck.content);

        //Spielbrett erzeugen 
        createGame();

        //Spielerinfo erzeugen
        playerInfo();

        //Starteinstellung bzw. userinterface wird nach der Einstellung gelöscht
        document.getElementById("starteinstellungen").remove()

    }

    //Für den Kartenpaare Slider
    export function onInputEvent(value: number) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        numPairs = value;
    }

    //Karten werden hinzugefügt
    function createCardArray(karten: string[]) {

        //Kartenpaare werden erzeugt
        for (let i = 0; i < numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }

    }

    //Für Auswahl des Kartensatzes, damit sich die Länge anpasst
    export function radioCardClick(element: HTMLInputElement) {
        currentCardDeck = decks[element.value];
        repopulateCardForm();
    }

    //SliderAnzahl
    function repopulateCardForm() {
        let kartenPaareElement = <HTMLInputElement>document.getElementById("kartenpaare");
        kartenPaareElement.max = currentCardDeck.content.length.toString();

        let maxWert = currentCardDeck.content.length;
        let momentanerWert = parseInt(kartenPaareElement.value);

        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString()
        }

        //Update des HTML Zahländerung neben Slider

        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value;
    }

    //Spieleranzahl und Spielername
    export function radioSpielerClick(element: HTMLInputElement) {

        let spielerZahl = parseInt(element.value);

        for (let i = 1; i <= 4; i++) {

            //`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung  

            let inputElement = <HTMLInputElement>document.getElementById(`player${i}`);
            let labelElement = document.getElementById(`player${i}-label`);
            if (i <= spielerZahl) {
                inputElement.disabled = false;
                labelElement.style.opacity = "1";

            }
            else {
                inputElement.disabled = true;
                labelElement.style.opacity = "0.33";
                inputElement.value = "";
            }
        }

    }
}