// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';

function App() {
  return (
    <>
      <div className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors duration-300 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
