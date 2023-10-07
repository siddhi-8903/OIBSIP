const degreeInput = document.querySelector("#degree");
const tempTypeSelect = document.querySelector("#temp-type");
const convertButton = document.querySelector("#convert-button");
const resultText = document.querySelector(".temp h3");

let result = degreeInput.value;

function convertTemperature() {
    const inputValue = parseFloat(degreeInput.value)
    if (tempTypeSelect.value === "fahrenheit") {
        result = (inputValue * 9) / 5 + 32;
        resultText.innerText = `Your Result is ${result.toFixed(2)} F`;
    } else if (tempTypeSelect.value === "kelvin") {
        result = inputValue + 273.15;
        resultText.innerText = `Your Result is ${result.toFixed(2)} K`;
    } else {
        resultText.innerText = `Your Result is ${inputValue} °C`;
    }
}

function handleConversion() {
    const inputValue = parseFloat(degreeInput.value);
    if (!isNaN(inputValue)) {
        convertTemperature();
    } else {
        resultText.innerText = "Please Enter A Valid Number";
    }
}

convertButton.addEventListener("click", handleConversion);