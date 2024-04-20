import { db } from '@/database/connection';
import { users } from '@/database/models';
import { isNull } from 'drizzle-orm';

export default async function Page() {
  const usersData = await db.query.users.findMany({
    where: isNull(users.deletedAt),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(usersData, null, 2)}</pre>
    </main>
  );
}
