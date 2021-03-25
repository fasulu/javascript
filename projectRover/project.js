
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

var rover = [
    {
        direction: "N"

    }
];

turnLeft(directionL);

turnRight(directionR);

pilotRover(pilot);

moveForward(0, 1);



function turnLeft(directionL) {

    var temp = directionL;

    // if(rover.direction === "E" || rover.direction === "S" || rover.direction === "W") {

    //         rover.direction = "E"

    // }

    switch (temp) {

        case "E":
            console.log()
            break;
        case "N":
            console.log()
            break;
        case "S":
            console.log()
            break;
        case "W":
            console.log()
            break;
        default:
    }

}

function turnRight(rover) {


    if (grid[0, 9] === "R") {

        rover.direction = "S"
        grid[9, 0] = "S"

        console.log(rover.direction)
        console.log("Current Position:  " + +grid[0, 1]);

    }

    if (rover[0].direction === "N") {

        rover.direction = "R"

        grid[0, 1] = "R"


        console.log(rover.direction)
        console.log("Current Position:  " + +grid[0, 1]);

        turnRight(rover);

    }

}

function moveForward(x, y) {

    grid[x, y] = "O"

}