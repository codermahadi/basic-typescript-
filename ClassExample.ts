class Point {

    x: number;
    y: number
    
    draw(){

        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getDistance(antherPoint: Point){

    }
}

let point = new Point();

point.x = 20;
point.y = 320;
point.draw();