namespace Aufgabe11{
    export class Bubble {    //Großbuchstaben beginnen
        x: number;
        y: number;
        r: number;


        move(): void {
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

        draw(): void {          
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
            crc2.fillStyle = "rgba(188,210,238,10)";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }


}