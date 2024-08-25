const mongoose = require("mongoose");
const taskModel = require("../Model/taskModel") 
const connectDB = async () => {
    try {
        const connect = mongoose.connect("mongodb://localhost:27017/tsm2");
        console.log("server is connected");
    }
    catch(error)
    {
        console.log("error detcted : ",error.message);
        process.exit();
    };
    
}
module.exports = connectDB;