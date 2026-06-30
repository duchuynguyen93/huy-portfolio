import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Principles from "./components/Principles";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Principles />
        <Projects />
        <Skills />
        <Interests />
      </main>
      <Footer />
    </>
  );
}
