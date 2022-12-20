import Head from 'next/head'
import InitialButtons from '../components/buttons/InitialsButtons';
import LandingPage from '../components/LandingPage/LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Arkano</title>
        <meta name="description" content="Arkano Indumentary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LandingPage/>
        <InitialButtons initial={true}/>
      </div>
    </>
  );
};
