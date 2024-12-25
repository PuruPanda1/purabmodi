import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect } from 'react';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hc');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Trigger the animation when 50% of the element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
    });

    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });


  return (
    <div className="App dark:bg-gray-900">
      <div>
        <Navbar />
        <Home /> {/* Directly rendering the Home component */}
      </div>
      <Footer />
    </div >
  );
}

export default App;