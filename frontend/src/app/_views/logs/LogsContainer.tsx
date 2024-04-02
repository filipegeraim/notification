import { Content } from '@/components';
import LogsList from '@/app/_views/logs/LogsList';

export default function LogsContainer() {
  return (
    <Content title={'Logs'} subtitle={`Here's a list of all your logs!`}>
      <LogsList />
    </Content>
  );
}
