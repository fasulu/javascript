var integer = 10;   // integer
var float = 2.49;   // float

// Modulus(returns reminder after divide)

var test = 10 % 3;
console.log(test); // retournera 1

// 10 / 3 = 3 (reste 1)

var n = 512;
console.log(n) // retournera 512
console.log(n.length) // retournera "undefined"

n = n.toString();
console.log(n) // retournera "512"
console.log(n.length) // retournera 3

// Math()

var numbers = [12, 36, 240];

Math.min(numbers); // donnera 12
Math.max(numbers); // donnera 240


var float = 3.14;
var otherFloat = 16.80;

Math.floor(otherFloat); // donnera 16 même si l'arrondi "naturel" serait 17
Math.ceil(float); // donnera 4 même si l'arrondi "naturel" serait 3

Math.round(2.6); // donne 3

var test = Math.random();

var min = 1;
var max = 10;

Math.floor(Math.random() * (max - min + 1) + min); // donnera un nombre aléatoire entre 1 et 10

Math.floor(Math.random() * (100 - 20 + 1) + 20); // donnera un nombre aléatoire entre 20 et 100

Math.sqrt(9); // donnera 3


// Conditional Opeators
// if()

if (isRaining === true) {  
    console.log("Oh not again !");
      takeUmbrellaAndGo(); 
  } else {  
    console.log("Yesssss! :D ");
      takeSunglassesAndGo();  
  }  


  if (condition) {
	//...  ce bloc s'exécute si la condition est vraie
} else {
	//...  ce bloc s'exécute si la condition est fausse
}

var sommeil = false;

sommeil === true ? console.log("Dodo... zZzZz") : console.log("Encore un épisode !")

var season = "Summer";


// Switch()

switch (season) {
	case "Spring": 
		console.log("Flowers everywhere !");
		break;
	case "Summer": 
		console.log("Let's go to the beach !");
		break;
	case "Autumn": 
		console.log("Back to school !");
		break;
	case "Winter": 
		console.log("Let it snow !");
		break;
	default: 
		console.log("That's not a season...");
}

// Logical operators

var test = "5"; // on assigne la valeur "5" : attention, il s'agit d'une string !
test == 5; // "5" == 5 donnera true car seule la valeur est testée
test === 5; // "5" === 5 donnera false car "5" est une string, 5 est un number

var age = 15;

if (age > 6 && age < 11) {
	console.log("you can play !");
} else {
	console.log("you can't play this game is only for kids between 6 and 11 years old!");
}

var phoneBrand = "samsung"
var computerBrand = "apple"

if (phoneBrand === "apple" || computerBrand === "apple") {
	console.log("you have at least one apple product !");
}

var isSunny = false;
var motivation = 100;
var workToDo = "none";

if (isSunny === true || (motivation === 100 && workToDo === "none")) {
	console.log("Let's go to the park !")
}

// le console.log va s'exécuter


