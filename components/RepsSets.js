import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@windmill/react-ui";

const RepsSets = ({ isRepsSetsModalOpen, closeRepsSetsModal }) => {
  return (
    <div className=" text-gray-600 dark:text-gray-400 flex justify-center">
      <Modal isOpen={isRepsSetsModalOpen} onClose={closeRepsSetsModal}>
        <ModalHeader>Modal header</ModalHeader>
        <ModalBody>
          <div className="flex flex-col sm:flex-row justify-around  text-gray-600 dark:text-gray-300">
            <form>
              <div className="text-center pb-2">
                <label>Weight</label>
              </div>
              <div className="flex justify-center pb-2">
                <button className="inline-flex items-center justify-center w-10 h-10  text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 298.7 298.7"
                  >
                    <path
                      d="M0 128h299v43H0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input className="py-2 rounded w-1/3 border" type="number" />
                <button className="inline-flex items-center justify-center w-10 h-10 text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
            <form>
              <div className="text-center pb-2">
                <label>Reps</label>
              </div>
              <div className="flex justify-center ">
                <button className="inline-flex items-center justify-center w-10 h-10  text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 298.7 298.7"
                  >
                    <path
                      d="M0 128h299v43H0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>

                <input className="py-2 rounded w-1/3 border" type="number" />
                <button className="inline-flex items-center justify-center w-10 h-10  text-white transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeRepsSetsModal}
          >
            Cancel
          </Button>
          <Button className="w-full sm:w-auto">Accept</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RepsSets;
