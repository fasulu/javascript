//  03 - Map Names

// - Créez une variable `longNames` contenant la valeur suivante :

// ```jsx
// [
// 	{
// 		firstName: "Jane",
// 		lastName: "Doe"
// 	},
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ]
// ```

// - Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :

// ```jsx
// // Résultat attendu :
// [
// 	{
// 		name: "Jane Doe"
// 	},
// 	{
// 		name: "John Smith"
// 	}
// ]
// ```

// - Affichez les valeurs de `shortNames` dans la console

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

var shortNames = longNames.map(function(name) {
    return name.firstName + " " + name.lastName;
});
console.log(shortNames);