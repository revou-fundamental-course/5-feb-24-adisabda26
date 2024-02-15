const tempForm = document.getElementById('tempForm');
const resultContainer = document.getElementById('resultContainer');
const resultText = document.getElementById('resultText');
const calculationText = document.getElementById('calculationText');

tempForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    let result, calculation;

    if (unitSelect === 'celsius') {
        result = `${tempInput} Celsius is ${(tempInput * 9/5) + 32} Fahrenheit.`;
        calculation = `(${tempInput} × 9/5) + 32 = ${(tempInput * 9/5) + 32}`;
    } else {
        result = `${tempInput} Fahrenheit is ${(tempInput - 32) * 5/9} Celsius.`;
        calculation = `(${tempInput} - 32) × 5/9 = ${(tempInput - 32) * 5/9}`;
    }

    resultText.textContent = result;
    calculationText.textContent = calculation;
    resultContainer.classList.remove('hidden');
});
