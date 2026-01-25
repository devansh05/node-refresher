CREATE INDEX "author_name_idx" ON "authors" USING btree ("name");--> statement-breakpoint
CREATE INDEX "author_email_idx" ON "authors" USING btree ("email");--> statement-breakpoint
CREATE INDEX "books_name_idx" ON "books" USING btree ("name");--> statement-breakpoint
CREATE INDEX "books_email_idx" ON "books" USING btree ("email");