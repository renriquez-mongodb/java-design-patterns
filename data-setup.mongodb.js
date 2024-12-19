/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('design-patterns');

db.drivers.insertMany([
  { _id: 1, name: "John Doe", license: "A1234567", experience: 5 },
  { _id: 2, name: "Jane Smith", license: "B2345678", experience: 3 },
  { _id: 3, name: "Alice Johnson", license: "C3456789", experience: 7 },
  { _id: 4, name: "Bob Brown", license: "D4567890", experience: 2 },
  { _id: 5, name: "Charlie Davis", license: "E5678901", experience: 4 },
  { _id: 6, name: "Diana Evans", license: "F6789012", experience: 6 },
  { _id: 7, name: "Evan Foster", license: "G7890123", experience: 3 },
  { _id: 8, name: "Fiona Green", license: "H8901234", experience: 5 },
  { _id: 9, name: "George Harris", license: "I9012345", experience: 8 },
  { _id: 10, name: "Hannah Irving", license: "J0123456", experience: 1 },
  { _id: 11, name: "Ian Jackson", license: "K1234567", experience: 4 },
  { _id: 12, name: "Jackie King", license: "L2345678", experience: 2 },
  { _id: 13, name: "Kevin Lewis", license: "M3456789", experience: 6 },
  { _id: 14, name: "Laura Miller", license: "N4567890", experience: 3 },
  { _id: 15, name: "Mike Nelson", license: "O5678901", experience: 5 },
  { _id: 16, name: "Nina Owens", license: "P6789012", experience: 7 },
  { _id: 17, name: "Oscar Perez", license: "Q7890123", experience: 4 },
  { _id: 18, name: "Paula Quinn", license: "R8901234", experience: 2 },
  { _id: 19, name: "Quincy Roberts", license: "S9012345", experience: 6 },
  { _id: 20, name: "Rachel Scott", license: "T0123456", experience: 3 },
  { _id: 21, name: "Steve Turner", license: "U1234567", experience: 5 },
  { _id: 22, name: "Tina Underwood", license: "V2345678", experience: 7 },
  { _id: 23, name: "Ulysses Vance", license: "W3456789", experience: 4 },
  { _id: 24, name: "Victoria White", license: "X4567890", experience: 2 },
  { _id: 25, name: "Walter Xavier", license: "Y5678901", experience: 6 },
  { _id: 26, name: "Xena Young", license: "Z6789012", experience: 3 },
  { _id: 27, name: "Yvonne Zane", license: "A7890123", experience: 5 },
  { _id: 28, name: "Zachary Adams", license: "B8901234", experience: 7 },
  { _id: 29, name: "Aaron Baker", license: "C9012345", experience: 4 },
  { _id: 30, name: "Betty Carter", license: "D0123456", experience: 2 }
]);

db.equipments.insertMany([
  { _id: 1, type: "Truck", capacity: { value: 15, unit: "tons" }, fuelType: "Diesel", driver: { driverId: 1, name: "John Doe" }, axles: 2, route: "Route 66", status: "active", attributes: { color: "red", model: "Volvo", year: 2018, mileage: 120000, dimensions: { length: { value: 10, unit: "m" }, width: { value: 2.5, unit: "m" }, height: { value: 3, unit: "m" } } }, version: 2 },
  { _id: 2, type: "Truck", capacity: { value: 10, unit: "tons" }, fuelType: "Diesel", driver: { driverId: 2, name: "Jane Smith" }, axles: 2, route: "Route 101", status: "inactive", attributes: { color: "blue", model: "Scania", year: 2020, mileage: 80000, dimensions: { length: { value: 8, unit: "m" }, width: { value: 2.5, unit: "m" }, height: { value: 3, unit: "m" } } }, version: 2 },
  { _id: 3, type: "Train", cars: 2, capacity: { value: 100, unit: "tons" }, fuelType: "Electric", route: "Route 101", status: "active", attributes: { color: "green", model: "Siemens", year: 2015, mileage: 500000, dimensions: { length: { value: 50, unit: "m" }, width: { value: 3, unit: "m" }, height: { value: 4, unit: "m" } } }, version: 2 },
  { _id: 4, type: "Truck", capacity: { value: 20, unit: "tons" }, fuelType: "Diesel", driver: { driverId: 3, name: "Alice Johnson" }, axles: 3, route: "Route 66", status: "active", attributes: { color: "white", model: "Mercedes", year: 2019, mileage: 150000, dimensions: { length: { value: 12, unit: "m" }, width: { value: 2.5, unit: "m" }, height: { value: 3.5, unit: "m" } } }, version: 2 },
  { _id: 5, type: "Train", cars: 5, capacity: { value: 120, unit: "tons" }, fuelType: "Electric", route: "Route 66", status: "inactive", attributes: { color: "yellow", model: "Bombardier", year: 2017, mileage: 600000, dimensions: { length: { value: 55, unit: "m" }, width: { value: 3, unit: "m" }, height: { value: 4, unit: "m" } } }, version: 2 },
  { _id: 6, type: "Truck", capacity: "15 tons", fuelType: "Diesel", driver: { driverId: 1, name: "John Doe" }, axles: 2, route: "Route 66", status: "active", attributes: { color: "red", model: "Volvo", year: 2018, mileage: 120000, dimensions: ["10m", "2.5m", "3m"] }, version: 1 },
  { _id: 7, type: "Truck", capacity: "10 tons", fuelType: "Diesel", driver: { driverId: 2, name: "Jane Smith" }, axles: 2, route: "Route 101", status: "inactive", attributes: { color: "blue", model: "Scania", year: 2020, mileage: 80000, dimensions: ["8m", "2.5m", "3m"] }, version: 1 },
  { _id: 8, type: "Train", cars: 1, capacity: "100 tons", fuelType: "Electric", route: "Route 101", status: "active", attributes: { color: "green", model: "Siemens", year: 2015, mileage: 500000, dimensions: ["50m", "3m", "4m"] }, version: 1 },
  { _id: 9, type: "Truck", capacity: "20 tons", fuelType: "Diesel", driver: { driverId: 3, name: "Alice Johnson" }, axles: 3, route: "Route 66", status: "active", attributes: { color: "white", model: "Mercedes", year: 2019, mileage: 150000, dimensions: ["12m", "2.5m", "3.5m"] }, version: 1 },
  { _id: 10, type: "Train", cars: 6, capacity: "120 tons", fuelType: "Electric", route: "Route 66", status: "inactive", attributes: { color: "yellow", model: "Bombardier", year: 2017, mileage: 600000, dimensions: ["55m", "3m", "4m"] }, version: 1 },
]);

// Bucket Pattern: Grouping by Routes
db.routes.insertMany([
  { route: "Route 66", equipments: [1, 4, 6, 9], distance: 2450, stops: ["Chicago", "St. Louis", "Oklahoma City"] },
  { route: "Route 101", equipments: [2, 7, 8], distance: 1540, stops: ["Los Angeles", "San Francisco", "Seattle"] },
]);

// Time Series Collection: IoT Data for Temperature in Truck Container
db.createCollection("iotData", { timeseries: { timeField: "timestamp", metaField: "truckId", granularity: "hours" } });

const iotData = [];
for (let i = 0; i < 2000; i++) {
  const timestamp = new Date(Date.now() - i * 60000); // 1-minute intervals
  iotData.push({ truckId: Math.floor(i / 10) + 1, timestamp, temperature: Math.random() * 30, humidity: Math.random() * 100 });
}
db.iotData.insertMany(iotData);

// Example of reading with window function
db.iotData.aggregate([
  {
    $setWindowFields: {
      partitionBy: "$truckId",
      sortBy: { timestamp: 1 },
      output: {
        avgTemperature: { $avg: "$temperature", window: { documents: [-59, 0] } },
        avgHumidity: { $avg: "$humidity", window: { documents: [-59, 0] } }
      }
    }
  }
]);


