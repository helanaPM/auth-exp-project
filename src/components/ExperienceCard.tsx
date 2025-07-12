// This component can be used in the Experience Grid section of the Home page
// to display individual experiences with their details.
'use client';

import Image from 'next/image';
import { Experience } from '@/types/experience';

type Props = {
  experience: Experience;
};

export const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="rounded-2xl shadow-md border overflow-hidden hover:shadow-xl transition duration-300">
      <Image
        src={experience.imageUrl}
        alt={experience.title}
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{experience.title}</h3>
        <p className="text-gray-600 text-sm">{experience.location}</p>
        <p className="text-sm mt-1 text-gray-700 line-clamp-2">{experience.description}</p>
        <p className="mt-3 font-bold text-indigo-600">€{experience.price}</p>
      </div>
    </div>
  );
};
