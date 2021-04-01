import { Add, Paste } from "../Icons/Icons";

const AddExercise = ({
  openCard,
  exerciseStats,
  pasteExerciseData,
  copySets,
}) => {
  return (
    <div>
      <div className="flex justify-center space-x-10 lg:space-x-20">
        <div
          aria-label="Add Exercise"
          onClick={openCard}
          className="flex flex-col items-center mt-10"
        >
          <Add
            aria-label="Add Exercise"
            lineHeight={"w-6 md:w-7"}
            lineWidth={"h-6  md:h-7"}
            circleHeight={"h-10 md:h-14"}
            circleWidth={"w-10 md:w-14"}
          />

          <p className="text-gray-600 dark:text-gray-300 transition mt-2 font-semibold">
            Add Exercise
          </p>
        </div>

        {copySets.length > 0 && (
          <div
            aria-label="Paste Exercise"
            onClick={pasteExerciseData}
            className="flex flex-col items-center mt-10"
          >
            <Paste
              aria-label="Add Exercise"
              lineHeight={"w-6 md:w-7"}
              lineWidth={"h-6  md:h-7"}
              circleHeight={"h-10 md:h-14"}
              circleWidth={"w-10 md:w-14"}
            />

            <p className="text-gray-600 dark:text-gray-300 transition mt-2 font-semibold">
              Paste Exercises
            </p>
          </div>
        )}
      </div>

      {exerciseStats.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 transition h-auto p-5 px-10 rounded mt-10 max-w-xl mx-6 text-center">
          <p className="text-gray-800 dark:text-gray-300 transition  font-semibold">
            No exercises recorded. <br className="block md:hidden" /> Click on
            'Add Exercise' to get started.
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AddExercise;
