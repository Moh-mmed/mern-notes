import { useNavigate } from "react-router-dom";
import { FiEdit } from  'react-icons/fi'

const Note = ({ data }) => {

  const navigate = useNavigate();

  if (data) {
    const created = new Date(data.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const updated = new Date(data.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const handleEdit = () => navigate(`/dash/notes/${data._id}`);
    return (
      <tr className="table__row">
        <td className="table__cell note__status">
          {data.completed ? (
            <span className="note__status--completed">Completed</span>
          ) : (
            <span className="note__status--open">Open</span>
          )}
        </td>
        <td className="table__cell note__created">{created}</td>
        <td className="table__cell note__updated">{updated}</td>
        <td className="table__cell note__title">{data.title}</td>
        <td className="table__cell note__username">{data.user.username}</td>

        <td className="table__cell">
          <button className="icon-button table__button" onClick={handleEdit}>
            <FiEdit />
          </button>
        </td>
      </tr>
    );
  } else return null;
};
export default Note;
