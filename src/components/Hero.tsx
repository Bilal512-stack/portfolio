import { profile } from "../data/profile";

const bars = [30, 55, 42, 78, 64, 100];

export default function Hero() {
  return (
    <header className="hero">
      <h1>{profile.name}</h1>
      <p>{profile.intro}</p>
      <div className="btns">
        <a className="btn main" href="#projets">Voir mes projets</a>
        <a className="btn" href="#contact">Me contacter</a>
      </div>
      <div className="bars" aria-hidden="true">
        {bars.map((h, i) => (
          <i key={i} style={{ height: `${h}%`, animationDelay: `${0.05 * (i + 1)}s` }} />
        ))}
      </div>
    </header>
  );
}
