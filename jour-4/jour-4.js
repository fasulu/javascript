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

var num = 5;

checkIfEven(num);

function checkIfEven(num){

    var temp = num % 2;
    console.log(temp);

}


