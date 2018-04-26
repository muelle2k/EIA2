var memorySpiel;
(function (memorySpiel) {
    //Karten
    var cardInfo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardList = [];
    var cardList1 = [];
    //Spieler
    var playerList = [];
    var players = [1, 2, 3, 4];
    var numPair;
    var numPlayer;
    //memory
    var cardId = [];
    var flippedCards = 0;
    var takenCards = 0;
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
    console.log("inputPlayers:" + output);
    //Mischfunktion
    function shuffleArray(x) {
        for (var i = 1; i <= x; i++) {
            var content = cardInfo[0];
            cardList.push(content);
            cardList.push(content);
            cardList1.push(content);
            cardList1.push(content);
            var removed = cardInfo.splice(0, 1);
        }
        console.log("Content CardList:" + cardList);
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
            var max = cardList.length;
            var random = Math.floor(Math.random() * (max - min) + min); // Hier es kommen manche BUchstaben doppelt
            console.log("Card:" + i);
            console.log("random:" + random);
            childNodeHTML = "<div class='card'>";
            childNodeHTML += "<div class='hidden'";
            //childNodeHTML += randomStatus();
            childNodeHTML += "id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            console.log("cardList[random]:" + cardList[random]);
            childNodeHTML += "</p>";
            childNodeHTML += "</div>";
            childNodeHTML += "</div>";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach generateCards: " + cardList.length);
            //let content: string = cardList[random];
            //cardList.push(content)
            console.log("cardList:" + cardList);
            var removed = cardList.splice(random, 1);
            console.log("cardInfo:" + cardInfo);
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
            node.innerHTML += childNodeHTML;
            var inhaltPlayer = players[output];
            console.log("inhaltPlayers:" + players);
            i++;
        }
    }
    //Status der Karten
    /*  function randomStatus() {
          let randomStatus = Math.random();
          if (randomStatus <= .25) {
              return "hidden";
          }
          else if (randomStatus > .25 && randomStatus <= .75) {
              return "hidden";
          }
          else if (randomStatus > .75) {
              return "visible";
          }
      }
  
  */
    window.addEventListener("load", init);
    function init(_event) {
        console.log(_event);
        var div = document.getElementsByClassName("card");
        for (var i = 0; i < div.length; i++) {
            div[i].addEventListener("click", clickCard);
        }
    }
    function clickCard(_event) {
        console.log(_event.target);
        var x = _event.target; //hiermit greife ich auf die classes 
        if (x.classList.contains("hidden")) {
            x.classList.remove("hidden");
            x.classList.add("visible");
            flippedCards++;
            if (flippedCards == 2) {
                setTimeout(compareCards, 2000);
            }
            if (flippedCards > 2) {
                x.classList.remove("visible");
                x.classList.add("hidden");
            }
        }
    }
    /* if (x.className = "card") {
        flippedCards++;
        if (x.className = "hidden") {
            x.classList.remove("hidden");
            x.classList.add("visible");
        }
    }
    if (flippedCards == 2) {
        setTimeout(compareCards, 2000);
    }
    if (flippedCards > 2) {
        x.classList.remove("visible");
        x.classList.add("hidden");
    }*/
    /* console.log(x.innerHTML); //x.className
     x.className = "visible";  //damit veränder ich die class Names
    */
    /*if (flippedCards < 2) {
        flippedCards++;
        if (flippedCards == 1) {
            if (x.className = "hidden") {
                x.classList.remove("hidden");
                x.classList.add("visible");
            }
        }
        else if (flippedCards == 2) {
            if (x.className = "hidden") {
                x.classList.remove("hidden");
                x.classList.add("visible");
            }
            setTimeout(compareCards, 2000);
        }
    }
    }*/
    //Karten werden verglichen
    function compareCards() {
        var card1 = document.getElementsByClassName("visible")[0];
        var card2 = document.getElementsByClassName("visible")[1];
        console.log("cardList.length:" + cardList.length);
        console.log("cardId:" + cardId);
        console.log("card1:" + card1);
        console.log("card2:" + card2);
        if (card1.innerHTML == card2.innerHTML) {
            if (card1.className = "visible") {
                card1.classList.remove("visible");
                card1.classList.add("taken");
                console.log("taken1");
            }
            if (card2.className = "visible") {
                card2.classList.remove("visible");
                card2.classList.add("taken");
                takenCards++;
                console.log("taken2");
            }
            takenCards++;
            console.log("takenCards ANZAHL:" + takenCards);
        }
        else {
            if (card1.className = "visible") {
                card1.classList.remove("visible");
                card1.classList.add("hidden");
                console.log("hidden1");
            }
            if (card2.className = "visible") {
                card2.classList.remove("visible");
                card2.classList.add("hidden");
                console.log("hidden2");
            }
        }
        console.log("flippedCards:" + flippedCards);
        flippedCards = 0;
        if (takenCards == cardList1.length) {
            alert("Gratuliere Dir! Du hast es echt geschafft.");
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