const express = require('express');
require('dotenv').config();  //used to get env file

const app = express();

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});