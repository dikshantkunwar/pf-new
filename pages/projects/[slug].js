import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import projects from "../../db/projects";

export default function Projects() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  const project = projects.find((project) => {
    return project.slug === slug;
  });
  console.log(project);

  return (
    <div className="container">
      <Head>
        <title>{project.name} | Projects | My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="main-title">{project.name}</h1>

        <p className="main-description">{project.description}</p>
      </main>

      <Footer />
    </div>
  );
}
