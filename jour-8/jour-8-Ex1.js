var request = require("request");

var nameCountry = [];

request.get("https://restcountries.eu/rest/v1/all",

    function (err, res, body) {

        var tempArray1 = JSON.parse(body);

        console.log(typeof tempArray1);

        //*****************avec for loop */

        // for(i=0; i<=tempArray1.length-1; i++) {

        //     // console.log(tempArray1[i].name);
        //     nameCountry.push(tempArray1[i].name);
        // }
        // console.log(nameCountry.join("-"));  

        //**************************** */

        //***************avec map & call back funciton */

        var tempArry2 = tempArray1.map(
            function(elem) {
                
                return elem.name;
            }
        );

        console.log(tempArry2.join("-"));

        //******************************************** */  
    }
);