import PageLayout from "../components/pageLayout";

export default function ActorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout title="Actors">{children}</PageLayout>;
}
