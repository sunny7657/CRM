import Label from './components/Label';

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <Label state="active">Active</Label>
      <Label state="notActive">Not Active</Label>
    </main>
  );
}
