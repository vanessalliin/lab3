// Make a function that *converts* **Kelvin** to **Fahrenheit**
function kelvinToFahrenheit(kelvin) {
    let fahrenheit = (kelvin - 273.15) * 9/5 + 32; // Conversion formula
    return `${kelvin}K is ${fahrenheit.toFixed(2)}°F.`; 
}

// Test cases
console.log(kelvinToFahrenheit(273.15)); // Expected: "273.15K is 32.00°F." (Freezing point of water)
console.log(kelvinToFahrenheit(300));    // Expected: "300K is 80.33°F."
console.log(kelvinToFahrenheit(0));      // Expected: "0K is -459.67°F." (Absolute zero)
