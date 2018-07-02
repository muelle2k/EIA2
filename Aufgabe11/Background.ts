namespace Aufgabe11 {
    
    export class Background {

        public paint(): void {
            this.drawWater();
            this.drawsand(crc2.canvas.height - 200);
            this.drawPlant(10, 1300);
            this.drawPlant1(120, 1360);
            this.drawPlant1(700, 1360);
            this.drawPlant(900, 1300);
            this.drawPlant1(800, 1450);

        }

        drawsand(_y: number): void {

            crc2.beginPath();
            crc2.fillStyle = "rgb(139, 115, 085)";
            crc2.moveTo(0, crc2.canvas.height);
            crc2.lineTo(0, _y);
            for (let i: number = 0; i < crc2.canvas.width; i++) {
                crc2.lineTo(i, 30 * Math.sin(i * .005) + _y);
            }
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(100, crc2.canvas.height);
            crc2.fill();
            crc2.closePath();
        }


        drawWater(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 1000);
            gradient.addColorStop(0, "rgb(99,184,255)");
            gradient.addColorStop(1, "rgb(58,95,205)");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        drawPlant1(_x: number, _y: number): void {
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

        drawPlant(_x: number, _y: number): void {
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





