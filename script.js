let divDest = document.querySelector('.container');
let currentInput = ''; // Armazena o número ou texto digitado no momento
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
    // Se o botão clicado for um número
    if (!isNaN(button)) {
        currentInput += button; // Adiciona o número ao input atual
        display.value = currentInput; // Atualiza a tela da calculadora
    } else if (button === 'C') {
        // Limpa os inputs e a tela
        currentInput = '';
        previousInput = '';
        operator = '';
        display.value = '';
    } else if (button === '=') {
        // Calcula o resultado quando "=" é clicado
        if (currentInput && previousInput && operator) {
            const result = calculate(Number(previousInput), Number(currentInput), operator);
            display.value = result;
            previousInput = result;
            currentInput = '';
        }
    } else {
        // Caso um operador seja clicado
        operator = button;
        previousInput = currentInput; // Armazena o valor anterior
        currentInput = ''; // Limpa o input atual para o próximo número
    }
}
function calculate(a, b, operator) {
    
}

calculatorGrid();