const AddSet = ({  openRepsSetsModal }) => {
  return (
    <div onClick={openRepsSetsModal} className="flex flex-col items-center mt-6">
      <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Add Set</p>
    </div>
  );
};

export default AddSet;
