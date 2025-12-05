// app/page.tsx
import { ExerciseList } from '@/components/ExerciseList';
import { Exercise } from '@/types/exercise';

const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Puxada frontal',
    series: 3,
    repetitions: 12,
    image: '/images/puxada-frontal.jpg',
    imageAlt: 'Pessoa realizando puxada frontal'
  },
  {
    id: 2,
    title: 'Remada curvada',
    series: 3,
    repetitions: 12,
    image: '/images/remada-curvada.jpg',
    imageAlt: 'Pessoa realizando remada curvada'
  },
  {
    id: 3,
    title: 'Remada unilateral',
    series: 3,
    repetitions: 12,
    image: '/images/remada-unilateral.jpg',
    imageAlt: 'Pessoa realizando remada unilateral'
  },
  {
    id: 4,
    title: 'Levantamento terra',
    series: 3,
    repetitions: 12,
    image: '/images/levantamento-terra.jpg',
    imageAlt: 'Pessoa realizando levantamento terra'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <ExerciseList exercises={exercises} />
    </main>
  );
}