import { Card, CardBody } from "@windmill/react-ui";

const ProfileCard = ({ user }) => {
  return (
    <Card>
      <CardBody>
        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl">
          Personal Information
        </p>
        <div className="flex flex-col justify-around p-2 mx-4 mb-2">
          <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
            <label className="self-end">Username</label>
            <p className=" text-gray-800 font-medium ml-3 capitalize text-right dark:text-gray-100">
              {user?.displayName ? user?.displayName : ""}
            </p>
          </div>
          <div className="flex justify-between p-2  bg-gray-50 dark:bg-black rounded mb-3">
            <label className="self-end">Email</label>
            <p className=" text-gray-800 font-medium ml-3  text-right dark:text-gray-100">
              {user?.email ? user?.email : ""}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
