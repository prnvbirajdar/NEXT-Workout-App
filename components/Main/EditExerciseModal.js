import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,
  exercise, sets
}) => {

    console.log(exercise);

  return (
    <div>
      <Modal isOpen={isEditExerciseModal} onClose={closeEditExerciseModal}>
        <ModalHeader>{exercise}</ModalHeader>
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
          eligendi repudiandae voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeEditExerciseModal}
          >
            Cancel
          </Button>
          <Button className="w-full sm:w-auto">Accept</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditExerciseModal;
