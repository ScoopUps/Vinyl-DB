//----IMPORTS----
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const albumsRouter = require('./routes/albums');
const path = require('path');
const methodOverride = require('method-override');

//create instance of express in app variable
const app = express();

//configure views to views folder and set views engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//----PORTS----
const PORT = process.env.PORT || 3000;

//----MIDDLEWARE----
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
//express middleware to reference static public folder for styling
app.use(express.static('public'));


//----ROUTES----
app.use('/albums', albumsRouter);

app.get('/', (req,res) => {
  res.render('index', {
    message: "Welcome to Vinyl",
    tagline: "The DB for your LP",
  });
});

//----LISTENERS----
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`)
})
