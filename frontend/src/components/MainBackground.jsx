export default function MainBackground() {
  return (
    <div className="main-background absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="background-canvas" />

      <div className="bg-blob" style={{ top: '-12%', left: '-10%' }} />
      <div className="bg-blob small" style={{ bottom: '-14%', right: '-8%' }} />
      <div className="bg-blob" style={{ top: '60%', left: '28%', opacity: '0.18', width: '20rem', height: '20rem' }} />

      <div className="vignette" />
    </div>
  );
}
