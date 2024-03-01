import  express  from "express";
import cors from 'cors';

const app = express();

app.use(cors());

app.listen(3000, (req, res) => {
    console.log("Hello");
},)

app.get("/", (req, res) => {
    res.send({text: "hello client!"});
})