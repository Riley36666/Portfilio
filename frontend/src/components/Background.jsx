const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  top: `${((i * 37) % 100) + 0.5}%`,
  left: `${((i * 53) % 100) + 0.5}%`,
}));

export default function Background() {
  return (
    <>
      <div className="background-canvas" aria-hidden="true" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, idx) => (
          <span
            key={star.id}
            className="background-star"
            style={{
              top: star.top,
              left: star.left,
              ['--i']: idx
            }}
          />
        ))}
      </div>
    </>
  );
}
