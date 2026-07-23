import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";

export function PatientShell({ children }) {
  return (
    <div className="flex h-dvh w-full overflow-hidden bg-cream">
      <Sidebar />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <TopBar />
        <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
