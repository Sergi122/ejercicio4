// components/ExerciseCard.tsx
'use client';

import { ExerciseCardProps } from '@/types/exercise';
import { ExerciseImage } from './ExerciseImage';
import { ChevronRight } from 'lucide-react';

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div className="bg-[#2a2a2a] rounded-xl p-4 flex items-center gap-4 hover:bg-[#323232] transition-colors cursor-pointer group">
      <ExerciseImage src={exercise.image} alt={exercise.imageAlt} />
      
      <div className="flex-1 min-w-0">
        <h3 className="text-white text-lg font-medium mb-1">
          {exercise.title}
        </h3>
        <p className="text-[#4ade80] text-sm">
          {exercise.series} séries x {exercise.repetitions} repetições
        </p>
      </div>
      
      <ChevronRight 
        className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0" 
        size={24}
      />
    </div>
  );
}