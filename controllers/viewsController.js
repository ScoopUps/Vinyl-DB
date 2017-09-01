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
}

};
