var num = 10234567;
var counterT = 0;
var counterF = 0;

console.log(Date());
for (i = 1; i <= num; i++) {
    var temp = (num / i);
    if (Number.isInteger(temp)){
        temp="true";
    }
    if (temp == "true") {
        counterT++;
    } else {
        counterF++;
    }
}
if (counterT == 2) {
    console.log(num, "is prime number");
} else {
    console.log(num, "is not a prime number");
}
console.log(Date());