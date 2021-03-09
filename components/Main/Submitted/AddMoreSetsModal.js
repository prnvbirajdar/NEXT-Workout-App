import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../../Icons/Icons";
import produce from "immer";
import { nanoid } from "nanoid";

import { useAuth } from "../../data/authProvider";
import { db } from "../../data/firebase";

const RepsSetsModal = ({
  isAddMoreSetsOpen,
  setIsAddMoreSetsOpen,
  exerciseStats,
  isHidden,
}) => {
  const [currentExerciseData, setCurrentExerciseData] = React.useState(null);

  const [currentArray, setCurrentArray] = React.useState(null);

  const { user } = useAuth(); //context

  //isHidden gives us the current active exercise set
  //we filter through all the submitted exercise array and show the
  //current active excercise in selectedExercise
  const selectedExercise = exerciseStats?.filter(
    (exer) => exer?.id === isHidden?.setId
  );

  const selectedExerciseObj = selectedExercise[0];

  //const lmaoArr = selectedExerciseObj?.sets;

  React.useEffect(() => {
    setCurrentExerciseData(selectedExerciseObj);
    setCurrentArray(selectedExerciseObj?.sets);
  }, [selectedExerciseObj]);

  console.log(currentExerciseData);

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
  const closeAddMoreSetsModal = () => {
    setNumOfSets(1);
    setIsAddMoreSetsOpen(false);
  };

  const arr1 = [];

  for (let i = 0; i < numOfSets; i++) {
    if (currentSet.reps > 0 || currentSet.weight > 0)
      arr1.push({
        reps: currentSet?.reps,
        weight: currentSet?.weight,
        id: nanoid(), //different id for every set that has same weight and reps
      });
  }

  //submits the set
  const handleSubmit = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(currentExerciseData?.id)
      .update({
        sets: [...currentArray, ...arr1],
      });

    setCurrentSet({ reps: 0, weight: 0 });
    closeAddMoreSetsModal();
  };

  return (
    <div className=" text-gray-600 dark:text-gray-400 flex justify-center">
      <Modal isOpen={isAddMoreSetsOpen} onClose={closeAddMoreSetsModal}>
        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
          {currentExerciseData?.exercise}
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
          <div onClick={closeAddMoreSetsModal} aria-label="delete">
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

//alternate way to update setCurrentExerciseData

// setCurrentExerciseData((prevstate) => {
//   return {
//     ...prevstate,
//     sets: [...prevstate.sets, ...setArray],
//   };
// });
