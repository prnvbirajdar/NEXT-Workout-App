import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import { Correct, Delete } from "../Icons/Icons";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  deleteExercise,
  selected,
}) => {
  console.log(selected);

  return (
    selected && (
      <div>
        <Modal
          isOpen={isEditExerciseModal}
          onClose={() => closeEditExerciseModal(selected)}
        >
          <ModalHeader>{selected.exercise}</ModalHeader>
          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
            eligendi repudiandae voluptatem tempore!
          </ModalBody>
          <ModalFooter>
            <div onClick={() => deleteExercise(selected.id)}>
              <Delete />
            </div>
            <div>
              <Correct />
            </div>
          </ModalFooter>
        </Modal>
      </div>
    )
  );
};

export default EditExerciseModal;
