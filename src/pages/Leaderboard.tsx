import { motion } from "framer-motion";
import { Trophy, Medal, Crown } from "lucide-react";

const mockLeaderboard = [
  { name: "Arjun S.", xp: 450, level: 10 },
  { name: "Priya M.", xp: 380, level: 8 },
  { name: "Rahul K.", xp: 320, level: 7 },
  { name: "Sneha R.", xp: 280, level: 6 },
  { name: "Vikram P.", xp: 250, level: 6 },
  { name: "Ananya D.", xp: 220, level: 5 },
  { name: "Rohan T.", xp: 190, level: 4 },
  { name: "Meera J.", xp: 160, level: 4 },
];

const rankIcons = [Crown, Medal, Trophy];

export default function Leaderboard() {
  return (
    <div className="max-w-lg mx-auto px-4 pt-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Leaderboard</h1>
        <p className="text-sm text-muted-foreground mb-6">See how you rank against other learners</p>

        <div className="space-y-3">
          {mockLeaderboard.map((user, i) => {
            const Icon = i < 3 ? rankIcons[i] : null;
            return (
              <motion.div
                key={user.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border p-4 flex items-center gap-4 ${
                  i === 0 ? "bg-xp-gold/10 border-xp-gold/30" : i < 3 ? "bg-card border-primary/20" : "bg-card border-border"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  i === 0 ? "bg-xp-gold text-primary-foreground" : i < 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {Icon ? <Icon className="w-5 h-5" /> : i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">Level {user.level}</p>
                </div>
                <span className="font-bold text-xp-gold">{user.xp} XP</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
