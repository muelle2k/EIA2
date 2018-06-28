var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let imgData;
    let fishes1 = [];
    let fishes2 = [];
    let fishes = [];
    let nfish = 10;
    let nsfish = 30;
    let bubbleArray = [];
    let b = 30;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        let width = canvas.width;
        let height = canvas.height;
        let hintergrund = new Aufgabe11.Background();
        hintergrund.paint();
        imgData = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas al Bild gespeichert
        console.log(imgData);
        for (let i = 0; i < nfish; i++) {
            let fish = new Aufgabe11.bigFish();
            fish.x = Math.random() * Aufgabe11.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe11.crc2.canvas.height;
            fishes.push(fish);
        }
        for (let i = 0; i < nsfish; i++) {
            let fish = new Aufgabe11.smallFish();
            fish.x = Math.random() * Aufgabe11.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe11.crc2.canvas.height;
            fishes1.push(fish);
        }
        for (let i = 0; i < nsfish; i++) {
            let fish = new Aufgabe11.coolFish();
            fish.x = Math.random() * Aufgabe11.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe11.crc2.canvas.height;
            fishes2.push(fish);
        }
        for (let i = 0; i < b - 2; i++) {
            let blubb = new Aufgabe11.Bubble();
            blubb.x = Math.random() * (1000 - 700) + 0;
            blubb.y = Math.random() * 180;
            blubb.r = Math.random() * 10;
            bubbleArray.push(blubb);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 75);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
        for (let i = 0; i < fishes1.length; i++) {
            fishes1[i].move();
        }
        for (let i = 0; i < fishes2.length; i++) {
            fishes2[i].move();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].draw();
        }
        for (let i = 0; i < fishes1.length; i++) {
            fishes1[i].draw();
        }
        for (let i = 0; i < fishes2.length; i++) {
            fishes2[i].draw();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Animation.js.map