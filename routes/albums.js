//import express
const express = require('express');
//import album controller module
const controller = require('../controllers/albumController');
//import views from views controller module
const views = require('../controllers/viewsController');

//invoke the album router
const albumsRouter = express.Router();

//router based on specific ids
albumsRouter.route('/:id')
  .get(controller.showOne)
  .put(controller.update)
  .delete(controller.destroy);

//router based on collections
albumsRouter.route('/')
  .get(controller.show, views.showAlbums, views.show404)
  .post(controller.create);

//exporting the router module
module.exports = albumsRouter;
