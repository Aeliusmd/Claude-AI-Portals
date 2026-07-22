import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { categoryStyles, visitStatusStyles } from "@/lib/category-styles";
import { cn } from "@/lib/utils";

export function VisitCard({ visit, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(visit.id)}
      className={cn(
        "w-full rounded-2xl border bg-white p-4 text-left transition",
        selected
          ? "border-primary shadow-[0_0_0_1px_rgba(31,111,235,0.25)]"
          : "border-border/70 hover:border-primary/40"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={categoryStyles[visit.category]}>
            {visit.category}
          </Badge>
          <span className="text-xs font-medium text-muted">{visit.id}</span>
        </div>
        <Badge className={visitStatusStyles[visit.status]}>{visit.status}</Badge>
      </div>
      <p className="mt-3 font-semibold text-ink">
        {visit.provider} — {visit.location}
      </p>
      <p className="mt-1 text-sm text-muted">{visit.date}</p>
    </button>
  );
}

export function VisitDetailPanel({ visit }) {
  if (!visit) return null;

  return (
    <Card className="p-5">
      <h2 className="text-lg font-semibold text-ink">Visit Details</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Detail label="Visit ID" value={visit.id} />
        <Detail label="Date" value={visit.date} />
        <Detail label="Category" value={visit.category} />
        <Detail
          label="Provider / Location"
          value={`${visit.provider} — ${visit.location}`}
        />
        <Detail label="Work Status" value={visit.workStatus} />
        <Detail label="Restrictions" value={visit.restrictions} />
        <Detail label="Follow-up" value={visit.followUp} />
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          Special Instructions
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          {visit.specialInstructions}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
          Documents ({visit.documents.length})
        </p>
        <div className="mt-3 space-y-3">
          {visit.documents.map((doc) => (
            <div
              key={doc.title}
              className="rounded-xl border border-border/70 px-4 py-3"
            >
              <p className="font-semibold text-ink">{doc.title}</p>
              <p className="mt-1 text-sm text-muted">
                {doc.type} · {doc.date}
              </p>
            </div>
          ))}
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
