const mongoose = require('mongoose');

// Check if the model already exists before defining it
const Car = mongoose.models.Car || mongoose.model('Car', {
  name: { type: String, required: true },
  direction: { type: String, required: true },
});

module.exports = Car;
