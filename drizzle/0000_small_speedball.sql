CREATE TABLE `emails` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`created_at` text,
	`updated_at` text,
	`canceled_at` text,
	`canceled_reason` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `emailIdx` ON `emails` (`name`);