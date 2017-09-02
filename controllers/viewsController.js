//export views controller module
module.exports = {

show404(err, req, res, next){
  res.sendStatus(404);
},

show406(err, req, res ,next){
  res.sendStatus(406);
},

showAlbums(req, res){
  res.render('albums/album-show', {
  data: res.locals.albums,
  });
},

showOneAlbum(req, res){
  res.render('albums/album-single', {
    data: res.locals.album,
  });
},

handleCreate(req, res){
  res.redirect('/albums');
},

handleUpdate(req,res){
  res.redirect(`/albums/${req.params.id}`);
},

handleDelete(req,res){
  res.redirect('/albums');
},

showAlbumAddForm(req, res){
  res.render('albums/album-add');
},

showAlbumEditForm(req,res){
  res.render('albums/album-edit', {
    data: res.locals.album,
  });
},

};
