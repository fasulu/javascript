// 03 - Course
// Créez deux variables `ussainBolt` et `tysonGay` valant 0
// Tant que l'une des deux variables n'a pas dépassé 100 
// Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier 
//  nombre à la premiere variable et le deuxieme à la deuxieme
// Afficher le vainqueur de la course (la variable ayant dépassé 100 
//  en premier)

var ussainBolt = 0;
var tysonGay = 0;

var numStart = 1;
var numEnd = 10;

while ((ussainBolt < 101) && (tysonGay < 101)) {

    ussainBolt = ussainBolt + Math.floor(Math.random() * (numEnd - numStart + 1) + numStart);
    tysonGay = tysonGay + Math.floor(Math.random() * (numEnd - numStart + 1) + numStart);

    console.log(ussainBolt, tysonGay);

}

if (ussainBolt > 100) {
    console.log("Ussain Bolt is winner " + ussainBolt);
} else {
    console.log("Tyson Gay is winner " + tysonGay);
}
