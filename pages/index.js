import Head from 'next/head';
import { CalContainer, Header } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tip Calculator</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <Header />
        <CalContainer />
      </main>
    </div>
  );
}
