create table appuser (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	uname VARCHAR(50) NOT NULL unique,
    email VARCHAR(255) NOT NULL unique,
    upass varchar(255) NOT NULL
);

create table directmessage (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user1 INT references appuser(id),
    user2 INT references appuser(id),
    msg VARCHAR(1000) not null
);