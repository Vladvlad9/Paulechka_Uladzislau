let num1 = null;
let num2 = null;
let sing = null;
function getNumber(value){
    if(num1 == null){
        console.log(value)
        num1 = parseInt(value)
    }
    else {
        console.log(value)
        num2 = parseInt(value)
    }
}


function getSing(value){
    sing = value
}


function result(){
    switch (sing){
        case "+":
            console.log(`Сложение ${parseInt(num1)} + ${parseInt(num2)} = ${num1 + num2}`);
            break;
        case "-":
            console.log(`Разность ${parseInt(num1)} - ${parseInt(num2)} = ${num1 - num2}`);
            break;
        case "*":
            console.log(`Умножение ${parseInt(num1)} * ${parseInt(num2)} = ${num1 * num2}`);
            break;
        case "/":
            console.log(`Деление ${parseInt(num1)} / ${parseInt(num2)} = ${num1 / num2}`);
            break;
    }
}