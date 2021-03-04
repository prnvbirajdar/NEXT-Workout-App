import { Modal, ModalBody, Alert } from "@windmill/react-ui";
// import { db } from "../data/firebase";
//import { useAuth } from "../data/authProvider";
import { Correct } from "../Icons/Icons";

const DeleteExerciseModal = ({
  closeDeleteExerciseModal,
  isDeleteExerciseModalOpen,
  setIsHidden,
  id,
  deleteExercise,
}) => {
  return (
    <Modal
      isOpen={isDeleteExerciseModalOpen}
      onClose={closeDeleteExerciseModal}
    >
      <ModalBody>
        <div className="flex flex-col  text-gray-600 dark:text-gray-200 mt-4 ">
          <Alert type="danger">
            Are you sure you wish to delete this exercise?
          </Alert>
        </div>
      </ModalBody>
      <div className="flex justify-end">
        <div
          onClick={() => {
            setIsHidden({
              setId: "",
              setBoolean: false,
            });
            deleteExercise(id);
          }}
          aria-label="correct"
        >
          <Correct aria-label="correct" />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteExerciseModal;

//   const { user } = useAuth(); //context

//   const deleteUser = async () => {
//     // await db
//     //   .collection("profiles")
//     //   .doc(user?.uid)
//     //   .delete()
//     //   .then(function () {
//     //     console.log("firestore", deleted);
//     //     alert("Account successfully deleted");
//     //   })
//     //   .catch(function (error) {
//     //     console.log("firestore", error);
//     //   });

//     await user
//       .delete()
//       .then(function () {
//         console.log("auth", deleted);
//         alert("Account successfully deleted");
//       })
//       .catch(function (error) {
//         console.log("auth", error);
//       });
//   };
