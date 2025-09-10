import "../globals.css";
import "./style/navSidebar.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
}
