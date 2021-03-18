// Bonus I

var result1;
var result2;

for (i = 1; i < 101; i++) {
    result1 = i / 3;
    result2 = i / 5;

    int_part1 = Math.trunc(result1);  // seperate integer part for 3
    float_part1 = Number((result1 - int_part1).toFixed(2)); // seperate decimal part for 3

    int_part2 = Math.trunc(result2); // seperate integer part for 5
    float_part2 = Number((result2 - int_part2).toFixed(2)); // seperate decimal  part for 5

    if (float_part1 <= 0) { // check decimal is less than zero
        console.log(i + " / 3 = " + result1 + " fizz");
    }
    if (float_part2 <= 0) { // check decimal is less than zero
        console.log(i + " / 5 = " + result2 + " buzz");
    }
    if (float_part1 <= 0 && float_part2 <= 0) { // check both decimal is less than zero
        console.log(i + " " + result1 + "  " + result2 + " fizzbuzz");
    }
}

for (i = 1; i < 101; i++) {

    var a = i % 3; //console.log(a);
    var b = i % 5; //console.log(a);

    if(a == 0){
        console.log(i + " / " + "3" + " = " + "fizz");
    }
    
    if(b == 0){
        console.log(i + " / " + "5" + " = " + "buzz");
    }

    if((a == 0) && (b == 0)) {
        console.log(i + " / " + " 3 et 5" + " = " + "fizzbuzz");
    }
}


