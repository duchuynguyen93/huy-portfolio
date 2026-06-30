import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <header className="section__head">
        <span className="section__idx">03</span>
        <h2>The stack</h2>
      </header>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.title} className="skillgroup">
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
