import Background from "../../components/MainBackground"
import { motion } from "framer-motion"

export default function PythonCLI() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Background />
      <CliProject />
    </div>
  )
}

function CliProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <h1 className="text-cyan-300 font-semibold text-2xl text-center mb-10">
        Python CLI Project + Web Integration
      </h1>

      {/* SIDE-BY-SIDE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl text-center">

        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-cyan-400 font-semibold text-lg mb-3">
          Python CLI Password Manager
          </h2>
          <p className="text-cyan-500 text-sm leading-relaxed">
            MyOwnPassManager is a lightweight Python command-line password manager
            that uses symmetric encryption and a master password system to protect
            stored credentials. It supports optional environment-based verification
            and can store data locally or in MongoDB. Built as a learning project,
            it focuses on secure storage, modular design, and practical encryption
            techniques.
          </p>

          <a
            href="https://github.com/Riley36666/MyOwnPassManager"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-green-500 hover:text-cyan-300 font-semibold text-sm mt-4"
          >
            Python CLI Repository
          </a>
        </div>

        
        <div>
          <h2 className="text-cyan-400 font-semibold text-lg mb-3">
            Web Integration for Password Manager
          </h2>
          <p className="text-cyan-500 text-sm leading-relaxed">
            Password Manager Web Integration is a simple Node.js and Express backend
            for managing encrypted passwords through a web interface. It uses Fernet
            encryption, environment variables for configuration, and is actively
            developed as a personal project exploring backend security and credential
            management.
          </p>

          <a
            href="https://github.com/Riley36666/PasswordManagerWebintegration"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-green-500 hover:text-cyan-300 font-semibold text-sm mt-4"
          >
            Web Integration Repository
          </a>
        </div>

      </div>
    </motion.div>
  )
}
