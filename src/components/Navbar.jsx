import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { siteData } from '../data/siteData';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-zinc-900 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <Link to="/
        " className="text-lg font-bold tracking-wide">
          {siteData.name}
        </Link>
        <div className="flex gap-4 items-center">
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
          <ThemeToggle />
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white dark:bg-zinc-900 px-4 pb-4">
          <a href="#about" onClick={() => setOpen(false)} className="block py-2">About</a>
          <a href="#skills" onClick={() => setOpen(false)} className="block py-2">Skills</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block py-2">Projects</a>
          <a href="#experience" onClick={() => setOpen(false)} className="block py-2">Experience</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
