const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Connection/connectDB");

const cors = require("cors");

const app = express();

const corsOptions = {
    origin : "http://localhost:3001",
    method: "GET,  POST, PUT, DELETE",
    credentials : true
}
app.use(cors(corsOptions));
app.use(express.json());
const router = require("./Router/router");

app.use('/', router);

connectDB();


app.listen(3000, () => {
    console.log("server is running on port no 3000");
})