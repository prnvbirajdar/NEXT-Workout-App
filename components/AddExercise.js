const AddExercise = ({ openCard, showEmptyLog }) => {
  return (
    <div
      onClick={openCard}
      className={`${
        showEmptyLog ? "hidden" : "block"
      } flex flex-col items-center mt-6`}
    >
      <button className="inline-flex items-center justify-center w-14 h-14 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
        <svg className="w-7 h-7 fill-current" viewBox="0 0 20 20">
          <path
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <p className="text-gray-600 dark:text-gray-300 m-3">Add Exercise</p>
    </div>
  );
};

export default AddExercise;
