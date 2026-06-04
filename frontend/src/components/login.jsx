

export default function AdminLogin({ username, setUsername, password, setPassword, onLogin }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/40 p-8 rounded-2xl border border-teal-300/40 backdrop-blur-md w-full max-w-sm"
      >
        <h1 className="text-3xl font-bold text-teal-300 mb-4 text-center">
          Admin Login
        </h1>
        <form onSubmit={onLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter admin username"
            className="px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white focus:border-teal-300 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}

            
          />

          <input
            type="password"
            placeholder="Enter admin password"
            className="px-4 py-3 bg-black/40 border border-gray-700 rounded-xl text-white focus:border-teal-300 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button className="bg-teal-300 text-black py-3 rounded-xl hover:bg-teal-400 transition">
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}