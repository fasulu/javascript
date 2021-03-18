// 01 Comptons
// A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200

var numStart = 50;
var numEnd = 200;
var counter = numStart;
var temp = 0;

while (counter <= numEnd) {
    counter++;
    temp = numStart % 2
    if (temp === 0) {
        // console.log(temp);
        console.log("Number Paire = " + numStart);
    }
    numStart++;
}
