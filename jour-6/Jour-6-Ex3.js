// 03 - Validator


// - À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
// - La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
//     - l'email doit être au bon format
//     - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
//     - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
// - Si tout est bon, elle retourne "All good !", sinon elle retourne "error"

const prompt = require("prompt");
prompt.start();

function onErr(err) {
    console.log(err);
    return;
}

prompt.get(
    [
        "username", 
        "password"
    ],
    
    function (err, res) {

        if (err) {
            return onErr(err);
        }

        password = res.passWord;
        email = res.eMail;

        console.log(typeof email, eMail, password);

        // var alphaExpression = /^[a-zA-Z1-90-]*$/g
        //         if(res.username.match(alphaExpression)) {
        //     console.log("Valid Name");
        // } else {
        //     console.log("Invalid Name");
        // }

        var emailExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(res.username.match(emailExpression)) {
            console.log("Valid Username");
        } else {
            console.log("Invalid Username");
        }

        // var passExpression = /^()$/;

        // if(res.password.match(passExpression)) {
        //     console.log("Valid Password");
        // } else {
        //     console.log("Invalid Password");
        // }

    });