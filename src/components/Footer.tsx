import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__cta">
        <h2>
          Building something <span className="accent">ambitious</span>?
        </h2>
        <p>I'm most useful where product thinking meets real engineering. Let's talk.</p>
        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
      <div className="footer__meta">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
