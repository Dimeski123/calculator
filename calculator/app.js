const operands = document.querySelectorAll(".operand");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
let strnumber1 = "";
let strnumber2 = "";
let number1 = 0;
let number2 = 0;
let result = 0;
let checker = "";
let symbol = "";
let equalPressed = false;
let dotPressed = false;



operands.forEach(operand =>{
   operand.addEventListener("click", logOperand);
});

numbers.forEach(number => {
    number.addEventListener("click", logNumber);
});

function logOperand(){
    switch (this.textContent) {
        case "AC":
            clearAll();
            break
        case "DEL":
            if (equalPressed){

                display.innerHTML = display.innerHTML.slice(0,-1);
                number2 = parseInt(display.innerHTML);
            }else {
                if(number2 !== 0){
                    checker = display.innerHTML;
                    for (let i = 0; i<checker.length; i++){
                        if (checker[i] === "+" || checker[i] === "-" || checker[i] === "*" || checker[i] === "/"){
                            symbol = checker[i];
                        }
                    }
                    if(symbol !== ""){
                        if (strnumber1 !== ""){
                            strnumber1 = strnumber1.slice(0,-1);
                            display.innerHTML = number2 + symbol + strnumber1 ;
                            number1 = parseInt(strnumber1);
                        }
                    }
                    if (strnumber1 === ""){
                        number1 = number2;
                        strnumber1 = number1.toString();
                        number2 = 0;
                    }
                }else {
                    display.innerHTML = strnumber1 ;
                    strnumber1 = strnumber1.slice(0, -1);
                    symbol = "";
                    number1 = parseInt(strnumber1);
                }
            }

            break
        case "/":
            equalPressed = false;
            if (number2 === 0){
                number2 = number1;
                number1 = 0;
                strnumber1 = "";
                display.innerHTML = number2 + "/";

            }else {
                result = calculate(symbol);
                display.innerHTML = result + "/";
                number2 = result;
                strnumber1 = "";
                number1 = 0;

            }
            dotPressed=false;
            break
        case "*":
            equalPressed = false;
            if (number2 === 0){
                symbol = "*";
                number2 = number1;
                number1 = 0;
                strnumber1 = "";
                display.innerHTML = number2 + "*";
            }else {
                result = calculate(symbol);
                display.innerHTML = result + "*";
                number2 = result;
                strnumber1 = "";
                number1 = 0;

            }
            dotPressed=false;
            break
        case "+":
            equalPressed = false;
            if (number2 === 0){
                symbol = "+";
                number2 = number1;
                number1 = 0;
                strnumber1 = "";
                display.innerHTML = number2 + "+";
            }else {
                result = calculate(symbol);
                display.innerHTML = result + "+";
                number2 = result;
                strnumber1 = "";
                number1 = 0;

            }
            dotPressed=false;
            break
        case "-":
            equalPressed = false;
            if (number2 === 0){
                symbol = "-";
                number2 = number1;
                number1 = 0;
                strnumber1 = "";
                display.innerHTML = number2 + "-";
            }else {
                result = calculate(symbol);
                display.innerHTML = result + "-";
                number2 = result;
                strnumber1 = "";
                number1 = 0;

            }
            dotPressed=false;
            break
        case "=":
            checker = display.innerHTML;

            for (let i = 0; i<checker.length; i++){
                if (checker[i] === "+" || checker[i] === "-" || checker[i] === "*" || checker[i] === "/"){
                    symbol = checker[i];
                }
            }
            result = calculate(symbol);
            number2 = result;
            display.innerHTML = result;

            if (symbol  === "*" || symbol === "/"){
                number1=1;
                strnumber1="1";
            }else {
                number1=0;
                strnumber1="";
            }
            equalPressed = true;
            console.log("Number1:  " + number1);
            console.log("Number2:  " + number2);
            console.log("StrNumber1:  " + strnumber1);

            break
    }
}

function logNumber(){
    switch (this.textContent) {
        case ".":
            if(!dotPressed){
                if (number1 === 0){
                    display.innerHTML = display.innerHTML + "0";
                }
                equalPressed = false;
                display.innerHTML = display.innerHTML + ".";
                strnumber1 = strnumber1 + ".";
                dotPressed = true;
            }


            break
        case "1":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "1";
            strnumber1 = strnumber1 + "1";

            break
        case "2":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "2";
            strnumber1 = strnumber1 + "2";

            break
        case "3":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "3";
            strnumber1 = strnumber1 + "3";
            break
        case "4":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "4";
            strnumber1 = strnumber1 + "4";
            break
        case "5":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "5";
            strnumber1 = strnumber1 + "5";
            break
        case "6":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "6";
            strnumber1 = strnumber1 + "6";
            break
        case "7":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "7";
            strnumber1 = strnumber1 + "7";
            break
        case "8":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "8";
            strnumber1 = strnumber1 + "8";
            break
        case "9":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "9";
            strnumber1 = strnumber1 + "9";

            break
        case "0":
            equalPressed = false;
            display.innerHTML = display.innerHTML + "0";
            strnumber1 = strnumber1 + "0";

            break
        default:
            return
    }
    number1 = parseFloat(strnumber1);

}

function clearAll(){
    display.innerHTML = "";
    number1 = 0;
    number2 = 0;
    strnumber1 = "";
    strnumber2 = "";
    symbol = "";
    equalPressed = false;
    dotPressed = false;

}
function calculate(operand){
    if (operand === "/"){
        result = number2 / number1;
    }
    if (operand === "*"){
        result = number1 * number2;
    }
    if (operand === "+"){
        result = number1 + number2;
    }
    if (operand === "-"){
        result = number2 - number1;
    }
    return result;
}
