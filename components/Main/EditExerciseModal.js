import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";
import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  selected,
  setSelected,
  id,
  exer,
  currentExer,
  exerciseStats,
  setExerciseStats,
  isHidden,
}) => {
  const { user } = useAuth(); //context


  const selectedSet = exerciseStats.filter(
    (exer) => exer.id === isHidden?.setId
  );

  const filteredSet = selectedSet[0]?.sets?.filter(
    (set) => set?.id !== selected?.id
  );
  const filteredSetId = selectedSet[0]?.id;

  for (let i = 0; i < selectedSet[0]?.sets?.length; i++) {
    if (selectedSet[0]?.sets[i]?.id === selected?.id) {
      selectedSet[0]?.sets?.splice(i, 1, selected);
    }
  }

  console.log(selectedSet);
  const handleDelete = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(filteredSetId)
      .update({
        sets: filteredSet,
      });
    closeEditExerciseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected(
      produce(selected, (draft) => {
        draft[name] = value;
      })
    );
  };

  const updateExercise = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(filteredSetId)
      .update({
        sets: selectedSet[0]?.sets,
      });

    closeEditExerciseModal();
  };

  return (
    selected && (
      <Modal isOpen={isEditExerciseModal} onClose={updateExercise}>
        <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
          Edit Set
        </p>
        <ModalBody>
          <div key={selected?.id}>
            <div className=" flex bg-gray-50 dark:bg-black  p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
              <div>
                <div className="text-center pb-2 text-base font-semibold">
                  <label>Weight</label>
                </div>
                <div className="flex justify-center pb-2 ">
                  <input
                    className="py-2 rounded w-1/2 border text-black text-center"
                    type="number"
                    name="weight"
                    onChange={handleChange}
                    required
                    value={selected.weight}
                  />
                </div>
              </div>
              <div>
                <div className="text-center pb-2 text-base font-semibold">
                  <label>Reps</label>
                </div>
                <div className="flex justify-center ">
                  <input
                    className="py-2 rounded w-1/2 border text-black text-center	"
                    type="number"
                    name="reps"
                    onChange={handleChange}
                    required
                    value={selected.reps}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>

        <div className="flex justify-end">
          <div onClick={handleDelete}>
            <Delete />
          </div>
          <div onClick={updateExercise} aria-label="correct">
            <Correct aria-label="correct" />
          </div>
        </div>
      </Modal>
    )
  );
};

export default EditExerciseModal;
