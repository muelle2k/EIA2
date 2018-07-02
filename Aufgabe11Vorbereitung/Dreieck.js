var L11_Inheritance;
(function (L11_Inheritance) {
    class Dreieck extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * L11_Inheritance.crc2.canvas.width;
            this.y = Math.random() * L11_Inheritance.crc2.canvas.height;
        }
        draw() {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.moveTo(this.x, this.y - 30);
            L11_Inheritance.crc2.lineTo(this.x + 30, this.y + 20);
            L11_Inheritance.crc2.lineTo(this.x - 30, this.y + 20);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.fill();
        }
    }
    L11_Inheritance.Dreieck = Dreieck;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Dreieck.js.map