import { motion } from "framer-motion";
import { User, Zap, BookOpen, Flame, RotateCcw } from "lucide-react";
import { useProgress } from "@/lib/progress-store";
import { modules } from "@/lib/academy-data";

export default function Profile() {
  const { progress, resetProgress } = useProgress();

  const allLessons = modules.flatMap((m) => m.lessons);
  const completedCount = allLessons.filter(
    (l) => progress.lessons[l.id]?.videoWatched && progress.lessons[l.id]?.quizCompleted
  ).length;

  return (
    <div className="max-w-lg mx-auto px-4 pt-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-extrabold text-foreground">Learner</h1>
          <p className="text-sm text-muted-foreground">Financial Academy Student</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="rounded-2xl bg-card border border-border p-4 text-center">
            <Zap className="w-6 h-6 text-xp-gold mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-foreground">{progress.totalXp}</p>
            <p className="text-xs text-muted-foreground">Total XP</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-4 text-center">
            <Flame className="w-6 h-6 text-streak-fire mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-foreground">{progress.streak}</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-4 text-center">
            <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-foreground">{completedCount}</p>
            <p className="text-xs text-muted-foreground">Lessons Done</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-4 text-center">
            <Zap className="w-6 h-6 text-level-purple mx-auto mb-2" />
            <p className="text-2xl font-extrabold text-foreground">{progress.level}</p>
            <p className="text-xs text-muted-foreground">Level</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (confirm("Reset all progress? This cannot be undone.")) {
              resetProgress();
            }
          }}
          className="w-full py-3 rounded-xl border-2 border-destructive text-destructive font-bold flex items-center justify-center gap-2 hover:bg-destructive/10 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Progress
        </button>
      </motion.div>
    </div>
  );
}
