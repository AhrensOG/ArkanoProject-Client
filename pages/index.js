import Head from 'next/head';
// import ControlBar from '../components/controlBar/ControlBar.jsx';
import AddButton from '../components/cardButtons/AddButton.jsx';
// import ReverseButton from '../components/cardButtons/ReverseButton.jsx';

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
        <ControlBar/>
        <AddButton/>
        <ReverseButton/>
      </div>
    </>
  );
};
