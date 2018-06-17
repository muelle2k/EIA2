namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);


        
        
        drawBackground(200);
        
        
        for (let i: number = 0; i < 3; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish1(x, y);
        }
        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            drawFish2(x, y);
        }
        
    }
    
    
    function drawBackground( _sand: number ): void {

        crc2.fillStyle = "rgb(80,49, 237)";
        crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );
        

        crc2.fillStyle = "rgb(189,183,07)";
        crc2.fillRect( 0, crc2.canvas.height - _sand, crc2.canvas.width, crc2.canvas.height+100 );
    }

    
    function drawFish1(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.fillStyle = "rgb(192,192,192)";
        crc2.moveTo(_x + 30, _y -30);
        crc2.bezierCurveTo(_x + 500, _y, _x + 120, _y + 80, _x + 10, _y + 60);
        crc2.moveTo(_x + 10, _y + 60);
        crc2.lineTo(_x - 27.5, _y + 20); // x-Koordinate die länge des Fisches
        crc2.lineTo(_x - 32.5, _y + 15); // x-Koordinate die länge des Fisches
        crc2.lineTo(_x - 100, _y - 70);
        crc2.lineTo(_x - 100, _y + 100);
        crc2.lineTo(_x + 30, _y - 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }

    function drawFish2(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.fillStyle = "rgb(92,22,29)";
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 50, _y, _x + 30, _y + 40, _x - 10, _y + 40);
        crc2.moveTo(_x - 10, _y + 40);
        crc2.lineTo(_x - 27.5, _y + 20); // x-Koordinate die länge des Fisches
        crc2.lineTo(_x - 32.5, _y + 15); // x-Koordinate die länge des Fisches
        crc2.lineTo(_x - 50, _y);
        crc2.lineTo(_x - 50, _y + 35);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }

}