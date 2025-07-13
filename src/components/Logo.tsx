import KalloraLogo from '@/assets/kallora-logo.svg';

export default function Logo() {
  return (
    <div className="relative flex items-center h-12 md:h-14">
      <KalloraLogo className="w-10 h-10 md:w-12 md:h-12 z-10 relative" />

      <span className="absolute left-6 md:left-9 text-3xl font-heading text-white leading-none whitespace-nowrap">
        allora<span className="text-highlight">.com</span>
      </span>
    </div>
  );
}
