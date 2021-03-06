var L11_Inheritance;
(function (L11_Inheritance) {
    class Rect extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        setRandomPosition() {
            this.x = Math.random() * L11_Inheritance.crc2.canvas.width;
            this.y = Math.random() * L11_Inheritance.crc2.canvas.height;
        }
        /* move(): void {
             this.y += 5;
             this.x += 1;
 
             if (this.y > 400) {
                 this.y = -10
             }
             if (this.x > 600) {
                 this.x = -10
             }
         }
 */
        draw() {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    L11_Inheritance.Rect = Rect;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Rect.js.map