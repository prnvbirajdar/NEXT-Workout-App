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
        lineHeight={"w-7"}
        lineWidth={"h-7"}
        circleHeight={"h-14"}
        circleWidth={"w-14"}
      />
      <p className="text-gray-600 dark:text-gray-300 m-3">Add Exercise</p>
    </div>
  );
};

export default AddExercise;
