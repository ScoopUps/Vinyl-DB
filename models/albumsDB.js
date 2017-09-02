//import PG-promise module
const pgp = require('PG-promise')();
//import database configuration
const dbConfig = require('../config/config');

//create instance of pgp referencing the db configuration
const db = pgp(dbConfig);

//export albums DB model with methods
module.exports = {
  //method to select all from db
  findAll(){
    return db.many(
    `SELECT artist, album, condition, id
    FROM albums
    ORDER BY artist
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
      `SELECT artist, album, condition, id
      FROM albums
      WHERE id = $1
      `, id);
  },

  //method to update items in db by id
  update(album, id){
    return db.one(
      `UPDATE albums
      SET
      artist = $1,
      album = $2,
      condition = $3
      WHERE id = $4
      RETURNING *
      `, [album.artist, album.album, album.condition, id]);
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
