import { Modal, ModalBody, Alert } from "@windmill/react-ui";
// import { db } from "../data/firebase";
import { useAuth } from "../data/authProvider";
import { Correct } from "../Icons/Icons";

const DeleteAccountModal = ({ closeDeleteModal, isDeleteModalOpen }) => {
  const { user } = useAuth(); //context

  const deleteUser = async () => {
    // await db
    //   .collection("profiles")
    //   .doc(user?.uid)
    //   .delete()
    //   .then(function () {
    //     console.log("firestore", deleted);
    //     alert("Account successfully deleted");
    //   })
    //   .catch(function (error) {
    //     console.log("firestore", error);
    //   });

    await user
      .delete()
      .then(function () {
        console.log("auth", deleted);
        alert("Account successfully deleted");
      })
      .catch(function (error) {
        console.log("auth", error);
      });
  };

  return (
    <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
      <ModalBody>
        <div className="flex flex-col  text-gray-600 dark:text-gray-200 mt-4 ">
          <Alert type="danger">
            Are you sure you wish to delete your account? This action will
            permanently erase all of your data from this application.
          </Alert>
        </div>
      </ModalBody>
      <div className="flex justify-end">
        <div onClick={deleteUser} aria-label="correct">
          <Correct aria-label="correct" />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
