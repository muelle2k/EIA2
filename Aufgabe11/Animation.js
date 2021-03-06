/*
Aufgabe 11: Inheritance-Seaworld
Name: Patrick Müller-Klug
Matrikel: 257836
Datum: 28.06.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let imgData;
    let objects = [];
    let nfish = 10;
    let nsfish = 30;
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
        canvas.addEventListener("click", insertNewObject);
        canvas.addEventListener("touchstart", insertNewObject);
        for (let i = 0; i < nfish; i++) {
            let fish = new Aufgabe11.BigFish(Math.random() * Aufgabe11.crc2.canvas.width, Math.random() * Aufgabe11.crc2.canvas.height, "rgb(43,58,68)");
            //fish.x = Math.random() * crc2.canvas.width;
            //fish.y = Math.random() * crc2.canvas.height;
            objects.push(fish);
        }
        for (let i = 0; i < nsfish; i++) {
            let fish = new Aufgabe11.SmallFish(Math.random() * Aufgabe11.crc2.canvas.width, Math.random() * Aufgabe11.crc2.canvas.height, "rgb(255,114,86)");
            let fish1 = new Aufgabe11.CoolFish(Math.random() * Aufgabe11.crc2.canvas.width, Math.random() * Aufgabe11.crc2.canvas.height, "rgb(192,202,29)");
            objects.push(fish);
            objects.push(fish1);
        }
        for (let i = 0; i < b - 2; i++) {
            let blubb = new Aufgabe11.Bubble(Math.random() * (1000 - 700) + 0, Math.random() * 180, "rgba(188,210,238,10)");
            blubb.r = Math.random() * 10;
            objects.push(blubb);
        }
        animate();
    }
    function insertNewObject(_event) {
        let cx = _event.pageX;
        let cy = _event.pageY;
        let foodColor = ["rgba(238,154,73)", "rgba(290,154,73)", "rgba(138,154,73)", "rgba(238,54,233)"];
        for (let i = 0; i < 4; i++) {
            let flake = new Aufgabe11.Food(cx, cy, foodColor[Math.floor(Math.random() * 4)]);
            flake.r = Math.random() * 10;
            if (i == 2) {
                flake.x = cx;
                flake.y = cy;
                objects.push(flake);
            }
            else {
                flake.x = cx + Math.random() * 50 - 2;
                flake.y = cy + Math.random() * 20 - 50;
                objects.push(flake);
            }
            objects.push(flake);
        }
    }
    function animate() {
        window.setTimeout(animate, 75);
        Aufgabe11.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Animation.js.map