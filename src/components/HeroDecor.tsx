interface HeroDecorProps {
  /** Fade the bottom edge into the page background. Default true. */
  fade?: boolean;
}

/**
 * Decorative backdrop for dark page heroes: a subtle dot grid, layered
 * blurred glow orbs, and an optional fade into the page background.
 * Purely visual — always rendered behind hero content.
 */
const HeroDecor = ({ fade = true }: HeroDecorProps) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.13]"
      style={{
        backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    />
    {/* Soft mesh wash */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.18),transparent_55%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary-glow)/0.22),transparent_55%)]" />
    {/* Floating glow orbs */}
    <div className="absolute -top-24 -right-20 w-[26rem] h-[26rem] rounded-full bg-accent/20 blur-3xl animate-float" />
    <div
      className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-primary-glow/25 blur-3xl animate-float"
      style={{ animationDelay: "1.5s" }}
    />
    <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse-soft" />
    {/* Fade into page */}
    {fade && (
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
    )}
  </div>
);

export default HeroDecor;
