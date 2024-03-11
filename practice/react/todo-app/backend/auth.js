import  express, { urlencoded }  from "express";
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();
app.use(urlencoded({extended: false}))

app.listen(4000, () => {
    console.log("Auth Server started at port 4000")
})

app.post("/auth/signup", (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
})