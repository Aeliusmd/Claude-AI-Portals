import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { categoryStyles } from "@/lib/category-styles";
import { cn } from "@/lib/utils";

export function RecentShareCard({ share, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(share.id)}
      className={cn(
        "w-full rounded-xl border bg-white p-4 text-left transition",
        selected
          ? "border-primary shadow-[0_0_0_1px_rgba(31,111,235,0.2)]"
          : "border-border/70 hover:border-primary/40"
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-semibold text-ink">{share.title}</p>
        <Badge className={categoryStyles[share.category]}>
          {share.category}
        </Badge>
      </div>
      <p className="mt-2 text-sm text-muted">
        {share.sharedWith} · {share.sharedDate}
      </p>
      <p className="mt-1 text-xs text-muted">{share.checkIn}</p>
    </button>
  );
}

export function ShareDetailPanel({ share }) {
  if (!share) return null;

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-ink">Share Details</h2>
        <button
          type="button"
          className="text-sm font-semibold text-primary hover:text-primary-dark"
        >
          View Document
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <Detail label="Share ID" value={share.id} />
        <Detail
          label="Document"
          value={`${share.title} (${share.documentId})`}
        />
        <Detail
          label="Shared With"
          value={`${share.sharedWith} · ${share.sharedWithRole}`}
        />
        <Detail label="Shared Date" value={share.sharedDate} />
        <Detail label="Status" value={share.status} />
      </div>

      <div className="mt-6 border-t border-border/70 pt-5">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          Check-in & Visit
        </p>
        <div className="mt-3 space-y-3">
          <Detail label="Visit ID" value={share.visitId} />
          <Detail label="Category" value={share.category} />
          <Detail label="Check-in" value={share.checkIn} />
          <Detail label="Provider" value={share.provider} />
          <Detail label="Location" value={share.location} />
        </div>
      </div>
    </Card>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
