import { Modal, ModalHeader, ModalBody } from "@windmill/react-ui";
import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";
import { Correct, Delete } from "../Icons/Icons";
import produce from "immer";

const PhysicalStatsModal = ({
  closeProfileModal,
  isProfileModalOpen,
  physicalStats,
  setPhysicalStats,
}) => {
  const { user } = useAuth(); //context

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhysicalStats(
      produce(physicalStats, (draft) => {
        draft[name] = value;
      })
    );
  };

  const updateStats = async (e) => {
    e.preventDefault();

    await db.collection("profiles").doc(user?.uid).collection("stats").add({
      weight: physicalStats.weight,
      height: physicalStats.height,
      dailyCalories: physicalStats.dailyCalories,
      bodyFatPercentage: physicalStats.bodyFatPercentage,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      profileId: user.uid,
      userName: user.displayName,
      userEmail: user.email,
    });

    closeProfileModal();
  };

  return (
    <Modal isOpen={isProfileModalOpen} onClose={closeProfileModal}>
      <form onSubmit={updateStats}>
        <ModalHeader className="text-center sm:text-left">
          Physical Stats
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col  text-gray-600 dark:text-gray-200 ">
            <div className="text-center text-base pb-2">
              <label>Weight (pounds)</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                type="number"
                placeholder={
                  physicalStats?.weight
                    ? `${physicalStats?.weight} pounds`
                    : "0"
                }
                name="weight"
                onChange={handleChange}
                value={physicalStats?.weight}
              />
            </div>
            <div className="text-center text-base p-2">
              <label>Height</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                placeholder={
                  physicalStats?.height
                    ? `${physicalStats?.height} inches`
                    : "0"
                }
                name="height"
                onChange={handleChange}
                value={physicalStats?.height}
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
                    ? `${physicalStats?.dailyCalories} calories`
                    : "0"
                }
                name="dailyCalories"
                onChange={handleChange}
                value={physicalStats?.dailyCalories}
                type="number"
              />
            </div>
            <div className="text-center text-base p-2">
              <label>Body Fat Percentage</label>
            </div>
            <div className="flex justify-center ">
              <input
                className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                onChange={handleChange}
                value={physicalStats?.bodyFatPercentage}
                type="number"
                name="bodyFatPercentage"
                placeholder={
                  physicalStats?.bodyFatPercentage
                    ? `${physicalStats?.bodyFatPercentage} %`
                    : "0"
                }
              />
            </div>
          </div>
        </ModalBody>
        <div className="flex justify-between">
          <div layout="outline" onClick={closeProfileModal}>
            <Delete />
          </div>

          <div type="submit">
            <Correct />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default PhysicalStatsModal;
