var memorySpiel;
(function (memorySpiel) {
    //Karten
    var cardInfo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardList = [];
    //Spieler
    var playerList = [];
    var players = [1, 2, 3, 4];
    var numPair;
    var numPlayer;
    //Eingabe Kartenpaare
    function inputPairs() {
        var pairs = prompt("Wie viele Kartenpaare?  Hinweis: Bis 26 Kartenpaare möglich");
        var sumPair = parseInt(pairs);
        if (sumPair >= 1 && sumPair <= 26) {
            return sumPair;
        }
        else {
            alert("Deine Zahl liet nicht zwischen 1 und 26");
            return inputPairs();
        }
    }
    var menge = inputPairs();
    console.log(menge);
    //Eingabe Spieler
    function inputPlayers() {
        var spielerAnzahl = prompt("Wie viele spielen mit? 1 bis 4 Spieler möglich");
        var sumPlayer = parseInt(spielerAnzahl);
        if (sumPlayer >= 1 && sumPlayer <= 4) {
            return sumPlayer;
        }
        else {
            alert("Deine Spieleranzahl liegt nicht zwischen 1 und 4");
            console.log("inputPlayers");
            return inputPlayers();
        }
    }
    var output = inputPlayers();
    console.log(output);
    //Mischfunktion
    function shuffleArray(x) {
        for (var i = 1; i <= x; i++) {
            var content = cardInfo[0];
            cardList.push(content);
            cardList.push(content);
            var removed = cardInfo.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    function showPlayers(x) {
        for (var i = 0; i <= x; i++) {
            var inhalt = players[0];
            playerList.push(inhalt);
            var removed = players.splice(0, 1);
            console.log("showPlayers");
        }
    }
    console.log("Content playerList", playerList);
    console.log("Länge Infolist", cardInfo.length);
    console.log("Content Infolist", cardInfo);
    //Karten generieren
    function generateCards(y) {
        var node = document.getElementById("memoryBoard");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            var min = 0;
            var max = (cardList.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            var random = Math.floor(Math.random() * (max - min)) + min;
            var classCardsRandom = Math.floor(Math.random() * (3 - 0)) + 0;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div class='";
            childNodeHTML += randomStatus();
            childNodeHTML += "'id='Karte" + i + "'>";
            childNodeHTML += "<p class='info'>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length);
            var content = cardList[random];
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            i++;
        }
    }
    //Spieler generieren
    function generatePlayers(x) {
        var node = document.getElementById("footer");
        var childNodeHTML;
        var i = 0;
        while (i < (playerList.length - 1)) {
            childNodeHTML = "";
            childNodeHTML += "<div class='player' id='Spieler" + i + "'>";
            childNodeHTML += "<p class='playerInfo'>";
            childNodeHTML += playerList[i];
            childNodeHTML += ".Spieler</p>";
            childNodeHTML += "<p class ='punkte'>";
            childNodeHTML += "Punkte"; //Hier komm dann die Punktenanz
            childNodeHTML += "</div>";
            console.log("HTML-text" + childNodeHTML);
            node.innerHTML += childNodeHTML;
            var inhaltPlayer = players[output];
            console.log(players);
            i++;
        }
    }
    //Status der Karten
    function randomStatus() {
        var randomStatus = Math.random();
        if (randomStatus <= .25) {
            return "taken";
        }
        else if (randomStatus > .25 && randomStatus <= .75) {
            return "hidden";
        }
        else if (randomStatus > .75) {
            return "visible";
        }
    }
    // Hauptprogramm
    function main() {
        shuffleArray(menge);
        showPlayers(output);
        console.log("main");
        // Content erzeugen
        generateCards(menge);
        generatePlayers(output);
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(memorySpiel || (memorySpiel = {}));
//# sourceMappingURL=game.js.map