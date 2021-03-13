// 01 - Sum

// Créez un tableau vide `numbers`

// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 
//  0 et 100 dans votre tableau

// à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau

var numbers = [];
var numTotal = 0;

var counter = 0;
var numRdm = 0;

var numStart = 0;
var numEnd = 100;

for (var i = 0; i <= 50; i++) {

    numRdm = Math.floor(Math.random() * (numEnd - numStart + 1) + numStart);    // create random number
    // console.log("counter i = " + i + " " + numRdm);
    numTotal = numTotal + numRdm;   // add randomnumber with the total value
    numbers.push(numRdm); // add (push) randomnumber into the array

}
console.table(numbers); // show array table
console.log("Total sum is " + numTotal); // show sum of array value