namespace memorySpiel {


    //Karten
    let cardInfo: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardList: string[] = [];

    //Spieler
    let playerList: number[] = [];
    let players: number[] = [1, 2, 3, 4];

    let numPair: number;
    let numPlayer: number;

    //memory
    let cardId: HTMLElement[] = [];
    let flippedCards: number = 0;




    //Eingabe Kartenpaare
    function inputPairs(): number {

        let pairs: string = prompt("Wie viele Kartenpaare?  Hinweis: Bis 26 Kartenpaare möglich")
        let sumPair: number = parseInt(pairs);
        if (sumPair >= 1 && sumPair <= 26) {
            return sumPair;
        }
        else {
            alert("Deine Zahl liet nicht zwischen 1 und 26");
            return inputPairs();
        }

    }

    let menge: number = inputPairs();

    console.log(menge)





    //Eingabe Spieler
    function inputPlayers(): number {

        let spielerAnzahl: string = prompt("Wie viele spielen mit? 1 bis 4 Spieler möglich")
        let sumPlayer: number = parseInt(spielerAnzahl)
        if (sumPlayer >= 1 && sumPlayer <= 4) {
            return sumPlayer;
        }
        else {
            alert("Deine Spieleranzahl liegt nicht zwischen 1 und 4");


            console.log("inputPlayers")
            return inputPlayers();
        }

    }

    let output: number = inputPlayers();

    console.log("inputPlayers:" + output);




    //Mischfunktion
    function shuffleArray(x: number): void {

        for (let i: number = 1; i <= x; i++) {


            let content: string = cardInfo[0];
            cardList.push(content);
            cardList.push(content);

            let removed = cardInfo.splice(0, 1);

        }
        console.log("Content CardList", cardList);


    }

    function showPlayers(x: number): void {

        for (let i: number = 0; i <= x; i++) {

            let inhalt: number = players[0];
            playerList.push(inhalt);

            let removed = players.splice(0, 1);


            console.log("showPlayers");

        }

    }

    console.log("Content playerList", playerList);
    console.log("Länge Infolist", cardInfo.length);
    console.log("Content Infolist", cardInfo);







    //Karten generieren
    function generateCards(y: number): void {
        let node: any = document.getElementById("memoryBoard");
        let childNodeHTML: string;
        let i: number = 0;


        while (i < (y * 2)) {
            let min: number = 0;
            let max: number = (cardList.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            let random: number = Math.floor(Math.random() * (max - min)) + min;
            let classCardsRandom: number = Math.floor(Math.random() * (3 - 0)) + 0;
            console.log("Card:" + i);
            console.log(random);

            childNodeHTML = "<div class='card'>";
            childNodeHTML += "<div class='hidden";
            //childNodeHTML += randomStatus();
            childNodeHTML += "'id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            childNodeHTML += " </div> ";

            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach generateCards: " + cardList.length)
            //let content: string = cardList[random];
            // cardList.push(content)
            console.log("cardList:" + cardList);

            let removed = cardInfo.splice(random, 1);

            console.log("cardInfo:" + cardInfo);

            i++;
        }
    }



    //Spieler generieren
    function generatePlayers(x: number): void {

        let node: any = document.getElementById("footer");

        let childNodeHTML: string;

        let i: number = 0;

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

            let inhaltPlayer: number = players[output];

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


    function init(_event: Event): void {
        console.log(_event);
        let div = document.getElementsByClassName("card");
        for (let i: number = 0; i < div.length; i++) {

            div[i].addEventListener("click", clickCard);
        }
    }

    function clickCard(_event: Event): void {

        console.log(_event.target);
        let x: HTMLElement = <HTMLElement>_event.target; //hiermit greife ich auf die classes 
        /* console.log(x.innerHTML); //x.className
         x.className = "visible";  //damit veränder ich die class Names 
        */

        if (flippedCards < 2) {
            flippedCards++;
            if (flippedCards == 1) {
                if (x.className = "hidden") {
                    x.classList.remove("hidden");
                    x.classList.add("visible");
                }
            } else if (flippedCards == 2) {
                if (x.className = "hidden") {
                    x.classList.remove("hidden");
                    x.classList.add("visible");
                }
                setTimeout(compareCards, 2000);

                function compareCards() {
                    let card1: HTMLElement = <HTMLElement>document.getElementsByClassName("visible")[0];
                    let card2: HTMLElement = <HTMLElement>document.getElementsByClassName("visible")[1];

                    console.log("cardList.length:" + cardList.length);

                    console.log("cardId:" + cardId);

                    console.log("card1:" + card1)
                    console.log("card2:" + card2)

                    if (card1.innerHTML == card2.innerHTML) {
                        if (card1.className = "visible") {
                            card1.classList.remove("visible");
                            card1.classList.add("taken");
                            console.log("taken1");
                        }
                        if (card2.className = "visible") {
                            card2.classList.remove("visible");
                            card2.classList.add("taken");
                            console.log("taken2");
                        }
                        cardId.push(card1);
                        cardId.push(card2);
                        cardId.push(card1);
                        cardId.push(card2);

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

                    } flippedCards = 0;
                } if (cardId.length == cardList.length) {
                    alert("Du hast es geschafft. Gratulation!");
                }
            }

        }
    }




    // Hauptprogramm
    function main(): void {

        shuffleArray(menge);
        showPlayers(output);

        console.log("main");

        // Content erzeugen
        generateCards(menge);
        generatePlayers(output);

    }





    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
}


