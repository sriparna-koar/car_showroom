// pages/api/editCar.js
import connectDB from '../../middleware/mongodb';
import Car from '../../models/Car';

const handler = async (req, res) => {
  if (req.method === 'PUT') {
    const { id, name, direction, color, year } = req.body;

    try {
      if (!id || !name || !direction || !color || !year) {
        return res.status(400).json({ message: 'All fields are required' });
      }

 
      const existingCar = await Car.findById(id);

      if (!existingCar) {
        return res.status(404).json({ message: 'Car not found' });
      }

      
      existingCar.name = name;
      existingCar.direction = direction;
      existingCar.color = color;
      existingCar.year = year;

      // Save the updated car to the database
      await existingCar.save();

      // Respond with a success message
      res.status(200).json({ message: 'Car updated successfully', data: existingCar });
    } catch (error) {
      console.error('Error updating car:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default connectDB(handler);
