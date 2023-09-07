import { TrackRecord } from "@prisma/client";
import DayCard, { DayCardProps, Record } from "./DayCard";

interface MonthProps {
  dateInMonth: Date;
  trackRecords: TrackRecord[];
}

export default async function Month({ dateInMonth, trackRecords }: MonthProps) {
  const dayCardsData: DayCardProps[] = createDayCardsData(
    dateInMonth,
    trackRecords
  );

  return (
    <div className="flex flex-wrap w-3/5">
      {dayCardsData.map((data) => (
        <DayCard key={data.date.getDay()} {...data} />
      ))}
    </div>
  );
}

function createDayCardsData(
  dateInMonth: Date,
  trackRecords: TrackRecord[]
): DayCardProps[] {
  const dayCardData: DayCardProps[] = [];

  const days = new Date(
    dateInMonth.getFullYear(),
    dateInMonth.getMonth(),
    0
  ).getDate();

  for (let i = 1; i <= days; i++) {
    dayCardData.push({
      date: new Date(dateInMonth.getFullYear(), dateInMonth.getMonth(), i),
      records: new Array<Record>(),
    });
  }

  trackRecords.forEach((trackRecord) => {
    const dayIndex = trackRecord.updatedAt.getDate() - 1;
    dayCardData[dayIndex].records?.push({
      timestamp: `${trackRecord.updatedAt.getHours()}:${trackRecord.updatedAt.getMinutes()}`,
      count: trackRecord.count,
    });
  });

  return dayCardData;
}
