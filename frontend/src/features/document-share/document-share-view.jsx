"use client";

import { useState } from "react";
import { FileText, MoreVertical, Share2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DocumentPreviewModal } from "@/components/ui/document-preview-modal";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import {
  Pagination,
  paginateItems,
} from "@/components/ui/pagination";
import { documentShares, recentlyShared } from "@/data/documents";
import {
  RecentShareCard,
  RecipientIcon,
  RecentlySharedHeader,
  ShareDetailPanel,
} from "@/features/document-share/share-cards";
import { SAMPLE_DOCUMENT_URL } from "@/lib/documents";
import { categoryStyles } from "@/lib/category-styles";
import { cn } from "@/lib/utils";

export function DocumentShareView() {
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState(1);
  const [previewFile, setPreviewFile] = useState(null);

  const selected =
    documentShares.find((share) => share.id === selectedId) || null;
  const paged = paginateItems(documentShares, page);

  function openPreview(share) {
    setPreviewFile({
      title: share.title,
      documentId: share.documentId,
      url: SAMPLE_DOCUMENT_URL,
    });
  }

  return (
    <div>
      <PageHeader
        title="Document Share"
        description="Manage who has access to your medical documents"
      />

      <div className="grid items-start gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <Card className="p-5">
            <RecentlySharedHeader count={recentlyShared.length} />
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
          </Card>

          <Card className="overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border/70 px-5 py-4">
              <FileText className="h-4 w-4 text-muted" />
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
                      className={cn(
                        "cursor-pointer bg-white transition hover:bg-cream/40",
                        selectedId === share.id && "bg-cream/60"
                      )}
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
                        <div className="flex items-center gap-2.5">
                          <RecipientIcon
                            role={share.sharedWithRole}
                            size="sm"
                          />
                          <div>
                            <p className="font-medium text-ink">
                              {share.sharedWith}
                            </p>
                            <p className="text-xs text-muted">
                              {share.sharedWithRole}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-medium text-ink">{share.sharedDate}</p>
                        <p className="text-xs text-muted">
                          Expires: {share.expires}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 text-muted">
                          <button
                            type="button"
                            aria-label="Revoke share"
                            className="cursor-pointer rounded p-0.5 hover:bg-rose-50"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <XCircle className="h-4 w-4 text-rose-500" />
                          </button>
                          <button
                            type="button"
                            aria-label="More actions"
                            className="cursor-pointer rounded p-0.5 hover:bg-cream-deep"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <MoreVertical className="h-4 w-4" />
                          </button>
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

        <div className="xl:sticky xl:top-6">
          {selected ? (
            <ShareDetailPanel
              share={selected}
              onClose={() => setSelectedId(null)}
              onViewDocument={() => openPreview(selected)}
            />
          ) : (
            <EmptyState
              icon={Share2}
              className="min-h-[22rem]"
              title="Select a shared document"
              description="View details or manage access permissions"
            />
          )}
        </div>
      </div>

      {previewFile ? (
        <DocumentPreviewModal
          file={previewFile}
          onClose={() => setPreviewFile(null)}
        />
      ) : null}
    </div>
  );
}
