// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>Dipanshu Harode | Frontend Developer</title>
        <meta
          name="description"
          content="Self-taught React developer building clean UIs and fast web experiences."
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
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
