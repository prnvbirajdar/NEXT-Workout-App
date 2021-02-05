import { Card, CardBody } from "@windmill/react-ui";

const BodyPartsSelect = ({ closeCard, openExerciseModal, isCardOpen }) => {
  return (
    <div
      className={`${isCardOpen ? "block" : "hidden"} w-1/2 shadow transition`}
    >
      <Card>
        <CardBody>
          <div className="flex justify-between">
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
              Select body part
            </p>
            <button
              onClick={closeCard}
              className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
              aria-label="close"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div>
            <button
              onClick={openExerciseModal}
              className="shadow-lg  m-1 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
            >
              Legs
            </button>
            <button className="shadow-lg m-1 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
              Arms
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BodyPartsSelect;
