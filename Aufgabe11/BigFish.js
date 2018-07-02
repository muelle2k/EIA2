var Aufgabe11;
(function (Aufgabe11) {
    class BigFish extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            if (this.x < -300) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (800 - 0)) + 0;
            }
            this.x += -10;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            console.log(this.x, this.y);
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 50, this.y - 100, this.x + 200, this.y);
            Aufgabe11.crc2.lineTo(this.x + 300, this.y + 50);
            Aufgabe11.crc2.lineTo(this.x + 300, this.y - 50);
            Aufgabe11.crc2.lineTo(this.x + 250, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 50, this.y + 100, this.x, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.BigFish = BigFish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BigFish.js.map