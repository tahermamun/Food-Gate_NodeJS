/*
* Title: Food-Gate Web Application
* Description: Food Blog Web Application
* Author: Taher Mamun
* Date: 31/08-2021
*/


// external imports
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')



// internal imports
const userRouter = require('./app/routers/userRouter')
const adminRouter = require('./app/routers/adminRouter')


const app = express()
dotenv.config()





// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));



// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engin
app.set('view engine', 'ejs')


// set static folder
app.use(express.static(__dirname +'/public'))
// app.use('/stylesheets', express.static('public/stylesheets'))


// parse cookies


// routing setup
app.use('/', userRouter)
app.use('/admin', adminRouter)




// app listener
app.listen(process.env.PORT, () => {
  console.log('App listening to port ' + process.env.PORT);
})