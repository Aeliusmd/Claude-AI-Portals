"use client";

import { Bell, ChevronDown, Search, UserRound } from "lucide-react";
import { currentPatient } from "@/data/patient";

export function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border/70 px-6 py-4">
      <p className="text-sm font-medium text-muted">Patient Portal</p>

      <div className="hidden max-w-md flex-1 md:block">
        <label className="relative block">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-full border border-transparent bg-cream-deep py-2.5 pr-4 pl-10 text-sm text-ink outline-none placeholder:text-muted focus:border-primary/30 focus:bg-white"
          />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-full p-2 text-muted transition hover:bg-cream-deep hover:text-ink"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full py-1 pr-2 pl-1 transition hover:bg-cream-deep"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <UserRound className="h-4 w-4" />
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold text-ink">
              {currentPatient.fullName}
            </span>
            <span className="block text-xs text-muted">{currentPatient.role}</span>
          </span>
          <ChevronDown className="hidden h-4 w-4 text-muted sm:block" />
        </button>
      </div>
    </header>
  );
}
