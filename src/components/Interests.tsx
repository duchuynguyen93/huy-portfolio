import { interests } from "../data/content";

export default function Interests() {
  return (
    <section id="interests" className="section">
      <header className="section__head">
        <span className="section__idx">04</span>
        <h2>Curiosities</h2>
      </header>
      <p className="interests__lead">
        Off the clock I'm usually pulling something apart to see how it works.
      </p>
      <ul className="interests">
        {interests.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
