import { Modal, ModalHeader, ModalBody } from "@windmill/react-ui";
import { Fragment } from "react";
import ExerciseLog from "./EmptyLog";
const AddExerciseModal = ({
  isExerciseModalOpen,
  closeExerciseModal,
  bodyPart,
}) => {
  return (
    <Fragment>
      <Modal isOpen={isExerciseModalOpen} onClose={closeExerciseModal}>
        <ModalHeader>Select exercise</ModalHeader>
        <ModalBody>
          <div className="pt-2 flex justify-center flex-wrap">
            {bodyPart &&
              bodyPart.exercises.map((e) => (
                <button
                  key={e.id}
                  onClick={closeExerciseModal}
                  className="shadow-lg m-2 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
                >
                  {e.exercise}
                </button>
              ))}
          </div>
        </ModalBody>
      </Modal>

      <ExerciseLog />
    </Fragment>
  );
};

export default AddExerciseModal;
