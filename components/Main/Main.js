import { useState } from "react";
import { Card, CardBody } from "@windmill/react-ui";
import AddExerciseModal from "./AddExerciseModal";
import BodyPartsSelect from "./BodyPartsSelect";
import AddExercise from "./AddExercise";
import AddSet from "./AddSet";
import RepsSetsModal from "./RepsSetsModal";
import RepsSetsDisplay from "./RepsSetsDisplay";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";

import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";
import DisplayExercisesAfterSubmit from "./DisplayExercisesAfterSubmit";

const Main = ({ selectedDate }) => {
  const { user } = useAuth(); //context

  //Body Part Card Component
  const [isCardOpen, setIsCardOpen] = useState(false);
  const openCard = () => setIsCardOpen(true);
  const closeCard = () => setIsCardOpen(false);

  //Selected Body Part
  const [bodyPart, setBodyPart] = useState();
  //Exercise Modal Component
  const [isExerciseModalOpen, setIsExerciseModalOpen] = useState(false);

  //Selected Exercise Card Component
  const [isExerciseOpen, setIsExerciseOpen] = useState(false);
  const openExerciseModal = () => setIsExerciseModalOpen(true);
  const closeExerciseModal = () => {
    setIsExerciseModalOpen(false);
    setIsCardOpen(false);
    setIsExerciseOpen(true);
  };

  //Set and Reps Modal Component
  const [isRepsSetsModalOpen, setIsRepsSetsModalOpen] = useState(false);
  function openRepsSetsModal() {
    setIsRepsSetsModalOpen(true);
  }
  function closeRepsSetsModal() {
    setIsRepsSetsModalOpen(false);
  }

  //Selected exercise to be added to Firestore
  const [currentExerciseData, setCurrentExerciseData] = useState({
    currentExer: "",
    notes: "",
    sets: [],
  });

  const [exerciseStats, setExerciseStats] = React.useState([]);

  const submitExerciseData = async () => {
    await db
      .collection("profiles")
      .doc(user.uid)
      .collection("workouts")
      .add({
        exercise: currentExerciseData.currentExer,
        sets: currentExerciseData.sets,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        profileId: user.uid,
        date: selectedDate,
        notes: currentExerciseData.notes,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    setCurrentExerciseData({
      currentExer: "",
      notes: "",
      sets: [],
    });
  };

  const handleDeleteCurrentExercise = () => {
    setCurrentExerciseData({
      currentExer: "",
      notes: "",
      sets: [],
    });
    setIsExerciseOpen(false);
  };

  return (
    <main className="pb-20 transition flex items-center flex-col dark:bg-black bg-gray-50">
      <div className="text-black px-5 hidden">
        <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
        <p className="px-5 rounded py-1 bg-red-300  hidden sm:block md:hidden">
          Sm
        </p>
        <p className="px-5 rounded py-1 bg-green-300 hidden  sm:hidden md:block  lg:hidden">
          Md
        </p>
        <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">
          Lg
        </p>
        <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
          xl
        </p>
        <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
          2xl
        </p>
      </div>
      <BodyPartsSelect
        closeCard={closeCard}
        openExerciseModal={openExerciseModal}
        isCardOpen={isCardOpen}
        setBodyPart={setBodyPart}
      />

      {currentExerciseData.currentExer.length > 0 || isCardOpen ? (
        <div></div>
      ) : (
        <AddExercise openCard={openCard} exerciseStats={exerciseStats} />
      )}

      <AddExerciseModal
        isExerciseModalOpen={isExerciseModalOpen}
        closeExerciseModal={closeExerciseModal}
        bodyPart={bodyPart}
        setCurrentExerciseData={setCurrentExerciseData}
        currentExerciseData={currentExerciseData}
      />

      {currentExerciseData.currentExer.length > 0 && (
        <div
          className={`${
            isExerciseOpen ? "block" : "hidden"
          } mt-6 w-11/12 sm:w-2/3  lg:max-w-xl`}
        >
          <Card>
            <CardBody>
              <div className="flex justify-between">
                <p className="self-center font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
                  {currentExerciseData.currentExer}
                </p>
                <div onClick={handleDeleteCurrentExercise}>
                  <Delete />
                </div>
              </div>

              <AddSet openRepsSetsModal={openRepsSetsModal} />

              <RepsSetsDisplay
                currentExerciseData={currentExerciseData}
                setCurrentExerciseData={setCurrentExerciseData}
              />
              {currentExerciseData.sets.length > 0 && (
                <div>
                  <p className="my-2 font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
                    Notes
                  </p>
                  <div className=" sm:mx-4 ">
                    <textarea
                      onChange={(e) =>
                        setCurrentExerciseData(
                          produce(currentExerciseData, (draft) => {
                            draft.notes = e.target.value;
                          })
                        )
                      }
                      className="p-2 flex justify-center items-center rounded w-full m-auto text-base bg-gray-50 transition dark:bg-black dark:text-gray-100 "
                    />
                  </div>
                </div>
              )}
              <RepsSetsModal
                isRepsSetsModalOpen={isRepsSetsModalOpen}
                closeRepsSetsModal={closeRepsSetsModal}
                setCurrentExerciseData={setCurrentExerciseData}
                currentExerciseData={currentExerciseData}
              />
              <div
                onClick={submitExerciseData}
                className="flex justify-end mt-3"
              >
                {currentExerciseData.sets.length > 0 && <Correct />}
              </div>
            </CardBody>
          </Card>
        </div>
      )}
      <div className="mt-5 w-11/12 sm:w-2/3  lg:max-w-xl">
        <DisplayExercisesAfterSubmit
          selectedDate={selectedDate}
          exerciseStats={exerciseStats}
          setExerciseStats={setExerciseStats}
        />
      </div>
    </main>
  );
};

export default Main;
