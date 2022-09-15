export interface IVideo {
  meetingName: string,
  length: number, // seconds in format h:m:s
  nrOfParticipants: number,
  score: number,
  date: Date, // linux timestamp
  videoUrl: string
}
