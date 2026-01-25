DROP INDEX "author_name_idx";--> statement-breakpoint
DROP INDEX "author_email_idx";--> statement-breakpoint
DROP INDEX "books_name_idx";--> statement-breakpoint
DROP INDEX "books_email_idx";--> statement-breakpoint
CREATE INDEX "author_name_idx" ON "authors" USING gin ("name" gin_trgm_ops);--> statement-breakpoint
CREATE INDEX "author_email_idx" ON "authors" USING gin ("email" gin_trgm_ops);--> statement-breakpoint
CREATE INDEX "books_name_idx" ON "books" USING gin ("name" gin_trgm_ops);--> statement-breakpoint
CREATE INDEX "books_email_idx" ON "books" USING gin ("email" gin_trgm_ops);