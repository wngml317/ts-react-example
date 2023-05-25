import express from "express";
import dotenv from "dotenv";
import Router from "./router/index";
import bodyParser from "body-parser";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", Router);

app.use(express.static(path.join(__dirname, "../dist")));
app.get("/*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});  


app.listen(PORT, () => {
    console.log(`⚡ Server is running at http://localhost:${PORT}`)
})