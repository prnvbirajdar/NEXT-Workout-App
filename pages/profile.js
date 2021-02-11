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

  // export const getPhysicalStats = async (id) => {
  //   const snapshot = await db.collection(id).get();
  //   const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   console.log(data);
  // };

  console.log(user?.uid);

  const getPhysicalStats = async () => {
    await db
      .collection("profiles")
      .onSnapshot((querySnapshot) => {
        console.log(querySnapshot.docs.map(doc=>console.log(doc.data())));
        setPhysicalStats(querySnapshot.docs);
      });
  };

  //   const getPhysicalStats = async () => {
  //     await db
  //       .collection("profiles")
  //       .doc(user?.uid)
  //       .collection("stats")
  //       .orderBy("timeStamp", "asc")
  //       .onSnapshot((querySnapshot) => {
  //         console.log(querySnapshot.docs.slice(-1));
  //         setPhysicalStats(querySnapshot.docs.slice(-1));
  //       });
  //   };

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
  }, []);

  const onSubmit = (data) => {
    //setPhysicalStats(data);
    db.collection("profiles")
      .add({
        Weight: data.weight,
        Height: data.height,
        "Daily Calories": data.dailyCalories,
        "Body Fat Percentage": data.bodyFatPercentage,
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
                  <label>Weight</label>
                  <input type="number" name="weight" ref={register} />
                  <label>Height</label>
                  <input type="number" name="height" ref={register} />
                  <label>Body Fat Percentage</label>
                  <input
                    type="number"
                    name="bodyFatPercentage"
                    ref={register}
                  />
                  <label>Daily Calories</label>
                  <input type="number" name="dailyCalories" ref={register} />
                  {/*<label>BMI</label>
                <input type="number"  name="weight"
                ref={register} />*/}
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Save</Button>
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
