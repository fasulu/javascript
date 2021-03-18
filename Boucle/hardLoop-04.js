// 04 - Nested Loop

// Créez un tableau `words` avec les mots suivants
// var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

// A l'aide d'une boucle for, utilisez la méthode split pour créer un tableau contenant 
//  les lettres de chaque mot.

// A l'aide d'une deuxieme boucle for (à l'interieur de la première), comptez le nombre 
//  de "o" de chaque mot.

// Retournez le nombre total de "o"

// Résultat attendu: 8

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

var oTotal = 0;

var tempString = [];


for (var i = 0; i < words.length; i++) {

    tempString = words[i].split("");
    // console.log(words.length)

    

    console.log(words[i]);
}