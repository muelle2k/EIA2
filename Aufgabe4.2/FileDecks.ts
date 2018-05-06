namespace Aufgabe_5 {
    export interface Deck {

        name: string;
        content: string[];
        color: string;
        font: string;
        size: number;
        textColor: string;
    }

    export interface Decks {
        [deckname: string]: Deck;
    }

    export let decks: Decks = {}  //Objekt
    
    export function createDecks() {

        decks["animals"] = {
            name: "animals",
            content: ["Hase", "Koala", "Panda", "Affe", "Tiger", "Löwe", "Zebra", "Adler", "Hai", "Aal"], //10 Inahlte
            color: "#094a21",
            font: "Limelight",
            size: 20,
            textColor: "white"
        };

        decks["buchstaben"] = {
            name: "buchstaben",
            content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            color: "red",
            font: "Times New Roman",
            size: 30,
            textColor: "white"
        };

        decks["zahlen"] = {
            name: "zahlen",
            content: ["100", "110", "011", "001", "010", "101", "111", "000"], //8 Inhale
            color: "blue",
            font: "Arial",
            size: 20,
            textColor: "white"
        };
        
    }
}
