CREATE TABLE `hymns` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`lyrics` text,
	`created_at` text DEFAULT 'Fri Apr 12 2024 14:29:55 GMT+0800 (Philippine Standard Time)' NOT NULL,
	`updated_at` text,
	`deleted_at` text
);
