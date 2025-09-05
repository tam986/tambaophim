import "./comment.css";
import {
  LockKeyhole,
  Pencil,
  Trash,
} from "lucide-react";
export default function CommentsPage() {
  const comments = [
    {
      id: 1,
      author: "Jonathan Banks",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      text: "Lorem Ipsum is simply dummy text...",
      date: "24 Oct 2021",
    },
    {
      id: 2,
      author: "John Doe",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      text: "Lorem Ipsum is simply dummy text...",
      date: "24 Oct 2021",
    },
    {
      id: 3,
      author: "Brian Cranston",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      text: "Lorem Ipsum is simply dummy text...",
      date: "24 Oct 2021",
    },
    {
      id: 4,
      author: "Jesse Plemons",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      text: "Lorem Ipsum is simply dummy text...",
      date: "24 Oct 2021",
    },
    {
      id: 23,
      author: "Jonathan Banks",
      text: "Lorem Ipsum is simply dummy text...",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      date: "24 Oct 2021",
    },
    {
      id: 5,
      author: "John Doe",
      text: "Lorem Ipsum is simply dummy text...",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      date: "24 Oct 2021",
    },
    {
      id: 6,
      author: "Brian Cranston",
      text: "Lorem Ipsum is simply dummy text...",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      date: "24 Oct 2021",
    },
    {
      id: 7,
      author: "Jesse Plemons",
      text: "Lorem Ipsum is simply dummy text...",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      date: "24 Oct 2021",
    },
    {
      id: 8,
      author: "Brian Cranston",
      text: "Lorem Ipsum is simply dummy text...",
      movie_url: "https://www.imdb.com/title/tt2379308/",
      date: "24 Oct 2021",
    },
  ];

  return (
    <>
      <section>
        <div className="table-container">
          <table className="comments-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>AUTHOR</th>
                <th>MOVIE URL</th>
                <th>TEXT</th>
                <th>CREATED DATE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.author}</td>
                  <td>{c.movie_url}</td>
                  <td>{c.text}</td>
                  <td>{c.date}</td>
                  <td>
                    <button className="btn-view"><LockKeyhole /></button>
                    <button className="btn-edit"><Pencil /></button>
                    <button className="btn-delete"><Trash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
