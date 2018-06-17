namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let width: number = canvas.width;
        let height: number = canvas.height;

        
        
        
        
        drawWater();

        drawsand(height - 200);

        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish2(x, y);
        }
        for (let i: number = 0; i < 1; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish1(x, y);
        }

        drawPlant(10, 1300);

        drawBubbles(50, 600, 50, 600, 5);

        drawPlant1(120, 1360);
        
        drawPlant1(700, 1360);
        
        drawBubbles(600, 600, 200, 600, 30);

        drawBubbles(600, 150, 200, 600, 15);

        drawPlant(900, 1300);

        drawPlant1(800, 1450);

        for (let i: number = 0; i < 3; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish1(x, y);
        }
        for (let i: number = 0; i < 30; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish2(x, y);
        }
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish3(x, y);
        }




        function drawsand(_y: number) {

            crc2.beginPath();
            crc2.fillStyle = "rgb(139, 115, 085)";
            crc2.moveTo(0, height);
            crc2.lineTo(0, _y);
            for (let i: number = 0; i < width; i++) {
                crc2.lineTo(i, 30 * Math.sin(i * .005) + _y);
            }
            crc2.lineTo(width, height);
            crc2.lineTo(100, height);
            crc2.fill();

            crc2.closePath();
        }




        function drawWater(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 1000);
            gradient.addColorStop(0, "rgb(99,184,255)");
            gradient.addColorStop(1, "rgb(58,95,205)");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }







        function drawBubbles(_x: number, _y: number, _w: number, _h: number, _a: number): void {

            for (let i: number = 0; i < _a; i++) {
                let width: number = Math.random() * _w;
                let height: number = Math.random() * _h;
                let scale: number = Math.random() * 20;

                crc2.beginPath();
                crc2.arc(_x + width, _y + height, scale, 0, 30 * Math.PI);
                
                crc2.fillStyle = "#ededed";
                crc2.stroke();
                crc2.fill();
            }
        }




        function drawFish1(_x: number, _y: number): void {


            crc2.beginPath();
            crc2.fillStyle = "rgb(43,58,68)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 50, _y - 100, _x + 200, _y);
            crc2.lineTo(_x + 300, _y + 50);
            crc2.lineTo(_x + 300, _y - 50);
            crc2.lineTo(_x + 250, _y);
            crc2.quadraticCurveTo(_x + 50, _y + 100, _x, _y);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }

        function drawFish2(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.fillStyle = "rgb(192,202,29)";
            crc2.moveTo(_x, _y);
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 5, _y - 10, _x + 20, _y);
            crc2.lineTo(_x + 30, _y + 5);
            crc2.lineTo(_x + 30, _y - 5);
            crc2.lineTo(_x + 25, _y);
            crc2.quadraticCurveTo(_x + 5, _y + 10, _x, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }

        function drawFish3(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.fillStyle = "rgb(92,22,29)";
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 20, _y - 60, _x + 80, _y);
            crc2.lineTo(_x + 120, _y + 60);
            crc2.lineTo(_x + 120, _y - 20);
            crc2.lineTo(_x + 100, _y);
            crc2.quadraticCurveTo(_x + 60, _y + 80, _x, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

        }






        function drawPlant1(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,139,69)";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 130);
            crc2.lineTo(_x + 40, _y - 20);
            crc2.lineTo(_x + 40, _y - 20);
            crc2.lineTo(_x + 50, _y - 50);
            crc2.lineTo(_x + 150, _y - 250);
            crc2.lineTo(_x + 100, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        function drawPlant(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,139,69)";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 60, _y - 260);
            crc2.lineTo(_x + 40, _y - 40);
            crc2.lineTo(_x + 40, _y - 400);
            crc2.lineTo(_x + 100, _y - 100);
            crc2.lineTo(_x + 300, _y - 500);
            crc2.lineTo(_x + 200, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }


    }
}
