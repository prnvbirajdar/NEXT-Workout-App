import { Add } from "../Icons/Icons";

const AddSet = ({ openRepsSetsModal }) => {
  return (
    <div
      onClick={openRepsSetsModal}
      className="flex flex-col items-center mt-6"
    >
      <Add
        lineHeight={"w-4"}
        lineWidth={"h-4"}
        circleHeight={"h-8"}
        circleWidth={"w-8"}
      />
      <p className="text-gray-600 dark:text-gray-300 mt-2">Add Set</p>
    </div>
  );
};

export default AddSet;
