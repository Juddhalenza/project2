DROP DATABASE IF EXISTS nasa_db;
CREATE DATABASE nasa_db;

-- USE nasa_db;

-- CREATE TABLE users (
--     id INTEGER(11) NOT NULL AUTO_INCREMENT,
--     username VARCHAR(255) NOT NULL,
--     pass VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- );


-- CREATE TABLE fave_pics (
--     id INTEGER(11) NOT NULL AUTO_INCREMENT,
--     username VARCHAR(255) NOT NULL,
--     pic_link VARCHAR(255) NOT NULL,
--     userid INTEGER NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (userid) REFERENCES users(id)
-- );

-- SELECT * FROM users;
-- SELECT * FROM fave_pics;