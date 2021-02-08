const Plus = () => {
  return (
    <button className="inline-flex items-center justify-center w-10 h-10 text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

const Minus = () => {
  return (
    <button className="inline-flex items-center justify-center w-10 h-10  text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 298.7 298.7">
        <path d="M0 128h299v43H0z" clipRule="evenodd" fillRule="evenodd"></path>
      </svg>
    </button>
  );
};

const Add = ({ lineHeight, lineWidth, circleHeight, circleWidth }) => {
  return (
    <button
      className={`inline-flex items-center justify-center ${circleHeight} ${circleWidth} mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800`}
    >
      <svg
        className={`${lineHeight} ${lineWidth} fill-current`}
        viewBox="0 0 20 20"
      >
        <path
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export { Add, Plus, Minus };
