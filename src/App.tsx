import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { profile } from "./data/profile";

export default function App() {
  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </div>
  );
}
