const express = require('express')
const route = require("./route/route");
const cors =require("cors")


const { default: mongoose } = require('mongoose')
const app = express ();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/portfolio_contact", {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
.then(() => {console.log("mongoDb is connected")})
.catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port' + (process.env.PORT || 3000))
});