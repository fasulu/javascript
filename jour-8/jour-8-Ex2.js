//  02 - Chuck Norris

// À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

// - Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console

var request = require("request");

var jsonArray = [];
var chuckJoke = [];

request.get("https://api.chucknorris.io/jokes/random",

    function (err, res, body) {

        jsonArray = JSON.parse(body);

        // console.log(typeof jsonArray);

        chuckJoke = jsonArray.value;

        console.log(chuckJoke);
    }
);