import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hc');
    console.log(hiddenElements);
  
    // Observer options: increase threshold for more scrolling
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