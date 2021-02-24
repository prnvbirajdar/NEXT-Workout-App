import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";
import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  deleteExercise,
  selected,
  setSelected,
  id,
  exer,
}) => {
  console.log(exer);
  console.log(selected);

  const ind = exer.findIndex((e) => e.id === selected?.id);
  if (ind >= 0) {
    exer[ind] = {
      id: selected?.id,
      reps: selected?.reps,
      weight: selected?.weight,
    };
  }

  const { user } = useAuth(); //context

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
      .doc(id)
      .update({
        sets: exer,
      });

    closeEditExerciseModal(selected);
  };

  return (
    selected && (
      <Modal
        isOpen={isEditExerciseModal}
        onClose={() => closeEditExerciseModal(selected)}
      >
        <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
          Edit Set
        </p>
        <ModalBody>
          <div key={selected?.id}>
            <div className=" flex bg-black p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
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

        <div className="flex justify-between">
          {/*  <div onClick={() => deleteExercise(selected.id)}>
            <Delete />
          </div>*/}
          <div onClick={updateExercise}>
            <Correct />
          </div>
        </div>
      </Modal>
    )
  );
};

export default EditExerciseModal;
