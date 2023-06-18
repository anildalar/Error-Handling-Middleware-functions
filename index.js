//const something = require(somelibarry);
const express = require('express');

const app = express();
require('dotenv').config();



//Lets define the first home route
//app.METHOD(PATH, HANDLER)


app.use((err,req,res,next)=>{
    if (err) {
        next(err) // Pass errors to Express.
    } else {
        //res.send(data)
        res.status(500).send('Something went wrong');
    }
    //throw new Error('BROKEN123');
    // Express will catch this on its own.
    //console.error(err.stack)
    
});

app.get('/',(req, res, next) => {
    setTimeout(() => {
      try {
        throw new Error('BROKEN')
      } catch (err) {
        next(err)
      }
    }, 100)
  },(req,res)=>{
    res.send('Everything is ok');
});

//object.method()

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`The server is listening on ${PORT}`)
});