import Head from "next/head";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="main-title">Welcome to my portfolio</h1>

        <p className="main-description">This is the home page</p>
      </main>

      <Footer />
    </div>
  );
}
