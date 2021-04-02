import mongoose from "mongoose";
import config from "config";

const db = config.get("connection_url");

const connectDB = async () => {
    try {
        await mongoose
            .connect(db, {
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