import { DashboardStructure } from "@/components/DashboardStructure";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <DashboardStructure>{children}</DashboardStructure>
    </div>
  );
}
