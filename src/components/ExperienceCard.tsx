// components/ExperienceCard.tsx
'use client';

import { Experience } from '@/types/experience';
import Image from 'next/image';

interface Props {
  experience: Experience;
  index?: number; // for staggered animation
}

export const ExperienceCard = ({ experience, index = 0 }: Props) => {
  return (
    <div
      className={`experience-card opacity-0 animate-slideInRight`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex p-4 gap-4">
        {/* Image */}
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          className="w-full h-full object-cover"
          width={96}
          height={96}
          style={{ objectFit: 'cover' }}
        />

        {/* Content */}
        <div className="flex flex-col justify-between flex-grow min-w-0">
          <div>
            <h3 className="text-sm font-heading text-primary mb-1 truncate">
              {experience.title}
            </h3>
            <p className="text-xs text-charcoal mb-1 truncate">
              {experience.location}
            </p>
            <p className="text-xs text-gray-500 line-clamp-2">
              {experience.description}
            </p>
          </div>
          <div className="text-xs font-semibold text-highlight mt-2">
            €{experience.price}
          </div>
        </div>
      </div>
    </div>
  );
};
