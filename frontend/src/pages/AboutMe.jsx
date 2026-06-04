import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiTypescript } from "react-icons/si";
import { DiNodejsSmall, DiJava  } from "react-icons/di";
import Background from "../components/Background";

export default function About() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Background />
      <AboutSection />
    </div>
  );
}


function AboutSection() {
  return (
    <div className="relative z-10 px-6 py-20 max-w-5xl mx-auto">
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-teal-200 to-teal-400 text-transparent bg-clip-text"
      >
        About Me
      </motion.h2>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 bg-slate-900/60 backdrop-blur rounded-2xl p-8 shadow-lg"
      >
        <p className="text-gray-300 leading-relaxed text-lg">
          I’m <span className="text-teal-300 font-semibold">Riley Knowles</span>, 
          an aspiring Software Engineer and Cyber Security enthusiast with a deep passion 
          for coding, problem-solving, and building things that actually work.
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed">
          As an A-Level student, I spend most of my time learning, experimenting, and 
          creating projects that push me to grow as a developer.
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed">
          I enjoy exploring algorithms, JavaScript, databases, and anything that 
          challenges me to think differently.
        </p>
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-3 gap-6 mt-10"
      >
        <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-teal-300 font-semibold"> Development</h3>
          <p className="text-gray-400 mt-2 text-sm">
            I build full-stack applications, python apps, and backend systems,
            focusing on performance and clean architecture.
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-teal-300 font-semibold"> Cyber Security</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Interested in security, systems, and understanding how things work underneath.
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300">
          <h3 className="text-teal-300 font-semibold text-lg mb-4">
            Tech Stack
          </h3>

          <div className="flex justify-center gap-4 text-2xl mb-3">
            <SiPython className="text-yellow-400" />
            <SiJavascript className="text-yellow-300" />
            <SiTypescript className="text-blue-400" />
            <DiJava className="text-orange-400" />
            <DiNodejsSmall className="text-green-400" />
          </div>

          <p className="text-gray-400 text-sm">
            Building APIs, web apps, and automation tools with
            Python, JavaScript, TypeScript, Java, and Node.js.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
