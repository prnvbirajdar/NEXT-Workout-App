import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";
import { nanoid } from "nanoid";

const RepsSetsModal = ({
  isRepsSetsModalOpen,
  closeRepsSetsModal,
  setCurrentExerciseData,
  currentExerciseData,
}) => {
  const [currentSet, setCurrentSet] = React.useState({
    reps: 0,
    weight: 0,
    id: "",
  });

  console.log(currentSet.reps, currentSet.weight);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentSet(
      produce(currentSet, (draft) => {
        draft[name] = value;
        draft.id = nanoid();
      })
    );
  };

  const handleSubmit = async () => {
    if (currentSet.weight > 0 && currentSet.reps > 0)
      setCurrentExerciseData(
        produce(currentExerciseData, (draft) => {
          draft.sets.push(currentSet);
        })
      );

    setCurrentSet({ reps: 0, weight: 0 });

    closeRepsSetsModal();
  };

  return (
    <div className=" text-gray-600 dark:text-gray-400 flex justify-center">
      <Modal isOpen={isRepsSetsModalOpen} onClose={closeRepsSetsModal}>
        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
          {currentExerciseData.currentExer}
        </p>
        <ModalBody>
          <div className="flex bg-gray-50 dark:bg-black p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
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
                />
              </div>
            </div>
          </div>
        </ModalBody>

        <div className="flex justify-between">
          <div onClick={closeRepsSetsModal}>
            <Delete />
          </div>
          <div
            onClick={handleSubmit}
            className={`${
              currentSet.reps > 0 && currentSet.weight > 0
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
          >
            <Correct />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RepsSetsModal;

//   <ModalBody>
//     <div className="flex bg-black p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
//       <form className="flex">
//         <div>
//           <div className="text-center pb-2 text-base font-semibold">
//             <label>Weight</label>
//           </div>
//           <div className="flex justify-center pb-2 ">
//             <input
//               className="py-2 rounded w-1/2 border text-black text-center"
//               type="number"
//               name="weight"
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <div>
//           <div className="text-center pb-2 text-base font-semibold">
//             <label>Reps</label>
//           </div>
//           <div className="flex justify-center ">
//             <input
//               className="py-2 rounded w-1/2 border text-black text-center	"
//               type="number"
//               name="reps"
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   </ModalBody>
