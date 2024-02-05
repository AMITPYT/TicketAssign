const express = require("express");
require("./db/connection");
const Ticket = require("./router/ticket");
const User = require("./router/user");


const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());


app.use(Ticket, User)



app.listen(port, () => {
    console.log(`connection is setup at localhost:${port}`)
})