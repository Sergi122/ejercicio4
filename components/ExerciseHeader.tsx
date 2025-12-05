// components/ExerciseHeader.tsx
import { ExerciseHeaderProps } from '@/types/exercise';

export const ExerciseHeader = ({ totalExercises }: ExerciseHeaderProps) => {
  return (
    <div className="mb-6">
      <p className="text-gray-400 text-sm mb-2">info</p>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-semibold">Exercícios</h1>
          <p className="text-gray-400 text-xs">item</p>
        </div>
        <div className="text-white text-2xl font-light">
          {totalExercises}
        </div>
      </div>
    </div>
  );
};