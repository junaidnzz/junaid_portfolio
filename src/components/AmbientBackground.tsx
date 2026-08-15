export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <div
        className="absolute -inset-[4%] animate-drift motion-reduce:animate-none"
        style={{
          willChange: 'transform',
          backgroundImage: `
            radial-gradient(600px circle at 20% 15%, rgba(34, 211, 238, 0.10), transparent 60%),
            radial-gradient(700px circle at 80% 35%, rgba(139, 92, 246, 0.10), transparent 60%),
            radial-gradient(800px circle at 45% 90%, rgba(34, 211, 238, 0.06), transparent 60%)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)',
        }}
      />
    </div>
  );
}
