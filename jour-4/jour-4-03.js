// 03

checkIfEven(230);

function checkIfEven(num){

    var temp = num % 2;
    console.log(temp);
    if (temp == 0) {
        console.log(num + " is even");
    }else {
        console.log(num + " is odd");
    }
}
