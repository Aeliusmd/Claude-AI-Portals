import { cn } from "@/lib/utils";

export function Input({ label, className, id, ...props }) {
  return (
    <label className="block space-y-1.5" htmlFor={id}>
      {label ? (
        <span className="text-sm font-semibold text-ink">{label}</span>
      ) : null}
      <input
        id={id}
        className={cn(
          "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20",
          className
        )}
        {...props}
      />
    </label>
  );
}
