import './actor.css';
import {
  Pencil,
  Trash,
} from "lucide-react";
export default function ActorsPage() {
    const comments = [
    {
      id: 1,
      name: "Jonathan Banks",
      description: "Lorem Ipsum is simply dummy description...",
      dob: "24 Oct 2021",
      sex: "Male"
    },
    {
      id: 2,
      name: "John Doe",
      description: "Lorem Ipsum is simply dummy description...",
      dob: "24 Oct 2021",
      sex: "Female"
    },
    {
      id: 3,
      name: "Brian Cranston",
      dob: "24 Oct 2021",
      sex: "Male",
      description: "Lorem Ipsum is simply dummy description...",
    },
    {
      id: 4,
      name: "Jesse Plemons",
      dob: "24 Oct 2021",
      sex: "Male",
      description: "Lorem Ipsum is simply dummy description...",
    },
    {
      id: 23,
      name: "Jonathan Banks",
      description: "Lorem Ipsum is simply dummy description...",
      dob: "24 Oct 2021",
      sex: "Male"
    },
    {
      id: 5,
      name: "John Doe",
      description: "Lorem Ipsum is simply dummy description...",
      dob: "24 Oct 2021",
      sex: "Female"
    },
    {
      id: 6,
      name: "Brian Cranston",
      description: "Lorem Ipsum is simply dummy description...",
      dob: "24 Oct 2021",
      sex: "Male"
    },
    {
      id: 7,
      name: "Jesse Plemons",
      description: "Lorem Ipsum is simply dummy description...",
      dob: "24 Oct 2021",
      sex: "Male"
    },
    {
      id: 8,
      name: "Brian Cranston",
      description: "Lorem Ipsum is simply dummy description...",
      dob: "24 Oct 2021",
      sex: "Male"
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
                <th>NAME</th>
                <th>DESCRIPTION</th>
                <th>DOB</th>
                <th>SEX</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.description}</td>
                  <td>{c.dob}</td>
                  <td>{c.sex}</td>
                  <td>
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
