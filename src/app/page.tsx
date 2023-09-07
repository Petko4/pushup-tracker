import DayCard from "@/components/DayCard";
import Month from "@/components/Month";
import Week from "@/components/Week";
import { authOptions } from "@/lib/auth";
import { getUserTrackRecords } from "@/lib/dataService";
import { TrackRecord } from "@/lib/types";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  let trackRecords: TrackRecord[] = [];

  if (session?.user?.id) {
    trackRecords = await getUserTrackRecords(session.user.id);
  }

  if (!session) {
    return <Link href="/api/auth/signin">Log in</Link>;
  }

  return (
    <main>
      <div className="flex justify-center">
        <Month
          dateInMonth={new Date(2023, 7, 15)}
          trackRecords={trackRecords}
        />
      </div>
    </main>
  );
}
