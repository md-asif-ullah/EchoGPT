import mongoose from "mongoose";

type Connection = {
  isConnected?: number;
};

const connected: Connection = {};

const connectToDB = async () => {
  if (connected.isConnected) {
    console.log("Database is already connected");
    return;
  }

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error("MONGO_URI is not defined in the environment variables");
    return;
  }

  try {
    const db = await mongoose.connect(mongoUri);
    connected.isConnected = db.connections[0].readyState;

    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB: ", error);
  }
};

export default connectToDB;
