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
                this.y = Math.floor(Math.random() * (800 - 0)) + 0;
            }
            this.x += -30;
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
        move() {
            this.y += -15;
            if (this.y < 0) {
                this.y = 1200;
            }
        }
        /*
                draw(): void {
        
                    crc2.beginPath();
                    crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
                    crc2.closePath();
                    crc2.strokeStyle = "rgba(188,210,238,100)";
                    crc2.stroke();
        
                }
            }*/
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
            L10_Animation.crc2.fillStyle = "rgba(188,210,238,10)";
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.bubbles = bubbles;
    class background {
        paint() {
            this.drawWater();
            this.drawsand(L10_Animation.crc2.canvas.height - 200);
            this.drawPlant(10, 1300);
            this.drawPlant1(120, 1360);
            this.drawPlant1(700, 1360);
            this.drawPlant(900, 1300);
            this.drawPlant1(800, 1450);
        }
        drawsand(_y) {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(139, 115, 085)";
            L10_Animation.crc2.moveTo(0, L10_Animation.crc2.canvas.height);
            L10_Animation.crc2.lineTo(0, _y);
            for (let i = 0; i < L10_Animation.crc2.canvas.width; i++) {
                L10_Animation.crc2.lineTo(i, 30 * Math.sin(i * .005) + _y);
            }
            L10_Animation.crc2.lineTo(L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
            L10_Animation.crc2.lineTo(100, L10_Animation.crc2.canvas.height);
            L10_Animation.crc2.fill();
            L10_Animation.crc2.closePath();
        }
        drawWater() {
            let gradient = L10_Animation.crc2.createLinearGradient(0, 0, 0, 1000);
            gradient.addColorStop(0, "rgb(99,184,255)");
            gradient.addColorStop(1, "rgb(58,95,205)");
            L10_Animation.crc2.fillStyle = gradient;
            L10_Animation.crc2.fillRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        }
        drawPlant1(_x, _y) {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(0,139,69)";
            L10_Animation.crc2.moveTo(_x, _y);
            L10_Animation.crc2.lineTo(_x, _y - 130);
            L10_Animation.crc2.lineTo(_x + 40, _y - 20);
            L10_Animation.crc2.lineTo(_x + 40, _y - 20);
            L10_Animation.crc2.lineTo(_x + 50, _y - 50);
            L10_Animation.crc2.lineTo(_x + 150, _y - 250);
            L10_Animation.crc2.lineTo(_x + 100, _y);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
        drawPlant(_x, _y) {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(0,139,69)";
            L10_Animation.crc2.moveTo(_x, _y);
            L10_Animation.crc2.lineTo(_x - 60, _y - 260);
            L10_Animation.crc2.lineTo(_x + 40, _y - 40);
            L10_Animation.crc2.lineTo(_x + 40, _y - 400);
            L10_Animation.crc2.lineTo(_x + 100, _y - 100);
            L10_Animation.crc2.lineTo(_x + 300, _y - 500);
            L10_Animation.crc2.lineTo(_x + 200, _y);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.background = background;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=classes.js.map