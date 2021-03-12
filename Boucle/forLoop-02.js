// Comptez combien il y a de mutliple de 7 (pensez au modulo !) entre 100 et 1000

var numStart = 100;
var numEnd = 1000;
var counter = 0;

for (i = numStart; i <= numEnd; i++) {
    var reminder = i % 7;
    var temp1 = i / 7;
    console.log(i + " " + temp1 + "  " + reminder);
    if (reminder == 0) {
        counter = counter + 1;
    }
}
console.log("Total :" + counter);