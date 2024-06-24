import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/StatusLabel';
import AddCompanyButton from './components/AddCompanyButton';
import ServerComponent from './components/ServerComponent';
import ClientComponent from './components/ClientComponent';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent />
    </main>
  );
}
