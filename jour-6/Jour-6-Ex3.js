// 03 - Validator


// - À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à 
//  l'utilisateur un email, un username et un mot de passe
// - La fonction vérifiera que l'utilisateur a saisi des informations valides 
//  (regardez la doc, et plus precisement les `pattern`) :
//     - l'email doit être au bon format
//     - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
//     - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et 
//       au moins un chiffre, et peut contenir des tirets
// - Si tout est bon, elle retourne "All good !", sinon elle retourne "error"

const prompt = require("prompt");
prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

var username = 0;
var email = 0;
var password = 0;
var counter = 0;

prompt.get(
    [
        "username",
        "email",
        "password"
    ],

    function (err, res) {

        if (err) {
            return onErr(err);
        }

        username = res.username;
        email = res.email;
        password = res.password;

        console.log(typeof username, username, typeof email, email, typeof password, password);

        var alphaExpression = /^[a-zA-Z1-90-]*$/g;  // any number of characters contains atleast one captital or one small or one number or one hyphen

        if (res.username.match(alphaExpression)) {
            console.log("Valid Name");
            counter++;
        } else {
            console.log("Invalid Name");
        }

        var emailExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  // email verification

        if (res.email.match(emailExpression)) {
            console.log("Valid eMail");
            counter++;
        } else {
            console.log("Invalid eMail");
        }

        // var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;  // accept from 6 to 10 characters with atleast one number one small letter, one capital letter, one special character

        var pwdwordExpression = /^(?=.*[0-9])(?=.*[-])[a-zA-Z0-9-]{1,6}$/;      // atleast 6 characters with one number one small letter, one capital letter, one hyphen

        if (res.password.match(pwdwordExpression)) {
            console.log("Valid Password");
            counter++;
        } else {
            console.log("Invalid Password");
        }

        if (counter == 3) {
            console.log("All good !")
        } else {
            console.log("error");
        }
    }
);

