//Calculez la somme des carrés des nombres de 5 à 10

// Rappel: le carré d'un nombre est sa valeur, multipliée par lui même. exemple: 5x5 = 25

var temp=0;
var numStart = 5;
var numEnd = 10;
var result=0;
for (i = 5; i <= 10; i++) {

    result = i * i;

    console.log(result);
    temp = result +temp;
    console.log(temp);

}