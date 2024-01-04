import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`mongodb error: ${error}`);
  }
};

export default connectDB;
