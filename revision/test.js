// ## 02 - XOXO

// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

var word = "xxxooooooxxx";
// console.log("phrase outside the function", phrase);

countEach(word);

function countEach(phrase) {

    console.log("phrase inside the function", phrase);

    var countX = 0;
    var countO = 0;

    var x = "x";
    var o = "o";

    for(i=0; i<= phrase.length; i++) {

        var temp = phrase[i];
        // console.log(i)

        if(temp === x) {

            countX++
            console.log(countX);

        } else if (temp === o) {

            countO++;
            console.log(countO);
        }
    }

    if(countO == countX) {
        console.log(true);
    } else{
        console.log(false);
    }

}