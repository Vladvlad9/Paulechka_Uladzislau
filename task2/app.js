let num1 = null;
let num2 = null;
let sing = null;

let input = document.querySelector('.lbl');
function getNumber(value){
    // num1 == null?  num1 = parseInt(value) : num2 = parseInt(value)
    if(num1 == null){
        num1 = parseInt(value);
        input.value = num1;
    }
    else {
        num2 = parseInt(value);
        input.value += num2;
    }
}


function getSing(value){
    sing = value;
    input.value += sing;
}

function result(){
    switch (sing){
        case "+":
            input.value += `=${num1 + num2}`;
            console.log(`Сложение ${parseInt(num1)} + ${parseInt(num2)} = ${num1 + num2}`);
            break;
        case "-":
            input.value += `=${num1 - num2}`;
            console.log(`Разность ${parseInt(num1)} - ${parseInt(num2)} = ${num1 - num2}`);
            break;
        case "*":
            input.value += `=${num1 * num2}`;
            console.log(`Умножение ${parseInt(num1)} * ${parseInt(num2)} = ${num1 * num2}`);
            break;
        case "/":
            input.value += `=${num1 / num2}`;
            console.log(`Деление ${parseInt(num1)} / ${parseInt(num2)} = ${num1 / num2}`);
            break;
    }
}