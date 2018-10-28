CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

create table public.user (
	id SERIAL PRIMARY KEY,
	email VARCHAR(500),
	name VARCHAR(100),
	google_id VARCHAR(500),
	token VARCHAR(1000),
	refreshToken VARCHAR(1000),
	image_url VARCHAR(1000),
	pathbinder_folder_id VARCHAR(1000),
	documents_folder_id VARCHAR(1000),
	sqlite_file_id VARCHAR(1000),
	UNIQUE(google_id)
);