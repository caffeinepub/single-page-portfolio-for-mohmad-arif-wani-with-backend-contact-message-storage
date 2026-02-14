/**
 * PortfolioBackground Component
 * 
 * Renders a colorful aurora-style gradient background with multiple layers
 * for visual depth. Respects prefers-reduced-motion for accessibility.
 */
export default function PortfolioBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-cyan-500/10" />
      
      {/* Aurora orbs - static, no animation */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/80" />
    </div>
  );
}
