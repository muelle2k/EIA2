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
                this.y = Math.floor(Math.random() * (800 - 0)) + 0;

            }
            this.x += -30;
            
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
        

        move(): void { 
        
        
            this.x += 0;
            this.y -= 10000;
            
            if ( this.y < 0 ) {
                this.y = 400;
            }
          
            
        };

        draw(): void {
            for (let i: number = 0; i < 100; i++) {
                let width: number = Math.random() * 100;
                let height: number = Math.random() * 1500;
                let scale: number = Math.random() * 20;

                crc2.beginPath();
                crc2.arc(700 + width, 30 + height, scale, 0, 30 * Math.PI);

                crc2.fillStyle = "rgba(188,210,238,10)";
                crc2.stroke();
                crc2.fill();

            }

        }
    }



    
    
    
    
    export class background {

        public paint(): void {
            this.drawWater();
            this.drawsand(crc2.canvas.height - 200);
            this.drawPlant(10, 1300);
            this.drawPlant1(120, 1360);
            this.drawPlant1(700, 1360);
            this.drawPlant(900, 1300);
            this.drawPlant1(800, 1450);

        }

        drawsand(_y: number): void {

            crc2.beginPath();
            crc2.fillStyle = "rgb(139, 115, 085)";
            crc2.moveTo(0, crc2.canvas.height);
            crc2.lineTo(0, _y);
            for (let i: number = 0; i < crc2.canvas.width; i++) {
                crc2.lineTo(i, 30 * Math.sin(i * .005) + _y);
            }
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(100, crc2.canvas.height);
            crc2.fill();
            crc2.closePath();
        }




        drawWater(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 1000);
            gradient.addColorStop(0, "rgb(99,184,255)");
            gradient.addColorStop(1, "rgb(58,95,205)");

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        drawPlant1(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,139,69)";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 130);
            crc2.lineTo(_x + 40, _y - 20);
            crc2.lineTo(_x + 40, _y - 20);
            crc2.lineTo(_x + 50, _y - 50);
            crc2.lineTo(_x + 150, _y - 250);
            crc2.lineTo(_x + 100, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        drawPlant(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(0,139,69)";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x - 60, _y - 260);
            crc2.lineTo(_x + 40, _y - 40);
            crc2.lineTo(_x + 40, _y - 400);
            crc2.lineTo(_x + 100, _y - 100);
            crc2.lineTo(_x + 300, _y - 500);
            crc2.lineTo(_x + 200, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }

}












