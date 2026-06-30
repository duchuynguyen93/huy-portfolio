import { profile } from "../data/content";

const links = [
  { href: "#principles", label: "Principles" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#interests", label: "Curiosities" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav__brand">
        <span className="nav__mark">ndh</span>
        <span className="nav__name">{profile.name}</span>
      </a>
      <nav className="nav__links">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a className="nav__cta" href={`mailto:${profile.email}`}>
        Get in touch
      </a>
    </header>
  );
}
