// 03 - Unique

// Créez un tableau vide `numbers`

// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre 
// tableau

// à l'aide d'une boucle while affichez le premier élément de votre tableau superieur 
// ou égal à 75 et inferieur ou égal à 100

var numbers = [];
var numTotal = 0;

var tempString = "";

var counter = 0;
var numRdm = 0;

var numStart = 0;
var numEnd = 200;

for (var i = 0; i < 50; i++) {

    numRdm = Math.floor(Math.random() * (numEnd - numStart + 1) + numStart);

    numTotal = numTotal + numRdm;
    numbers.push(numRdm);

}
console.table(numbers); // show table array data

while (counter <= 50) {

    counter++;

    tempString = numbers[counter];

    if(tempString > 75 && tempString < 101){
           console.log(tempString);             // show first value between 75 and 100 in array
           break;
    }

}