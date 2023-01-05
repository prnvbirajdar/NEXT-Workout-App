import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";
import { nanoid } from "nanoid";

const RepsSetsModal = ({
  isRepsSetsModalOpen,
  setCurrentExerciseData,
  currentExerciseData,
  setIsRepsSetsModalOpen,
}) => {
  //set currently being updated
  const [currentSet, setCurrentSet] = React.useState({
    reps: 0,
    weight: 0,
    id: "",
  });

  //number of sets of same reps and weight
  const [numOfSets, setNumOfSets] = React.useState(1);

  //handles weight and reps input
  const handleChange = (e) => {
    const { name, value } = e.target;

    const setObj = produce(currentSet, (draft) => {
      draft[name] = value;
    });

    setCurrentSet(setObj);
  };

  //closes modal and sets number of set to 1
  const closeRepsSetsModal = () => {
    setNumOfSets(1);
    setIsRepsSetsModalOpen(false);
  };

  //submits the set
  const handleSubmit = () => {
    //setArray takes all the data from currentSet object and pushes on itself,
    //with new ID for every set with same reps and weight
    let setArray = Array.from({ length: numOfSets }, () => ({
      reps: currentSet?.reps,
      weight: currentSet?.weight,
      id: nanoid(), //different id for every set that has same weight and reps
    }));

    if (currentSet.reps > 0 || currentSet.weight > 0)
      setCurrentExerciseData(
        produce(currentExerciseData, (draft) => {
          draft.sets.push(...setArray); //pushes and spread the setArray data in currentExerciseData object
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
                <label>Set</label>
              </div>
              <div className="flex justify-center pb-2 ">
                <input
                  className="py-2 rounded w-10/12 sm:w-7/12 border text-black text-center"
                  type="number"
                  name="weight"
                  required
                  value={numOfSets}
                  onChange={(e) => setNumOfSets(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="text-center pb-2 text-base font-semibold">
                <label>Weight</label>
              </div>
              <div className="flex justify-center pb-2 ">
                <input
                  className="py-2 rounded w-10/12 sm:w-7/12 border text-black text-center"
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
                  className="py-2 rounded w-10/12 sm:w-7/12 border text-black text-center	"
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
          <div onClick={closeRepsSetsModal} aria-label="delete">
            <Delete aria-label="delete" />
          </div>
          <div
            onClick={handleSubmit}
            aria-label="correct"
            className={`${
              currentSet.reps > 0 || currentSet.weight > 0
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
          >
            <Correct aria-label="correct" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RepsSetsModal;
