import Link from "next/link";
import {
  House,
  Film,
  Earth,
  SquareLibrary,
  HatGlasses,
  Tags,
  VenetianMask,
  ListVideo,
  FileUser,
  FileHeart,
  MessageCircleMore,
  ArrowLeft,
} from "lucide-react";
import { usePathname } from "next/navigation";
export default function NavSidebar() {
  const pathname = usePathname();
  return (
    <ul className="menu rounded-box w-56 pl-4 pr-4">
      <li className={`link ${pathname === "/" ? "active" : ""}`}>
        <Link href="/admin">
          <House strokeWidth={1} /> Dashboard
        </Link>
      </li>
      <li className={`link ${pathname === "/countries" ? "active" : ""}`}>
        <Link href="/admin/countries">
          <Earth strokeWidth={1} /> Countries
        </Link>
      </li>
      <li className={`link ${pathname === "/formats" ? "active" : ""}`}>
        <Link href="/admin/formats">
          <SquareLibrary strokeWidth={1} /> Formats
        </Link>
      </li>
      <li className={`link ${pathname === "/directors" ? "active" : ""}`}>
        <Link href="/admin/directors">
          <HatGlasses strokeWidth={1} /> Directors
        </Link>
      </li>
      <li className={`link ${pathname === "/genres" ? "active" : ""}`}>
        <Link href="/admin/genres">
          <Tags strokeWidth={1} /> Genres
        </Link>
      </li>
      <li className={`link ${pathname === "/actors" ? "active" : ""}`}>
        <Link href="/admin/actors">
          <VenetianMask strokeWidth={1} /> Actors
        </Link>
      </li>
      <li>
        <details open>
          <summary className="link">
            <Film strokeWidth={1} /> Movies
          </summary>
          <ul>
            <li
              className={`link ${
                pathname === "/movies-details" ? "active" : ""
              }`}
            >
              <Link href="/admin/movies-details">
                <ListVideo strokeWidth={1} /> List Movies Details
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary className="link">
            <FileUser strokeWidth={1} /> User
          </summary>
          <ul>
            <li className={`link ${pathname === "/list-user" ? "active" : ""}`}>
              <Link href="/admin/list-user">List User</Link>
            </li>
            <li
              className={`link ${pathname === "/favourites" ? "active" : ""}`}
            >
              <Link href="/admin/favourites">
                <FileHeart strokeWidth={1} /> Favourites
              </Link>
            </li>
            <li className={`link ${pathname === "/playlist" ? "active" : ""}`}>
              <Link href="/admin/playlist">
                <ListVideo strokeWidth={1} /> Playlist
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li className={`link ${pathname === "/comments" ? "active" : ""}`}>
        <Link href="/admin/comments">
          <MessageCircleMore strokeWidth={1} /> Comment
        </Link>
      </li>
      <li className="link">
        <Link href="/">
          <ArrowLeft strokeWidth={1} /> Back to TamBaoFilms
        </Link>
      </li>
    </ul>
  );
}
