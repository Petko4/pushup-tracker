import Image from "next/image";
import { prisma } from "@/lib/prisma";

async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
  return users;
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
