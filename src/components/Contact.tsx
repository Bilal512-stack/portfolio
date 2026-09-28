import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Travaillons ensemble</h2>
      <p>
        Je suis basé à {profile.location}, et je parle français et anglais. Écrivez-moi pour un stage,
        une mission ou un projet.
      </p>
      <div className="btns">
        <a className="btn main" href={`mailto:${profile.email}`}>Envoyer un email</a>
        <a className="btn" href={`https://github.com/${profile.githubUser}`} target="_blank" rel="noopener noreferrer">
          Voir mon GitHub
        </a>
      </div>
    </section>
  );
}
