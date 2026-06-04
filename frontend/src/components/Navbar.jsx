import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutme" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">

        {/* Left */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
          <p className="text-teal-300 text-sm font-semibold tracking-wide">
            Online
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex relative gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-xl shadow-lg">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-teal-400 rounded-full -z-10 shadow-[0_0_20px_rgba(45,212,191,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className={isActive ? "text-black" : ""}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 text-3xl"
          onClick={() => setOpen(true)}
        >
          <HiMenu />
        </button>

        {/* Right (Desktop Only) */}
        <div className="hidden md:block text-gray-400 text-sm">
          Riley.dev
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center gap-6 md:hidden"
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-3xl text-gray-300"
            onClick={() => setOpen(false)}
          >
            <HiX />
          </button>

          {/* Mobile Links */}
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-2xl font-semibold transition ${
                  isActive ? "text-teal-400" : "text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
