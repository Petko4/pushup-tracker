export interface DayCardProps {
  date: Date;
  records?: Record[];
}

export interface Record {
  timestamp: string;
  count: number;
}

export default function DayCard({ date, records }: DayCardProps) {
  return (
    <div className="h-40 w-40 rounded-sm border border-gray-500">
      <p>{date.getDate()}</p>
      {records &&
        records.map((rec, index) => (
          <p key={index}>
            {rec.timestamp} - {rec.count}
          </p>
        ))}
    </div>
  );
}
