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
