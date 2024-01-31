// import mongoose from 'mongoose';

// const connectDB = async () => {
//   if (mongoose.connections[0]?.readyState) return;

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error('MongoDB Connection Error:', error);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mongoose from "mongoose";
const connectDB=handler=>async(req,res)=>{
    if(mongoose.connections[0].readyState){
return handler(req,res)
    }
    await mongoose.connect(process.env.MONGODB_URI)
    return handler(req,res);
}
export default connectDB;  