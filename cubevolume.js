// Make a function that *calculates* **the volume** of a **cube**
function cubeVolume(edgeLength) {
    let volume = Math.pow(edgeLength, 3); // Volume formula: V = edge³
    return `A cube with an edge length of ${edgeLength} meters has a volume of ${volume.toFixed(2)} cubic meters.`;
}

// Test cases
console.log(cubeVolume(3));  // Expected: "A cube with an edge length of 3 meters has a volume of 27.00 cubic meters."
console.log(cubeVolume(5));  // Expected: "A cube with an edge length of 5 meters has a volume of 125.00 cubic meters."
console.log(cubeVolume(1));  // Expected: "A cube with an edge length of 1 meters has a volume of 1.00 cubic meters."
