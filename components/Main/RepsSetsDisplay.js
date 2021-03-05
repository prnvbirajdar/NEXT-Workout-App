import { Card } from "@windmill/react-ui";
import produce from "immer";
import { Delete, Edit } from "../Icons/Icons";
import UpdateCurrentSetModal from "./UpdateCurrentSetModal";

const RepsSetsDisplay = ({ currentExerciseData, setCurrentExerciseData }) => {
  // const handleDelete = (index) => {
  //   // const deletedExerciseArray = produce(currentExerciseData, (draft) => {
  //   //   draft.sets.splice(index, 1);
  //   // });

  //   // setCurrentExerciseData(deletedExerciseArray);

  // };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [currId, setCurrId] = React.useState("");

  console.log(currId);

  function openModal() {
    setIsModalOpen(true);
    setCurrId(s.id);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  //currentExerciseData.sets.map((set) => console.log(set.id));

  //   // update by index
  // const updatedTodosArray = produce(todosArray, draft => {
  //   draft[3].done = true
  // })

  return currentExerciseData.sets.map((s, index) => (
    <Card key={s?.id}>
      <div className="lg:mx-4">
        <div className="flex flex-col lg:flex-row lg:bg-gray-50 transition lg:dark:bg-black rounded lg:mt-3">
          <p className="self-center text-gray-800 dark:text-gray-300 text-center m-2 lg:ml-4">
            Set {index + 1}
          </p>
          <div className="flex flex-grow md:flex-row justify-around py-2 sm:mx-4 bg-gray-50 transition dark:bg-black rounded text-gray-800 dark:text-gray-100 ">
            <div className="flex flex-col  py-2 ml-2">
              <label className="self-center">Weight</label>
              <p className="font-semibold">{s.weight} lbs</p>
            </div>
            <div className="flex flex-col  p-2 ml-2">
              <label>Reps</label>
              <p className=" text-center  font-semibold  ">{s.reps}</p>
            </div>
            <div
              onClick={() => {
                setIsModalOpen(true);
                setCurrId(s.id);
              }}
              className="self-center lg:hidden "
              aria-label="edit"
            >
              <Edit aria-label="edit" />
            </div>
          </div>

          <div
            onClick={() => {
              setIsModalOpen(true);
              setCurrId(s.id);
            }}
            className="self-center hidden lg:block lg:mr-3"
            aria-label="edit"
          >
            <Edit aria-label="edit" />
          </div>

          <UpdateCurrentSetModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            currentExerciseData={currentExerciseData}
            setCurrentExerciseData={setCurrentExerciseData}
            id={s.id}
            set={s}
          />
        </div>
      </div>
    </Card>
  ));
};

export default RepsSetsDisplay;
