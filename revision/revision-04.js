// 04 - Swap

// - Créez une fonction `swap` qui reçoit une string en paramètre
// - La fonction retourne une string avec la casse inverse : une majuscule deviendra minuscule et vice-versa
// - Appelez votre fonction avec l'argument "Hello World" et vérifiez que vous obtenez "hELLO wORLD"

swap("Hello World");

function swap(phrase) {
    var wordLength = phrase.length;
    var temp = "";
    var result = "";

    console.log(wordLength);

    for(i=0;i<=wordLength;i++) {

        console.log(phrase.charAt(i));

        temp = phrase.charAt(i);
        if (temp === temp.toUpperCase()){
            result += temp.toLowerCase();
            console.log(temp, result);
        } else {
            result += temp.toUpperCase();
            console.log(result), temp;
        }
    }
}