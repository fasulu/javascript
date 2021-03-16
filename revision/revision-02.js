// 02 - XOXO

// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false

countEach("xxxxxxooxxxooooo");

function countEach(phrase) {
    console.log(phrase);
    var countO = 0;
    var countX = 0;
    var x = "x"; var o = "o";

    for (i = 0; i <= phrase.length+1; i++) {
        var tempStr = phrase[i];
        if (tempStr === o) {
            countO++;
        } else if (tempStr === x) {
            countX++;
        }
    }
    if (countX > countO) { 
        console.log(true) ;
    } else {
        console.log(false);
    }
}
