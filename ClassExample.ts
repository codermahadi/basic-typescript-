class Point {

    x: number;
    y: number

    constructor(x:number, y:number, z?:number){
        this.x = x;
        this.y = y;
        }
    
    draw(){

        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getDistance(antherPoint: Point){

    }
}

let point = new Point(20, 50);

point.draw();