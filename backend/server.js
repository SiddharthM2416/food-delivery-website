const express = require("express")
const cors = require("cors")
const { connectDB } = require("./config/db.js")
const foodRouter = require("./routes/foodRoute.js")


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

