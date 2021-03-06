namespace Aufgabe11 {

 export class SmallFish extends MovingObjects {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        move(): void {
            if (this.x < -350) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (500 - 0)) + 0;

            }
            this.x += -35;
            this.y += Math.random() * 3 - 2;
        }

        draw(): void {           //Methoden Fähigkeiten

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 5, this.y - 10, this.x + 20, this.y);
            crc2.lineTo(this.x + 30, this.y + 5);
            crc2.lineTo(this.x + 30, this.y - 5);
            crc2.lineTo(this.x + 25, this.y);
            crc2.quadraticCurveTo(this.x + 5, this.y + 10, this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }
}
