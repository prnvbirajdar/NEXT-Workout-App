import Navbar from "../components/Navbar";
import ProfileSettings from "../components/Profile/ProfileSettings";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-12 pt-5">
        <ProfileSettings />
      </div>
    </div>
  );
};

export default Profile;
