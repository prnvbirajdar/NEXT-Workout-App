import { Modal, ModalBody } from "@windmill/react-ui";
import { Fragment } from "react";
import ExerciseLog from "./EmptyLog";
import produce from "immer";

const AddExerciseModal = ({
  isExerciseModalOpen,
  closeExerciseModal,
  bodyPart,
  setCurrentExerciseData,
  currentExerciseData,
}) => {
  return (
    <Fragment>
      <Modal isOpen={isExerciseModalOpen} onClose={closeExerciseModal}>
        <p className="mb-4 font-semibold  text-gray-600 dark:text-gray-300 md:text-xl">
          Select exercise
        </p>
        <ModalBody>
          <div className="sm:pt-2 flex justify-center flex-wrap ">
            {bodyPart &&
              bodyPart.exercises.map((e) => (
                <div key={e.id} onClick={closeExerciseModal}>
                  <button
                    onClick={() =>
                      setCurrentExerciseData(
                        produce(currentExerciseData, (draft) => {
                          draft.currentExer = e.exercise;
                        })
                      )
                    }
                    className="text-sm md:text-base shadow-lg m-1.5 h-10 px-4 sm:m-2 sm:px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
                  >
                    {e.exercise}
                  </button>
                </div>
              ))}
          </div>
        </ModalBody>
      </Modal>

      <ExerciseLog />
    </Fragment>
  );
};

export default AddExerciseModal;
