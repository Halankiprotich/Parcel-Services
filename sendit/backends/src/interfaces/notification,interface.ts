export interface NotificationI {
  id: string;
  subject?: string;
  message: string;
  isRead: boolean;
  sentAt?: Date;
  parcelId?: string;
  createdAt: Date;
}