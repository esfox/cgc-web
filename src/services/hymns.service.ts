import { eq, isNull } from 'drizzle-orm';
import { db } from '../database/connection';
import { hymns } from '../database/schema';
import type { NewHymnType } from '../database/types';

export const hymnsService = {
  list() {
    return db.select().from(hymns).where(isNull(hymns.deletedAt));
  },
  create(newHymn: NewHymnType) {
    return db.insert(hymns).values(newHymn).returning();
  },
  delete(hymnId: number) {
    return db.delete(hymns).where(eq(hymns.id, hymnId)).returning();
  },
};
