import PageLayout from "../components/pageLayout";

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout title="Movies">{children}</PageLayout>;
}
