import Head from "next/head";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-primary text-secondary">
      <Head>
        <title>Anubhav | Front-end Developer</title>
        <meta
          name="description"
          content="Anubhav Dixit Personal Portfolio"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Hero />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}
