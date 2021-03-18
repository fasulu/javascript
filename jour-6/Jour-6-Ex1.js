// 01 - Format

// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console

// var d = new Date();
// console.log(d);

formatDate("2020-3-18");

function formatDate(d) {

    var d = new Date();

    console.log(d)

    // console.log(d.getDate());
    // console.log(d.getMonth());
    // console.log(d.getFullYear());
    // console.log(typeof d.getDate());

    console.log(d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear());
}
