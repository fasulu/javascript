// Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5

var diceStart = 1;
var diceEnd = 6;
var rolling = 20;
var diceValue = 0;
var total = 0;

for (var i = 1; i <= rolling; i++) {

    diceValue = Math.floor(Math.random() * (diceEnd - diceStart + 1) + diceStart);

    // console.log(i + " " + diceValue);

    if (diceValue >= 5) {
        
        console.log(diceValue);
        total = total + diceValue;
        
    }
}
console.log(total);
