//import express
const express = require('express');
//import album controller module
const controller = require('../controllers/albumController');
//import views from views controller module
const views = require('../controllers/viewsController');

//invoke the album router
const albumsRouter = express.Router();

//router to edit a prepopulated form
albumsRouter.get('/:id/edit', controller.showOne, views.showAlbumEditForm, views.show404);

//router to add item with empty form
albumsRouter.get('/new', views.showAlbumAddForm);

//router to show favorites
albumsRouter.get('/favorites', controller.showFavorites, views.showFavorites, views.show404)

//router based on specific ids
albumsRouter.route('/:id')
  .get(controller.showOne, views.showOneAlbum, views.show404)
  .put(controller.update, views.handleUpdate, views.show406)
  .delete(controller.destroy, views.handleDelete, views.show404);

//router based on collections
albumsRouter.route('/')
  .get(controller.show, views.showAlbums, views.show404)
  .post(controller.create, views.handleCreate, views.show406);

//exporting the router module
module.exports = albumsRouter;
