export type NotificationId = string;
export type NotificationItem = {
  id: NotificationId,
  timeout: number,
  text: string,
  type: string
}
export type NotificationType = 'error' | 'success' | 'warn' | 'info';

export type Notification = {
  text: string,
  type: NotificationType,
}
export type NotificationState = NotificationItem[];
