import { timeline } from "../data/profile";

export default function Timeline() {
  return (
    <section id="parcours">
      <h2>Parcours</h2>
      <div className="timeline">
        {timeline.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p className="meta">{item.meta}</p>
            {item.points.length > 0 && (
              <ul>{item.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
