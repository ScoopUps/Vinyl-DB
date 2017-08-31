//----IMPORTS----
const express = require('express');
const logger = require('morgan');

//create instance of express in app variable
const app = express();

//----PORTS----
const PORT = process.env.PORT || 3000;

//----MIDDLEWARE----
app.use(logger('dev'));

//----ROUTES----
app.get('/', (req,res) => {
  res.send(`<h1>Hello!!!</h1>`);
});

//----LISTENERS----
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`)
})
