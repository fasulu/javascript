// Bonus IV

var myArray = [];
var min = 0;
var max = 100;

var numRdm;

for (i=0; i<21; i++) {
    numRdm = Math.floor(Math.floor(Math.random() * max - (min + 1)));
    myArray.push(numRdm);
}
console.table(myArray);

// var numMax = array[0];

// for (i=1; i < array.length; i++) {
//     var item = array[i];

//     if(item > numMax) {
//         numMax = item;
//     }
// }

// console.log(numMax);