CREATE TABLE "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar(100) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
