const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

console.log(totalBatteries); // Optional: To verify the result
