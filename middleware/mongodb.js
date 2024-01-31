import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  try {
    if (mongoose.connections[0]?.readyState) {
      return handler(req, res);
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Connected to MongoDB');
    return handler(req, res);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default connectDB;



// import mongoose from "mongoose";

// const connectDB = (handler) => async (req, res) => {
//   try {
//     if (mongoose.connections[0]?.readyState) {
//       return handler(req, res);
//     }

//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Connected to MongoDB');
//     return handler(req, res);
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// export default connectDB;
