import { Card, CardBody } from "@windmill/react-ui";
import { exerciseArray, exerciseList1 } from "../data/data";
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
            <div onClick={closeCard}>
              <Close />
            </div>
          </div>

          <div className="flex justify-center flex-wrap ">
            {exerciseList1.map((e) => (
              <div key={e.id} onClick={openExerciseModal}>
                <button
                  onClick={() => setBodyPart(e)}
                  className="shadow-lg m-2 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"
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
