import { NotificationItem } from "@/components/layout/notification-item";

export function NotificationsCard({ notifications }) {
  return (
    <div
      role="dialog"
      aria-label="Notifications"
      className="absolute top-[calc(100%+0.65rem)] right-0 z-50 w-[22rem] overflow-hidden rounded-2xl border border-[#ece7df] bg-white shadow-[0_12px_40px_rgba(28,36,48,0.12)]"
    >
      <div className="border-b border-[#f0ebe3] px-5 py-4">
        <h2 className="font-display text-[1.35rem] font-bold text-[#1c1917]">
          Notifications
        </h2>
      </div>

      <div className="divide-y divide-[#f0ebe3] py-1">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
}
