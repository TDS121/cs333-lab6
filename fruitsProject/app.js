import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
console.log("Connected to MongoDB");

// A schema is the shape every fruit must have
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// A model uses the schema. "Fruit" becomes the "fruits" collection
const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({ name: "Apple", rating: 7, review: "Pretty solid as a fruit." });
// await fruit.save();
await Fruit.insertMany([
  { name: "Oranges", rating: 5, review: "Not too keen on then" },
  { name: "Date", rating: 8, review: "Good for a boost of energy" },
  { name: "Watermelon", rating: 8, review: "Sweet and includes a lot of water" },
]);

console.log("Saved 3 fruits");

const fruits = await Fruit.find();
for (const f of fruits) {
  console.log(f.name, f.rating);
}

await mongoose.connection.close();
