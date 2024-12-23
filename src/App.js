import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
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