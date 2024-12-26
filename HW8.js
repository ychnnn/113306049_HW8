document.getElementById('calculate-btn').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;

    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Invalid input';
    } else {
        switch (operation) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 === 0) {
                    result = 'Division by zero is not allowed';
                } else {
                    result = number1 / number2;
                }
                break;
            default:
                result = 'Invalid operation';
        }
    }

    document.getElementById('result').innerText = `Result = ${typeof result === 'number' ? result.toFixed(2) : result}`;
});

