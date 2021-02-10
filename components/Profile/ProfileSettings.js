import { useState } from "react";
import { Card, CardBody } from "@windmill/react-ui";

const ProfileSettings = () => {
  const [value, setvalue] = useState({
    weight: "",
    height: "",
    bodyFatPercentage: "",
    dailyCalories: "",
    BMI: "",
  });

  return (
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
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileSettings;

// physicalStats
// BMI
// 0
// bodyFatPercentage
// 20.5
// dailyCalories
// 2500
// height
// 72
// weight
// 200
// picture
// ""
