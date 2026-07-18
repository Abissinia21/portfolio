 const display = document.getElementById('display');
 const buttons = document.querySelectorAll('button');

let currentInput ="";
let firstNumber = null;
let operator = null;


 buttons.forEach(btn =>{
    btn.addEventListener('click', () => {
        const value = btn.textContent;
        if( value === "C"){
            display.value ="";
            currentInput ="";
            firstNumber =null;
            operator =null;
        }
        else if(value === "X"){
            currentInput  = currentInput.slice(0,-1);
        display.value = currentInput;
        }

            else if(value === "+" || value === "-" || value === "*" || value === "/"){
                firstNumber = Number(currentInput);
                operator = value;
                currentInput ="";
            }
            else if (value ==="=")
            {
                let secondNumber = Number(currentInput);
                let result =0 ;
                switch(operator){
                    case "+":
                        result = firstNumber + secondNumber;
                        break;
                    case "-":
                        result = firstNumber - secondNumber;
                        break;
                    case "*":
                        result = firstNumber * secondNumber;
                        break;
                    case "/":
                        result = firstNumber / secondNumber;
                        break;
                }
                display.value = result;
                currentInput = result.toString();
                operator = null;
                firstNumber = null;
            }
            else {
                currentInput += value;
                display.value = currentInput;
            }
        
        })
 })