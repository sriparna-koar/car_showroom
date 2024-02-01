// pages/api/cars/deleteCar.js
import connectDB from '../../middleware/mongodb';
import Car from '../../models/Car';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'DELETE') {
    const { name, direction } = req.body;

    try {
      // Find and delete the car by name and location
      const deletedCar = await Car.findOneAndDelete({ name, direction });

      if (!deletedCar) {
        return res.status(404).json({ message: 'Car not found' });
      }

      return res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
      console.error('Error deleting car:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
