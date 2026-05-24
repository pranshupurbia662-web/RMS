import mongoose from "mongoose";

const connectDB = async () => {

  if (mongoose.connections[0].readyState) {
    return;
  }

  try {

    await mongoose.connect(process.env.MONGO_URI, {

      serverSelectionTimeoutMS: 30000,

    });

    console.log("MongoDB Connected");

  } catch (error) {

    console.log("MongoDB Error:", error);

  }

};

export default connectDB;