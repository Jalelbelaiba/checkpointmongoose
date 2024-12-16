const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
app.use("/api",require("./routes/userRoutes"))



mongoose.connect("mongodb+srv://jaleljalel:jaleljalel@cluster0.ntraq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("data base connected"))





const PORT = 5000
app.listen(PORT,()=> console.log("my server is running on port",PORT))