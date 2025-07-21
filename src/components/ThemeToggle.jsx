import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    localStorage.getItem('theme') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setDark(!dark)}
      className="text-xl hover:text-indigo-600"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
