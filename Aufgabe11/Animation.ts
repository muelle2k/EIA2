/*
Aufgabe 11: Inheritance-Seaworld
Name: Patrick Müller-Klug
Matrikel: 257836
Datum: 28.06.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let objects: MovingObjects[] = [];
    let nfish: number = 10;
    let nsfish: number = 30;
    let b: number = 30;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let width: number = canvas.width;
        let height: number = canvas.height;

        let hintergrund: Background = new Background();
        hintergrund.paint();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas al Bild gespeichert
        console.log(imgData);

        canvas.addEventListener("click", insertNewObject);
        canvas.addEventListener("touchstart", insertNewObject);

        for (let i: number = 0; i < nfish; i++) {
            let fish: bigFish = new bigFish(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "rgb(43,58,68)");
            //fish.x = Math.random() * crc2.canvas.width;
            //fish.y = Math.random() * crc2.canvas.height;
            objects.push(fish);
        }

        for (let i: number = 0; i < nsfish; i++) {
            let fish: smallFish = new smallFish(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "rgb(255,114,86)");
            let fish1: coolFish = new coolFish(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "rgb(192,202,29)");
            objects.push(fish);
            objects.push(fish1);
        }

        for (let i: number = 0; i < b - 2; i++) {
            let blubb: Bubble = new Bubble(Math.random() * (1000 - 700) + 0, Math.random() * 180, "rgba(188,210,238,10)");
            blubb.r = Math.random() * 10;
            objects.push(blubb);
        }

        animate();

    }

    function insertNewObject(_event: MouseEvent): void {
        let cx: number = _event.clientX;
        let cy: number = _event.clientY;
        let foodColor: string[] = ["rgba(238,154,73)", "rgba(290,154,73)", "rgba(138,154,73)", "rgba(238,54,233)"]
        let flake: Food = new Food(cx, cy, foodColor[Math.floor(Math.random()* 4)]);
        flake.r = Math.random() * 10;
        objects.push(flake);
    }


    function animate(): void {

        window.setTimeout(animate, 75);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();

    }


    function moveObjects(): void {

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].move();
        }

    }

    function drawObjects(): void {

        for (let i: number = 0; i < objects.length; i++) {
            objects[i].draw();
        }

    }
}