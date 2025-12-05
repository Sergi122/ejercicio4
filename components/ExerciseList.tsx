// components/ExerciseList.tsx
import { ExerciseListProps } from '@/types/exercise';
import { ExerciseCard } from './ExerciseCard';
import { ExerciseHeader } from './ExerciseHeader';

export function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <div className="max-w-[526px] mx-auto px-4 py-6">
      <ExerciseHeader totalExercises={exercises.length} />
      
      <div className="space-y-4">
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}