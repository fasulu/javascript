
// var prompt = require("prompt");

// prompt.start();

var grid = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];


// 

var rover = { "direction": "N" };

var currentPosition = [0, 0];

var moveToPosition = [3, 3];



turnRight("R");

// turnLeft("L");

pilotRover();

moveForward(3, 4);


function turnLeft(directionL) {

    var temp = directionL;

    grid[currentPosition] = roverFaceLeft;

    console.log(grid[currentPosition])

    moveForward(moveForward);

}

function turnRight(directionR) {

    var temp = directionR;

    grid[currentPosition] = "R";

    console.log(grid[currentPosition])

    moveForward(moveForward)

}

function moveForward(x, y) {

    var tempMove = [x, y];

    for (i = 0; i <= x; i++) {

        // console.log(i)

        for (j = 0; j <= y; j++) {

            // console.log(y);

            grid[i,j] = "R"
            // console.log( "current move", grid[i,j])


        }
    }

}

function pilotRover() {


}

// grid[3,3] = "R";

console.log("rover current location", grid[3,3]);
// console.log(grid.indexOf("R"));
// console.log(grid[3,3]);
console.log(grid);