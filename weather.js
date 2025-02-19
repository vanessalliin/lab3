// Make a function that *suggests* **clothing** based on **temperature** and **humidity**
function clothingSuggestion(temperature, humidity) {
    let suggestion;

    if (temperature >= 30) {
        suggestion = "Wear light, breathable clothing like shorts and a t-shirt.";
        if (humidity > 70) suggestion += " Also, consider moisture-wicking fabrics.";
    } else if (temperature >= 20) {
        suggestion = "A light outfit, such as jeans and a t-shirt, is perfect.";
        if (humidity > 70) suggestion += " Avoid thick fabrics as it may feel sticky.";
    } else if (temperature >= 10) {
        suggestion = "A long-sleeve shirt or light sweater with pants should be comfortable.";
        if (humidity < 30) suggestion += " Consider a moisturizer to prevent dry skin.";
    } else if (temperature >= 0) {
        suggestion = "Wear a warm sweater and a jacket.";
        if (humidity > 70) suggestion += " A waterproof layer may help if it's damp.";
    } else {
        suggestion = "Bundle up with a heavy coat, gloves, and a hat.";
        if (humidity < 50) suggestion += " Also, consider a scarf to keep warm.";
    }

    return `At ${temperature}°C with ${humidity}% humidity, ${suggestion}`;
}

// Test cases
console.log(clothingSuggestion(35, 80));  // Expected: Light clothing, moisture-wicking fabrics
console.log(clothingSuggestion(22, 50));  // Expected: Light outfit, jeans and t-shirt
console.log(clothingSuggestion(12, 20));  // Expected: Long-sleeve or light sweater, consider moisturizer
console.log(clothingSuggestion(5, 85));   // Expected: Warm sweater, jacket, waterproof layer
console.log(clothingSuggestion(-5, 40));  // Expected: Heavy coat, gloves, scarf
