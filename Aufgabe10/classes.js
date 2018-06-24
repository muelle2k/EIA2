var L10_Animation;
(function (L10_Animation) {
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
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(43,58,68)";
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 50, this.y - 100, this.x + 200, this.y);
            L10_Animation.crc2.lineTo(this.x + 300, this.y + 50);
            L10_Animation.crc2.lineTo(this.x + 300, this.y - 50);
            L10_Animation.crc2.lineTo(this.x + 250, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 50, this.y + 100, this.x, this.y);
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.bigFish = bigFish;
    class coolFish {
        move() {
            if (this.x < -300) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (600 - 0)) + 0;
            }
            this.x += -30;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(192,202,29)";
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 5, this.y - 10, this.x + 20, this.y);
            L10_Animation.crc2.lineTo(this.x + 30, this.y + 5);
            L10_Animation.crc2.lineTo(this.x + 30, this.y - 5);
            L10_Animation.crc2.lineTo(this.x + 25, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 5, this.y + 10, this.x, this.y);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.coolFish = coolFish;
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
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(255,114,86)";
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 5, this.y - 10, this.x + 20, this.y);
            L10_Animation.crc2.lineTo(this.x + 30, this.y + 5);
            L10_Animation.crc2.lineTo(this.x + 30, this.y - 5);
            L10_Animation.crc2.lineTo(this.x + 25, this.y);
            L10_Animation.crc2.quadraticCurveTo(this.x + 5, this.y + 10, this.x, this.y);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.smallFish = smallFish;
    class bubbles {
        constructor() {
            this.w = 100;
            this.h = 1500;
            this.a = 100;
        }
        move() { }
        ;
        draw() {
            for (let i = 0; i < this.a; i++) {
                let width = Math.random() * this.w;
                let height = Math.random() * this.h;
                let scale = Math.random() * 20;
                L10_Animation.crc2.beginPath();
                L10_Animation.crc2.arc(600 + width, 150 + height, scale, 0, 30 * Math.PI);
                L10_Animation.crc2.fillStyle = "rgba(188,210,238,10)";
                L10_Animation.crc2.stroke();
                L10_Animation.crc2.fill();
            }
        }
    }
    L10_Animation.bubbles = bubbles;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=classes.js.map