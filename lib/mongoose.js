import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("Can Not Found MongoDB URL");
  if (isConnected) return console.log("Already Connected To DB");

  try {
              await mongoose.connect(process.env.MONGODB_URL);
              isConnected = true;
              console.log("Connected To DB");
  } catch (error) {
              console.log("Failed To Connect To DB : " , error);
  }
}; 