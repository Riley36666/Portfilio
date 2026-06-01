import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Background from "../components/Background";

export default function Projects() {
  const repos = [
    {
      name: "Password Manager",
      lang: "Python",
      desc: "Encrypted password manager with secure storage and CLI interface.",
      link: "/pythoncli",
      featured: true,
      stack: ["Python", "Encryption", "CLI"],
      internal: true
    },
    {
      name: "Portfolio",
      lang: "JavaScript",
      desc: "Personal portfolio built with React, Tailwind and smooth animations.",
      link: "https://github.com/Riley36666/Portfilio",
      stack: ["React", "Tailwind", "Framer Motion"]
    },
    {
      name: "Password Manager Web",
      lang: "TypeScript",
      desc: "Frontend interface for interacting with the password manager.",
      link: "/pythoncli",
      stack: ["TypeScript", "Web UI"]
    },
    {
      name: "Java Game",
      lang: "Java",
      desc: "2D platformer inspired by Mario with custom physics and logic.",
      link: "/javagame",
      stack: ["Java", "Game Logic"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Background />

      <div className="relative z-10 px-6 pt-32 max-w-6xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center bg-linear-to-r from-teal-200 to-teal-400 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center mt-6 max-w-2xl mx-auto"
        >
          Projects I’ve built while learning, experimenting, and improving as a developer.
        </motion.p>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {repos.map((repo) => (
            repo.internal ? (
              <Link to={repo.link} key={repo.name}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={`group relative bg-slate-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl 
                  transition-all duration-300
                  hover:border-teal-300/40 hover:shadow-[0_10px_30px_rgba(45,212,191,0.25)]
                  ${repo.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
                  bg-linear-to-br from-teal-500/10 to-transparent rounded-2xl pointer-events-none" />

                  <h3 className="text-lg font-semibold group-hover:text-teal-300 transition relative z-10">
                    {repo.name}
                  </h3>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed relative z-10">
                    {repo.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                    {repo.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-800 px-2 py-1 rounded text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-4 text-sm text-gray-400 relative z-10">
                    <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                    {repo.lang}
                  </div>

                  <p className="text-teal-300 text-xs mt-4 opacity-0 group-hover:opacity-100 transition relative z-10">
                    View Project →
                  </p>
                </motion.div>
              </Link>
            ) : (
              <motion.a
                key={repo.name}
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group relative bg-slate-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-xl 
                transition-all duration-300
                hover:border-teal-300/40 hover:shadow-[0_10px_30px_rgba(45,212,191,0.25)]`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
                bg-linear-to-br from-teal-500/10 to-transparent rounded-2xl pointer-events-none" />

                <h3 className="text-lg font-semibold group-hover:text-teal-300 transition relative z-10">
                  {repo.name}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed relative z-10">
                  {repo.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                  {repo.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-800 px-2 py-1 rounded text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4 text-sm text-gray-400 relative z-10">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  {repo.lang}
                </div>

                <p className="text-teal-300 text-xs mt-4 opacity-0 group-hover:opacity-100 transition relative z-10">
                  View Project →
                </p>
              </motion.a>
            )
          ))}
        </motion.div>

      </div>
    </div>
  );
}