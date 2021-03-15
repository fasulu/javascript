// 01 - Alphabet

// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez 
//  "eiknoox"

function sortLetters(str) {

    var sentence = [];
    for (i = 0; i <= str.length-1; i++) {

        sentence.push(str[i]);
        
    }
    var b = sentence.sort();
    return b.join("");
}

console.log(sortLetters("konexio"));
