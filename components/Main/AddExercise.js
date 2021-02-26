import { Add } from "../Icons/Icons";

const AddExercise = ({ openCard, showEmptyLog, exerciseStats }) => {
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

      <p className="text-gray-600 dark:text-gray-300 mt-2 font-semibold">
        Add Exercise
      </p>

      {exerciseStats.length === 0 ? (
        <div className="bg-gray-900 h-auto p-5 px-10 rounded mt-20 max-w-xl mx-6 text-center">
          <p className="text-gray-600 dark:text-gray-300  font-semibold">
            No exercises recorded. <br className="block md:hidden"/> Click on Add Exercise to get started!
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AddExercise;
