//import model object
const albumDB = require('../models/albumDB');

//export album controller module with methods
module.exports = {

//controller method to show all items
show(req,res,next){
  albumDB.findAll()
    .then((albums) => {
      res.json({
        message: 'ok',
        data: albums,
      });
      next();
    })
    .catch(err => next(err));
},

//controller method to post a new item
create(req,res,next){
  albumDB.create(req.body)
    .then((album) => {
      res.json({
        message: 'added successfully',
        data: album,
      });
      next();
    })
    .catch(err => next(err));
},

//controller method to show one item by id
showOne(req, res, next){
  albumDB.findById(req.params.id)
    .then((album) => {
      res.json({
        message: 'ok',
        data: album,
      });
      next();
    })
    .catch(err => next(err));
},

//controller method to update one item by id
update(req, res, next){
  albumDB.update(req.params.id)
    .then((album) => {
      res.json({
        message: 'updated successfully',
        data: album,
      });
      next();
    })
    .catch(err => next(err));
},

//controller method to delete one item by id
destroy(req, res, next){
  albumDB.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'deleted successfully',
      });
      next();
    })
    .catch(err => next(err));
},


};
