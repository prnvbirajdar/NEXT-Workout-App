import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";
import { Correct, Edit } from "../Icons/Icons";

const EditExerciseNotes = ({ value, id }) => {
  //takes the initial value
  const [notesEdit, setNotesEdit] = React.useState(value);

  //target is used to measure length of new input. length > 0 ? Correct button : Edit button
  const [target, setTarget] = React.useState("");

  //onClick edit button, takes us to textarea
  const inputRef = React.useRef();

  const { user } = useAuth(); //context

  //handles changed notes
  const handleNotesChange = (e) => {
    setNotesEdit(e.target.value);
    setTarget(e.target.value);
  };

  //updates notes on submit
  const updateNotes = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(id)
      .update({
        notes: notesEdit,
      });

    //length is zero, edit appears again
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
      <div className=" sm:mx-4 ">
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

export default EditExerciseNotes;
