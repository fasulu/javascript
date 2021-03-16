// 03 - Separate Table

// - Créez un fichier `table-utils.js`
// - Mettez votre fonction `multiply` dans ce fichier, et ajouter en 
//  une deuxieme `addition` qui reprend le même principe mais avec une 
//  addition au lieu d'une multiplication
// - Exportez les deux fonctions graces aux modules, et importez les 
//  dans votre fichier précedant pour refaire marcher votre code
// - Affichez la table d'addition

function multiply(num1) {
    // console.log(num1);

    if (isNaN(num1)) {   // check is number or not
        console.log("Not a number - Error");
    } else {
        for (i = 1; i <= 10; i++) {
            console.log(i + " X " + num1 + " = " + (i * num1)); // prepare table
        }
    }
}

function addition(num1) {
    // console.log(num1);

    if (isNaN(num1)) {   // check is number or not
        console.log("Not a number - Error");
    } else {
        for (i = 1; i <= 10; i++) {
            console.log(i + " + " + num1 + " = " + (i * num1)); // prepare table
        }
    }
}