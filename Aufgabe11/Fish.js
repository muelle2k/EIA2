var Aufgabe11;
(function (Aufgabe11) {
    class bigFish extends Aufgabe11.MovingObjects {
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
    Aufgabe11.bigFish = bigFish;
    class coolFish extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            if (this.x < -300) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (800 - 0)) + 0;
            }
            this.x += -30;
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 5, this.y - 10, this.x + 20, this.y);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y - 5);
            Aufgabe11.crc2.lineTo(this.x + 25, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 5, this.y + 10, this.x, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.coolFish = coolFish;
    class smallFish extends Aufgabe11.MovingObjects {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            if (this.x < -350) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (500 - 0)) + 0;
            }
            this.x += -35;
            this.y += Math.random() * 3 - 2;
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 5, this.y - 10, this.x + 20, this.y);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y + 5);
            Aufgabe11.crc2.lineTo(this.x + 30, this.y - 5);
            Aufgabe11.crc2.lineTo(this.x + 25, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 5, this.y + 10, this.x, this.y);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.smallFish = smallFish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Fish.js.map