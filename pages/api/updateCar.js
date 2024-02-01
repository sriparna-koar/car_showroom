const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Update a car by ID
router.put('/updateCar/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the car by ID
    const existingCar = await Car.findById(id);

    if (!existingCar) {
      return res.status(404).json({ error: 'Car not found' });
    }

    // Update the car details
    existingCar.name = req.body.name;
    existingCar.direction = req.body.direction;
    existingCar.color = req.body.color;
    existingCar.year = req.body.year;

    // Save the updated car
    const updatedCar = await existingCar.save();

    res.json(updatedCar);
  } catch (error) {
    console.error('Error updating car:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
