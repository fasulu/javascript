// 02 - Age

// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console

// Rappel : Les dates commencent à l'année 1970 !


formatDate("1990-3-19");

function formatDate(d) {

    var birthDate = new Date(d);

    var birthYear = birthDate.getFullYear();
    console.log(birthDate.getFullYear());

    var d = new Date();

    var yearNow = d.getFullYear();
    console.log(yearNow);

    console.log(d.getFullYear() - birthDate.getFullYear());
    
}
