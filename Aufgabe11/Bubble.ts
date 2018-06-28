namespace Aufgabe11 {
    export class Bubble extends MovingObjects {
        r: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        move(): void {
            this.y += -15;

            if (this.y < 0) {
                this.y = 1200;
            }
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }


}