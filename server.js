//-----------import des dependances--------------------------------
const express = require('express');
const cors = require('cors');
const app = express();
//---------------import des fichiers de configuratons-----------------
require ("dotenv").config({path: "./config/.env"});
require("./config/Db");

app.use(cors());
app.use(express.json())

//---------------import des routes---------------------------------
app.use('/api' , require("./routes/Routes"))

app.get("/",(res,req)=>{
    res.send("OUR API");
})
//---------------création du SERVER----------------------------
port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`Server Running : ${port}`);
});