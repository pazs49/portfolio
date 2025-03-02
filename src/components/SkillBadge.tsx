interface SkillBadgeProps {
  name: string;
  level: number;
  color?: "purple" | "cyan";
}

export default function SkillBadge({
  name,
  level,
  color = "purple",
}: SkillBadgeProps) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 min-w-[140px]">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
        <div
          className={`h-full ${
            color === "purple" ? "bg-purple-500" : "bg-cyan-500"
          }`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
