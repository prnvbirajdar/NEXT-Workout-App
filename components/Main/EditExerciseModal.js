import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  deleteExercise,
  selected,
  setSelected,
}) => {
  //console.log(selected?.sets);

  const [currentId, setCurrentId] = React.useState("");

  const randomNum = Math.floor(Math.random() * 100);
  const randomKey = (num) => (num + randomNum) * randomNum;

  //   React.useEffect(() => {
  //       effect
  //       return () => {
  //           cleanup
  //       }
  //   }, [input])

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setSelected(
    //   produce(selected.sets, (draft) => {
    //     const index = draft.findIndex((set) => {
    //       setCurrentId(set.id);
    //       set.id === currentId;
    //     });
    //     if (index !== -1) draft[name] = value;
    //   })
    // );
  };

  console.log(selected?.sets);

  return (
    selected && (
      <Modal
        isOpen={isEditExerciseModal}
        onClose={() => closeEditExerciseModal(selected)}
      >
        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
          {selected.exercise}
        </p>
        <ModalBody>
          {selected.sets.map((set, index) => (
            <div key={randomKey(index) + index}>
              <p className=" text-gray-800 dark:text-gray-300 text-center m-2 text-base ">
                Set {index + 1}
              </p>
              <div className=" flex bg-black p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
                <form>
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
                      value={set.weight}
                    />
                  </div>
                </form>
                <form>
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
                      value={set.reps}
                    />
                  </div>
                </form>
              </div>
            </div>
          ))}
        </ModalBody>

        <div className="flex justify-between">
          <div onClick={() => deleteExercise(selected.id)}>
            <Delete />
          </div>
          <div>
            <Correct />
          </div>
        </div>
      </Modal>
    )
  );
};

export default EditExerciseModal;
