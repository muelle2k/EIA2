
namespace memorySpiel {


    //Karten
    let cardInfo: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardList: string[] = [];
    
    //Spieler
    let playerList: number[] = [];
    let players: number[] = [1, 2, 3, 4];
    
    let numPair: number;
    let numPlayer: number;





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

    console.log(output);




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

            childNodeHTML = "<div class='";
            childNodeHTML += randomStatus();
            childNodeHTML += "'id='Karte" + i + "'>";
            childNodeHTML += "<p class='info'>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";

            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length)
            let content: string = cardList[random];

            let removed = cardList.splice(random, 1);
            console.log(cardList);

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


            console.log("HTML-text" + childNodeHTML);

            node.innerHTML += childNodeHTML;

            let inhaltPlayer: number = players[output];

            console.log(players);

            i++;

        }
    }
    
    
    
    //Status der Karten
    function randomStatus() {
        let randomStatus = Math.random();
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