import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import BlockLoader from './components/BlockLoader';

function App() {
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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const startTime = Date.now(); // Record the start time

      try {
        const response = await axios.get(
          "https://purabmodi.pythonanywhere.com/api/portfolio/"
        );
        const elapsedTime = Date.now() - startTime; // Time taken for the request
        const remainingTime = Math.max(3000 - elapsedTime, 0); // Ensure at least 1s delay

        setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, remainingTime);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <BlockLoader />;

  return (
    <div className="App dark:bg-gray-900">
      <div>
        <Navbar />
        <Home data={data} />
      </div>
      <Footer />
    </div >
  );
}

export default App;