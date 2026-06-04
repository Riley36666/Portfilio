import Background from "../../components/MainBackground"


export default function JavaGame() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <Background />
            <JavaGameProject />
        </div>
    )
}

function JavaGameProject() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative min-h-screen flex flex-col items-center justify-center px-6"
        >
            <h1 className="text-cyan-300 font-semibold text-2xl text-center mb-10">
                Java Game - 2D Platformer
            </h1>

            <div className="max-w-3xl text-center">
                <p className="text-cyan-500 text-sm leading-relaxed">
                    This Java game is a 2D platformer inspired by classic titles like Mario. It features custom physics, player movement, and level design. The game is built using Java's Swing library for rendering and user input. The project was created as a learning experience to understand game development concepts such as collision detection, game loops, and object-oriented programming in Java.
                </p>

                <a className="block text-green-500 hover:text-cyan-300 font-semibold text-sm mt-4"
                    href="https://github.com/Riley36666/JavaGame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-500 hover:text-cyan-300 font-semibold text-sm mt-4"
                >
                    View Java Game Repository
                </a>
            </div>
        </motion.div>
    )
}

