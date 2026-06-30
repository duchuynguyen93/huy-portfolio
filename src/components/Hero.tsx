import { profile, stats } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">
        <span className="dot" /> {profile.role}
      </p>
      <h1 className="hero__title">
        I build products,
        <br />
        not just <span className="accent">features</span>.
      </h1>
      <p className="hero__lead">{profile.tagline}</p>
      <p className="hero__blurb">{profile.blurb}</p>

      <div className="hero__actions">
        <a className="btn btn--primary" href="#projects">
          See what I'm building
        </a>
        <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>

      <dl className="hero__stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
