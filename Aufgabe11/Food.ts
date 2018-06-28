namespace Aufgabe11 {
    export class Food extends MovingObjects {
        r: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        move(): void {
            this.y += 10;

            if (this.y > 1320) {
                this.y = 1320;
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x - 6, this.y);
            crc2.lineTo(this.x + 12, this.y + 12);
            crc2.lineTo(this.x + 10, this.y - 3);
            crc2.lineTo(this.x + 3, this.y + 20);
            crc2.lineTo(this.x + - 3, this.y + 9);
            crc2.lineTo(this.x - 6, this.y + 3);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
        }

    }
}