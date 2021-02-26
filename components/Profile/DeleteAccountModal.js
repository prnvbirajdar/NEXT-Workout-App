import { Modal, ModalBody, Alert } from "@windmill/react-ui";
import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";
import { Correct } from "../Icons/Icons";

const DeleteAccountModal = ({ closeDeleteModal, isDeleteModalOpen }) => {
  const { user } = useAuth(); //context

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
        <div type="submit">
          <Correct />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;
