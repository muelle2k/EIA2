var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    let fishes1 = [];
    let fishes2 = [];
    let fishes = [];
    let nfish = 10;
    let nsfish = 30;
    let bubbleArray = [];
    let nbubbles = 1;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        let width = canvas.width;
        let height = canvas.height;
        L10_Animation.crc2.fillStyle = "rgba(255,0,0,0.5)";
        L10_Animation.crc2.fillRect(50, 50, 100, 50);
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
        for (let i = 0; i < nbubbles; i++) {
            let blubb = new L10_Animation.bubbles();
            blubb.x = Math.random() * L10_Animation.crc2.canvas.width;
            blubb.y = Math.random() * L10_Animation.crc2.canvas.height;
            bubbleArray.push(blubb);
        }
        //Hintergrund vor animate  background.draw()
        //let hintergrund: background.draw() irgendwie mit getimagedata
        //getimagedata wird das BIld gespeichert 
        //putimagedata in animatefunktion 
        animate();
    }
    function animate() {
        window.setTimeout(animate, 75);
        L10_Animation.crc2.clearRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
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