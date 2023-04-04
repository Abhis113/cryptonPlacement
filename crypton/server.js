const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const errorHandler = require("./middleWare/errorMiddleWare");
const cookieParser = require("cookie-parser");

const app = express();


app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api/users",userRoute)



app.get("/", (req, res) => {
    res.send("Home Page")
})


app.use(errorHandler)

const PORT = process.env.PORT || 7000

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    })
})