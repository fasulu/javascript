// 03 - Palindrome

// - Créez une fonction `checkPal` qui reçoit une string en paramètre
// - La fonction retourne "Palindrome !" si le mot se lit dans les deux sens, sinon elle retourne "Nope"
// - Vérifiez que vous obtenez un positif avec l'argument "racecar" mais pas avec "laptop"

// checkPal("racecar");

checkPal(process.argv[2]) ;

function checkPal(phrase) {
    var palindrome = phrase;

    var temp = palindrome.split("").reverse().join("");
    // var temp1 =palindrome.split("");

    // console.log(temp); console.log(palindrome);

    if (temp == palindrome){
        console.log("Palinrome");
    } else {console.log("Nope");}
}

