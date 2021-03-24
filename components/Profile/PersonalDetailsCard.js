import { Card, CardBody } from "@windmill/react-ui";

const PersonalDetailsCard = ({ user }) => {

  return (
    user?.displayName !== null && user?.email !== null && (
      <div className="w-full">
        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl">
              Personal Information
            </p>
            <div className="flex flex-col justify-around p-2 mx-4 mb-2">
              <div className="flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3">
                <label>Username</label>
                <p className=" text-gray-800 font-medium ml-3 capitalize text-right dark:text-gray-100">
                  {user?.displayName ? user?.displayName : ""}
                </p>
              </div>
              <div className="flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3">
                <label>Email</label>
                <p className=" text-gray-800 font-medium ml-3 break-all	 text-right dark:text-gray-100">
                  {user?.email ? user?.email : ""}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  );
};

export default PersonalDetailsCard;
