import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm";
import useTitle from "../../hooks/useTitle";

const NewNote = () => {
  useTitle("Add Note");
  const users = useSelector(selectAllUsers);

  if(!users?.length) return <p>Not currently available</p>
  const content = users ? <NewNoteForm users={users} /> : <p>Loading...</p>;

  return content;
};
export default NewNote;
