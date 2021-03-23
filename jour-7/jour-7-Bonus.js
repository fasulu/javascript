// Bonus

// Vous connaissez le jeu du **Pendu** ? Aujourd'hui on va le coder en utilisant le module npm prompt ! Petit rappel des règles :

// - Un mot mystère est proposé, chaque lettre est indiquée par un tiret bas `_`
// - Le joueur a dix tentatives pour deviner le mot mystère, et pour chaque tentative il propose une lettre :
//     - Si la lettre est dans le mot mystère, chaque lettre correspondante est affichée
//     - Si la lettre n'est pas dans le mot, le message suivant s'affiche : "oups... plus que x chances !" (x sera remplacé par le nombre de tentatives restantes)

// ⇒ Afficher un message en cas de victoire ou défaite

var prompt = require("prompt");

var mysteryWord = "bravo";
var wordLength = mysteryWord.length;
var counter = 0;

play();

var temp1 = temp.charAt(i);
var temp2 = mysteryWord.charAt(i);

function play()

prompt.get(
    {
        letter: "numAlphatbet",
        description: "Quel est le lettre mystery? "
    },

    function (err, res) {

        counter++;

        console.log("err in play", err);
        console.log(typeof + "res in play", res);
        var temp = JSON.stringify(res);
        console.log(typeof temp);

        // if(err) {
        //     console.log("Error in the input: ", err);
        //     play();
        //     return;
        // }

        for (i = 0; i < wordLength; i++) {

            console.log(temp1, temp2, bi + "letter ok");


            if (counter > wordLength) {
                return;
            }

            play();

        }

    }

)
