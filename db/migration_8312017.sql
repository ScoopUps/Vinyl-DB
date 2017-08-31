\c vinyl_albums_dev;

DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
        id SERIAL PRIMARY KEY,
    artist VARCHAR(64),
     album VARCHAR(255),
 condition INT NOT NULL DEFAULT 2,
date_added TIMESTAMP NOT NULL DEFAULT NOW()
);
