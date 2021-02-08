import { useState } from "react";
import { Card, CardBody } from "@windmill/react-ui";
import AddExerciseModal from "./AddExerciseModal";
import EmptyLog from "./EmptyLog";
import BodyPartsSelect from "./BodyPartsSelect";
import AddExercise from "./AddExercise";
import AddSet from "./AddSet";
import SetReps from "./RepsSets";

const Main = () => {
  //Workout Log Empty Component
  const [showEmptyLog, setShowEmptyLog] = useState(true);
  const closeEmptyLog = () => setShowEmptyLog(false);

  //Body Part Card Component
  const [isCardOpen, setIsCardOpen] = useState(false);
  const openCard = () => setIsCardOpen(true);
  const closeCard = () => setIsCardOpen(false);

  //Selected Body Part
  const [bodyPart, setBodyPart] = useState();
  console.log(bodyPart);
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

  return (
    <div className="flex items-center flex-col sm:m-20">
      <EmptyLog showEmptyLog={showEmptyLog} closeEmptyLog={closeEmptyLog} />

      <BodyPartsSelect
        closeCard={closeCard}
        openExerciseModal={openExerciseModal}
        isCardOpen={isCardOpen}
        setBodyPart={setBodyPart}
      />

      <AddExercise openCard={openCard} showEmptyLog={showEmptyLog} />

      <AddExerciseModal
        isExerciseModalOpen={isExerciseModalOpen}
        closeExerciseModal={closeExerciseModal}
        bodyPart={bodyPart}
      />

      <div className={`${isExerciseOpen ? "block" : "hidden"} w-1/2 shadow`}>
        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 ">
              Squats
            </p>
            <AddSet openRepsSetsModal={openRepsSetsModal} />
            <SetReps
              isRepsSetsModalOpen={isRepsSetsModalOpen}
              closeRepsSetsModal={closeRepsSetsModal}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Main;
