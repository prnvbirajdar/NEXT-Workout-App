import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";
import { Correct, Edit } from "../Icons/Icons";

const ExerciseNotes = ({ value, id }) => {
  const [notesEdit, setNotesEdit] = React.useState(value);

  const [target, setTarget] = React.useState("");

  const inputRef = React.useRef();
  console.log(target);

  const { user } = useAuth(); //context

  const handleNotesChange = (e) => {
    setNotesEdit(e.target.value);
    setTarget(e.target.value);
  };

  const updateNotes = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(id)
      .update({
        notes: notesEdit,
      });

    setTarget("");
  };

  return (
    <div>
      <div className="flex justify-between mt-3 mb-2">
        <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
          Notes
        </p>
        {target.length > 0 ? (
          <div onClick={updateNotes}>
            <Correct />
          </div>
        ) : (
          <div onClick={() => inputRef.current.focus()}>
            <Edit />
          </div>
        )}
      </div>
      <div  className=" sm:mx-4 ">
        <textarea
          ref={inputRef}
          type="text"
          onChange={handleNotesChange}
          value={notesEdit}
          className="p-2 flex justify-center items-center rounded w-full m-auto text-sm bg-gray-50 dark:bg-black dark:text-gray-100 "
        />
      </div>
    </div>
  );
};

export default ExerciseNotes;
