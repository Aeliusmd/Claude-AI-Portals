import { cn } from "@/lib/utils";

export function EmptyState({ icon: Icon, title, description, className }) {
  return (
    <div
      className={cn(
        "flex h-full min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-white px-6 text-center",
        className
      )}
    >
      {Icon ? (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cream-deep text-muted">
          <Icon className="h-6 w-6" />
        </div>
      ) : null}
      <p className="text-sm font-semibold text-ink">{title}</p>
      {description ? (
        <p className="mt-1 max-w-xs text-sm text-muted">{description}</p>
      ) : null}
    </div>
  );
}
