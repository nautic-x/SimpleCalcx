
let display = document.getElementById('display')
let currentInput = ''
let currentOperator = ''
let prevValue = 0


function appendToDisplay(value){
    currentInput += value;
    display.innerText = currentInput;
}


function clearDisplay(){
    currentInput = ''
    currentOperator = ''
    prevValue = 0
    display.innerText = '0'
}


function calculateResult() {
    const calc = eval(currentInput);
    display.innerHTML = calc;
}

 clearDisplay();

