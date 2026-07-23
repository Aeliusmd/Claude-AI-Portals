"use client";

import { Menu, Search } from "lucide-react";
import { NotificationsMenu } from "@/components/layout/notifications-menu";
import { ProfileMenu } from "@/components/layout/profile-menu";

export function TopBar({ onMenuClick }) {
  return (
    <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border/70 bg-cream px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
      <div className="flex min-w-0 items-center gap-2.5">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={onMenuClick}
          className="cursor-pointer rounded-lg p-2 text-ink transition hover:bg-cream-deep lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <p className="truncate text-sm font-medium text-muted">Patient Portal</p>
      </div>

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

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <NotificationsMenu />
        <ProfileMenu />
      </div>
    </header>
  );
}
