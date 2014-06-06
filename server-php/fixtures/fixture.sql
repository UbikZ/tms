CREATE TABLE translate_key 
(
	id INTEGER PRIMARY KEY NOT NULL ,
 	name VARCHAR NOT NULL ,
  	description VARCHAR NOT NULL 
);

CREATE TABLE locale
(
	id INTEGER PRIMARY KEY NOT NULL,
	locale_name VARCHAR NOT NULL
);

CREATE TABLE translate_key_tl_locale
(
	id_transkey INTEGER NOT NULL,
	id_locale INTEGER NOT NULL,
	value VARCHAR NOT NULL,
	FOREIGN KEY(id_transkey) REFERENCES tms.translate_key(id),
	FOREIGN KEU(id_locale) REFERENCES tms.locale(id)
);
