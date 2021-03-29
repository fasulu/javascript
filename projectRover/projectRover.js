
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



var rover = {
    direction: "N",
    x: 0,
    y: 0
}

function turnLeft(robot) {

    switch (robot.direction) {

        case "N":
            robot.direction = "W";
            break;

        case "W":
            robot.direction = "S";
            break;

        case "S":
            robot.direction = "E";
            break;

        case "E":
            robot.direction = "N";
            break;

        // default:

    }
    console.log("The rovor has turned left, its new direction is,", robot.direction);
}

// turnLeft(rover);

function turnRight(robot) {

    switch (robot.direction) {

        case "N":
            robot.direction = "E";
            break;

        case "E":
            robot.direction = "S";
            break;

        case "S":
            robot.direction = "W";
            break;

        case "W":
            robot.direction = "N";
            break;

        // default:

    }
    console.log("The rovor has turned right, its new direction is,", robot.direction);
}

// turnRight(rover)

function moveForward(robot) {

    switch (robot.direction) {

        case "N":
            robot.y--;
            break;

        case "S":
            robot.y++;
            break;

        case "E":
            robot.x++;
            break;

        case "W":
            robot.x--;
            break;

        // default:

    }
    console.log(`the new position of the rover is x: ${robot.x} and y: ${robot.y}`);
}

moveForward(rover);