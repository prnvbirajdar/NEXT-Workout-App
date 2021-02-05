import { Modal, ModalHeader, ModalBody } from "@windmill/react-ui";
const AddExerciseModal = ({ isModalOpen, closeModal }) => {
  return (
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
  );
};

export default AddExerciseModal;
