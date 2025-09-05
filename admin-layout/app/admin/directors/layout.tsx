import PageLayout from "../components/pageLayout";

export default function DirectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout title="Directors">{children}</PageLayout>;
}
