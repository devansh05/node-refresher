ALTER TABLE "books" DROP CONSTRAINT "books_email_unique";--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "books" DROP COLUMN "email";