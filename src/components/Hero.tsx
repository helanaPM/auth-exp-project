export default function Hero() {
  return (
    <section className="bg-bg text-text font-body py-20 text-center px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-primary mb-4">
        Welcome to <span className="text-highlight">Kallora</span>
      </h1>
      <p className="text-base sm:text-lg max-w-xl mx-auto text-accent mb-6">
        Real Experiences curated by Real People.
      </p>
      <button className="btn-primary text-base sm:text-lg px-6 py-3 rounded-full">
        Explore
      </button>
    </section>
  );
}