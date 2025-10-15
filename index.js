const express = require('express')
const route = require("./route/route");
const cors =require("cors")


const { default: mongoose } = require('mongoose')
require('dotenv').config(); // Load .env file
const app = express ();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(() => {console.log("mongoDb is connected")})
.catch(err => console.log(err))

app.use('/', route);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Express app running on port ${PORT}`);
});