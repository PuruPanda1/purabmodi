import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Events from './components/Project';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import JoinForm from './components/JoinForm';

function App() {
  return (
    <div className="App dark:bg-gray-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<JoinForm />} />
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
