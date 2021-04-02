import { Modal, ModalHeader, ModalBody } from "@windmill/react-ui";
import { db } from "../data/firebase";
import firebase from "firebase/app";
import { useAuth } from "../data/authProvider";
import { Correct } from "../Icons/Icons";
import produce from "immer";

const PhysicalStatsModal = ({
  closeProfileModal,
  isProfileModalOpen,
  physicalStats,
  setPhysicalStats,
}) => {
  const { user } = useAuth(); //context

  console.log(physicalStats);

  const [newWeight, setNewWeight] = React.useState(physicalStats?.weight);
  const [newHeight, setNewHeight] = React.useState(physicalStats?.height);
  const [newDailyCalories, setNewDailyCalories] = React.useState(
    physicalStats?.dailyCalories
  );
  const [newBodyFat, setNewBodyFat] = React.useState(
    physicalStats?.bodyFatPercentageodyFat
  );

  const handleWeight = (e) => {
    setNewWeight(e.target.value);
  };
  const handleHeight = (e) => {
    setNewHeight(e.target.value);
  };
  const handleDailyCalories = (e) => {
    setNewDailyCalories(e.target.value);
  };
  const handleBodyFat = (e) => {
    setNewBodyFat(e.target.value);
  };

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
      weight: newWeight,
      height: newHeight,
      dailyCalories: newDailyCalories,
      bodyFatPercentage: newBodyFat,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      profileId: user.uid,
      userName: user.displayName,
      userEmail: user.email,
    });

    closeProfileModal();
  };

  return (
    physicalStats && (
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
                  name="weight"
                  onChange={handleWeight}
                  value={newWeight}
                />
              </div>
              <div className="text-center text-base p-2">
                <label>Height (inches)</label>
              </div>
              <div className="flex justify-center ">
                <input
                  className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                  name="height"
                  onChange={handleHeight}
                  value={newHeight}
                  type="number"
                />
              </div>
              <div className="text-center text-base p-2">
                <label>Daily Calories (kCal)</label>
              </div>
              <div className="flex justify-center ">
                <input
                  className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                  name="dailyCalories"
                  onChange={handleDailyCalories}
                  value={newDailyCalories}
                  type="number"
                />
              </div>
              <div className="text-center text-base p-2">
                <label>Body Fat Percentage (%)</label>
              </div>
              <div className="flex justify-center ">
                <input
                  className="py-1 text-lg rounded w-1/3 border text-black text-center	"
                  onChange={handleBodyFat}
                  value={newBodyFat}
                  type="number"
                  name="bodyFatPercentage"
                />
              </div>
            </div>
          </ModalBody>
          <div className="flex justify-end">
            <div aria-label="correct" type="submit">
              <Correct aria-label="correct" />
            </div>
          </div>
        </form>
      </Modal>
    )
  );
};

export default PhysicalStatsModal;
