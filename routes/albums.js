//import express
const express = require('express');
//import album controller module
const controller = require('../controllers/albumController');


//invoke the album router
const albumsRouter = express.Router();

//router based on specific ids
albumsRouter.route('/:id')
  .get(controller.showOne)
  .put(controller.update)
  .delete(controller.destroy);

//router based on collections
albumsRouter.route('/')
  .get(controller.show)
  .post(controller.create);

//exporting the router module
module.exports = albumsRouter;
