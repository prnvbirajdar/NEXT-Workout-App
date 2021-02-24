import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";

const ExerciseNotes = ({ value, id }) => {
  const [notesEdit, setNotesEdit] = React.useState(value);

  const { user } = useAuth(); //context

  const handleNotesChange = (e) => {
    setNotesEdit(e.target.value);
  };

  return (
    <div>
      <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
        Notes
      </p>
      <textarea
        type="text"
        onChange={handleNotesChange}
        value={notesEdit}
        className="p-2 flex justify-center items-center rounded w-full m-auto text-sm bg-gray-50 dark:bg-black dark:text-gray-100 "
      />
    </div>
  );
};

export default ExerciseNotes;
