import { DashboardStructure } from "@/components/DashboardStructure";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <DashboardStructure>{children}</DashboardStructure>
    </div>
  );
}
