var Aufgabe10;
(function (Aufgabe10) {
    class Background {
        paint() {
            this.drawWater();
            this.drawsand(Aufgabe10.crc2.canvas.height - 200);
            this.drawPlant(10, 1300);
            this.drawPlant1(120, 1360);
            this.drawPlant1(700, 1360);
            this.drawPlant(900, 1300);
            this.drawPlant1(800, 1450);
        }
        drawsand(_y) {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(139, 115, 085)";
            Aufgabe10.crc2.moveTo(0, Aufgabe10.crc2.canvas.height);
            Aufgabe10.crc2.lineTo(0, _y);
            for (let i = 0; i < Aufgabe10.crc2.canvas.width; i++) {
                Aufgabe10.crc2.lineTo(i, 30 * Math.sin(i * .005) + _y);
            }
            Aufgabe10.crc2.lineTo(Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
            Aufgabe10.crc2.lineTo(100, Aufgabe10.crc2.canvas.height);
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
        }
        drawWater() {
            let gradient = Aufgabe10.crc2.createLinearGradient(0, 0, 0, 1000);
            gradient.addColorStop(0, "rgb(99,184,255)");
            gradient.addColorStop(1, "rgb(58,95,205)");
            Aufgabe10.crc2.fillStyle = gradient;
            Aufgabe10.crc2.fillRect(0, 0, Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
        }
        drawPlant1(_x, _y) {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(0,139,69)";
            Aufgabe10.crc2.moveTo(_x, _y);
            Aufgabe10.crc2.lineTo(_x, _y - 130);
            Aufgabe10.crc2.lineTo(_x + 40, _y - 20);
            Aufgabe10.crc2.lineTo(_x + 40, _y - 20);
            Aufgabe10.crc2.lineTo(_x + 50, _y - 50);
            Aufgabe10.crc2.lineTo(_x + 150, _y - 250);
            Aufgabe10.crc2.lineTo(_x + 100, _y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
        drawPlant(_x, _y) {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(0,139,69)";
            Aufgabe10.crc2.moveTo(_x, _y);
            Aufgabe10.crc2.lineTo(_x - 60, _y - 260);
            Aufgabe10.crc2.lineTo(_x + 40, _y - 40);
            Aufgabe10.crc2.lineTo(_x + 40, _y - 400);
            Aufgabe10.crc2.lineTo(_x + 100, _y - 100);
            Aufgabe10.crc2.lineTo(_x + 300, _y - 500);
            Aufgabe10.crc2.lineTo(_x + 200, _y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Background = Background;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Background.js.map