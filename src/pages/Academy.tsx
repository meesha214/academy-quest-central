import { LevelMap } from "@/components/academy/LevelMap";
import { AcademyHeader } from "@/components/academy/AcademyHeader";
import { useProgress } from "@/lib/progress-store";

export default function Academy() {
  const { progress } = useProgress();

  return (
    <div className="min-h-screen bg-background -m-4">
      <AcademyHeader totalXp={progress.totalXp} level={progress.level} />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <LevelMap progress={progress} />
      </main>
    </div>
  );
}
