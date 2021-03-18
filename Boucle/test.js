
var num = "15";
var upperString = '!"£$%^&*()_+¬`<>?:@~,./;#[]ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
var pwd = ' ';


if (num < 6 || num > 15) {

        console.log("error " + num + ":- plus petit 6 et plus grand que 15");

    } else {

        generatePassword(num);

    }

function generatePassword(num) {

    for (var i = 0; i < num; i++) {

        var temp = Math.floor(Math.random() * upperString.length);
        console.log(temp);
        pwd += upperString.substring(temp, temp + 1);   
        console.log(pwd);
    }
    console.log("password = " + pwd);
}