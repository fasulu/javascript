
var numberOfDice = 5;
var total = 0;

var joueur1 = 0;
var joueur2 = 0;

launchDice(numberOfDice);

function launchDice(numberOfDice) {
    var numStart = 0;
    var num = numberOfDice;
    for (var i = 1; i < (num+1); i++) {

        var temp = Math.floor(Math.random()  * (num - numStart + 1) + numStart);
        total = total + temp;
        // console.log(temp);        

    }
}
console.log("total value :" + total);
