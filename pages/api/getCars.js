

import connectDB from '../../middleware/mongodb';
import Car from "../../models/Car";

const handler = async (req, res) => {
  try {
    let cars;

    if (req.query.name) {
      // If a name query parameter is provided, filter by name
      cars = await Car.find({ name: req.query.name });
    } else {
      // If no name query parameter, retrieve all cars with color and year
      cars = await Car.find({}, 'name direction color year slug_id');
    }

    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default connectDB(handler);
