import { Modal, ModalHeader, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  deleteExercise,
  selected,
  setSelected,
}) => {
  console.log(selected?.sets);

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

  return (
    selected && (
      <div>
        <Modal
          isOpen={isEditExerciseModal}
          onClose={() => closeEditExerciseModal(selected)}
        >
          <ModalHeader>{selected.exercise}</ModalHeader>
          <ModalBody>
            {selected.sets.map((set, index) => (
              <div key={randomKey(index)}>
                <div className="text-center">
                  <p>Set {index + 1}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
                  <form>
                    <div className="text-center pb-2">
                      <label>Weight</label>
                    </div>
                    <div className="flex justify-center pb-2">
                      <input
                        className="py-2 rounded w-1/3 border text-black text-center"
                        type="number"
                        name="weight"
                        required
                        value={set.weight}
                       onChange={handleChange}
                      />
                    </div>
                  </form>
                  <form>
                    <div className="text-center pb-2">
                      <label>Reps</label>
                    </div>
                    <div className="flex justify-center ">
                      <input
                        className="py-2 rounded w-1/3 border text-black text-center	"
                        type="number"
                        name="reps"
                        required
                        value={set.reps}
                        onChange={handleChange}
                      />
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </ModalBody>

          <div className="flex justify-evenly sm:justify-end ">
            <div
              onClick={() => deleteExercise(selected.id)}
              className="sm:mx-3"
            >
              <Delete />
            </div>
            <div>
              <Correct />
            </div>
          </div>
        </Modal>
      </div>
    )
  );
};

export default EditExerciseModal;
