// 04 - Guess

// - Installez et importez le package `prompt` (n'oubliez pas d'initialiser !) et lancez les méthodes de `prompt`
// - Créez une variable `mysteryNum` contenant une valeur aléatoire (un nombre entier entre 1 et 100)
// - Créez une fonction `play` qui demande au joueur "Quel est le nombre mystère ?" puis :
//     - si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction `play`
//     - si le joueur donne le bon nombre, on affiche "Bravo !!"
// - Appelez la fonction
// - Testez le jeu

var numStart = 1;
var numEnd = 100;
var playerNum = 0;

var prompt = require("prompt");

prompt.start(); //prompt started

prompt.get(["What is your number?"], function (err, res) {
    if (err) {
        return onerror(err);    // on error goto onErr function to prompt the error message
    }

    var playerNum = res;
    
    if (isNaN(playerNum['What is your number?'])){  // check this object value is num or symbole
        console.log("Error1", playerNum);           // if symbole entered exit with error message
    } else {
        play(numStart, numEnd);     // if number entered continue to play
    }

});

function onErr(err) {   // collects error messages to player
    console.log(err);
    return;
}

function play(numStart, numEnd) {

        var numRdm = Math.floor(Math.random() * (numEnd - numStart) + 1)

        console.log(numRdm);


        if(playerNum < (numRdm) ){           
            console.log("C'est moins!");
        } else if (playerNum > (numRdm) ){
            console.log("C'est plus!");
        } else if (playerNum = (numRdm) ){
            console.log("Bravo !!");
        }
}

// module.exports = {play};