import { useEffect, useMemo, useState } from "react";
import "./ThemeToggle.css";

const themes = [
  {
    id: "",
    label: "Ocean",
    color: "#14b8a6",
    description: "Cool teal glow",
  },
  {
    id: "theme-aurora",
    label: "Aurora",
    color: "#22c55e",
    description: "Green night sky",
  },
  {
    id: "theme-purple",
    label: "Nebula",
    color: "#a855f7",
    description: "Purple space haze",
  },
  {
    id: "theme-amber",
    label: "Sunset",
    color: "#f59e0b",
    description: "Warm orange glow",
  },
  {
    id: "theme-rose",
    label: "Rose",
    color: "#f43f5e",
    description: "Pink neon bloom",
  },
  {
    id: "theme-dark",
    label: "Midnight",
    color: "#38bdf8",
    description: "Deep blue contrast",
  },
];


function getStoredTheme() {
  const storedTheme = localStorage.getItem("theme") || "";

  return themes.some((theme) => theme.id === storedTheme) ? storedTheme : themes[0].id;
}

function applyTheme(id) {
  const doc = document.documentElement;

  Array.from(doc.classList)
    .filter((className) => className.startsWith("theme-"))
    .forEach((className) => doc.classList.remove(className));

  if (id) {
    doc.classList.add(id);
  }
}

export default function ThemeToggle() {
  const [selectedTheme, setSelectedTheme] = useState(getStoredTheme);

  useEffect(() => {
    applyTheme(selectedTheme);
  }, [selectedTheme]);

  const activeTheme = useMemo(
    () => themes.find((theme) => theme.id === selectedTheme) || themes[0],
    [selectedTheme],
  );

  function handleThemeChange(event) {
    const nextTheme = event.target.value;
    setSelectedTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <label className="theme-picker" title={`Theme: ${activeTheme.label}`}>
      <span className="theme-picker__content"> 
      </span>
      <select
        className="theme-picker__select"
        value={selectedTheme}
        onChange={handleThemeChange}
        aria-label="Choose site colour theme"
      >
        {themes.map((theme) => (
          <option key={theme.label} value={theme.id}>
            {theme.label} — {theme.description}
          </option>
        ))}
      </select>
    </label>
  );
}
