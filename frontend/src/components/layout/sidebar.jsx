"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  ClipboardList,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  Share2,
  Shield,
  User,
} from "lucide-react";
import { patientNavItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

const icons = {
  LayoutDashboard,
  User,
  ClipboardList,
  CalendarDays,
  Share2,
  Shield,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-navy text-white">
      <div className="flex items-center gap-2.5 px-5 py-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
          <HeartPulse className="h-5 w-5" />
        </div>
        <span className="font-display text-xl tracking-tight">ClaudMD</span>
      </div>

      <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3">
        {patientNavItems.map((item) => {
          const Icon = icons[item.icon];
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-navy-soft text-white"
                  : "text-white/75 hover:bg-white/5 hover:text-white"
              )}
            >
              {Icon ? <Icon className="h-4 w-4" /> : null}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto shrink-0 border-t border-white/10 px-3 py-4">
        <Link
          href="/login"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </Link>
      </div>
    </aside>
  );
}
