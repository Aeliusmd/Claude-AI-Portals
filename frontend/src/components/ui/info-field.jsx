export function InfoField({ label, value }) {
  return (
    <div className="space-y-1 border-b border-border/70 py-4 last:border-b-0">
      <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
        {label}
      </p>
      <p className="text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
