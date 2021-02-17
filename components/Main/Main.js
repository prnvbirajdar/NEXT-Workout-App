import { useState } from "react";
import { Card, CardBody } from "@windmill/react-ui";
import AddExerciseModal from "./AddExerciseModal";
import EmptyLog from "./EmptyLog";
import BodyPartsSelect from "./BodyPartsSelect";
import AddExercise from "./AddExercise";
import AddSet from "./AddSet";
import RepsSetsModal from "./RepsSetsModal";
import RepsSetsDisplay from "./RepsSetsDisplay";
import { Correct, Delete } from "../Icons/Icons";

import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";
import DisplayExercisesAfterSubmit from "./DisplayExercisesAfterSubmit";

const Main = () => {
  const { user } = useAuth(); //context

  //Workout Log Empty Component
  // const [showEmptyLog, setShowEmptyLog] = useState(true);
  // const closeEmptyLog = () => setShowEmptyLog(false);

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
  console.log(currentExerciseData);

  const dateToday = new Date().toLocaleString().split(",")[0];

  console.log(dateToday);

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
        date: dateToday,
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
    <div className="flex items-center flex-col dark:bg-black">
      {/*<EmptyLog showEmptyLog={showEmptyLog} closeEmptyLog={closeEmptyLog} />*/}

      <BodyPartsSelect
        closeCard={closeCard}
        openExerciseModal={openExerciseModal}
        isCardOpen={isCardOpen}
        setBodyPart={setBodyPart}
      />

      <AddExercise openCard={openCard} />

      <AddExerciseModal
        isExerciseModalOpen={isExerciseModalOpen}
        closeExerciseModal={closeExerciseModal}
        bodyPart={bodyPart}
        setCurrentExerciseData={setCurrentExerciseData}
        currentExerciseData={currentExerciseData}
      />

      {currentExerciseData.currentExer.length > 0 && (
        <div className={`${isExerciseOpen ? "block" : "hidden"} w-1/2`}>
          <Card>
            <CardBody>
              <div className="flex justify-between">
                <p className="self-center font-semibold text-gray-600 dark:text-gray-300 ">
                  {currentExerciseData.currentExer}
                </p>

                <div onClick={handleDeleteCurrentExercise}>
                  <Delete />
                </div>
              </div>
              <AddSet openRepsSetsModal={openRepsSetsModal} />
              {/*<textarea className="flex justify-center items-center rounded" />*/}
              <RepsSetsDisplay currentExerciseData={currentExerciseData} />
              <RepsSetsModal
                isRepsSetsModalOpen={isRepsSetsModalOpen}
                closeRepsSetsModal={closeRepsSetsModal}
                setCurrentExerciseData={setCurrentExerciseData}
                currentExerciseData={currentExerciseData}
              />
              <div onClick={submitExerciseData} className="flex justify-end">
                <Correct />
              </div>
            </CardBody>
          </Card>
        </div>
      )}
      <div className="mt-5 w-1/2">
        <DisplayExercisesAfterSubmit />
      </div>
    </div>
  );
};

export default Main;
