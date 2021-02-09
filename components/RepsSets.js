import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@windmill/react-ui";
import { Plus, Minus, Correct, Delete } from "./Icons/Icons";

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
                <Minus />
                <input
                  className="py-2 rounded w-1/3 border text-black text-center"
                  type="number"
                />
                <Plus />
              </div>
            </form>
            <form>
              <div className="text-center pb-2">
                <label>Reps</label>
              </div>
              <div className="flex justify-center ">
                <Minus />

                <input
                  className="py-2 rounded w-1/3 border text-black text-center	"
                  type="number"
                />
                <Plus />
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <div onClick={closeRepsSetsModal}>
            <Delete />
          </div>

          <Correct />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RepsSets;
