// Make a function that *calculates* **the volume** of an **equilateral triangle prism**
function equilateralTrianglePrismVolume(sideLength, prismLength) {
    let baseArea = (Math.sqrt(3) / 4) * Math.pow(sideLength, 2); // Triangle area formula
    let volume = baseArea * prismLength; // Volume = base area * prism length

    return `An equilateral triangle prism with side length ${sideLength} meters and flat edge length ${prismLength} meters has a volume of ${volume.toFixed(2)} cubic meters.`;
}

// Test cases
console.log(equilateralTrianglePrismVolume(5, 10)); // Expected: Some volume value
console.log(equilateralTrianglePrismVolume(3, 7));  // Expected: Some smaller volume
console.log(equilateralTrianglePrismVolume(8, 15)); // Expected: Larger volume
