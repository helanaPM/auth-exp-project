'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { ExperienceCard } from '@/components/ExperienceCard';
import { mockExperiences } from '@/data/mockExperiences';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [shuffledExperiences, setShuffledExperiences] = useState(mockExperiences);

  // Shuffle on initial load
  useEffect(() => {
    const shuffled = [...mockExperiences].sort(() => 0.5 - Math.random());
    setShuffledExperiences(shuffled);
  }, []);

  const filteredExperiences = search
    ? shuffledExperiences.filter(exp =>
        exp.title.toLowerCase().includes(search.toLowerCase()) ||
        exp.location.toLowerCase().includes(search.toLowerCase())
      )
    : shuffledExperiences.slice(0, 4); // Show only 4 when not searching

  return (
    <main className="bg-gradient-to-br from-[#F09819] to-[#edde5d] text-text font-body min-h-screen overflow-hidden">

      <Navbar />

      <section className="flex flex-col md:flex-row h-full">
        {/* Left Column */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h1 className="text-4xl font-heading text-white mb-4">
            Find your next experience
          </h1>
          <p className="text-accent mb-6 max-w-md">
            Real people. Real places. Real memories.
          </p>
          <input
            type="text"
            placeholder="Search by title or location..."
            className="px-4 py-3 rounded-md border border-accent bg-white text-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <h2 className="text-xl font-heading text-white mb-2">
            {search ? 'Search Results' : 'Featured Experiences'}
          </h2>

          {filteredExperiences.slice(0, 4).map((exp, idx) => (
            <ExperienceCard key={exp.id} experience={exp} index={idx} />
          ))}

          {filteredExperiences.length === 0 && (
            <p className="text-accent italic">No experiences found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
