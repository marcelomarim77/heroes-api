CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO heroes(name) VALUES('Dr Nice');
INSERT INTO heroes(name) VALUES('Narco');
INSERT INTO heroes(name) VALUES('Bombasto');
INSERT INTO heroes(name) VALUES('Celeritas');
INSERT INTO heroes(name) VALUES('Magneta');
INSERT INTO heroes(name) VALUES('RubberMan');
INSERT INTO heroes(name) VALUES('Dynama');
INSERT INTO heroes(name) VALUES('Dr IQ');
INSERT INTO heroes(name) VALUES('Magma');
INSERT INTO heroes(name) VALUES('Tornado');

select * from heroes
