var L10_Animation;
(function (L10_Animation) {
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
        L10_Animation.crc2 = canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        let width = canvas.width;
        let height = canvas.height;
        let hintergrund = new L10_Animation.background();
        hintergrund.paint();
        imgData = L10_Animation.crc2.getImageData(0, 0, canvas.width, canvas.height); //Canvas al Bild gespeichert
        console.log(imgData);
        for (let i = 0; i < nfish; i++) {
            let fish = new L10_Animation.bigFish();
            fish.x = Math.random() * L10_Animation.crc2.canvas.width;
            fish.y = Math.random() * L10_Animation.crc2.canvas.height;
            fishes.push(fish);
        }
        for (let i = 0; i < nsfish; i++) {
            let fish = new L10_Animation.smallFish();
            fish.x = Math.random() * L10_Animation.crc2.canvas.width;
            fish.y = Math.random() * L10_Animation.crc2.canvas.height;
            fishes1.push(fish);
        }
        for (let i = 0; i < nsfish; i++) {
            let fish = new L10_Animation.coolFish();
            fish.x = Math.random() * L10_Animation.crc2.canvas.width;
            fish.y = Math.random() * L10_Animation.crc2.canvas.height;
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
         
         
 */ for (let i = 0; i < b - 2; i++) {
            let blubb = new L10_Animation.bubbles();
            blubb.x = Math.random() * (1000 - 700) + 0;
            blubb.y = Math.random() * 180;
            blubb.r = Math.random() * 10;
            bubbleArray.push(blubb);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 75);
        L10_Animation.crc2.putImageData(imgData, 0, 0);
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
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Animation.js.map