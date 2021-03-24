import { Card, CardBody } from "@windmill/react-ui";
import { exerciseList } from "../data/data";
import { Close } from "../Icons/Icons";

const BodyPartsSelect = ({
  closeCard,
  openExerciseModal,
  isCardOpen,
  setBodyPart,
}) => {
  return (
    <div
      className={`${
        isCardOpen ? "block" : "hidden"
      } mx-5 w-auto shadow transition mt-4`}
    >
      <Card>
        <CardBody>
          <div className="flex justify-between">
            <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
              Select body part
            </p>
            <div onClick={closeCard} aria-label="Close">
              <Close aria-label="Close" />
            </div>
          </div>

          <div className="flex justify-center flex-wrap ">
            {exerciseList.map((e) => (
              <div key={e.id} onClick={openExerciseModal}>
                <button
                  aria-label="Muscle Select"
                  onClick={() => setBodyPart(e)}
                  className="text-sm md:text-base shadow-lg m-1.5 h-10 px-5 sm:m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
                >
                  {e.muscle}
                </button>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BodyPartsSelect;
