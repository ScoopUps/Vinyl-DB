//set up database configuration export module

//this database is either at a URL or set up locally at a host/port
module.exports = process.env.DATABASE_URL || {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'vinyl_albums_dev',
};

// const pgp = require('pg-promise')();

// let db;

// if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
//   db = pgp({
//     database: 'vinyl_albums_dev',
//     port: 5432,
//     host: 'localhost',
//   });
// } else if (process.env.NODE_ENV === 'production') {
//   db = pgp(process.env.DATABASE_URL);
// }

// module.exports = db;
