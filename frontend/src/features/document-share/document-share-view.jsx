"use client";

import { useState } from "react";
import { MoreVertical, Share2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import {
  Pagination,
  paginateItems,
} from "@/components/ui/pagination";
import { documentShares, recentlyShared } from "@/data/documents";
import {
  RecentShareCard,
  ShareDetailPanel,
} from "@/features/document-share/share-cards";
import { categoryStyles } from "@/lib/category-styles";

export function DocumentShareView() {
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState(1);
  const selected =
    documentShares.find((share) => share.id === selectedId) || null;
  const paged = paginateItems(documentShares, page);

  return (
    <div>
      <PageHeader
        title="Document Share"
        description="Manage who has access to your medical documents"
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink">Recently Shared</h2>
            <span className="text-xs font-medium text-muted">
              {recentlyShared.length} active shares
            </span>
          </div>
          <div className="space-y-3">
            {recentlyShared.map((share) => (
              <RecentShareCard
                key={share.id}
                share={share}
                selected={selectedId === share.id}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </div>

        {selected ? (
          <ShareDetailPanel share={selected} />
        ) : (
          <EmptyState
            icon={Share2}
            title="Select a shared document"
            description="View details or manage access permissions"
          />
        )}
      </div>

      <Card className="mt-6 overflow-hidden">
        <div className="border-b border-border/70 px-5 py-4">
          <h2 className="text-lg font-semibold text-ink">Share History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border/80 bg-cream/40 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase">
              <tr>
                <th className="px-5 py-3">Document</th>
                <th className="px-5 py-3">Check-in</th>
                <th className="px-5 py-3">Shared With</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/70">
              {paged.items.map((share) => (
                <tr
                  key={share.id}
                  className="cursor-pointer bg-white hover:bg-cream/40"
                  onClick={() => setSelectedId(share.id)}
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-ink">{share.title}</p>
                    <p className="text-xs text-muted">{share.documentId}</p>
                  </td>
                  <td className="px-5 py-4">
                    <Badge className={categoryStyles[share.category]}>
                      {share.category}
                    </Badge>
                    <p className="mt-2 text-sm text-ink">{share.checkIn}</p>
                    <p className="text-xs text-muted">{share.provider}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink">{share.sharedWith}</p>
                    <p className="text-xs text-muted">{share.sharedWithRole}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink">{share.sharedDate}</p>
                    <p className="text-xs text-muted">Expires: {share.expires}</p>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-muted">
                      <XCircle className="h-4 w-4 text-rose-500" />
                      <MoreVertical className="h-4 w-4" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          page={paged.currentPage}
          totalPages={paged.totalPages}
          total={paged.total}
          start={paged.start}
          end={paged.end}
          onChange={setPage}
        />
      </Card>
    </div>
  );
}
