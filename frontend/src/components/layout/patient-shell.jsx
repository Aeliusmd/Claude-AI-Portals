import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";

export function PatientShell({ children }) {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
