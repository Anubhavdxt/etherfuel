import Head from 'next/head';

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className=" text-secondary bg-gradient-to-r from-primary/75 via-slate-50 to-tertiary/70">
      <Head>
        <title>EtherFuel | Fuel your EV with Crypto</title>
        <meta
          name="description"
          content="EtherFuel User Platform"
        />
        <link
          rel="icon"
          href="/favicon.svg"
        />
      </Head>
      <Hero />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}
