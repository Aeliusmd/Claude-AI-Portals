"use client";

import { Search } from "lucide-react";
import { NotificationsMenu } from "@/components/layout/notifications-menu";
import { ProfileMenu } from "@/components/layout/profile-menu";

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
        <NotificationsMenu />
        <ProfileMenu />
      </div>
    </header>
  );
}
