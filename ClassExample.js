var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    Point.prototype.getDistance = function (antherPoint) {
    };
    return Point;
}());
var point = new Point();
point.x = 20;
point.y = 320;
point.draw();
