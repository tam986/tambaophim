"use client";
import { Earth, Ellipsis } from "lucide-react";
import Link from "next/link";

export default function CountriesPage() {
  return (
    <>
      <section>
        <div className="flex justify-between items-center p-4 bg-[#191F30] rounded mb-4">
          <div className="flex gap-4 items-center">
            {" "}
            <Earth strokeWidth={1} />
            <h2 className="">Countries</h2>
          </div>
          <button className="btn btn-primary">Add new</button>
        </div>
        <div className="card bg-[#191F30] rounded">
          <div className="card-title p-4">header</div>
          <div className="card-body">
            <table className="table ">
              <thead className="text-white text-center">
                <tr className="">
                  <th>ID</th>
                  <th>NAME</th>
                  <th>MOVIES TOTAL</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className=" text-center">
                <tr>
                  <td>3</td>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>VISIBLE</td>
                  <td className="flex gap-1 items-center justify-center">
                    <Link href={"/admin/countries/slug"}>
                      <Ellipsis size={25} color="#5781eb" />
                    </Link>
                    <div>
                      <Ellipsis size={25} color="#5781eb" />
                    </div>
                    <div>
                      <Ellipsis size={25} color="#5781eb" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
