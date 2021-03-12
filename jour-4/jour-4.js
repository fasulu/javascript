// 01

var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}

console.log(cat);
console.log(cat.age);

if(cat.hasOwnProperty("isCute")) {
    console.log("Is Cute : " + cat.isCute);
}

// 02

var cat2 = {
    name : "Holland",
    age : 65,
    isCute : true
}

var cats = {};

Object.assign(cats, cat, cat2);
console.log(cats);


console.log(cat.age);

console.log(cat2.isCute);


// 03

checkIfEven(230);

function checkIfEven(num){

    var temp = num % 2;
    console.log(temp);
    if (temp == 0) {
        console.log(num + " is even");
    }else {
        console.log(num + " is odd");
    }
}

// 04

compare(300, 300)

function compare(num1, num2) {
    if(num1 > num2) {
        console.log(num1 + " is greater than " +  num2);
    }else if(num1 < num2) {
        console.log(num2 + " is greater than " +  num1);
    }else if(num1 = num2) {
        console.log(num1 + " et " + num2 + "  ils sont égaux");
    }
}

// 05

var num;

for(i=0; i<=79; i++) {

    addUp(num);
}

function addUp(num) {

    var temp = num + 12;
    if(temp == 78){
        console.log("Obtenez 78")
    }
 }


// 06
var num = 3700;

format(num);

function format(num) {

    var temp1 = num / 60;
    console.log(temp1);
    var temp2 = Number((temp1 - 60))
    var hours=Math.floor(temp1 / 60);
    console.log(temp2);



}

