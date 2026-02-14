import { XPBadge, StreakBadge } from "@/components/XPBadge";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, BookOpen } from "lucide-react";
import { useProgress } from "@/lib/progress-store";
import { modules } from "@/lib/academy-data";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { progress } = useProgress();

  const allLessons = modules.flatMap((m) => m.lessons);
  const completedCount = allLessons.filter(
    (l) => progress.lessons[l.id]?.videoWatched && progress.lessons[l.id]?.quizCompleted
  ).length;

  return (
    <div className="max-w-lg mx-auto px-4 pt-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-muted-foreground font-medium">Welcome back</p>
          <h1 className="text-2xl font-extrabold text-foreground">
            Learner <span className="inline-block">👋</span>
          </h1>
        </div>
        <div className="flex gap-2">
          <StreakBadge streak={progress.streak} />
          <XPBadge xp={progress.totalXp} />
        </div>
      </motion.div>

      {/* Daily Goal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl bg-gradient-primary p-5 mb-6 shadow-warm"
      >
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="w-6 h-6 text-primary-foreground" />
          <h2 className="font-bold text-primary-foreground text-lg">Daily Goal</h2>
        </div>
        <p className="text-primary-foreground/80 text-sm mb-3">Complete 1 lesson today to maintain your streak!</p>
        <div className="bg-primary-foreground/20 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-primary-foreground rounded-full"
            initial={{ width: 0 }}
            animate={{ width: completedCount > 0 ? "100%" : "0%" }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl bg-card border border-border p-4 text-center">
          <TrendingUp className="w-5 h-5 text-primary mx-auto mb-1" />
          <p className="text-2xl font-extrabold text-foreground">{progress.level}</p>
          <p className="text-xs text-muted-foreground">Level</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="rounded-2xl bg-card border border-border p-4 text-center">
          <Sparkles className="w-5 h-5 text-xp-gold mx-auto mb-1" />
          <p className="text-2xl font-extrabold text-foreground">{progress.totalXp}</p>
          <p className="text-xs text-muted-foreground">Total XP</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl bg-card border border-border p-4 text-center">
          <BookOpen className="w-5 h-5 text-accent mx-auto mb-1" />
          <p className="text-2xl font-extrabold text-foreground">{completedCount}</p>
          <p className="text-xs text-muted-foreground">Lessons</p>
        </motion.div>
      </div>

      {/* Continue Learning */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        <h2 className="font-bold text-lg text-foreground mb-3">Continue Learning</h2>
        <div className="space-y-3">
          {modules.map((mod) => (
            <Link key={mod.id} to="/app/academy">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-card border border-border p-4 flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  {mod.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{mod.title}</h3>
                  <p className="text-xs text-muted-foreground">{mod.lessons.length} lessons</p>
                </div>
                <div className="text-xs font-bold text-primary">Start →</div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
