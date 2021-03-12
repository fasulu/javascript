// 05

addUp(12);

function addUp(num) {

    var temp=0;

    for (i = 0; i < (num + 1); i++) {
        temp = temp + i;
        console.log(temp);
        if (temp == 78) {
            console.log("Obtenez 78")
        }
    }
}