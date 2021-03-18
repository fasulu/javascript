// 02 - Max

// Créez un tableau vide `numbers`

// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 
//  50 et 200 dans votre tableau

// à l'aide d'une autre boucle for, trouvez le maximum des éléments 
// de votre tableau (sans utiliser la fonction)

var numbers = [];
var numTotal = 0;

var tempString = "";

var counter = 0;
var numRdm = 0;

var numStart = 0;
var numEnd = 200;

for (var i = 0; i < 50; i++) {

    numRdm = Math.floor(Math.random() * (numStart - numEnd + 1) + numEnd);
    // console.log("counter i = " + i + " " + numRdm);
    numTotal = numTotal + numRdm;
    numbers.push(numRdm);

}
console.table(numbers);     // show array data
console.log(numTotal);

for (i = 0; i < numbers.length; i++) {

    // console.log(i)
    // console.log(numbers[i]);

    tempString = numbers[i];    // pick nth number of cell data

    if(tempString !== ""){      // check it is not empty
        counter++;          // count elements present in array cell
    }
    console.log("total array " + counter);  // count maximum number of array

}