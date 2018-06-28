var Aufgabe11;
(function (Aufgabe11) {
    class Bubble extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.y += -15;
            if (this.y < 0) {
                this.y = 1200;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Bubble = Bubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Bubble.js.map