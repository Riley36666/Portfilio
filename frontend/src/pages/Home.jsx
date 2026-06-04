import { motion } from "framer-motion";
import "./Home.css"
import Background from "../components/MainBackground";



export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Background />
      <Hero />
    </div>
  );
}



function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[90vh] relative z-10 px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold bg-linear-to-r from-teal-200 to-teal-400 text-transparent bg-clip-text"
      >
        Riley Knowles
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
      >
        Aspiring Software Engineer & Cyber Security enthusiast.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex gap-4"
      >
      </motion.div>
    </div>
  );
}

