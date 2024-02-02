// pages/api/getAllCars.js
import connectDB from '../../middleware/mongodb';
import Car from '../../models/Car';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      // Fetch all cars from the database
      const allCars = await Car.find();

      // Respond with the list of cars
      res.status(200).json(allCars);
    } catch (error) {
      console.error('Error fetching cars:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default connectDB(handler);
