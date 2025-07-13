import Hero from '@/components/Hero';
import { mockExperiences } from '@/data/mockExperiences';
import { ExperienceCard } from '@/components/ExperienceCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">
      {/* Hero Section */}
      <Hero />
      {/* Experience Grid */}
      <section className="px-6 py-12 bg-bg text-text font-body">
        <h2 className="text-3xl font-heading text-primary mb-6">Featured Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockExperiences.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>
    </main>
  )
}
