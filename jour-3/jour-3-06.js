// 06

var sentence = "Hello Konexio !";
var splitSentence = [];
splitSentence = sentence.split("");
var result =[];
var len = sentence.length;


for (i = 0; i <= (sentence.length ); i++) {
     var item =splitSentence[i];
     result.unshift(item);

 }
 console.table(result.join(""));