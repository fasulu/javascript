// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]



arrayValue = [];

arr(5);

function arr(a) {
    var number = a;
    for (i = 1; i <= number; i++) {
        var temp = i;
        arrayValue.unshift(temp);
    }
}
console.log(arrayValue);

// [ 5, 4, 3, 2, 1 ]
// codewarz says this is failed, still the result remains correct, why?
