import KalloraLogo from '@/assets/kallora-logo.svg';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* SVG "K" Logo */}
      <KalloraLogo className="w-8 h-8 text-primary" />

      {/* Text beside it */}
      <span className="text-xl font-heading text-primary">
        allora<span className="text-highlight">.com</span>
      </span>
    </div>
  );
}