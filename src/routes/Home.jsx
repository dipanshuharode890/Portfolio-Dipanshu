import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/ProjectsGrid';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceTimeline />
      <ContactForm />
    </>
  );
};

export default Home;
