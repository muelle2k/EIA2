function Greeter(): void {
    var put: string = prompt("Ich kenne dich doch! Wie heisst du nochmal? ", "");
    if (put != null) {
        document.getElementById("Eingabefeld").innerHTML =
            "Ach ja! Stimmt! " + put + " war dein Name.";
    }
}
