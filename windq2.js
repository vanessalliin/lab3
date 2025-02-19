// Make a function that *categorizes* **windspeed** using the **Beaufort Wind Scale**
function windSpeedToBeaufortDescription(speed) {
    let description;

    if (speed < 1) {
        description = "Calm";
    } else if (speed <= 5) {
        description = "Light Air";
    } else if (speed <= 11) {
        description = "Light Breeze";
    } else if (speed <= 19) {
        description = "Gentle Breeze";
    } else if (speed <= 28) {
        description = "Moderate Breeze";
    } else if (speed <= 38) {
        description = "Fresh Breeze";
    } else if (speed <= 49) {
        description = "Strong Breeze";
    } else if (speed <= 61) {
        description = "Near Gale";
    } else if (speed <= 74) {
        description = "Gale";
    } else if (speed <= 88) {
        description = "Strong Gale";
    } else if (speed <= 102) {
        description = "Storm";
    } else if (speed <= 117) {
        description = "Violent Storm";
    } else {
        description = "Hurricane";
    }

    return `At ${speed} km/h, the wind is classified as: ${description}.`;
}

// Test cases
console.log(windSpeedToBeaufortDescription(0));   // Expected: "Calm"
console.log(windSpeedToBeaufortDescription(7));   // Expected: "Light Breeze"
console.log(windSpeedToBeaufortDescription(25));  // Expected: "Moderate Breeze"
console.log(windSpeedToBeaufortDescription(55));  // Expected: "Near Gale"
console.log(windSpeedToBeaufortDescription(90));  // Expected: "Storm"
console.log(windSpeedToBeaufortDescription(130)); // Expected: "Hurricane"
