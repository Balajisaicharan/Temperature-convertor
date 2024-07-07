function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(temperature)) {
        document.getElementById('result').innerHTML = '<p>Please enter a valid number.</p>';
        return;
    }

    if (unit === 'C') {
        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = temperature + 273.15;
    } else if (unit === 'F') {
        celsius = (temperature - 32) * 5 / 9;
        fahrenheit = temperature;
        kelvin = (temperature - 32) * 5 / 9 + 273.15;
    } else if (unit === 'K') {
        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
        kelvin = temperature;
    }

    document.getElementById('result').innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;
}
