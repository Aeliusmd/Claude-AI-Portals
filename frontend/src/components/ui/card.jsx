import { cn } from "@/lib/utils";

export function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-white shadow-[0_1px_2px_rgba(28,36,48,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
}
