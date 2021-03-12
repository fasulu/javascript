// Objects

var user = {
	name: "Jane",
	genre: "female",
	age: 25,
	isStudent: true,
	favorites: ["coffee", "nutella", "pizza"]
};

// Accéder aux valeurs d’un objet

console.log(user.name); // retournera "Jane"
console.log(user["name"]); // retournera "Jane"


// Méthodes 
	// Assign

	var user = {
		name: "Peter",
		email: "peter@mail.com",
	}
	
	var double = {
		email: "peter@newmail.com",
		isAdmin: true
	}
	
	Object.assign(user, double);
	
	console.log(user);
	// retournera :
	//  {
	//	  name: "Peter",
	//	  email: "peter@newmail.com",
	//    isAdmin: true
	//  }

	// HasOwnProperty


	var cat = {
		name: "Pickle",
		color: "black"
	}

	cat.hasOwnProperty("name"); // donnera true
	cat.hasOwnProperty("age"); // donnera false

	//  Keys


	var cat = {
		name: "Pickle",
		color: "black"
	}

	Object.keys(cat); // donnera ["name", "color"]

	//  Values


	var cat = {
		name: "Pickle",
		color: "black"
	}

	Object.values(cat); // donnera ["Pickle", "black"]

	// Entries

	var cat = {
		name: "Pickle",
		color: "black"
	}

	Object.entries(a); // donnera [["name", "Pickle"], ["color", "black"]]

	// ***************

	// Function

	function add(number) {
		return number + number;
	}

	add(5);  // donnera 10 (ici, 5 est l'argument, la valeur du paramètre number)

	var age = 27;
	add(age); // donnera 54 (on peut donner une variable comme argument de fonction !)

	var global = "hey !";

	function logData() {
		var local = "hello !"; // local est déclarée dans le scope de la fonction

		console.log(global); // retournera "hey !" car global est déclarée dans le scope global
		console.log(local);  // retournera "hello !" car on est bien dans le scope de la fonction
	}

	console.log(global); // retournera "hey !"
	console.log(local);  // retournera undefined car on n'a pas accès à local en dehors de la fonction

// Console.log() et fonctions

	// OPTION 1 :

function add(num) {
	console.log(num + num); // ici, elle ne sert à afficher le double, elle devrait s'appeler "printDouble"
}

add(2); // retournera 4 dans la console

var number = 200 + add(2); // ici on a un problème...


// OPTION 2 :

function multiply(num) {
	return num * 2; // ici, elle calcule et rend un résultat
}

multiply(4); // donnera 8 mais on ne peut pas le vérifier

console.log(multiply(4)); // retournera 8 dans la console

var number2 = 200 + multiply(4); // donnera 208, la fonction est utilisable partout