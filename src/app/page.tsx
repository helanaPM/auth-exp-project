import { mockExperiences } from '@/data/mockExperiences';
import { ExperienceCard } from '@/components/ExperienceCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-heading mb-4">KALLORA</h1>
        <p className="text-lg font-body text-gray-600 max-w-xl mx-auto">
          Real people offering Real experiences.
        </p>
      </section>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockExperiences.map(exp => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </main>
  )
}
