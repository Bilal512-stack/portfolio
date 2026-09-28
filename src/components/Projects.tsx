import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { profile } from "../data/profile";

function Cover({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  if (project.image && !failed) {
    return (
      <div className="cover">
        <img src={project.image} alt={`Aperçu du projet ${project.title}`} onError={() => setFailed(true)} />
      </div>
    );
  }
  return (
    <div className="cover" aria-hidden="true">
      <div className="chrome"><i /><i /><i /></div>
      <div className="name">{project.title}</div>
    </div>
  );
}

export default function Projects() {
  const github = `https://github.com/${profile.githubUser}`;
  return (
    <section id="projets">
      <h2>Projets</h2>
      <div className="projects">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <Cover project={p} />
            <div className="body">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
              {(p.repo || p.demo) && (
                <div className="links">
                {p.demo && <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer">Voir le site</a>}
                </div>
              )}
            </div>
          </article>
        ))}
        <article className="card more">
          <div className="body" style={{ justifyContent: "center" }}>
            <h3>Autres projets</h3>
            <p>Le reste de mon travail est sur GitHub.</p>
            <div className="links">
              <a className="link" href={github} target="_blank" rel="noopener noreferrer">Ouvrir GitHub</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
