// let & var
// function loop(){
//     for(let i = 0; i<5; i++){
//         console.log(i);
//     }
//     console.log("Finally: " + i)
// }
// loop();
var a;
var b;
var c;
var d;
var e = [1, 5, 60];
var f = [1, 'test', true, false];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 0] = "blue";
})(Color || (Color = {}));
var backgroundColor = Color.red;
