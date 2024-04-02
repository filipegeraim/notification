import { Content } from '@/components';
import NotificationListView from './NotificationList';
import NotificationAction from './NotificationAction';

export default function NotificationContainerView() {
  return (
    <Content
      title={'Notification'}
      subtitle={`Here's a list of all your notifications!`}
      actions={<NotificationAction />}
    >
      <NotificationListView />
    </Content>
  );
}
