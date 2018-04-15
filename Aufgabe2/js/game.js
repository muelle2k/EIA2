var memorySpiel;
(function (memorySpiel) {
    var cardInfo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardList = [];
    var classCards = ["taken", "visible", "hidden"];
    var playerList = [];
    var players = [1, 2, 3, 4];
    function inputPairs() {
        var pairs = prompt("Wie viele Kartenpaare?  Hinweis: Bis 26 Kartenpaare möglich");
        var sumPair = parseInt(pairs);
        console.log("inputPairs");
        return sumPair;
    }
    var menge = inputPairs();
    console.log(menge);
    function inputPlayers() {
        var spielerAnzahl = prompt("Wie viele spielen mit? 1 bis 4 Spieler möglich");
        var sumPlayer = parseInt(spielerAnzahl);
        console.log("inputPlayers");
        return sumPlayer;
    }
    var output = inputPlayers();
    console.log(output);
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
            var classCardsRandom = Math.floor(Math.random() * (2 - 0)) + 0;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div class='";
            childNodeHTML += classCards[classCardsRandom];
            console.log(classCards[classCardsRandom]);
            childNodeHTML += "' id='Karte" + i + "'>";
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