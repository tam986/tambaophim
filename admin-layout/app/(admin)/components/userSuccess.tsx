import { SquareArrowRight, User } from "lucide-react";
import Link from "next/link";
export default function UserSuccess() {
  return (
    <div className="flex flex-row justify-between items-center gap-5">
      <div className="p-2 rounded bg-white">
        <User color="#5781eb" strokeWidth={1} />
      </div>
      <div>
        <h6>Admin</h6>
        <h5>Thanh Tâm</h5>
      </div>
      <div className="p-2 rounded bg-[#191F30]">
        <Link href="/logout">
          <SquareArrowRight color="#5781eb" strokeWidth={1} />
        </Link>
      </div>
    </div>
  );
}
