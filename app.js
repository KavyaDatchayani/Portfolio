const express = require("express");
require('dotenv').config();
const app = express();

app.use(express.static("public"));




app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
});


const port = 3000;

app.listen(port, () => {
    console.log("Iam listening to Port 3000, Do your work!");
})