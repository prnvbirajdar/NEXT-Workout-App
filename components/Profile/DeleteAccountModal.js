import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Alert,
} from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";

const DeleteAccountModal = ({ closeDeleteModal, isDeleteModalOpen }) => {
  const { user } = useAuth(); //context

  const { register, handleSubmit, errors } = useForm();

  return (
    <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
      <ModalBody>
        <div className="flex flex-col  text-gray-600 dark:text-gray-200 mt-4 ">
          <Alert type="danger">
            Are you sure you wish to delete your account? This action
            will permanently erase all of your data from this application.
          </Alert>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          className="w-full sm:w-auto"
          layout="outline"
          onClick={closeDeleteModal}
        >
          CANCEL
        </Button>
        <Button type="submit" className="w-full sm:w-auto">
          DELETE
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteAccountModal;
