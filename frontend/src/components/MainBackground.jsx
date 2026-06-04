export default function MainBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      
      {/* Dark base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-black to-emerald-900/40" />

      {/* Floating blobs */}
      <div className="absolute w-96 h-96 bg-green-700/30 rounded-full blur-3xl top-[-10%] left-[-10%] animate-float" />
      <div className="absolute w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl bottom-[-10%] right-[-10%] animate-float" />
      <div className="absolute w-72 h-72 bg-lime-500/10 rounded-full blur-3xl top-[60%] left-[30%] animate-float" />

      {/* Grid (darker green) */}
      <div className="absolute inset-0 opacity-10 
        bg-[linear-gradient(#14532d_1px,transparent_1px),linear-gradient(90deg,#14532d_1px,transparent_1px)]
        bg-[size:40px_40px]" />

    </div>
  );
}