export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">KALLORA</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Real people offering Real experiences.
        </p>
      </section>

      {/* Experience Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-200"
          >
            <div className="h-40 bg-gray-300 rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">Experience Title {i + 1}</h2>
            <p className="text-sm text-gray-600">
              A short description of the experience. Hosted by a local.
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}
