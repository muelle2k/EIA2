var Aufgabe10;
(function (Aufgabe10) {
    class bigFish {
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
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(43,58,68)";
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 50, this.y - 100, this.x + 200, this.y);
            Aufgabe10.crc2.lineTo(this.x + 300, this.y + 50);
            Aufgabe10.crc2.lineTo(this.x + 300, this.y - 50);
            Aufgabe10.crc2.lineTo(this.x + 250, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 50, this.y + 100, this.x, this.y);
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.bigFish = bigFish;
    class coolFish {
        move() {
            if (this.x < -300) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (800 - 0)) + 0;
            }
            this.x += -30;
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(192,202,29)";
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 5, this.y - 10, this.x + 20, this.y);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y - 5);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 5, this.y + 10, this.x, this.y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.coolFish = coolFish;
    class smallFish {
        move() {
            if (this.x < -350) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (500 - 0)) + 0;
            }
            this.x += -35;
            this.y += Math.random() * 3 - 2;
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(255,114,86)";
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 5, this.y - 10, this.x + 20, this.y);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y + 5);
            Aufgabe10.crc2.lineTo(this.x + 30, this.y - 5);
            Aufgabe10.crc2.lineTo(this.x + 25, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 5, this.y + 10, this.x, this.y);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.smallFish = smallFish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Fish.js.map