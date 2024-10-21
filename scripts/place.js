const temperatureElement = document.querySelector("#temperature");
const windElement = document.querySelector("#wind");
const windChillElement = document.querySelector("#windChill");

const temperatureCelsius = 18;
const windSpeedKm = 14

temperatureElement.innerHTML = `${temperatureCelsius} °C`;
windElement.innerHTML = `${windSpeedKm} km/h`;

let windChill = "N/A"
if (temperatureCelsius <= 10 && windSpeedKm > 4.8)
{
    windChill = `${calculateWindChill(temperatureCelsius, windSpeedKm)} °C`;
}
windChillElement.innerHTML = windChill;

function calculateWindChill(temperatureCelsius, windSpeedKm) {
    return (13.12 + (0.6215 * temperatureCelsius) - (11.37 * Math.pow(windSpeedKm, 0.16)) + (0.3965 * temperatureCelsius * Math.pow(windSpeedKm, 0.16))).toFixed(0);
}