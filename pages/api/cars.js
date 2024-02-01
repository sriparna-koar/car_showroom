// import connectDB from '../../middleware/mongodb';
// import Car from '../../models/Car';

// const handler = async (req, res) => {
//   if (req.method === 'POST') {
//     const { name, direction,color, year} = req.body;

//     try {
//       const newCar = new Car({ name, direction,color, year});
//       await newCar.save();
//       res.status(201).json({ message: 'Car added successfully' });
//     } catch (error) {
//       console.error('Error saving car:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// };

// export default connectDB(handler);
// api/cars.js
import connectDB from '../../middleware/mongodb';
import Car from '../../models/Car';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, direction, color, year } = req.body;

    try {
      // Validate that all required fields are present
      if (!name || !direction || !color || !year) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Create a new car instance
      const newCar = new Car({ name, direction, color, year });

      // Save the new car to the database
      await newCar.save();

      // Respond with a success message
      res.status(201).json({ message: 'Car added successfully', data: newCar });
    } catch (error) {
      console.error('Error saving car:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default connectDB(handler);
