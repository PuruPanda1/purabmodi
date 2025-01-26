import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

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
    axios.get("http://127.0.0.1:8000/api/portfolio/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

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