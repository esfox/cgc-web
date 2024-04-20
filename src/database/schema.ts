import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const hymns = sqliteTable('hymns', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title'),
  lyrics: text('lyrics'),
  createdAt: text('created_at').notNull().default(new Date().toString()),
  updatedAt: text('updated_at'),
  deletedAt: text('deleted_at'),
});