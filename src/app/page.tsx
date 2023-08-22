"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

// async function getUsers() {
//   const users = await prisma.user.findMany();
//   console.log(users);
//   return users;
// }

export default function Home() {
  // const users = await getUsers();
  const { data: session, status } = useSession();

  if (!session || !status) {
    return <Link href="/api/auth/signin">Log in</Link>;
  }

  return (
    <main>
      <div>
        <h1>{session?.user?.name}</h1>
      </div>
      <div>
        <Link href="/api/auth/signout">Log out</Link>
      </div>
    </main>
  );
}
