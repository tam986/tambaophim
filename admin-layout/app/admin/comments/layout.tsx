import PageLayout from "../components/pageLayout";

export default function CommentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout title="Comments">{children}</PageLayout>;
}
