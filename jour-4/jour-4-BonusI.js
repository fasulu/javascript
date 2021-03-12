
var num = "15";
var upperString = '!"£$%^&*()_+¬`<>?:@~,./;#[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var pwd = ' ';


if (num < 6 || num > 15) {

        console.log("error " + num + ":- plus petit 6 et plus grand que 15");

    } else {

        generatePassword(num);

    }

function generatePassword(num) {

    for (var i = 0; i < num; i++) {

        var temp = Math.floor(Math.random() * upperString.length);

        pwd += upperString.substring(temp, temp + 1);        
    }
    console.log("password = " + pwd);
}
