export interface User {
  id: string;
  email: string;
  emailVerified?: Date;
  name?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TrackRecord {
  id: string;
  userId: string;
  count: number;
  createdAt: Date;
  updatedAt: Date;
}
