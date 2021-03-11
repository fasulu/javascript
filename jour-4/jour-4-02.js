// 02

var cat2 = {
    name : "Holland",
    age : 65,
    isCute : true
}

var cats = {};

Object.assign(cats, cat, cat2);
console.log(cats);


console.log(cat.age);

console.log(cat2.isCute);