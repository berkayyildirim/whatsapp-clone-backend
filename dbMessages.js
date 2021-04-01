import mongoose from "mongoose";

// message
// name
// time

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model("messagecontents", whatsappSchema)