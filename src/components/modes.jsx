import sunIcon from '../assets/sun.svg'
import moonIcon from '../assets/moon.svg'
import { useState, useEffect } from 'react';

function Modes() {
  const [dark, setDark] = useState(false);
  const [iconSrc, setIconSrc] = useState(sunIcon);

  function toggle() {
    const newMode = !dark;
    setDark(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light'); // ✅ Save manual choice
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setDark(savedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      setIconSrc(sunIcon);
    } else {
      document.documentElement.classList.remove('dark');
      setIconSrc(moonIcon);
    }
  }, [dark]);

  return (
    <div>
      <img
        src={iconSrc}
        alt=""
        onClick={toggle}
        className="w-[25px] cursor-pointer transition duration-300 dark:invert brightness-1"
      />
    </div>
  );
}

export default Modes;
