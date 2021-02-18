import { Add } from "../Icons/Icons";

const AddSet = ({ openRepsSetsModal }) => {
  return (
    <div
      onClick={openRepsSetsModal}
      className="flex flex-col items-center mt-2 mx-20 sm:mx-28 md:mx-36 lg:mx-48 xl:mx-64"
    >
      <Add
        lineHeight={"w-4 md:w-6"}
        lineWidth={"h-4 md:h-6 "}
        circleHeight={"h-8  md:h-10"}
        circleWidth={"w-8 md:w-10"}
      />
      <p className=" text-gray-600 dark:text-gray-300 mt-1 md:mt-2 ">Add Set</p>
    </div>
  );
};

export default AddSet;
