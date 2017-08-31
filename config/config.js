//set up database configuration export module

//this database is either at a URL or set up locally at a host/port
module.exports = process.env.DATABASE_URL || {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'vinyl_albums_dev',
};
