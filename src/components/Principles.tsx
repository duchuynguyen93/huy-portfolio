import { principles } from "../data/content";

export default function Principles() {
  return (
    <section id="principles" className="section">
      <header className="section__head">
        <span className="section__idx">01</span>
        <h2>How I work</h2>
      </header>
      <div className="principles">
        {principles.map((p, i) => (
          <article key={p.title} className="principle">
            <span className="principle__num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
