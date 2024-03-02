import  express  from "express";
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
mongoose.connect("mongodb://localhost/todoDB")
.then(() => {
    console.log("Connected to MongoDB!")
})
.catch(e => {
    console.log(`Unable to connect to MongoDB.\nError: ${e}`)
})

app.use(cors());

app.listen(3000, (req, res) => {
    console.log("Server Initialized!");
})

app.get("/", (req, res) => {
    res.json({text: "Hello Client!"})
})