var Aufgabe11;
(function (Aufgabe11) {
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
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
            Aufgabe11.crc2.fillStyle = "rgba(188,210,238,10)";
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Bubble = Bubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Bubble.js.map