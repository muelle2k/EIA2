var Aufgabe_5;
(function (Aufgabe_5) {
    let numPlayers = 0;
    Aufgabe_5.numPairs = 5;
    let openCards = [];
    //Variable des momentanen Kartendecks
    let currentCardDeck = undefined;
    let flippedCards = 0;
    //Zählvariable l für die Gratulation erstellen
    let l = 0;
    let clickGo = true;
    //Karten speichern
    let cardArray = [];
    //Spieleranzahl und Punktzahl
    let playerNames = [];
    let score = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    window.addEventListener("click", clickCard);
    Aufgabe_5.createDecks();
    function clickCard(_event) {
        let target = _event.target;
        console.log(_event);
        //Bedingung umgedrehte Karte und die Klicks müssen angenommen werden
        if (target.classList.contains("hidden") && clickGo) {
            if (flippedCards < 2) {
                target.classList.remove("hidden");
                openCards.push(target); //angeklickte Karte in openCard Array gepusht
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
                            alert("Gratuliere Dir!");
                        }
                        //Karte wird nach 2000milliSekunden ENTFERNT
                    }, 2000);
                }
                else {
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
    function shuffleCards() {
        let i = cardArray.length;
        let j = 0;
        //Variable temp wird definiert als string ohne Textinhalt.
        let temp = "";
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
    function createGame() {
        let node = document.getElementById("Spielfeld");
        //AufrufshuffleCards damit die Karten bei jedem Spiel gemischt werden
        shuffleCards();
        //Überschrift wird erstellt
        let header = document.createElement("h2");
        header.innerText = "Spielbrett";
        node.appendChild(header);
        //Spielfeld innerhalb eines Divs
        let spielFeld = document.createElement("div");
        for (let i = 0; i < cardArray.length; i++) {
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
    function playerInfo() {
        //Aufruf bzw Zugriff mit der id im Html Dokument
        let node = document.getElementById("Spielerinfo");
        //HTML string
        let childNodeHTML = "";
        //Div erzeugen
        childNodeHTML += "<div>";
        for (let i = 0; i < playerNames.length; i++) {
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
    function gratulation() {
        //Es wird geprüft, ob die Anzahl der richtigen Paare die Anzahl auf dem Spielfeld sind
        if (l == Aufgabe_5.numPairs) {
            alert("Gratuliere Dir!");
        }
    }
    //Hauptfunktion
    function main() {
        //Funtion für die Spielerabfrage erstellen
        let spielerAnzahl;
        //Variable eingabe als NodeListOfElement
        //NodeList Objekte sind Sammlungen von Knoten
        let eingabe = document.getElementById("spieleranzahl").getElementsByTagName("input");
        for (let i = 0; i < eingabe.length; i++) {
            //Spieleranzahl wird hochgezählt 
            if (eingabe[i].checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }
        //Eingabe Spielernamen
        eingabe = document.getElementById("name").getElementsByTagName("input");
        //Wenn keine eingabe Spielername, dann Spielername: Patrick
        for (let i = 0; i < eingabe.length; i++) {
            if (eingabe[i].value == "" && i == 0) {
                playerNames.push("Patrick");
            }
            else if (eingabe[i].value != "") {
                playerNames.push(eingabe[i].value);
            }
        }
        //Auswahl des Kartensatzes
        eingabe = document.getElementById("kartensatz").getElementsByTagName("input");
        //Wenn beim Kartendeck nichts ausgewählt wird, erscheint automatisch das Kartendeck "animals"
        if (currentCardDeck == undefined)
            currentCardDeck = Aufgabe_5.decks["animals"];
        //Karten werden erzeugt
        createCardArray(currentCardDeck.content);
        //Spielbrett erzeugen 
        createGame();
        //Spielerinfo erzeugen
        playerInfo();
        //Starteinstellung bzw. userinterface wird nach der Einstellung gelöscht
        document.getElementById("starteinstellungen").remove();
    }
    Aufgabe_5.main = main;
    //Für den Kartenpaare Slider
    function onInputEvent(value) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        Aufgabe_5.numPairs = value;
    }
    Aufgabe_5.onInputEvent = onInputEvent;
    //Karten werden hinzugefügt
    function createCardArray(karten) {
        //Kartenpaare werden erzeugt
        for (let i = 0; i < Aufgabe_5.numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }
    }
    //Für Auswahl des Kartensatzes, damit sich die Länge anpasst
    function radioCardClick(element) {
        currentCardDeck = Aufgabe_5.decks[element.value];
        repopulateCardForm();
    }
    Aufgabe_5.radioCardClick = radioCardClick;
    //SliderAnzahl
    function repopulateCardForm() {
        let kartenPaareElement = document.getElementById("kartenpaare");
        kartenPaareElement.max = currentCardDeck.content.length.toString();
        let maxWert = currentCardDeck.content.length;
        let momentanerWert = parseInt(kartenPaareElement.value);
        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString();
        }
        //Update des HTML Zahländerung neben Slider
        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value;
    }
    //Spieleranzahl und Spielername
    function radioSpielerClick(element) {
        let spielerZahl = parseInt(element.value);
        for (let i = 1; i <= 4; i++) {
            //`player${i}`: Innerhalb eines String wird Javascripts aufgerufen, zur Bearbeitung  
            let inputElement = document.getElementById(`player${i}`);
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
    Aufgabe_5.radioSpielerClick = radioSpielerClick;
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=Aufgabe5.js.map