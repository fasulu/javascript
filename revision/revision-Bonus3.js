// Bonus III

// - Que retourne votre fonction de l'exercice 2 si vous lui passez 
// autre chose que des x ou des o ? ou des X et O majuscules ?
// - Rajoutez un message d'erreur explicite dans le premier cas et 
// comptez les majuscules dans le second.

var phrase = "xxxxooxxxooooo";

var x = "x"; var o = "o";

var temp = "";
var invalidChar = "no";

for (i = 0; i <= phrase.length + 1; i++) {
    temp = phrase.charAt(i);
    console.log(temp);
    if (temp === "X" || temp === "O") {
        console.log("Invalid character " + temp);
        invalidChar = "yes";
        break;
    } else {
        invalidChar = "no";
    }


    // *******
    // if (temp !== "x" || temp !== "o") {
    //     console.log("Invalid character " + temp);
    //     invalidChar = "yes";
    //     break;
    // } else {
    //     invalidChar = "no";
    // }
    // *******
}

if (invalidChar === "yes") {
    console.log("Invalid character " + invalidChar);
} else if (invalidChar === "no") {
    countEach(phrase);
}

function countEach(phrase) {
    console.log(phrase);
    var countO = 0;
    var countX = 0;

    for (i = 0; i <= phrase.length + 1; i++) {
        var tempStr = phrase[i];
        if (tempStr === o) {
            countO++;
        } else if (tempStr === x) {
            countX++;
        }
    }
    if (countX > countO) {
        console.log(true);
    } else {
        console.log(false);
    }
}
