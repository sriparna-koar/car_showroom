import connectDB from '../../middleware/mongodb';
import Car from '../../models/Car';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, direction } = req.body;

    try {
      const newCar = new Car({ name, direction });
      await newCar.save();
      res.status(201).json({ message: 'Car added successfully' });
    } catch (error) {
      console.error('Error saving car:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default connectDB(handler);
