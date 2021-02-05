import { Modal, ModalHeader, ModalBody } from "@windmill/react-ui";
import { Fragment } from "react";
import ExerciseLog from "./EmptyLog";
const AddExerciseModal = ({ isModalOpen, closeModal }) => {
  return (
    <Fragment>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Select exercise</ModalHeader>
        <ModalBody>
          <div className="pt-2">
            <button
              onClick={closeModal}
              class="shadow-lg m-1 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
            >
              Squats
            </button>
            <button
              onClick={closeModal}
              class="shadow-lg  m-1 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
            >
              Lunges
            </button>
          </div>
        </ModalBody>
      </Modal>

      <ExerciseLog />
    </Fragment>
  );
};

export default AddExerciseModal;
