import { Zap, Flame, Award } from "lucide-react";
import { motion } from "framer-motion";

interface XPBadgeProps {
  xp: number;
}

export function XPBadge({ xp }: XPBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-xp-gold/15 border border-xp-gold/30"
    >
      <Zap className="w-4 h-4 text-xp-gold fill-xp-gold" />
      <span className="text-sm font-bold text-foreground">{xp}</span>
    </motion.div>
  );
}

export function StreakBadge({ streak }: { streak: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-streak-fire/15 border border-streak-fire/30"
    >
      <Flame className="w-4 h-4 text-streak-fire" />
      <span className="text-sm font-bold text-foreground">{streak}</span>
    </motion.div>
  );
}

export function LevelBadge({ level }: { level: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-level-purple/15 border border-level-purple/30"
    >
      <Award className="w-4 h-4 text-level-purple" />
      <span className="text-sm font-bold text-foreground">Lv.{level}</span>
    </motion.div>
  );
}
