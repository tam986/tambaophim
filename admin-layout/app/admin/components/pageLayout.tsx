import { ReactNode } from "react";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};
export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <>
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">{title}</h1>
      </header>
      <section className="p-4">{children}</section>
    </>
  );
}
