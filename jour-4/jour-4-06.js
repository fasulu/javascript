// 06
var num = 3800;

format(num);

function format(num) {

    var temp1 = num / 60;
    // console.log(temp1);
    var hours = temp1/60;
    // console.log("hours = " + Math.trunc(hours));
    var min = temp1-60;
    // console.log("minutes = " + Math.trunc(min));
    var temp2 = Math.trunc(temp1);
    var temp3 = Number(temp1 - temp2);

    min = temp3*60;
    // console.log("Seconds = " + Math.ceil(min));

    console.log(Math.trunc(hours) + ":" + Math.trunc(temp1-60) + ":" + Math.ceil(min))
    
}