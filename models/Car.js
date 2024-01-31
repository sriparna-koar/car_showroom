
const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true },
  direction: { type: String, required: true },
  color: { type: String, required: true },
  year: { type: Number, required: true },
});

const Car = mongoose.models.Car || mongoose.model('Car', CarSchema);

module.exports = Car;
