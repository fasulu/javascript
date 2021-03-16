// Bonus II

// - tester votre exercice 1 avec un mélange de lettres majuscules et minuscules. Est ce que cela fonctionne toujours ?
// - si non corrigez le !


var changedChar = sortLetters("konexio");

console.log(makeItSpongeBob(changedChar));

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

function sortLetters(str) {

    var sentence = [];
    for (i = 0; i <= str.length-1; i++) {

        sentence.push(str[i]);
        
    }
    var b = sentence.sort();
    return b.join("");
}