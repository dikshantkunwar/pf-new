import Head from "next/head";
import Link from "next/link";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import projects from "../db/projects";
import projectStyles from "./projects.module.css";

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Selected Projects | My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="main-title">Selected projects</h1>

        <p className="main-description">This is the projects page</p>

        <div>
          <section className={projectStyles.list}>
            {projects.map((project) => (
              <div key={project.name} className={projectStyles.listItem}>
                <h2 className={projectStyles.name}>{project.name}</h2>
                <p className={projectStyles.description}>
                  {project.description}
                </p>
                <div>
                  <Link href={`/projects/${project.slug}`}>View</Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
