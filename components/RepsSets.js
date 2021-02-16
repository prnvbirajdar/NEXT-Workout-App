import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import { Plus, Minus, Correct, Delete } from "./Icons/Icons";
import { db } from "../components/data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../components/data/authProvider";
import produce from "immer";

const RepsSets = ({
  isRepsSetsModalOpen,
  closeRepsSetsModal,
  setCurrentExerciseData,
  currentExerciseData,
}) => {
  const { user } = useAuth(); //context

  const [currentSet, setCurrentSet] = React.useState({ reps: 0, weight: 0 });

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
      })
    );
  };

  console.log(currentSet);

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
    //     stats: {
    //       weight: currentExerciseData.,
    //       height: data.height,
    //       dailyCalories: data.dailyCalories,
    //       bodyFatPercentage: data.bodyFatPercentage,
    //     },
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
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          <div className="flex flex-col sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
            <form>
              <div className="text-center pb-2">
                <label>Weight</label>
              </div>
              <div className="flex justify-center pb-2">
                <Minus />
                <input
                  className="py-2 rounded w-1/3 border text-black text-center"
                  type="number"
                  name="weight"
                  onChange={handleChange}
                  required
                />
                <Plus />
              </div>
            </form>
            <form>
              <div className="text-center pb-2">
                <label>Reps</label>
              </div>
              <div className="flex justify-center ">
                <Minus />
                <input
                  className="py-2 rounded w-1/3 border text-black text-center	"
                  type="number"
                  name="reps"
                  onChange={handleChange}
                  required
                />
                <Plus />
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <div onClick={closeRepsSetsModal}>
            <Delete />
          </div>
          <div onClick={handleSubmit}>
            <Correct />
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RepsSets;
