const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/queries", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const userScheme = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model("Register", userScheme);
