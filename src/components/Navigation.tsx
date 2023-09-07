import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
export default async function Navigation() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between bg-green-100 align-middle p-2">
      <UserProfileCard
        username={session?.user?.name}
        avatarUrl={session?.user?.image}
      />
      <Link href="/api/auth/signout">Log out</Link>
    </nav>
  );
}

interface UserProfileProps {
  username: string;
  avatarUrl: string;
}
function UserProfileCard({ username, avatarUrl }: UserProfileProps) {
  return (
    <div>
      <Image
        src={avatarUrl}
        width={50}
        height={50}
        alt="User profile picture"
        className="border-2 rounded-full border-green-300"
      />
      <span className="text-green-300  font-bold">{username}</span>
    </div>
  );
}
