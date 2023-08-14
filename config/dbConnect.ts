import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    if (process.env.CONNECTION_STRING) {
      const connect = await mongoose.connect(process.env.CONNECTION_STRING);
      console.log(
        "Database connected: ",
        connect.connection.name,
        connect.connection.host
      );
    }
  } catch (err) {
    console.log(err);
    process.exit(-1);
  }
};
