import Head from "next/head";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Me | My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="main-title">About me</h1>

        <p className="main-description">This is the about me page</p>
      </main>

      <Footer />
    </div>
  );
}
