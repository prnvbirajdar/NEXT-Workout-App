import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileSettings from "../components/Profile/ProfileSettings";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { getPhysicalStats } from "../components/data/firebase";
import { useForm } from "react-hook-form";
import { useAuth } from "../components/data/authProvider";
import { db } from "../components/data/firebase";
import firebase from "firebase/app";

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [physicalStats, setPhysicalStats] = useState([]);

  console.log(physicalStats);

  const { register, handleSubmit, errors } = useForm();
  const { user } = useAuth(); //context

  //   const BMIdata = (w, h) => {
  //     if (w > 0 && h > 0) {
  //       return (w * 703) / h / h;
  //     }
  //   };

  console.log(user?.uid);

  const getPhysicalStats = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("stats")
      .orderBy("timeStamp", "desc")
      .limit(1)
      .onSnapshot((querySnapshot) => {
        console.log(querySnapshot.docs.map((d) => console.log(d.data())));
        setPhysicalStats(querySnapshot.docs[0].data());
      });
  };

  function openProfileModal() {
    setIsProfileModalOpen(true);
  }
  function closeProfileModal() {
    setIsProfileModalOpen(false);
  }

  useEffect(() => {
    if (user) {
      getPhysicalStats();
    }
  }, [user]);

  const onSubmit = (data) => {
    //setPhysicalStats(data);
    db.collection("profiles")
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
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-12 pt-5">
        <div className="w-1/2 shadow text-gray-600 dark:text-gray-400 ">
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl">
                Profile Settings
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-around p-2 m-4">
                  <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                    <label className="self-end">Weight</label>
                    <p className="text-xl text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                      {physicalStats.weight ? physicalStats.weight : "0"} lbs
                    </p>
                  </div>
                  <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                    <label className="self-end">Height</label>
                    <p className="text-xl text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                      {physicalStats.height ? physicalStats.height : "0"} inches
                    </p>
                  </div>

                  <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                    <label className="self-end">Body Fat Percentage</label>
                    <p className="text-xl text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                      {physicalStats.bodyFatPercentage
                        ? physicalStats.bodyFatPercentage
                        : "0"}{" "}
                      %
                    </p>
                  </div>

                  <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                    <label className="self-end">Daily Calories</label>
                    <p className="text-xl text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                      {physicalStats.dailyCalories
                        ? physicalStats.dailyCalories
                        : "0"}{" "}
                      calories
                    </p>
                  </div>
                  {/* <label>BMI</label>
                 <p>{BMIdata(physicalStats.height, physicalStats.weight)}</p>*/}
                </div>
                <div className="flex justify-end">
                  <Button onClick={openProfileModal}>EDIT</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
      <ProfileSettings
        isProfileModalOpen={isProfileModalOpen}
        closeProfileModal={closeProfileModal}
      />
    </div>
  );
};

export default Profile;

// onClick={openProfileModal}
