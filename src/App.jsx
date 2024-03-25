import './App.scss';
import Header from './Components/Header/header';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './Components/Hero/hero';
import Features from './Components/Features/features';
import About from './Components/About/about';
import Menu from './Components/Menu/menu';
import Take from './Components/Take/take';
import Testimonial from './Components/Testimonial/testimonial';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Hero />
        <Features />
        <About />
        <Menu />
        <Take />
        <Testimonial />
        <Contact />
        <Footer />
      </>
    </Router>
  );
}

export default App;