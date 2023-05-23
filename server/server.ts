import express from "express";
import dotenv from "dotenv";
import Router from "./router/index";
import bodyParser from "body-parser";
import path from "path";
import { dbConnect } from "./connect/connect";

dotenv.config();
// dbConnect()

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "../dist")));
app.get("/api", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});  

app.use("/api", Router);

app.listen(PORT, () => {
    console.log(`⚡ Server is running at http://localhost:${PORT}`)
})