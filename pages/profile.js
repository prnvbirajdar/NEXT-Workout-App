import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PhysicalStatsModal from "../components/Profile/PhysicalStatsModal";
import { Card, CardBody } from "@windmill/react-ui";
import { useAuth } from "../components/data/authProvider";
import { db } from "../components/data/firebase";
import { useRouter } from "next/router";
import PersonalDetailsCard from "../components/Profile/PersonalDetailsCard";
import { Edit } from "../components/Icons/Icons";
import Footer from "../components/Footer";
import Head from "next/head";

import DatePicker from "react-datepicker";
import { format } from "date-fns";

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

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

  //grabs today's date
  const [startDate, setStartDate] = React.useState(new Date());
  //the strip of date seen on home page
  const DateButton = ({ value }) => (
    <p className="z-0 select-none py-1 px-4 w-screen text-center text-white bg-indigo-700 rounded font-medium md:text-lg shadow">
      {value}
    </p>
  );

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
        if (querySnapshot?.docs[0]?.data() === undefined) {
          setPhysicalStats(physicalStats);
        } else {
          setPhysicalStats(querySnapshot?.docs[0]?.data());
        }
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
  }, [user, physicalStats]);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          name="profile.js"
          content="profile page"
        />
      </Head>
      <section className="relative min-h-screen  overflow-hidden">
          <Navbar />
          <DatePicker
            selected={startDate}
            name="startDate"
            dateFormat="PPPP"
            closeOnScroll={true}
            customInput={<DateButton />}
          />

          <div className="pb-20 dark:bg-black transition-colors">
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
                      <div className="flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3">
                        <label>Weight</label>
                        <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                          {physicalStats?.weight ? physicalStats?.weight : "0"}{" "}
                          pounds
                        </p>
                      </div>
                      <div className="flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3">
                        <label>Height</label>
                        <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                          {physicalStats?.height ? physicalStats?.height : "0"}{" "}
                          inches
                        </p>
                      </div>
                      <div className="flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3">
                        <label>Daily Calories</label>
                        <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                          {physicalStats?.dailyCalories
                            ? physicalStats?.dailyCalories
                            : "0"}{" "}
                          calories
                        </p>
                      </div>

                      <div className="flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded">
                        <label>Body Fat Percentage</label>
                        <p className=" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100">
                          {physicalStats?.bodyFatPercentage
                            ? physicalStats?.bodyFatPercentage
                            : "0"}{" "}
                          %
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={openProfileModal}
                      className="flex justify-end"
                    >
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
          </div>
          <Footer />
      </section>
    </React.Fragment>
  );
};

export default Profile;
