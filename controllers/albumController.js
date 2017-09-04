//import model object
const albumDB = require('../models/albumsDB');

//export album controller module with methods
module.exports = {

//controller to populate an empty album form
makeBlankAlbum(req,res){
  res.json({
    id: null,
    artist: null,
    album: null,
    condition: null,
  });
},

//controller method to show all items
show(req,res,next){
  albumDB.findAll()
    .then((albums) => {
      res.locals.albums = albums;
      //function to represent condition integer as a symbol character
      albums.forEach((el) => {
        if (el.condition === 3){
          el.condition = '\ud83d\udc4d';
        }if(el.condition === 2){
          el.condition = '\ud83d\udc4c';
        }if(el.condition === 1){
          el.condition = '\ud83d\udc4e';
        }
      });
      next();
    })
    .catch(err => next(err));
},

//controller method to post a new item
create(req,res,next){
  albumDB.create(req.body)
    .then((album) => {
      res.locals.album = album;
      next();
    })
    .catch(err => next(err));
},

//controller method to show one item by id
showOne(req, res, next){
  albumDB.findById(req.params.id)
    .then((album) => {
      res.locals.album = album;
      if (album.condition === 3){
          album.condition = '\ud83d\udc4d';
        }if(album.condition === 2){
          album.condition = '\ud83d\udc4c';
        }if(album.condition === 1){
          album.condition = '\ud83d\udc4e';
        }
      next();
    })
    .catch(err => next(err));
},

//controller method to update one item by id
update(req, res, next){
  albumDB.update(req.body, req.params.id)
    .then((album) => {
      res.locals.album = album;
      next();
    })
    .catch(err => next(err));
},

//controller method to delete one item by id
destroy(req, res, next){
  albumDB.destroy(req.params.id)
    .then(() => next())
    .catch(err => next(err));
},


};
