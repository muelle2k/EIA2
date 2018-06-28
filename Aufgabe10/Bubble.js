var Aufgabe10;
(function (Aufgabe10) {
    class Bubble {
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
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
            Aufgabe10.crc2.fillStyle = "rgba(188,210,238,10)";
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Bubble = Bubble;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Bubble.js.map