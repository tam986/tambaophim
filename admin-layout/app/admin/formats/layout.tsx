import PageLayout from "../components/pageLayout";

export default function FormatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout title="Formats">{children}</PageLayout>;
}
