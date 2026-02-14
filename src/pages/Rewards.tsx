import { motion } from "framer-motion";
import { Gift, Star, Lock } from "lucide-react";
import { useProgress } from "@/lib/progress-store";

const rewards = [
  { name: "Amazon ₹100 Voucher", xpCost: 100, emoji: "🎁" },
  { name: "Flipkart ₹200 Voucher", xpCost: 200, emoji: "🛍️" },
  { name: "Custom Certificate", xpCost: 150, emoji: "📜" },
  { name: "Premium Badge", xpCost: 75, emoji: "🏅" },
  { name: "Amazon ₹500 Voucher", xpCost: 500, emoji: "💎" },
];

export default function Rewards() {
  const { progress } = useProgress();

  return (
    <div className="max-w-lg mx-auto px-4 pt-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Rewards</h1>
        <p className="text-sm text-muted-foreground mb-2">Redeem your XP for amazing rewards!</p>
        <p className="text-sm font-bold text-xp-gold mb-6">Your XP: {progress.totalXp}</p>

        <div className="space-y-3">
          {rewards.map((reward, i) => {
            const canAfford = progress.totalXp >= reward.xpCost;
            return (
              <motion.div
                key={reward.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border p-4 flex items-center gap-4 ${
                  canAfford ? "bg-card border-primary/20" : "bg-card border-border opacity-70"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  {reward.emoji}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground">{reward.name}</p>
                  <p className="text-xs text-muted-foreground">{reward.xpCost} XP</p>
                </div>
                {canAfford ? (
                  <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm">
                    Redeem
                  </button>
                ) : (
                  <Lock className="w-5 h-5 text-locked-gray" />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
