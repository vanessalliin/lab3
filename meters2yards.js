// Make a function that *converts* **metres** to **yards**
function metresToYards(metres) {
    let yards = metres * 1.09361; // 1 meter = 1.09361 yards
    return `${metres} metres is ${yards.toFixed(2)} yards.`; 
}

// Test cases
console.log(metresToYards(100));  // Expected: "100 metres is 109.36 yards."
console.log(metresToYards(50));   // Expected: "50 metres is 54.68 yards."
console.log(metresToYards(1));    // Expected: "1 metres is 1.09 yards."
