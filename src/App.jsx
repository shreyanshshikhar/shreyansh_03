import Navbar from './components/Navbar';
import Home from './components/Home';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Home />
        <Technologies />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
