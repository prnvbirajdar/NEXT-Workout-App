import { Add } from "../Icons/Icons";

const AddExercise = ({ openCard, showEmptyLog }) => {
  return (
    <div
      onClick={openCard}
      className={`${
        showEmptyLog ? "hidden" : "block"
      } flex flex-col items-center mt-6`}
    >
      <Add
        lineHeight={"w-6 md:w-7"}
        lineWidth={"h-6  md:h-7"}
        circleHeight={"h-10 md:h-14"}
        circleWidth={"w-10 md:w-14"}
      />
     
      <p className="text-gray-600 dark:text-gray-300 m-2 mb-3">Add Exercise</p>
    </div>
  );
};

export default AddExercise;
