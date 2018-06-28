var Aufgabe11;
(function (Aufgabe11) {
    class Food extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.y += 10;
            if (this.y > 1320) {
                this.y = 1320;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x - 6, this.y);
            Aufgabe11.crc2.lineTo(this.x + 12, this.y + 12);
            Aufgabe11.crc2.lineTo(this.x + 10, this.y - 3);
            Aufgabe11.crc2.lineTo(this.x + 3, this.y + 20);
            Aufgabe11.crc2.lineTo(this.x + -3, this.y + 9);
            Aufgabe11.crc2.lineTo(this.x - 6, this.y + 3);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Food = Food;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Food.js.map