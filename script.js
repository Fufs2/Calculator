let divDest = document.querySelector('.container');
let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function calculatorGrid() {
    const buttons = [
        '7', '8', '9', '/', 
        '4', '5', '6', '*', 
        '1', '2', '3', '-', 
        '0', 'C', '=', '+'
    ];

    buttons.forEach(button => {
        let newDiv = document.createElement('div');
        let newDivBtn = document.createElement('button');
        newDivBtn.textContent = button;
        newDiv.className = 'box';
        
        let squareSize = 400 / 4;
        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;
        
        divDest.appendChild(newDiv);
        newDiv.appendChild(newDivBtn);
        
        newDivBtn.addEventListener('click', () => handleButtonClick(button));
    });
}

function handleButtonClick(button) {
    if (!isNaN(button)) {
        currentInput += button;
        display.value = currentInput;
    } else if (button === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.value = '';
    } else if (button === '=') {
        if (currentInput && previousInput && operator) {
            const result = calculate(Number(previousInput), Number(currentInput), operator);
            display.value = result;
            previousInput = result;
            currentInput = '';
        }
    } else {
        operator = button;
        previousInput = currentInput;
        currentInput = '';
    }
}

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Erro'; // Evitar divisão por zero
        default:
            return 0;
    }
}

calculatorGrid();