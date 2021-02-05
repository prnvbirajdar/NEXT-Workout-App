import { useState } from "react";
import { Button, Card, CardBody } from "@windmill/react-ui";
import AddExerciseModal from "./AddExerciseModal";

const Main = () => {
  const [showEmptyLog, setShowEmptyLog] = useState(true);

  const [isCardOpen, setIsCardOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeEmptyLog = () => setShowEmptyLog(false);

  const openCard = () => setIsCardOpen(true);

  const closeCard = () => setIsCardOpen(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsCardOpen(false);
  };

  return (
    <div className="flex items-center flex-col sm:m-20">
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
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div>
              <button
                onClick={openModal}
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

      <div
        className={`${
          showEmptyLog ? "hidden" : "block"
        } flex flex-col items-center mt-6`}
      >
        <Button
          onClick={openCard}
          className="inline-flex items-center justify-center w-14 h-14 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
        >
          <svg className="w-10 h-10 fill-current" viewBox="0 0 20 20">
            <path
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </Button>
        <p className="text-gray-600 dark:text-gray-300 mt-3">Add Exercise</p>
      </div>

      <AddExerciseModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Main;

//("t hover:bg-gray-700 hover:text-white");
