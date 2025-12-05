// components/ExerciseImage.tsx
import Image from 'next/image';
import { ExerciseImageProps } from '@/types/exercise';

export const ExerciseImage = ({ src, alt }: ExerciseImageProps) => {
  return (
    <div className="relative w-[84px] h-[84px] rounded-lg overflow-hidden flex-shrink-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="84px"
      />
      <div className="absolute bottom-1 left-1 bg-white/90 px-1.5 py-0.5 rounded text-[10px] text-gray-600">
        item
      </div>
    </div>
  );
};