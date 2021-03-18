// Bonus III

var nom = ["Lucas", "Fethy", "Asma", "Rocío", "Bakagnan", "Moncef",
     "Mehdi", "Mugilan", "Francisco", "Amir", "Suleman", "Sabrina", 
     "Lionel", "Karim", "Faruk", "Ikram", "Axel", "Fasulu", "Abdou"];

 var len = nom.length;
 var nomRdm = nom[Math.floor(Math.random() * len)];
 console.table(nom);
 console.log('The computer chose:' + nomRdm);
