const express = require('express');
const connectDB = require('./config/db');

//create server
const app = express();


//DB connection
connectDB();

//app PORT
const port = process.env.PORT || 4000

//enable to read body values
app.use(express.json());

//app routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'));
app.use('/api/links', require('./routes/links'))

//start the app
app.listen(port, '0.0.0.0', ()=>{
    console.log(`Server listening at port ${port}`)
});