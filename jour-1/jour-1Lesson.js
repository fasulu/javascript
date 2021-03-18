console.log("hello world");

var str = "fasulu";     // store 'fasulu' in str

console.log(str);

console.log(str.length);    // counts total character length of a given string

strs = str.replace("fasulu", "bee");        // replaces word 'fasulu' with 'bee'
console.log(str.replace("fasulu", "bee")); // replaces word 'fasulu' with 'bee'
console.log(strs);                          // write on console stored'strs' value

console.log(strs.charAt(1));  // find 2nd character in the given string, always starts with 0 as character 1


// return 'cat'.charAt(1) // returns "e"

// return 'cat'[1] // returns "e"

var str1 = strs.charAt(1);
var str2 = strs[0];

console.log(str1 + "  " + str2);

console.log(strs[2]);   // console log is 'e'


var test = "this is my string";
console.log(test.charCodeAt(0)); // give first character's ascii value ie 116

console.log(test.toUpperCase());    // outputs test string character in uppercase

console.log(test.toLowerCase());    // outputs test string character in lowercase

console.log(test.split(" "));  // splits phrase into words

console.log(test.split(""));  // splits phrase into letters including space character

console.log(test.substring(11,14)); // picks 2,3 and 4th characters from the given 'test' string

console.log(test.substring(5)); // ignores first 4 characters from the given 'test' string