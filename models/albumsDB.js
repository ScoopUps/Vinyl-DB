//import PG-promise module
const pgp = require('PG-promise')();
//import database configuration
const db = require('../config/config');

//export albums DB model with methods
module.exports = {
  //method to select all from db
  findAll(){
    return db.many(
    `SELECT artist, album, condition
    FROM albums
    `);
  },

  //method to insert new items into db
  create(album){
    return db.one(
      `INSERT INTO albums
      (artist, album, condition)
      VALUES
      ($/artist/, $/album/, $/condition/)
      RETURNING *
      `, album);
  },

  //method to select from db by id
  findById(id){
    return db.one(
      `SELECT artist, album, condition
      FROM albums
      WHERE id = $1
      `, id);
  },

  //method to update items in db by id
  update(album){
    return  db.one(
      `UPDATE albums
      SET
      artist = $/artist/,
      album = $/album/,
      condition = $/condition/
      `, album);
  },

  //method to delete items from db by id
  destroy(id){
    return db.none(
      `DELETE
      FROM albums
      WHERE id = $1
      `, id);
  },
};
