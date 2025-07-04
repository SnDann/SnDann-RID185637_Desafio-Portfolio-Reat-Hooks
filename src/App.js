import './App.css';
import './GlobalStyle.css';
import Skills from './Skills';
import WelcomeMessage from './WelcomeMessage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', background: 'rgba(255,255,255,0.85)', borderRadius: 24, boxShadow: '0 4px 32px rgba(0,0,0,0.10)', margin: '40px 0 32px 0', padding: 48, maxWidth: 700, width: '100%' 
    }}>
      <h1 style={{fontSize: '3rem', color: '#2563eb', marginBottom: 8, fontWeight: 700, letterSpacing: 1}}>Daniel Pereira da Cruz</h1>
      <h2 style={{fontSize: '1.7rem', color: '#444', marginBottom: 20, fontWeight: 500}}>Desenvolvedor Full Stack</h2>
      <p style={{maxWidth: 520, textAlign: 'center', color: '#555', marginBottom: 32, fontSize: '1.15rem', lineHeight: 1.6}}>
        Transformo ideias em soluções digitais. Experiência em sistemas médicos, foco em usabilidade e paixão por tecnologia. Sempre aprendendo e evoluindo.
      </p>
      <div style={{display: 'flex', gap: 20}}>
        <a href="/curriculo.pdf" download style={{background: '#2563eb', color: '#fff', padding: '12px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(37,99,235,0.10)'}}>
          <FaEnvelope size={20} /> Currículo
        </a>
        <a href="https://github.com/SnDann" target="_blank" rel="noopener noreferrer" style={{background: '#fff', color: '#2563eb', padding: '12px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.1rem', border: '2px solid #2563eb', boxShadow: '0 2px 8px rgba(37,99,235,0.07)'}}>
          <FaGithub size={22} /> GitHub
        </a>
      </div>
    </section>
  );
}

function SectionContainer({ children }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', width: '100%'
    }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionContainer>
        <Hero />
      </SectionContainer>
      <SectionContainer>
        <About />
      </SectionContainer>
      <SectionContainer>
        <Projects />
      </SectionContainer>
      <SectionContainer>
        <Skills />
      </SectionContainer>
      <SectionContainer>
        <Contact />
      </SectionContainer>
    </div>
  );
}

export default App;
