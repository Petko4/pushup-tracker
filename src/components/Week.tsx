import DayCard from "./DayCard";

interface WeekProps {}

export default function Week({}: WeekProps) {
  const records = [
    {
      date: new Date(),
      records: [
        { timestamp: "10:00", count: 10 },
        { timestamp: "11:00", count: 9 },
        { timestamp: "15:00", count: 5 },
      ],
    },
  ];

  return (
    <>
      {records.map((record, index) => (
        <DayCard key={index} date={record.date} records={record.records} />
      ))}
    </>
  );
}
