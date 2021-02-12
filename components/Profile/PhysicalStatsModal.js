import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@windmill/react-ui";
import { useForm } from "react-hook-form";
import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";

const PhysicalStatsModal = ({
  closeProfileModal,
  isProfileModalOpen,
  physicalStats,
}) => {
  const { user } = useAuth(); //context

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    await db.collection("profiles")
      .doc(user.uid)
      .collection("stats")
      .add({
        weight: data.weight,
        height: data.height,
        dailyCalories: data.dailyCalories,
        bodyFatPercentage: data.bodyFatPercentage,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        profileId: user.uid,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    closeProfileModal();
  };

  return (
    <Modal isOpen={isProfileModalOpen} onClose={closeProfileModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader className="text-center sm:text-left">
          Physical Stats
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col  text-gray-600 dark:text-gray-200 ">
            <div className="text-center text-base pb-2">
              <label>Weight</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                type="number"
                placeholder={
                  physicalStats?.weight ? physicalStats?.weight : "0"
                }
                name="weight"
                ref={register}
              />
            </div>
            <div className="text-center text-base p-2">
              <label>Height</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                placeholder={
                  physicalStats?.height ? physicalStats?.height : "0"
                }
                name="height"
                ref={register}
                type="number"
              />
            </div>
            <div className="text-center text-base p-2">
              <label>Daily Calories</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                placeholder={
                  physicalStats?.dailyCalories
                    ? physicalStats?.dailyCalories
                    : "0"
                }
                name="dailyCalories"
                ref={register}
                type="number"
              />
            </div>
            <div className="text-center text-base p-2">
              <label>Body Fat Percentage</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                ref={register}
                type="number"
                name="bodyFatPercentage"
                placeholder={
                  physicalStats?.bodyFatPercentage
                    ? physicalStats?.bodyFatPercentage
                    : "0"
                }
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeProfileModal}
          >
            CANCEL
          </Button>
          <Button type="submit" className="w-full sm:w-auto">
            UPDATE
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default PhysicalStatsModal;
