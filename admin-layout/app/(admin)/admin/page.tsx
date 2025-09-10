import {
  Eye,
  FilePlus,
  MessageCircleMore,
  SquareKanban,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

export default function AdminHomePage() {
  return (
    <>
      <section className="container flex flex-col items-start gap-6 pt-6 pb-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full mb-4">
          <div className="bg-[#191F30] p-8 rounded-lg  max-w-sm">
            <div className="mb-4">
              <h2 className="font-bold">Unique views this month</h2>
            </div>
            <div className="flex justify-between items-center gap-3 text-3xl font-bold">
              <span>0</span>
              <Eye size={48} color="#5781eb" />
            </div>
          </div>
          <div className="bg-[#191F30] p-8 rounded-lg  max-w-sm">
            <div className="mb-4">
              <h2 className="font-bold">Items add this month</h2>
            </div>
            <div className="flex justify-between items-center gap-3 text-3xl font-bold">
              <span>0</span>
              <FilePlus size={48} color="#5781eb" />
            </div>
          </div>
          <div className="bg-[#191F30] p-8 rounded-lg  max-w-sm">
            <div className="mb-4">
              <h2 className="font-bold">New comments</h2>
            </div>
            <div className="flex justify-between items-center gap-3 text-3xl font-bold">
              <span>0</span>
              <MessageCircleMore size={48} color="#5781eb" />
            </div>
          </div>
          <div className="bg-[#191F30] p-8 rounded-lg  max-w-sm">
            <div className="mb-4">
              <h2 className="font-bold">New users</h2>
            </div>
            <div className="flex justify-between items-center gap-3 text-3xl font-bold">
              <span>0</span>
              <UserPlus size={48} color="#5781eb" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2  gap-4 w-full mb-4">
          <div className="card bg-[#191F30]  rounded-lg w-full max-w">
            <div className=" card-title mb-4 flex items-center justify-between border-b border-[#5781EB] p-2">
              <SquareKanban size={52} color="#5781eb" />
              <h2 className="font-bold">Top films</h2>
              <Link href="" className="btn btn-primary rounded">
                ViewAll
              </Link>
            </div>
            <div className="card-body flex justify-between items-center gap-3 text-3xl font-bold">
              <table className="table ">
                <thead className="text-white">
                  <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>RATING</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center mb-4">
              <div className="join">
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="1"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="2"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="3"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="4"
                />
              </div>
            </div>
          </div>
          <div className="card bg-[#191F30]  rounded-lg w-full max-w ">
            <div className=" card-title mb-4 flex items-center justify-between border-b border-[#5781EB] p-2">
              <SquareKanban size={52} color="#5781eb" />
              <h2 className="font-bold">Last Items</h2>
              <Link href="" className="btn btn-primary rounded">
                ViewAll
              </Link>
            </div>
            <div className="card-body flex justify-between items-center gap-3 text-3xl font-bold">
              <table className="table ">
                <thead className="text-white">
                  <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>VISIBLE</td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>HIDDEN</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>VISIBLE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center mb-4">
              <div className="join hover:bg-[#5781EB]">
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="1"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="2"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="3"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2  gap-4 w-full mb-4">
          <div className="card bg-[#191F30]  rounded-lg w-full max-w">
            <div className=" card-title mb-4 flex items-center justify-between border-b border-[#5781EB] p-2">
              <SquareKanban size={52} color="#5781eb" />
              <h2 className="font-bold">Top films</h2>
              <Link href="" className="btn btn-primary rounded">
                ViewAll
              </Link>
            </div>
            <div className="card-body flex justify-between items-center gap-3 text-3xl font-bold">
              <table className="table ">
                <thead className="text-white">
                  <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>RATING</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center mb-4">
              <div className="join">
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="1"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="2"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="3"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="4"
                />
              </div>
            </div>
          </div>
          <div className="card bg-[#191F30]  rounded-lg w-full max-w ">
            <div className=" card-title mb-4 flex items-center justify-between border-b border-[#5781EB] p-2">
              <SquareKanban size={52} color="#5781eb" />
              <h2 className="font-bold">Last Items</h2>
              <Link href="" className="btn btn-primary rounded">
                ViewAll
              </Link>
            </div>
            <div className="card-body flex justify-between items-center gap-3 text-3xl font-bold">
              <table className="table ">
                <thead className="text-white">
                  <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>VISIBLE</td>
                  </tr>

                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>HIDDEN</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>VISIBLE</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center mb-4">
              <div className="join hover:bg-[#5781EB]">
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="1"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="2"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="3"
                />
                <input
                  className="join-item btn btn-square hover:bg-[#5781EB] hover:text-white"
                  type="radio"
                  name="options"
                  aria-label="4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
