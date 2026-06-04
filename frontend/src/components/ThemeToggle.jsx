import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const themes = [
  { id: "", label: "Light", color: "#ffffff" },
  { id: "theme-dark", label: "Dark", color: "#0b1220" },
  { id: "theme-green", label: "Green", color: "#16a34a" },
  { id: "theme-purple", label: "Purple", color: "#8b5cf6" },
  { id: "theme-amber", label: "Amber", color: "#f59e0b" },
  { id: "theme-rose", label: "Rose", color: "#ef4444" },
];

export default function ThemeToggle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "";
    const idx = themes.findIndex((t) => t.id === stored);
    setIndex(idx >= 0 ? idx : 0);
    applyTheme(stored);
  }, []);

  function applyTheme(id) {
    // remove all theme-* classes
    const doc = document.documentElement;
    Array.from(doc.classList)
      .filter((c) => c.startsWith("theme-"))
      .forEach((c) => doc.classList.remove(c));

    if (id) doc.classList.add(id);
  }

  function handleToggle() {
    const next = (index + 1) % themes.length;
    setIndex(next);
    const id = themes[next].id;
    applyTheme(id);
    localStorage.setItem("theme", id);
  }

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      title={`Theme: ${themes[index].label}`}
      aria-label={`Toggle theme (current: ${themes[index].label})`}
    >
      <span
        className="theme-dot"
        style={{ background: themes[index].color }}
        aria-hidden
      />
      <span className="theme-label">{themes[index].label}</span>
    </button>
  );
}
