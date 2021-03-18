// 04

var numbers = [10, 8, 12, 6];

console.log(numbers.reverse());

//***//
var sortNum = numbers.sort(function(a, b) {return a - b}); 
//***//
var sortNum = numbers.sort((a, b) => a - b);
console.log(sortNum);