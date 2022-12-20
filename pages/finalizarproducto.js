import Head from 'next/head'
import EndingPage from '../components/EndingPage/EndingPAge';

export default function Ending() {
return (
    <>
        <Head>
            <title>Arkano</title>
            <meta name="description" content="Arkano Indumentary" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <EndingPage/>
        </div>
    </>
    );
};
