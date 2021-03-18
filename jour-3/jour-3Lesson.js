
var elements = ["water", "fire", "earth", "wind"];  


var test = [1, 2, 3, 4, 5];

console.log(test.length) // retournera 5

var ingredients = ["eggs", "flour", "butter", "milk"];

console.log(ingredients[0]); // retournera "eggs"
console.log(ingredients.length) // retournera 4
console.log(ingredients[3]); // retournera "milk"

var test = ["Hello", "there", ["!", "skjdh"]];

console.log(test[1]);      // donnera   there
console.log(test[2.0]);   //  donnera   [ '!', 'skjdh' ]

// IndexOf

var test = ["first", "second", "third"];

test.indexOf("first"); // donnera 0
test.indexOf("toto"); // donnera -1

// IndexOf

var cake = ["eggs", "flour"];

cake.push("milk");
console.log(cake); // retournera ["eggs", "flour", "milk"]

cake.unshift("butter");
console.log(cake); // retournera ["butter", "eggs", "flour", "milk"]

// Pop et Shift

var list = ["coffee", "soap", "tomatoes", "rice"];

list.pop();
console.log(list); // retournera ["coffee", "soap", "tomatoes"]

list.shift();
console.log(list); // retournera ["soap", "tomatoes"]

// Reverse

var test = ["one", "two", "three"];

test.reverse(); // donnera ["three", "two", "one"]

// Sort

var test = [5, 1, 4, 8, 2, 10];

test.sort((a, b) => a - b); // donnera [1, 2, 4, 5, 8, 10]

test.sort((a, b) => b - a); // donnera [10, 8, 5, 4, 2, 1]

test.sort(); // donnera [1, 10, 2, 4, 5, 8] car 10 est juste après 1 dans l'ordre alphabétique


// Slice

var test = [1, 2, 3, 4, 5, 6];

test.slice(2, 5); // donnera [3, 4, 5]
test.slice(3); // donnera [4, 5, 6]


// Join

var test = ["Hello", "there", "!"];

test.join(""); // donnera "Hellothere!"
test.join(" "); // donnera "Hello there !"

//while

var finishLine = 100;
var athletePosition = 0;

// while (ahtletePosition < finishLine) {
// 	ahtletePosition++;
// }

// while (condition) {
// 	// ce bloc s'exécute à chaque étape
// }

// for

// for (start, condition, incrementation) {
	// ce bloc s'exécute à chaque étape
// }

var goal = 20;

for (var i = 0; i <= goal; i++) {  
  console.log(i) // retournera tous les nombres de 0 à 20 !
}



// ## Break et Continue

var menu = ["salad", "burger", "cheese", "dessert", "coffee"];

// je créer une boucle pour manger, mais je n'aime pas le fromage et je ne bois pas de café... Comment faire ?

for (var i = 0; i < menu.length; i++) {
	if (menu[i] === "coffee") {
		break; // arrête avant le console.log de "coffee"
	}

	if (menu[i] === "cheese") {
		continue; // saute le console.log de "cheese"
	}

	console.log(menu[i])
}

// retournera :
// "salad"
// "burger"
// "dessert"

// Récursivité

countDown(5);

function countDown(number) {
	if (number === 0) {
		console.log(number + " finished !");
		return;
	}

	console.log(number);
	// sayHello(number -1);
}



// retournera :
// 5
// 4
// 3
// 2
// 1
// 0 finished !