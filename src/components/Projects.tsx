import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <header className="section__head">
        <span className="section__idx">02</span>
        <h2>Selected work</h2>
      </header>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <div className="project__top">
              <h3>{p.name}</h3>
              <span className={`badge badge--${p.status.toLowerCase()}`}>{p.status}</span>
            </div>
            <p className="project__short">{p.short}</p>
            <p className="project__desc">{p.description}</p>
            <ul className="project__tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {p.link && (
              <a className="project__link" href={p.link} target="_blank" rel="noreferrer">
                View ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
