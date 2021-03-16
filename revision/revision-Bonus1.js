// Bonus I

// - Créez une fonction `makeItSpongeBob` qui reçoit une string en paramètre
// - La fonction retourne une string avec le même texte en alternant majuscule / minuscule
// - Appelez votre fonction avec l'argument "Javascript is easy" et vérifiez le résultat

makeItSpongeBob("Javascript is easy");

function makeItSpongeBob(phrase) {
    var wordLength = phrase.length;
    var temp = "";
    var upperORlower = "x";

    var result = "";

    // console.log(wordLength);

    for (i = 0; i <= wordLength; i++) {

        // console.log(phrase.charAt(i));

        temp = phrase.charAt(i);

        if (upperORlower === "x") {
            // console.log(temp.toUpperCase());
            upperORlower = "X";
            result += temp.toUpperCase();
        } else {
            // console.log(temp.toLowerCase());
            upperORlower = "x";
            result += temp.toLowerCase();
        }        
    }
    console.log(phrase);
    console.log(result);
}

