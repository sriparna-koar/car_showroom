import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0]?.readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,  // Remove this line, as it's deprecated
      useUnifiedTopology: true,  // Remove this line, as it's deprecated
      useCreateIndex: true,  // Add this line to use the new index creation system
      useFindAndModify: false,  // Add this line to use the new findOneAndUpdate method
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

export default connectDB;
