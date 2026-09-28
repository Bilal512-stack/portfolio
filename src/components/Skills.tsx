import { skills } from "../data/profile";

export default function Skills() {
  return (
    <section id="competences">
      <h2>Compétences</h2>
      <div className="skills">
        {skills.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
