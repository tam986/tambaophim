import PageLayout from "../components/pageLayout";

export default function GenresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout title="Genres">{children}</PageLayout>;
}
