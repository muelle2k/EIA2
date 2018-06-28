var Aufgabe11;
(function (Aufgabe11) {
    class Background {
        paint() {
            this.drawWater();
            this.drawsand(Aufgabe11.crc2.canvas.height - 200);
            this.drawPlant(10, 1300);
            this.drawPlant1(120, 1360);
            this.drawPlant1(700, 1360);
            this.drawPlant(900, 1300);
            this.drawPlant1(800, 1450);
        }
        drawsand(_y) {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "rgb(139, 115, 085)";
            Aufgabe11.crc2.moveTo(0, Aufgabe11.crc2.canvas.height);
            Aufgabe11.crc2.lineTo(0, _y);
            for (let i = 0; i < Aufgabe11.crc2.canvas.width; i++) {
                Aufgabe11.crc2.lineTo(i, 30 * Math.sin(i * .005) + _y);
            }
            Aufgabe11.crc2.lineTo(Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
            Aufgabe11.crc2.lineTo(100, Aufgabe11.crc2.canvas.height);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
        }
        drawWater() {
            let gradient = Aufgabe11.crc2.createLinearGradient(0, 0, 0, 1000);
            gradient.addColorStop(0, "rgb(99,184,255)");
            gradient.addColorStop(1, "rgb(58,95,205)");
            Aufgabe11.crc2.fillStyle = gradient;
            Aufgabe11.crc2.fillRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
        }
        drawPlant1(_x, _y) {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "rgb(0,139,69)";
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.lineTo(_x, _y - 130);
            Aufgabe11.crc2.lineTo(_x + 40, _y - 20);
            Aufgabe11.crc2.lineTo(_x + 40, _y - 20);
            Aufgabe11.crc2.lineTo(_x + 50, _y - 50);
            Aufgabe11.crc2.lineTo(_x + 150, _y - 250);
            Aufgabe11.crc2.lineTo(_x + 100, _y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
        drawPlant(_x, _y) {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "rgb(0,139,69)";
            Aufgabe11.crc2.moveTo(_x, _y);
            Aufgabe11.crc2.lineTo(_x - 60, _y - 260);
            Aufgabe11.crc2.lineTo(_x + 40, _y - 40);
            Aufgabe11.crc2.lineTo(_x + 40, _y - 400);
            Aufgabe11.crc2.lineTo(_x + 100, _y - 100);
            Aufgabe11.crc2.lineTo(_x + 300, _y - 500);
            Aufgabe11.crc2.lineTo(_x + 200, _y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Background = Background;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Background.js.map