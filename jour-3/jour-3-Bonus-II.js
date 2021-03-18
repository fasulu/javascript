// Bonus II

var total = 0;
var limit = 10;
var finalTotal = 0;

while (total < limit) {
     total++;
     finalTotal = total + finalTotal;
     console.log(total, '+');
}
console.log("Total apres boucle " + finalTotal);