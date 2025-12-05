// components/ExerciseImage.tsx
'use client';

import { ExerciseImageProps } from '@/types/exercise';

const getGradientByIndex = (index: number) => {
  const gradients = [
    'from-blue-500 to-blue-700',
    'from-green-500 to-green-700',
    'from-purple-500 to-purple-700',
    'from-orange-500 to-orange-700',
  ];
  return gradients[index % gradients.length];
};

const getInitials = (text: string) => {
  const words = text.split(' ');
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return text.substring(0, 2).toUpperCase();
};

export function ExerciseImage({ src, alt }: ExerciseImageProps) {
  const index = parseInt(src) || 0;
  const gradient = getGradientByIndex(index);
  const initials = getInitials(alt);
  
  return (
    <div className={`relative w-[84px] h-[84px] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <span className="text-white text-2xl font-bold">{initials}</span>
      <div className="absolute bottom-1 left-1 bg-white/90 px-1.5 py-0.5 rounded text-[10px] text-gray-600">
        item
      </div>
    </div>
  );
};