import { type InferInsertModel } from 'drizzle-orm';
import { type hymns } from './schema';

export type NewHymnType = InferInsertModel<typeof hymns>;
