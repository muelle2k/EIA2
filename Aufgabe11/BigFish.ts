namespace Aufgabe11 {
    export class BigFish extends MovingObjects {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        move(): void {
            if (this.x < -300) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (800 - 0)) + 0;

            }
            this.x += -10;
            this.y += Math.random() * 4 - 2;
        }

        draw(): void {           //Methoden FÃ¤higkeiten

            console.log(this.x, this.y);
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 50, this.y - 100, this.x + 200, this.y);
            crc2.lineTo(this.x + 300, this.y + 50);
            crc2.lineTo(this.x + 300, this.y - 50);
            crc2.lineTo(this.x + 250, this.y);
            crc2.quadraticCurveTo(this.x + 50, this.y + 100, this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }
}