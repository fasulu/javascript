// 01

var cat = {
    name : "Garfield",
    age : 3,
    isCute : true
}

console.log(cat);
console.log(cat.age);

if(cat.hasOwnProperty("isCute")) {
    console.log("Is Cute : " + cat.isCute);
}