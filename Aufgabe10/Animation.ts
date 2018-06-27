namespace L10_Animation {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    let fishes1: smallFish[] = [];
    let fishes2: coolFish[] = [];
    let fishes: bigFish[] = [];
    let nfish: number = 10;
    let nsfish: number = 30;

    let bubbleArray: bubbles[] = [];
    let b: number = 30;




    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let width: number = canvas.width;
        let height: number = canvas.height;

        let hintergrund: background = new background();
        hintergrund.paint();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas al Bild gespeichert
        console.log(imgData);


        for (let i: number = 0; i < nfish; i++) {
            let fish: bigFish = new bigFish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishes.push(fish);
        }

        for (let i: number = 0; i < nsfish; i++) {
            let fish: smallFish = new smallFish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishes1.push(fish);
        }

        for (let i: number = 0; i < nsfish; i++) {
            let fish: coolFish = new coolFish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishes2.push(fish);
        }

       /* for (let i: number = 0; i < b; i++) {
            let blubb: bubbles = new bubbles();
            blubb.x = Math.random() * crc2.canvas.width;
            blubb.y = Math.random() * crc2.canvas.height;
            bubbleArray.push(blubb);
        }
        for (let i: number = 0; i < 20; i++) {
            let blubb: bubbles = new bubbles();
            blubb.x = 1000;
            blubb.y = Math.floor(Math.random() * (500 - 0)) + 0;
            blubb.radius = Math.random() * 10;
            bubbleArray.push(blubb);
        }
        
        
*/      for (let i: number = 0; i < b - 2; i++) {
            let blubb: bubbles = new bubbles();
            blubb.x = Math.random() * (1000 - 700) + 0;
            blubb.y = Math.random() * 180;
            blubb.r = Math.random() * 10;
            bubbleArray.push(blubb);
        }


        animate();

    }

    function animate(): void {

        window.setTimeout(animate, 75);

        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();

    }

    function moveObjects(): void {

        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
        for (let i: number = 0; i < fishes1.length; i++) {
            fishes1[i].move();
        }
        for (let i: number = 0; i < fishes2.length; i++) {
            fishes2[i].move();
        }
        for (let i: number = 0; i < bubbleArray.length; i++) {
              bubbleArray[i].move();
          }
    }

    function drawObjects(): void {

        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].draw();
        }
        for (let i: number = 0; i < fishes1.length; i++) {
            fishes1[i].draw();
        }
        for (let i: number = 0; i < fishes2.length; i++) {
            fishes2[i].draw();
        }
        for (let i: number = 0; i < bubbleArray.length; i++) {
             bubbleArray[i].draw();
         }


    }
}