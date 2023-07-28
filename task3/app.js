let num1 = 0;

function getNumber(num){
    switch (num){
        case "+":
            if(num1 >= 10){
                console.log("стоп")
            }else{
                console.log(num1 += 1);
            }
            break;
        case "-":
            if(num1 <= -10){
                console.log("стоп")
            }
            else{
                 console.log(num1 -= 1);
            }
            break;
    }
}