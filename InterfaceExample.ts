interface Point{
    x: number,
    y: number
}

var drawPoint = (point: Point) => {
    // Todo: statement here
    console.log(point.x)
}

drawPoint({x:10, y:20})