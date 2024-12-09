export type ActivityType = 'Chat' | 'Call' | 'Coffee' | 'Beer' | 'Meeting' | 'list';

export interface Activity {
  id: string;
  content: string;
  timestamp: Date;
  user: string;
  type: ActivityType;
}