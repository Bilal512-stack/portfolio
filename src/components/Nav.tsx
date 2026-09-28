import { profile } from "../data/profile";

export default function Nav() {
  return (
    <nav>
      <strong>{profile.name}</strong>
      <div>
        <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
        <a href="#parcours">Parcours</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
