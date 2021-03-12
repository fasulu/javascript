
var numberOfDice = 5;
var total = 0;

var joueur1 = 0;
var joueur2 = 0;

var temp = 0;


launchDice(numberOfDice);
joueur1 = total;
launchDice(numberOfDice);
joueur2 = total;

function launchDice(numberOfDice) {
    var temp = 0;
    total = 0;
    var numStart = 0;
    var num = numberOfDice;
    for (var i = 1; i < (num + 1); i++) {

        temp = Math.floor(Math.random() * (num - numStart + 1) + numStart);
        total = total + temp;
        console.log(temp);

    }
}

console.log("gamer1 :" + joueur1);
console.log("gamer2 :" + joueur2);

if (joueur1 < joueur2) {
    console.log("Joueur 2 gagnant!" + " Joueur 1 better next time");
} else if (joueur1 > joueur2) {
    console.log("Joueur 1 gagnant!" + " Joueur 2 better next time");
} else if (joueur1 = joueur2) {
    console.log("Joueur 1 et Joueur 2 DRAW!");
}
