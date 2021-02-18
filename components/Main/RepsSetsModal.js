import { Modal, ModalBody } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";
import { useAuth } from "../data/authProvider";
import produce from "immer";
import { nanoid } from "nanoid";

const RepsSetsModal = ({
  isRepsSetsModalOpen,
  closeRepsSetsModal,
  setCurrentExerciseData,
  currentExerciseData,
}) => {
  const { user } = useAuth(); //context

  const [currentSet, setCurrentSet] = React.useState({
    reps: 0,
    weight: 0,
    id: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCurrentExerciseData((prevState) => ({
  //     ...prevState,
  //     sets: { ...prevState.sets, [name]: value },
  //   }));
  // };

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
    setCurrentExerciseData(
      produce(currentExerciseData, (draft) => {
        draft.sets.push(currentSet);
      })
    );

    // await db
    //   .collection("profiles")
    //   .doc(user.uid)
    //   .collection("workouts")
    //   .add({
    //     exercise: currentExerciseData.currentExer,
    //     sets: [].push(currentSet),
    //     timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     profileId: user.uid,
    //   })
    //   .then(() => {
    //     console.log("Document successfully written!");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });

    closeRepsSetsModal();
  };

  return (
    <div className=" text-gray-600 dark:text-gray-400 flex justify-center">
      <Modal isOpen={isRepsSetsModalOpen} onClose={closeRepsSetsModal}>
        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
          {currentExerciseData.currentExer}
        </p>
        <ModalBody>
          <div className="flex bg-black p-2 rounded-lg sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
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
                />
              </div>
            </form>
          </div>
        </ModalBody>
       
          <div className="flex justify-evenly">
            <div onClick={closeRepsSetsModal}>
              <Delete />
            </div>
            <div onClick={handleSubmit}>
              <Correct />
            </div>
          </div>
      </Modal>
    </div>
  );
};

export default RepsSetsModal;
