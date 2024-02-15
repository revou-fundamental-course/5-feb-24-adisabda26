const tempForm = document.getElementById('tempForm');
const resultContainer = document.getElementById('resultContainer');
const resultText = document.getElementById('resultText');

tempForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    let result;

    if (unitSelect === 'celsius') {
        result = `${tempInput} Celsius is ${(tempInput * 9/5) + 32} Fahrenheit.`;
    } else {
        result = `${tempInput} Fahrenheit is ${(tempInput - 32) * 5/9} Celsius.`;
    }

    resultText.textContent = result;
    resultContainer.classList.remove('hidden');
});
