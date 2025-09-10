import { ReactNode } from "react";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};
export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-700">
        <div className="p-4 ">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div>
          <label className="input input-primary">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="#5781EB"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow text-black "
              placeholder="Search..."
            />
          </label>
        </div>
        <div>
          <button className="btn border rounded-sm btn-primary">
            Add new films
          </button>
        </div>
      </div>

      <section className="p-4">{children}</section>
    </>
  );
}
