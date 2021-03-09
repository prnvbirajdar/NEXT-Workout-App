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
      <p className=" text-gray-600 dark:text-gray-300 mt-1 md:mt-2 font-semibold text-sm ">
        Add Set
      </p>
    </div>
  );
};

const AddSubmittedSet = ({ openAddMoreSetsModal }) => {
  return (
    <div
      aria-label="Add More Sets"
      onClick={openAddMoreSetsModal}
      className=" inline-flex items-center justify-center w-10 h-10 text-gray-500 transition-colors rounded-lg focus:shadow-outline hover:bg-indigo-900  hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export { AddSubmittedSet };
export default AddSet;
