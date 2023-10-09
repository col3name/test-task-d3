import {NotificationId} from "../../../features/notification/model";

export type NotificationProps = {
  removeNotification: (id: NotificationId) => void,
  timeout?: number,
  id: NotificationId,
  text: string,
  type: string,
}
