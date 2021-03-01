import { Add } from "../Icons/Icons";

const AddSet = ({ openRepsSetsModal }) => {
  return (
    <div
      aria-label="Add Set"
      onClick={openRepsSetsModal}
      className="flex flex-col items-center mt-2 mx-20 sm:mx-24 md:mx-32 lg:mx-48 "
    >
      <Add
        aria-label="Add Set"
        lineHeight={"w-4 md:w-6"}
        lineWidth={"h-4 md:h-6 "}
        circleHeight={"h-8  md:h-10"}
        circleWidth={"w-8 md:w-10"}
      />
      <p className=" text-gray-600 dark:text-gray-300 mt-1 md:mt-2 font-semibold ">
        Add Set
      </p>
    </div>
  );
};

export default AddSet;
