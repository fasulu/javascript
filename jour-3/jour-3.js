
// // 01

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);

console.table(fruits);

// // 02 

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1,2]);


// // 03

var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);

objects.pop("lamp");
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift("chair");
console.log(objects);


// // 04

var numbers = [10, 8, 12, 6];

console.log(numbers.reverse());

// var sortNum = numbers.sort(function(a, b) {return a - b}); 
var sortNum = numbers.sort((a, b) => a - b); 
console.log(sortNum);

// // 05 

var total = 0;
var limit = 10;
var finalTotal = 0;
for (i=0; i <= limit; i++) {
    total = total + i;
    console.log(total,'+');
}
console.log("Total apres boucle " + total);


// 06

var sentence = "Hello Konexio !";
var splitSentence = [];
splitSentence = sentence.split("");
var result;
var len = sentence.length;

for(i=0; i<=(sentence.length-1); i++) {

    // console.log(((i-len).toString()).substring(1));

    result= splitSentence[((i-len).toString()).substring(1)];

    console.log(result);
    
}


// Bonus 

var result1;
var result2;

for (i = 1; i < 100; i++) {
    result1 = i / 3;
    result2 = i / 5;

    int_part1 = Math.trunc(result1);  // seperate integer part for 3
    float_part1 = Number((result1 - int_part1).toFixed(2)); // seperate decimal part for 3

    int_part2 = Math.trunc(result2); // seperate integer part for 5
    float_part2 = Number((result2 - int_part2).toFixed(2)); // seperate decimal  part for 5

    if (float_part1 <= 0) { // check decimal is less than zero
        console.log(i + " / 3 = " + result1 + " fizz");
    }
    if (float_part2 <= 0) { // check decimal is less than zero
        console.log(i + " / 5 = " + result2 + " buzz");
    }
    if (float_part1 <= 0 && float_part2 <= 0) { // check both decimal is less than zero
        console.log(i + " " + result1 + "  " + result2 + " fizzbuzz");
    }
}

// // Bonus II

var total = 0;
var limit = 10;
var finalTotal = 0;

while (total < limit) {
    total++;
    finalTotal = total + finalTotal;
    console.log(total,'+');
}
    console.log("Total apres boucle " + finalTotal);


