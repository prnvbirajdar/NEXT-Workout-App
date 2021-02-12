import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileSettings from "../components/Profile/ProfileSettings";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { useAuth } from "../components/data/authProvider";
import { db } from "../components/data/firebase";

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [physicalStats, setPhysicalStats] = useState([]);

  const { user } = useAuth(); //context

  const getPhysicalStats = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("stats")
      .orderBy("timeStamp", "desc")
      .limit(1)
      .onSnapshot((querySnapshot) => {
        console.log(querySnapshot.docs.map((d) => console.log(d.data())));
        setPhysicalStats(querySnapshot.docs[0]?.data());
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

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-12 pt-5">
        <div className="w-full sm:w-1/2 lg:w-1/3 shadow text-gray-600 dark:text-gray-400 ">
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl">
                Profile Settings
              </p>
              <div className="flex flex-col justify-around p-2 mx-4 mb-2">
                <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                  <label className="self-end">Weight</label>
                  <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                    {physicalStats?.weight ? physicalStats?.weight : "0"} pounds
                  </p>
                </div>
                <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                  <label className="self-end">Height</label>
                  <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                    {physicalStats?.height ? physicalStats?.height : "0"} inches
                  </p>
                </div>
                <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                  <label className="self-end">Daily Calories</label>
                  <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                    {physicalStats?.dailyCalories
                      ? physicalStats?.dailyCalories
                      : "0"}{" "}
                    calories
                  </p>
                </div>

                <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded">
                  <label className="self-end">Body Fat Percentage</label>
                  <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                    {physicalStats?.bodyFatPercentage
                      ? physicalStats?.bodyFatPercentage
                      : "0"}%
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={openProfileModal}>EDIT</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <ProfileSettings
        isProfileModalOpen={isProfileModalOpen}
        closeProfileModal={closeProfileModal}
        physicalStats={physicalStats}
        setPhysicalStats={setPhysicalStats}
      />
    </div>
  );
};

export default Profile;
