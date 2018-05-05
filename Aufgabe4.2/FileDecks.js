var Aufgabe_5;
(function (Aufgabe_5) {
    Aufgabe_5.decks = {}; //Objekt
    function createDecks() {
        Aufgabe_5.decks["animals"] = {
            name: "animals",
            content: ["Hase", "Koala", "Panda", "Affe", "Tiger", "Löwe", "Zebra", "Adler", "Hai", "Aal"],
            color: "#094a21",
            font: "Limelight",
            size: 20,
            textColor: "white"
        };
        Aufgabe_5.decks["buchstaben"] = {
            name: "buchstaben",
            content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            color: "red",
            font: "Times New Roman",
            size: 30,
            textColor: "white"
        };
        Aufgabe_5.decks["zahlen"] = {
            name: "zahlen",
            content: ["100", "110", "011", "001", "010", "101", "111", "000"],
            color: "blue",
            font: "Arial",
            size: 20,
            textColor: "white"
        };
    }
    Aufgabe_5.createDecks = createDecks;
})(Aufgabe_5 || (Aufgabe_5 = {}));
//# sourceMappingURL=FileDecks.js.map