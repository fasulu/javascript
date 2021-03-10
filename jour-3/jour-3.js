
// 01

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);

console.table(fruits);

// 02 

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1,2]);


// 03

var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);

objects.pop("lamp");
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift("chair");
console.log(objects);


// 04

var numbers = [10, 8, 12, 6];

console.log(numbers.reverse());

// var sortNum = numbers.sort(function(a, b) {return a - b}); 
var sortNum = numbers.sort((a, b) => a - b); 
console.log(sortNum);

// 05 

var total = 0;
var limit = 10;
var finalTotal = 0;
for (i=0; i <= limit; i++) {
    total = total + i;
    console.log(total);
}

// 06

var sentence = "Hello Konexio !";
var result;
var arr =[];
for(i=0; i<=(sentence.length); i++) {
    result = sentence[i]
    arr = result

    console.log(arr);
}
