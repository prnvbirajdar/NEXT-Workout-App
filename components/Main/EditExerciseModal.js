import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";
import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";

const EditExerciseModal = ({
  isEditExerciseModal,
  closeEditExerciseModal,

  selected,
}) => {
  console.log(selected);

  const { user } = useAuth(); //context

  const handleDelete = (id) => {
    db.collection("profiles")
      .doc(user?.uid)
      .collection("workouts")
      .doc(id)
      .delete();
  };

  return (
    selected && (
      <div>
        <Modal
          isOpen={isEditExerciseModal}
          onClose={() => closeEditExerciseModal(selected)}
        >
          <ModalHeader>{selected.exercise}</ModalHeader>
          <button onClick={handleDelete(selected.id)}>Delete</button>
          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
            eligendi repudiandae voluptatem tempore!
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              layout="outline"
              onClick={() => closeEditExerciseModal(selected)}
            >
              Cancel
            </Button>
            <Button className="w-full sm:w-auto">Accept</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  );
};

export default EditExerciseModal;
