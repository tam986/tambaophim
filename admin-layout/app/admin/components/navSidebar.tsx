import Link from "next/link";
import {
  House,
  Film,
  Earth,
  SquareLibrary,
  HatGlasses,
  Tags,
  VenetianMask,
  FilePlay,
  FileVideoCamera,
  ListVideo,
  FileUser,
  FileHeart,
  MessageCircleMore,
  ArrowLeft,
} from "lucide-react";
export default function NavSidebar() {
  return (
    <ul className="menu rounded-box w-56">
      <li className="link">
        <Link href="/">
          <House strokeWidth={1} /> Dashboard
        </Link>
      </li>
      <li className="link">
        <Link href="/movies">
          <Film strokeWidth={1} /> Movies
        </Link>
      </li>
      <li className="link">
        <Link href="/countries">
          <Earth strokeWidth={1} /> Countries
        </Link>
      </li>
      <li className="link">
        <Link href="/formats">
          <SquareLibrary strokeWidth={1} /> Formats
        </Link>
      </li>
      <li className="link">
        <Link href="/directors">
          <HatGlasses strokeWidth={1} /> Directors
        </Link>
      </li>
      <li className="link">
        <Link href="/genres">
          <Tags strokeWidth={1} /> Genres
        </Link>
      </li>
      <li className="link">
        <Link href="/actors">
          <VenetianMask strokeWidth={1} /> Actors
        </Link>
      </li>
      <li>
        <details open>
          <summary className="link">
            <FileVideoCamera strokeWidth={1} /> Movies Detail
          </summary>
          <ul>
            <li className="link">
              <Link href="/episodes">
                <ListVideo strokeWidth={1} /> List Movies Details
              </Link>
            </li>
            <li className="link">
              <Link href="/episodes">
                <FilePlay strokeWidth={1} /> Episodes
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
            <li className="link">
              <Link href="/favourites">
                <FileHeart strokeWidth={1} /> Favourites
              </Link>
            </li>
            <li className="link">
              <Link href="/playlist">
                <ListVideo strokeWidth={1} /> Playlist
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="link">
        <Link href="/comments">
          <MessageCircleMore strokeWidth={1} /> Comment
        </Link>
      </li>
      <li className="link">
        <Link href="#">
          <ArrowLeft strokeWidth={1} /> Back to TamBaoFilms
        </Link>
      </li>
    </ul>
  );
}
