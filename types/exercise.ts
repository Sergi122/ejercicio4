// types/exercise.ts
export interface Exercise {
  id: number;
  title: string;
  series: number;
  repetitions: number;
  image: string;
  imageAlt: string;
}

export interface ExerciseListProps {
  exercises: Exercise[];
}

export interface ExerciseCardProps {
  exercise: Exercise;
}

export interface ExerciseHeaderProps {
  totalExercises: number;
}

export interface ExerciseImageProps {
  src: string;
  alt: string;
}