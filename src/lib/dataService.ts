import { prisma } from "./prisma";
import { TrackRecord } from "./types";

export async function getUserTrackRecords(
  id: string
): Promise<Array<TrackRecord>> {
  const records = await prisma.trackRecord.findMany({
    where: {
      userId: id,
    },
  });
  return records;
}
