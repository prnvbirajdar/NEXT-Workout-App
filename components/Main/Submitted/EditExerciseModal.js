import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../../Icons/Icons";
import produce from "immer";
import { useAuth } from "../../data/authProvider";
import { db } from "../../data/firebase";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  selected,
  setSelected,
  exerciseStats,
  isHidden,
}) => {
  const { user } = useAuth(); //context

  //isHidden gives us the current active exercise set
  //we filter through all the submitted exercise array and show the
  //current active excercise in selectedExercise
  const selectedExercise = exerciseStats?.filter(
    (exer) => exer?.id === isHidden?.setId
  );

  // const selectedExerciseObj = selectedExercise[0];

  // console.log(selectedExerciseObj?.sets);
  //gives the sets array
  const selectedExerSets = selectedExercise[0]?.sets;

  //this filters the deleted set and presents a new array
  const filteredSet = selectedExerSets?.filter(
    (set) => set?.id !== selected?.id
  );

  //gives id of exercise we wish to update
  const filteredSetId = selectedExercise[0]?.id;

  //delete that set
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
    //handles weight and reps changes in seleted set
    const { name, value } = e.target;

    const setObj = produce(selected, (draft) => {
      draft[name] = value;
    });

    setSelected(setObj);
  };

  //loops over the array and updates it with new updated set
  for (let i = 0; i < selectedExerSets?.length; i++) {
    if (selectedExerSets[i]?.id === selected?.id) {
      selectedExerSets?.splice(i, 1, selected);
    }
  }

  //updates selected exercise with new updates sets array
  const updateExercise = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(filteredSetId)
      .update({
        sets: selectedExerSets,
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
                    value={selected?.weight}
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
                    value={selected?.reps}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>

        <div className="flex justify-between">
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
