//Calculez la somme des carrés des nombres de 5 à 10

// Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25

var numStart = 5;
var numEnd = 10;

for (i = 5; i <= 10; i++) {

    var result = i * i;

    console.log(result);

    if (result == 355) {
        
        console.log("Result = " + i + " X " + i);
    }

}