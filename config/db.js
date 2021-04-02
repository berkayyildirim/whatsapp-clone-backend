import mongoose from "mongoose";
import config from "config";
import dotenv from "dotenv";

// const db = config.get("connection_url");
dotenv.config()
const connection_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.o3f44.mongodb.net/whatsappdb?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        await mongoose
            // .connect(db, {
            .connect(connection_url, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;