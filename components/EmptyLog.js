const EmptyLog = ({ showEmptyLog, closeEmptyLog}) => {
  return (
    <div
      className={`${
        showEmptyLog ? "block" : "hidden"
      } flex flex-col items-center `}
    >
      <h2 className="mb-10 text-3xl text-gray-600 dark:text-gray-300">
        Workout Log Empty
      </h2>
      <button
        onClick={closeEmptyLog}
        className="bg-gray-900 text-gray-300  px-3 py-2 mb-6 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white"
      >
        Log New Workout
      </button>
    </div>
  );
};

export default EmptyLog;
