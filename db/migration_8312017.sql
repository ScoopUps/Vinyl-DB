\c vinyl_albums_dev;

DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS favorites;

CREATE TABLE albums (
        id SERIAL PRIMARY KEY,
    artist VARCHAR(64),
     album VARCHAR(255),
 condition INT NOT NULL DEFAULT 2,
date_added TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE favorites (
        id SERIAL PRIMARY KEY,
album_name VARCHAR(255),
  favorite BOOLEAN NOT NULL
)
