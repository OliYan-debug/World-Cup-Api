import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import * as dotenv from "dotenv";
import nationsRouter from "./routes/nationsRouter.js"

dotenv.config();
const port = process.env.PORT || 2001;
const mongoURL = process.env.mongoURL;
const app = express();
mongoose.connect(mongoURL);
const db = mongoose.connection;

db.on("error", (error) => console.log("Ops! " + error))
db.once("open", () => console.log("Connected to database", db.name))

app.use(cors())
app.use("/", nationsRouter)

app.get("/", (req, res) => {
    res.send("You should try /all or /brasil to see how it works")
  
  })
app.listen(port, ()=>{
    console.log("Server running on port ", port)
})