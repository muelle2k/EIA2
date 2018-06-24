namespace L10_Animation {

    export class bigFish {
        color: string;          //Attribute Eigenschaften
        x: number;
        y: number;


        move(): void {
            if (this.x < -300) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (800 - 0)) + 0;

            }
            this.x += -10;
            this.y += Math.random() * 4 - 2;
        }

        draw(): void {           //Methoden Fähigkeiten

            console.log(this.x, this.y);
            crc2.beginPath();
            crc2.fillStyle = "rgb(43,58,68)";
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 50, this.y - 100, this.x + 200, this.y);
            crc2.lineTo(this.x + 300, this.y + 50);
            crc2.lineTo(this.x + 300, this.y - 50);
            crc2.lineTo(this.x + 250, this.y);
            crc2.quadraticCurveTo(this.x + 50, this.y + 100, this.x, this.y);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

    }


    export class coolFish {
        color: string;          //Attribute Eigenschaften
        x: number;
        y: number;


        move(): void {
            if (this.x < -300) {
                this.x = 1400;
                this.y = Math.floor(Math.random() * (600 - 0)) + 0;

            }
            this.x += -30;
            this.y += Math.random() * 4 - 2;
        }

        draw(): void {           //Methoden Fähigkeiten

            crc2.beginPath();
            crc2.fillStyle = "rgb(192,202,29)";
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

    export class smallFish {
        color: string;          //Attribute Eigenschaften
        x: number;
        y: number;


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
            crc2.fillStyle = "rgb(255,114,86)";
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


    export class bubbles {
        x: number;
        y: number;
        w: number = 100;
        h: number = 1500;
        a: number = 100;

        move(): void { };

        draw(): void {
            for (let i: number = 0; i < this.a; i++) {
                let width: number = Math.random() * this.w;
                let height: number = Math.random() * this.h;
                let scale: number = Math.random() * 20;

                crc2.beginPath();
                crc2.arc(600 + width, 150 + height, scale, 0, 30 * Math.PI);

                crc2.fillStyle = "rgba(188,210,238,10)";
                crc2.stroke();
                crc2.fill();

            }

        }
    }
}












