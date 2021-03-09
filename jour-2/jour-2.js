
// 01

var num1 = 102;
var num2 = 13.9;

console.log(num1);
console.log(num2);

// 02

var basic = 34;
var stringfield = basic.toString();

console.log(stringfield);
console.log(typeof stringfield);

// 03

var num = 1.5;
var rounded = Math.round(num);

console.log(rounded);

// 04

var test = 12;
var bis = 5;

var result = test + bis;

console.log(result);

// 05

var test = 143;
var bis = 219;

if (test < bis){
    console.log(" test < bis = true");
} 

if (test < bis) {
    console.log(test > bis);
} 

if (test == bis){
    console.log("test is not equal to bis");
}

if (test !== bis) {
    console.log("test not equal to bis")
}

// 06 - Condition

var limit = 50;
var score = 64;

if (limit >= score) {
    console.log("Oh nooo..");
} else {
    console.log("Ok good");
}

// 07 - Condition II

var password = "azerty";

var result = (password.length);

console.log(result);

if (result >= 6) {
    console.log("The password is secure (it is more than 5 characters)");
} else{
    console.log("Password is insecure, it is less than 6 characters")
}


// 08 - Condition III

if ((limit < score) && (result >= 6)) {

    console.log("Everything is good")
} else 

if ((limit > score) || (result >= 6)) {
    console.log("Something is good")
}else 

if ((limit > score) || (result <= 6)) {
    console.log("Nothing is good")
}

// ******************

if ((limit < score) && (result >= 6)) {

    console.log("Everything is good")
}

if ((limit > score) || (result >= 6)) {
    console.log("Something is good")
}

if ((limit > score) || (result <= 6)) {
    console.log("Nothing is good")
}


// Bonus

var randomMin = 1;
var randomMax = 6;

var result = Math.floor(Math.random() * 6) + 1 ;

if (result == 6) {
    console.log("Yes I win");
} else {
    console.log("So close... " + result);
}

// Bonus II

var month = "January";

switch (month) {

    case "January":
        console.log("Winter");
        break;
    case "February":
        console.log("Winter");
        break;
    case "March":
        console.log("Spring");
        break;
    case "April":
        console.log("Spring");
        break;
    case "May":
        console.log("Spring");
        break;
    case "June":
        console.log("Summer");
        break;
    case "July":
        console.log("Summer");
        break;
    case "August":
        console.log("Summer");
        break;
    case "September":
        console.log("Autumn");
        break;
    case "October":
        console.log("Autumn");
        break;
    case "November":
        console.log("Autumn");
        break;
    case "December":
        console.log("Winter");
        break;
}

//  Bonus III

var roundedNumber = 102.46465464514;

// var decimalNum = roundedNumber - Math.floor(parseInt(roundedNumber));    // parseInt roundnumber & math floor it down to round then substract it
                                                                            // from roundnumber to get decimal value
roundedNumber = roundedNumber - Math.floor(roundedNumber);                  // another way of spliting decimal value from given number

if ((decimalNum) < 0.5) {
    console.log(Math.floor(roundedNumber));
} else {
    console.log(Math.ceil(roundedNumber));
}

