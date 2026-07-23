"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Download, FileText, X } from "lucide-react";
import { openDocumentInNewTab } from "@/lib/documents";

export function DocumentPreviewModal({ file, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!file) return undefined;

    function handleEscape(event) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [file, onClose]);

  if (!mounted || !file) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:pl-[calc(16rem+1.5rem)]"
      role="dialog"
      aria-modal="true"
      aria-label={`Preview ${file.title}`}
    >
      <button
        type="button"
        aria-label="Close preview backdrop"
        className="absolute inset-0 bg-black/45 lg:left-64"
        onClick={onClose}
      />

      <div className="relative z-10 flex h-[min(90dvh,54rem)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.28)]">
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#ece7df] px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f1fb] text-primary">
              <FileText className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-sans text-base font-semibold text-ink">
                {file.title}
              </p>
              <p className="mt-0.5 font-sans text-sm text-muted">
                {file.documentId}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              aria-label="Download document"
              onClick={() => openDocumentInNewTab(file.url)}
              className="rounded-lg p-2 text-muted transition hover:bg-cream-deep hover:text-ink"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Close preview"
              onClick={onClose}
              className="rounded-lg p-2 text-muted transition hover:bg-cream-deep hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 bg-[#525659]">
          <iframe
            title={`${file.title} preview`}
            src={file.url}
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
