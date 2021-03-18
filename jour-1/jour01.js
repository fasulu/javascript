console.log("Hello World");

test = "my name is xxx"
console.log(test);

name = "fasulu";

console.log("Nice to meet you " + name);

testLength = "I'm very long !";

console.log(testLength.length);

var food = "croissant is meh";
// console.log(food.replace("meh", "so good"));
var result = food.replace("meh", "so good");
console.log(result);

var basic ="This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic + " " + basicUp + " " +basicDown);

var word = "banana";
var letters = word.split("");
console.log(letters);

var age = 75;
var template = "I'm " + age + " years old";
console.log(template);
console.log("I'm " + age + " years old")


console.log(template.substring(7, 10));
console.log(template.substring(6));

var str1 = "C'est le premier 'jour', alors on y va doucement."
var str2 = "Jouez avec l'echappement, essayer d'afficher un string avec deux lignes, un string melangeant des guillemets simple et des guillemets doubles"

console.log(str1 + "\n" + str2) ;


var changed = "Bonjour";
console.log(changed.replace("Bonjour", "Banjaur"));

var bonjour = "Bonjour";
console.log(bonjour.replace(/o/g, "a")); // finds all "o" and replace with "a"