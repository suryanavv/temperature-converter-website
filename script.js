function convertTemperature() {
    const unit = document.getElementById("temperatureUnit").value;
    const temperature = parseFloat(document.getElementById("temperatureValue").value);

    if (isNaN(temperature)) {
        alert("Please enter a valid temperature!");
        return;
    }

    let convertedTemperature, resultUnit;
    if (unit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        resultUnit = "°F";
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultUnit = "°C";
    }

    document.getElementById("result").textContent = `${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
