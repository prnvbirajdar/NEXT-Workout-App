import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PhysicalStatsModal from "../components/Profile/PhysicalStatsModal";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { useAuth } from "../components/data/authProvider";
import { db } from "../components/data/firebase";
import DeleteAccountModal from "../components/Profile/DeleteAccountModal";
import { useRouter } from "next/router";
import PersonalDetailsCard from "../components/Profile/PersonalDetailsCard";
import { Edit } from "../components/Icons/Icons";

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [physicalStats, setPhysicalStats] = useState({
    weight: 0,
    height: 0,
    dailyCalories: 0,
    bodyFatPercentage: 0,
    timeStamp: "",
    profileId: "",
    userName: "",
    userEmail: "",
  });

  const { user } = useAuth(); //context

  //if login credentials of user disappear, revert back to login page
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const getPhysicalStats = async () => {
    await db
      .collection("profiles")
      .doc(user?.uid)
      .collection("stats")
      .orderBy("timeStamp", "desc")
      .limit(1)
      .onSnapshot((querySnapshot) => {
        console.log(querySnapshot.docs[0]?.data().stats);
        setPhysicalStats(querySnapshot?.docs[0]?.data());
      });
  };

  function openProfileModal() {
    setIsProfileModalOpen(true);
  }
  function closeProfileModal() {
    setIsProfileModalOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteModalOpen(true);
  }
  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  useEffect(() => {
    if (
      user &&
      physicalStats.weight !== 0 &&
      physicalStats.height !== 0 &&
      physicalStats.dailyCalories !== 0 &&
      physicalStats.bodyFatPercentage !== 0 &&
      physicalStats.timeStamp !== ""
    ) {
      getPhysicalStats();
    }
  }, [user, physicalStats]);

  return (
    <div>
      <Navbar />
      <div className="bg-black">
        <div className="flex justify-center mt-8 pt-5">
          <div className="w-full sm:w-1/2 lg:w-1/3 shadow text-gray-600 dark:text-gray-400 ">
            <PersonalDetailsCard user={user} />
          </div>
        </div>

        <div className="flex justify-center mt-8 pt-2">
          <div className="w-full sm:w-1/2 lg:w-1/3 shadow text-gray-600 dark:text-gray-400 ">
            <Card>
              <CardBody>
                <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl">
                  Physical Stats
                </p>
                <div className="flex flex-col justify-around p-2 mx-4 mb-2">
                  <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                    <label className="self-end">Weight</label>
                    <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                      {physicalStats?.weight ? physicalStats?.weight : "0"}{" "}
                      pounds
                    </p>
                  </div>
                  <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
                    <label className="self-end">Height</label>
                    <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                      {physicalStats?.height ? physicalStats?.height : "0"}{" "}
                      inches
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
                        : "0"}
                      %
                    </p>
                  </div>
                </div>
                <div onClick={openProfileModal} className="flex justify-end">
                  <Edit />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <PhysicalStatsModal
          isProfileModalOpen={isProfileModalOpen}
          closeProfileModal={closeProfileModal}
          physicalStats={physicalStats}
          setPhysicalStats={setPhysicalStats}
        />
        <div className="flex justify-end pb-4 pr-4">
          <Button layout="outline" onClick={openDeleteModal}>
            DELETE ACCOUNT
          </Button>
        </div>
        <DeleteAccountModal
          isDeleteModalOpen={isDeleteModalOpen}
          closeDeleteModal={closeDeleteModal}
        />
      </div>
    </div>
  );
};

export default Profile;
