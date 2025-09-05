import PageLayout from "../components/pageLayout";

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout title="Countries">{children}</PageLayout>;
}
