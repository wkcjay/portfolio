import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
