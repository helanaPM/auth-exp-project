import Logo from '@/components/Logo';

export default function Navbar() {
  return (
    <nav className="px-6 py-4 text-text flex justify-between items-center bg-transparent">
      <Logo />
      {/* Add nav links or CTA here if needed */}
    </nav>
  );
}