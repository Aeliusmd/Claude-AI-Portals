"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import {
  Pagination,
  paginateItems,
} from "@/components/ui/pagination";
import { Tabs } from "@/components/ui/tabs";
import { visitCategories, visits } from "@/data/visits";
import { VisitCard, VisitDetailPanel } from "@/features/visits/visit-card";

const categoryTabStyles = {
  All: {
    activeClass: "bg-primary text-white",
    idleClass: "bg-cream-deep text-ink",
  },
  "Urgent Care": {
    activeClass: "bg-amber-500 text-white",
    idleClass: "bg-amber-100 text-amber-800",
  },
  "Personal Injury": {
    activeClass: "bg-rose-500 text-white",
    idleClass: "bg-rose-100 text-rose-800",
  },
  Injury: {
    activeClass: "bg-orange-500 text-white",
    idleClass: "bg-orange-100 text-orange-800",
  },
  Physical: {
    activeClass: "bg-emerald-500 text-white",
    idleClass: "bg-emerald-100 text-emerald-800",
  },
};

export function VisitsView() {
  const [category, setCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (category === "All") return visits;
    return visits.filter((visit) => visit.category === category);
  }, [category]);

  useEffect(() => {
    setPage(1);
    setSelectedId(null);
  }, [category]);

  const paged = paginateItems(filtered, page);
  const selectedVisit =
    paged.items.find((visit) => visit.id === selectedId) ||
    filtered.find((visit) => visit.id === selectedId) ||
    null;

  return (
    <div>
      <PageHeader title="Visit / Check-in History" />

      <Tabs
        tone="category"
        value={category}
        onChange={setCategory}
        className="mb-5"
        items={visitCategories.map((item) => ({
          id: item,
          label: item,
          ...categoryTabStyles[item],
        }))}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="space-y-3">
            {paged.items.map((visit) => (
              <VisitCard
                key={visit.id}
                visit={visit}
                selected={selectedId === visit.id}
                onSelect={setSelectedId}
              />
            ))}
          </div>

          <Pagination
            className="mt-4 rounded-2xl border border-border/70 bg-white"
            page={paged.currentPage}
            totalPages={paged.totalPages}
            total={paged.total}
            start={paged.start}
            end={paged.end}
            onChange={setPage}
          />
        </div>

        {selectedVisit ? (
          <VisitDetailPanel visit={selectedVisit} />
        ) : (
          <EmptyState
            icon={ArrowLeft}
            title="Select a visit to view details"
          />
        )}
      </div>
    </div>
  );
}
