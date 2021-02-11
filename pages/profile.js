import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileSettings from "../components/Profile/ProfileSettings";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { getPhysicalStats } from "../components/data/firebase";
const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  function openProfileModal() {
    setIsProfileModalOpen(true);
  }
  function closeProfileModal() {
    setIsProfileModalOpen(false);
  }

  useEffect(() => {
    getPhysicalStats("new");
  }, []);

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
              <div className="flex flex-col md:flex-row justify-around p-2 m-4">
                <label>Weight</label>
                <label>Height</label>
                <label>Body Fat Percentage</label>
                <label>Daily Calories</label>
                <label>BMI</label>
              </div>
              <div onClick={openProfileModal} className="flex justify-end">
                <Button>Edit</Button>
              </div>
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
