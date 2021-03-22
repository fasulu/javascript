// 01 - File System

// - Créez un fichier `jour07.txt` contenant le code suivant :

// [
// 	{
// 		"name": "Jane Doe",
// 		"email": "jane.doe@example.com"
// 	},
// 	{
// 		"name": "John Smith",
// 		"email": "john.smith@example.com"
// 	}
// ]

// Dans le fichier js, à l'aide du module fs, affichez le contenu de jour07.txt dans la console

var fs = require("fs");

// store date want to write in a file
var writeData = `[          
    	{
    		"name": "Jane Doe",
    		"email": "jane.doe@example.com"
    	},
    	{
    		"name": "John Smith",
    		"email": "john.smith@example.com"
    	}
    ]`;


// use writefile system to create and write data in to that file
fs.writeFile("jour07.txt", writeData, function(err) {

    if(err){
        return console.error(err);
    }

    console.log();

});

// use readfile system to open jour97.txt and write it in the console.
fs.readFile("jour07.txt", function (err, data){

    if(err) {
        console.log(err);
        return;
    }

    console.log("Data in the file is \n"+ data.toString() ); // write comment and in the next line write the file data
});

